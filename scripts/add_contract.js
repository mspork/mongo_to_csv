

var opp = db.app.opportunities.find()[1];

opp.extensions.master.contractNumber = 
	{ "value" : opp.displayName.split(" ")[0] };
	
db.app.opportunities.save(opp);