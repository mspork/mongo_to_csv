load("./scripts/migration/opportunities.js");
load("./scripts/avalon.js")

var csv = "";

for(var key in opportunities_mapping){
	if(key != "MongoID"){
		csv += key.toString() + ",";
	} else {
		csv += key.toString() + "\n";
	}
}

db.app.opportunities.find().forEach( function(i) { 
	createRow(i, opportunities_mapping);
	} );

print(csv);
