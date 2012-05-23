load("./scripts/avalon.js");
load("./scripts/migration/opportunities.js");


var csv = getHeaderRow(mapping);

db.app.opportunities.find().forEach( function(obj) { 
	csv += getRow(obj, mapping);
});

print(csv);