load("./scripts/avalon.js");
load("./scripts/mappings/synch/opps.js");


var csv = "";
csv += getHeaderRow(mapping);
csv += getAltHeaderRow(mapping);

var start = new Date(2012, 5, 12);
var end = new Date(2012, 5, 13);

db.app.opportunities.find( {"systemProperties.lastModifiedOn" : {$gte: start, $lt: end} }).forEach( function(obj) { 
	csv += getRow(obj, mapping);
});

print(csv);