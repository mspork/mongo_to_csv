load("./scripts/avalon.js");

var csv = 
		"LoadID," +
		// "DisplayName," +
		"LoadID:Organizations:Customer," +
		"LoadID:Persons:PrimaryContact," +
		"LoadID:Organizations:Reseller," +
		"loadid:persons:resellercontact," +
		"LoadID:Persons:AssignedTo," +
		"LoadID:Programs:Program," +
		"Est Close Date," +
		"Resolution Date" +
		"SalesStage" +
		"CommitLevel" +	
		"LoadID:Organizations:Distributor" +
		"Amount@TransactionAmount" +	
		"Code@TransactionAmount" +	
		"Amount@ExpectedAmount" +	
		"Code@ExpectedAmount" +	
		"Amount@EstimatedAmount" +	
		"Code@EstimatedAmount" +	
		"EXT:clientTheatre" +	
		"EXT:clientRegion" +	
		"EXT:clientTerritory" +	
		"EXT:country" +
		"\n";

var getCountry = function(i){
	var r = getRelationshipByName(i.relationships, "Customer");
	if(!r){
		r = getRelationshipByName(i.relationships, "Incumbent Reseller");
	}
	if(r){
		if(r.target.addresses[0] && r.target.addresses[0].country){
			return r.target.addresses[0].country;
		} 
	}
	return "";
};

var getRegion = function(i){
	var r = getRelationshipByName(i.relationships, "Customer");
	if(!r){
		r = getRelationshipByName(i.relationships, "Incumbent Reseller");
	}	
	if(r){
		if(r.target.addresses[0] && r.target.addresses[0].country){
			return r.target.addresses[0].country;
		} 
	}
	return "";
};

var getCommitLevel = function(i){
	if(i.commitLevel){
		return i.commitLevel.name;
	}
	return "";
};

db.app.opportunities.find().forEach( function(i) { 
		// print(i.extensions.master.contractNumber.value);
		csv +=
			// LoadID,
			i._id.toString() +
			
			 // DisplayName,
			// "," + i.extensions.master.contractNumber.value + "Q2 2012" + 

			// "LoadID:Organizations:Customer," 
			"," + getRelationKey(i.relationships, "Customer") + 

			// LoadID:Persons:PrimaryContact,
			"," + getNestedRelationKey(i.relationships,"Customer") + 
			
			// LoadID:Organizations:Reseller,
			"," + getRelationKey(i.relationships, "Incumbent Reseller") + 

			// loadid:persons:resellercontact,
			"," + getNestedRelationKey(i.relationships,"Incumbent Reseller") +	
			
			// "LoadID:Persons:AssignedTo," +
			"," + getRelationKey(i.relationships, "Assignee") +
			
			// "LoadID:Programs:Program," 
			"," + 
			
			// "Est Close Date," +
			"," + getDateAsString(i.targetDate) +

			// "Resolution Date" +
			"," + getDateAsString(i.resolutionDate) + 
			

			// SalesStage
			"," + i.flows.salesStages.state.displayName +

			// CommitLevel	
			"," + getCommitLevel(i) +

			// LoadID:Organizations:Distributor
			"," + getRelationKey(i.relationships, "Distributor") + 
			

			// Amount@TransactionAmount	
			"," + i.amount.amount +

			// Code@TransactionAmount	
			"," + i.amount.code.name +

			// // Amount@ExpectedAmount	
			// "," + 
			// 
			// // Code@ExpectedAmount	
			// "," + 

			// Amount@EstimatedAmount	
			"," + i.previousAmount.amount +

			// Code@EstimatedAmount	
			"," + i.previousAmount.code.name +

			// EXT:clientTheatre	
			"," + getCountry(i) + 

			// EXT:clientRegion	
			"," + getRegion(i) +

			// EXT:clientTerritory	
			"," + 

			// EXT:country
			"," + getCountry(i) +
			

			"\n";
	} );

print(csv);
