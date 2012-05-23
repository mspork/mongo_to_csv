db.app.offers.find().forEach( function(i) { print(i._id + ",\"" + i.displayName.split(" - ")[1] + "\"," + i.relationships[2].target.key + "," + i.amount.amount) } )
