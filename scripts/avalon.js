load("./scripts/libs/jsonpath-0.8.0.js");

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
		return 	 date.getUTCFullYear() + "-" + 
				(date.getUTCMonth() + 1) + "-" + 
				 date.getUTCDate();	
	}
	return "";
	
};


var getOrg = function(rels, type) {
	var relation_instance = getRelationshipByName(rels, type);
	if(relation_instance) {
		return db.core.contacts.findOne( { "_id" : ObjectId(relation_instance.target.key) });
	}
	return null;
};

var getPersonContactForOrg = function(rels, type) {
	var relationship = getRelationshipByName(rels,type);
	if(relationship){
		if(relationship.relationships[0]) {
			return db.core.contacts.findOne( { "_id" : ObjectId(relationship.relationships[0].target.key) });
		}
	}
	return null;
};


var getOpportunity = function(rels, rel_name) {
	var relation_instance = getRelationshipByName(rels, rel_name);
	if(relation_instance) {
		return db.app.opportunities.findOne( { "_id" : ObjectId(relation_instance.target.key) });
	}
	return null;
};

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
}


var getRow = function(obj, mapping){
	var row = "";
	
	for(key in mapping){
		
		var target_obj = null;

		if(mapping[key].nestedLink){
			target_obj = getPersonContactForOrg(obj.relationships, mapping[key].link);	
		} else if(mapping[key].link) {
			target_obj = getOrg(obj.relationships, mapping[key].link);
		} else {
			target_obj = obj;
		}

		var value = getPath(target_obj,mapping[key].path);

		// print(key + ":" + mapping[key].path + ":" +value );
		
		
		if(mapping[key].script){
			// print(value);
			value = eval(mapping[key].script);
		}

		switch(mapping[key].type)
		{
			case "string":
				row += "\"" + value + "\"";
				break;
			case "number":
				row += value;
				break;
			case "date":
				row += formatDate(value);
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
