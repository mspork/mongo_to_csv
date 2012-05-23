
db.app.opportunities.find().forEach( function(opp) { 
	var amount =  parseFloat(opp.amount.amount);
	opp.amount.amount = amount;
	db.app.opportunities.save(opp);
});

db.app.opportunities.find().forEach( function(opp) { 
	var amount =  parseFloat(opp.previousAmount.amount);
	opp.previousAmount.amount = amount;
	db.app.opportunities.save(opp);
});