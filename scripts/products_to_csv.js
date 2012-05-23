var csv = 
		"LoadId," +
		"Name" +
		"\n";

db.app.products.find().forEach( function(i) { 
		csv +=
			i._id.toString() +
		 	// i.externalIds[0].id.substring(21,25) + // row no. in source sheet
			"," + i.displayName + // Contract Number
			"\n";
	} );

print(csv);
