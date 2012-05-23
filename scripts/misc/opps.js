db.app.opportunities.find().forEach( function(i) { print("\"" + i.displayName + "\"," + i.amount.amount) } )
