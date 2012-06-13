load("./scripts/avalon.js");
load("./scripts/migration/verify_inverses.js");


var csv = "";
csv += getHeaderRow(mapping);
csv += getAltHeaderRow(mapping);


db.app.opportunities.find().forEach( function(obj) { 
	csv += getRow(obj, mapping);
});
print(csv);

// var obj = db.app.opportunities.findOne( { "_id" : ObjectId("4fc55a4ec978e4da520003b7") })
// print(getRow(obj, mapping));
