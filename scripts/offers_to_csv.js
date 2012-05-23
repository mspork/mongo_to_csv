load("./scripts/avalon.js");

var csv = 
		"LoadID," +
		"LoadID:Opportunities:Opportunity," +	
		"Est Close Date," +	
		"Resolution Date," +		
		"Amount@TransactionAmount," +		
		"Code@TransactionAmount," +		
		"Amount@ExpectedAmount," +		
		"Code@ExpectedAmount," +		
		// "Amount@EstimatedAmount," +		
		// "Code@EstimatedAmount," +		
		"LoadID:Assets:Predecessor," +		
		"LoadID:Products:Product," +		
		"DisplayName," +	
		"Quantity," +	
		"StartDate," +	
		"EndDate," +	
		"EXT:batchQuarter," +	
		"EXT:clientBatchQuarter," +	
		"Address1@Location," +	
		"Address2@Location," +	
		"City@Location," +	
		"State@Location," +	
		"Zip@Location," +	
		"Country@Location," +	
		"EXT:batchType," +	
		"EXT:subBatchType," +	
		"EXT:resultReason," +
"\n";		


db.app.offers.find().forEach( function(i) { 
		// print(i.displayName);
		csv +=
			// LoadID,
			i._id.toString() +
			
			// LoadID:Opportunities:Opportunity	
			"," +

			// Est Close Date	
			"," +

			// Resolution Date	
			"," +

			// Amount@TransactionAmount	
			"," + i.amount.amount + 
			
			// Code@TransactionAmount
			"," + i.amount.code.name +
			 	
			// Amount@ExpectedAmount	
			"," + i.previousAmount.amount +
			
			// Code@ExpectedAmount	
			"," + i.previousAmount.code.name +
			
			// Amount@EstimatedAmount	
			// "," + 
			
			// Code@EstimatedAmount	
			// "," + 
			
			// LoadID:Assets:Predecessor	
			"," + 
			
			// LoadID:Products:Product	
			"," + getRelationKey(i.relationships,"Product") +
			
			// DisplayName	
			"," + i.displayName + 
			
			// Quantity	
			",1" + 
			
			// StartDate,
			"," + getDateAsString(i.startDate) +

			// EndDate,  
			"," + getDateAsString(i.endDate) +
			
			// EXT:batchQuarter
			"," + 
				
			// EXT:clientBatchQuarter	
			"," + 
			
						
			// Address1@Location	
			"," + 
			
			// Address2@Location	
			"," + 
			
			// City@Location	
			"," + 
			
			// State@Location	
			"," + 
			
			// Zip@Location	
			"," + 
			
			// Country@Location	
			"," + 
			
			// EXT:batchType	
			"," + 
			
			// EXT:subBatchType	
			"," + 
			
			// EXT:resultReason
			"," + 
			

			"\n";
	} );

print(csv);
