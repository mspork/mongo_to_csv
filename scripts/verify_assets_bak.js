load("./scripts/avalon.js");

var csv =  
			"RowID," +
			"Contract#," +
			"Name," + 
			"Order#," + 
			"Epicor #," + 
			"StartDate," + 
			"EndDate," + "Product Cat," + 
			"Contract Line Amount," + 
			"Contract Amount," + 
			"Currency Code," +
			"Customer," + 
			"Customer State," +
			"Customer Territory," +
			"Customer Contact First Name," +
			"Customer Contact Last Name," +
			"Customer Contact Email," + 
			"Customer Contact Phone," +
			"Reseller," + 
			"Reseller State," + 
			"Reseller Territory," + 
			"Reseller Contact First Name," + 
			"Reseller Contact Last Name," + 
			"Reseller Contact Email," + 
			"Reseller Contact Phone," +
			"MongoID\n";


db.app.assets.find().forEach( function(i) { 
		csv +=
		
			// Row id
			i.externalIds[0].id.substring(21,27).split("_")[0] + 			
			
			// ,EXT:contractNumber
			// "," + getExtension(i.extensions,"master","contractNumber") + // Contract Number		 
			",\"" + getPath(i, "$.extensions.master.contractNumber.value") + "\"" +

			// "," + i.extensions.master.contractNumber.value + // Contract Number		 
			
			 // DisplayName,
			// ",\"" + i.displayName + "\"" +
			",\"" + getPath(i, "$.displayName") + "\"" +
			
			// TXT:salesOrder
			// ",\"" + getExtension(i.extensions,"tenant","salesOrder") + "\""  + 
			",\"" + getPath(i, "$.extensions.tenant.salesOrder.value") + "\"" +
			
			// ,TXT:epicorSalesOrder,
			// ",\"" + getExtension(i.extensions,"tenant","epicorSalesOrder") + "\""  + 
			",\"" + getPath(i, "$.extensions.tenant.epicorSalesOrder.value") + "\"" +
			
			// StartDate,
			"," + formatDate(getPath(i, "$.startDate")) +
			// "," + i.startDate.getUTCFullYear() + "-" + (i.startDate.getUTCMonth() + 1) + "-" + i.startDate.getUTCDate() + 
			// EndDate,  
			// "," + i.endDate.getUTCFullYear() + "-" + (i.endDate.getUTCMonth() + 1) + "-" + i.endDate.getUTCDate() + 
			"," + formatDate(getPath(i, "$.endDate")) +

			// ,LoadID:Products:Product
			// "," + getRelationshipByName(i.relationships,"Product").target.displayName +
			",\"" + getPath(i,"$.relationships[?(@.relation.name === \"Product\")].target.displayName") + "\"" +
			// ",\"" + getRelationshipTargetName(i.relationships,"Product") + "\"" +
			
			// Amount
			// "," + i.amount.amount + // amount
			"," + getPath(i, "$.amount.amount") + // amount
			// Contract Amount
			"," +
			// Currency
			"," + getPath(i, "$.code.name") +  // currency code
			// "," + i.amount.code.name +  // currency code



			// Customer,
			// ",\"" + getRelationshipTargetName(i.relationships,"Customer") + "\"" +
			",\"" + getPath(i,"$.relationships[?(@.relation.name === \"Customer\")].target.displayName") + "\"" +
			
			// Customer State
			// ",\"" + getAttribute(getAttribute(getOrg(i.relationships, "Customer"),"addresses")[0],"state") + "\""  +
			",\"" + getPath(getOrg(i.relationships, "Customer"),"$.addresses[?(@.relation.name === \"business\")].state") + "\""  +
			// ",\"" +getState(getOrg(i.relationships, "Customer")) + "\""  +

			// Customer Territory
			// ",\"" + getAttribute(getAttribute(getOrg(i.relationships, "Customer"),"addresses")[0],"country") + "\""  +
			",\"" + getPath(getOrg(i.relationships, "Customer"),"$.addresses[?(@.relation.name === \"business\")].country") + "\""  +

			// ",\"" +getCountry(getOrg(i.relationships, "Customer")) + "\""  +
			
			// Customer Contact First Name
			",\"" + getPath(getPersonContactForOrg(i.relationships, "Customer"), "$.firstName") + "\"" +
			// ",\"" + getAttribute(getPersonContactForOrg(i.relationships, "Customer"), "firstName") + "\"" +

			// Customer Contact Last Name
			// ",\"" + getAttribute(getPersonContactForOrg(i.relationships, "Customer"), "lastName") + "\"" +
			",\"" + getPath(getPersonContactForOrg(i.relationships, "Customer"), "$.lastName") + "\"" +
			
			// Customer Contact Email
			// ",\"" + getAttribute(getAttribute(getPersonContactForOrg(i.relationships, "Customer"),"emailAddresses")[0],"address")  + "\"" +	
			",\"" + getPath(getPersonContactForOrg(i.relationships, "Customer"), "$.emailAddresses[?(@.emailType.name === \"primary\")].address") + "\"" +

			// ",\"" + getEmail(getPersonContactForOrg(i.relationships, "Customer")) + "\"" +

			// Customer Contact Phone
			// ",\"" + getPhone(getPersonContactForOrg(i.relationships, "Customer")) + "\"" +
			// ",\"" + getAttribute(getAttribute(getPersonContactForOrg(i.relationships, "Customer"),"contactNumbers")[0],"tNumber")  + "\"" +	
			",\"" + getPath(getPersonContactForOrg(i.relationships, "Customer"), "$.contactNumbers[?(@.telecomType.name === \"business\")].tNumber") + "\"" +

			// Reseller,
			// ",\"" + getResellerName(i.relationships) + "\"" +
			// ",\"" + getRelationshipTargetName(i.relationships,"Incumbent Reseller") + "\"" +
			",\"" + getPath(i,"$.relationships[?(@.relation.name === \"Incumbent Reseller\")].target.displayName") + "\"" +

			// Reseller State	
			// ",\"" + getState(getOrg(i.relationships, "Incumbent Reseller")) + "\"" +
			// ",\"" + getAttribute(getAttribute(getOrg(i.relationships, "Incumbent Reseller"),"addresses")[0],"state") + "\""  +
			",\"" + getPath(getOrg(i.relationships, "Incumbent Reseller"),"$.addresses[?(@.relation.name === \"business\")].state") + "\""  +

			// Reseller Territory	
			// ",\"" + getAttribute(getAttribute(getOrg(i.relationships, "Incumbent Reseller"),"addresses")[0],"country") + "\""  +
			// ",\"" +getCountry(getOrg(i.relationships, "Incumbent Reseller")) + "\"" +
			",\"" + getPath(getOrg(i.relationships, "Incumbent Reseller"),"$.addresses[?(@.relation.name === \"business\")].country") + "\""  +


			// Reseller Contact First Name	
			// ",\"" + getAttribute(getPersonContactForOrg(i.relationships, "Incumbent Reseller"), "firstName") + "\"" +
			",\"" + getPath(getPersonContactForOrg(i.relationships, "Incumbent Reseller"), "$.firstName") + "\"" +

			// Reseller Contact Last Name	
			// ",\"" + getAttribute(getPersonContactForOrg(i.relationships, "Incumbent Reseller"), "lastName") + "\"" +
			",\"" + getPath(getPersonContactForOrg(i.relationships, "Incumbent Reseller"), "$.lastName") + "\"" +
						
			// Reseller Contact Email
			// ",\"" + getAttribute(getAttribute(getPersonContactForOrg(i.relationships, "Incumbent Reseller"),"emailAddresses")[0],"address")  + "\"" +	
			",\"" + getPath(getPersonContactForOrg(i.relationships, "Incumbent Reseller"), "$.emailAddresses[?(@.emailType.name === \"primary\")].address") + "\"" +

			// ",\"" + getEmail(getPersonContactForOrg(i.relationships, "Incumbent Reseller")) + "\"" +

			// Reseller Phone 
			// ",\"" + getPhone(getPersonContactForOrg(i.relationships, "Incumbent Reseller")) + "\"" +
			// ",\"" + getAttribute(getAttribute(getPersonContactForOrg(i.relationships, "Incumbent Reseller"),"contactNumbers")[0],"tNumber")  + "\"" +	
			",\"" + getPath(getPersonContactForOrg(i.relationships, "Incumbent Reseller"), "$.contactNumbers[?(@.telecomType.name === \"business\")].tNumber") + "\"" +

			// LoadID,
			"," + i._id.toString() +

			"\n";
	} );

print(csv);
