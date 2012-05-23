load("./scripts/migration/assets.js");
load("./scripts/avalon.js")

var csv = "";

for(var key in assets_mapping){
	if(key != "MongoID"){
		csv += key.toString() + ",";
	} else {
		csv += key.toString() + "\n";
	}
}

db.app.assets.find().forEach( function(i) { 
	createRow(i, assets_mapping);
	} );

print(csv);
