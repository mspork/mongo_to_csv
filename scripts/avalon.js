load("./scripts/libs/jsonpath-0.8.0.js");
load("./scripts/models/typeCollectionMapping.js");

function type(o){
    return !!o && Object.prototype.toString.call(o).match(/(\w+)\]/)[1];
}

var getPath = function(target_obj, path){
	var res = jsonPath(target_obj,path);
	if(res){
		return res[0];
	} else {
		return "";
	}
	
};

var getRelationshipByName = function(rels, name) {
	// print("getRelationshipByName => " + name );
	for(var i=0; i < rels.length; i++) {
		var rel = rels[i];
		if (rel.relation.name == name) {
			return rel;
		}
	}
	return null;
};

var formatDate = function(date){
	if(date){
		 // Format: yyyy-MM-dd HH:mm:ss
		return 	 date.getUTCFullYear() + "-" + 
				(date.getUTCMonth() + 1) + "-" + 
				 date.getUTCDate() + " " +
				 date.getUTCHours() + ":" +
				 date.getUTCMinutes() + ":" + 
				 date.getUTCSeconds();					

	}
	return "";
	
};


// var getOrg = function(rels, type) {
// 	var relation_instance = getRelationshipByName(rels, type);
// 	if(relation_instance) {
// 		return db.core.contacts.findOne( { "_id" : ObjectId(relation_instance.target.key) });
// 	}
// 	return null;
// };

var getTargetByRelationshipPath = function(obj, path) {
	var pathArray = path.split('.');
	for(i in pathArray){
		obj = getRelationshipTarget(obj, pathArray[i]);
	}
	return obj;
};

var getRelationshipTarget = function(obj, relName) {
	var targetType = getPath(obj,"$.relationships[?(@.relation.name === \"" + relName + "\")].target.type"); 
	
	var path = "$.relationships[?(@.relation.name === \"" + relName + "\")].target.key";  
	
	var key = getPath(obj,path);
	if(key){
			return db[typeCollectionMapping[targetType]].findOne( { "_id" : ObjectId(key) });
	}
	return null;
};

var getInverseLink = function(obj, inverseName) {
	// var pathexpr = "$.relationships[?(@.relation.name === \"" + relName + "\")].target.key";
	// var key = getPath(obj,pathexpr);
	var key = obj._id.toString();
	
	var query =  {  'inverseRelationships.target.key' : key, 
					"inverseRelationships.relation.name" : inverseName};
	return db.core.linkPath.inverses.findOne( query );
};

// var getPersonContactForOrg = function(rels, type) {
// 	var relationship = getRelationshipByName(rels,type);
// 	if(relationship){
// 		if(relationship.relationships[0]) {
// 			return db.core.contacts.findOne( { "_id" : ObjectId(relationship.relationships[0].target.key) });
// 		}
// 	}
// 	return null;
// };

var getNestedContact = function(obj, type) {
	var path = "$.relationships[?(@.relation.name === \"" + type + "\")].relationships[0].target.key";  
	var key = getPath(obj,path);
	if(key){
			return db.core.contacts.findOne( { "_id" : ObjectId(key) });
	}
	return null;
};


// var getOpportunity = function(rels, rel_name) {
// 	var relation_instance = getRelationshipByName(rels, rel_name);
// 	if(relation_instance) {
// 		return db.app.opportunities.findOne( { "_id" : ObjectId(relation_instance.target.key) });
// 	}
// 	return null;
// };

var getHeaderRow = function(mapping){
	var row = "";
	for(key in mapping){
		row += key;
		if(key != "MongoID"){
			row += ",";
		} else {
			row += "\n";
		}		
	}	
	return row;
};

var getAltHeaderRow = function(mapping){
	var row = "";
	for(key in mapping){
		row += mapping[key].crmName;
		if(key != "MongoID"){
			row += ",";
		} else {
			row += "\n";
		}		
	}	
	return row;
};


var getRow = function(obj, mapping){
	var row = "";
	
	for(key in mapping){
		
		var target_obj = null;

		if(mapping[key].nestedlinkPath){
			target_obj = getNestedContact(obj, mapping[key].linkPath);	
		} else if(mapping[key].linkPath) {
			// target_obj = getOrg(obj.relationships, mapping[key].link);
			// target_obj = getRelationshipTarget(obj,mapping[key].linkPath,mapping[key].targetType);
			target_obj = getTargetByRelationshipPath(obj,mapping[key].linkPath);
		} else if(mapping[key].inverseName){
			target_obj = getInverseLink(obj,mapping[key].inverseName);
		}
		else {
			target_obj = obj;
		}
		
		var value = getPath(target_obj,mapping[key].path);
		
		if(mapping[key].script){
			// print(value);
			value = eval(mapping[key].script);
		}

		switch(mapping[key].type)
		{
			case "string":
				if(value != null){
					row += "\"" + value.trim() + "\"";					
				} else {
					row += "";
				}
				
				break;
			case "number":
				row += value;
				break;
			case "date":
				if(value != ""){
					if(type(value) === "Date") {
						row += formatDate(value);											
					} else if((type(value) === "String") && (value.substr(23,1) == 'Z')){
						var date = new ISODate(value);
						row += formatDate(date);
					} else
					{
						row += value;
						// print(key + " with value of [" + value + "] is not a Date for Object of type " + target_obj.type + " id: " + target_obj._id.toString());
					}
				}
				break;
			default:
				row += "\"" + value + "\"";
		}

		if(key != "MongoID"){
			row += ",";
		} else {
			row += "\n";
		}
	}
	return row;	
	
};
