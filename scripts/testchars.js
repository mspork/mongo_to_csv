var getRelationshipByName = function(rels, name) {
	for(var i=0; i < rels.length; i++) {
		var rel = rels[i];
		if (rel.relation.name == name) {
			return rel;
		}
	}
	return null;
};

var a = db.app.assets.findOne({ "displayName" : "SC2004345 - Q2 2012"});

var rel = getRelationshipByName(a.relationships, "Customer");

print(rel.target.displayName);