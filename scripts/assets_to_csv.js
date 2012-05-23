load("./scripts/avalon.js");

var csv =  
	"LoadID," +
	"SerialNumber," + 
	// "DisplayName," +
	"Description," +
	"Quantity," +
	"StartDate," +
	"EndDate," +
	"Amount@TransactionAmount," +
	"Code@TransactionAmount," +
	"Address1@Location," +
	"Address2@Location," +
	"City@Location," +
	"State@Location," +
	"Zip@Location," +
	"Country@Location," +
	"PONumber," +
	"ContractNumber," +
	"LoadID:SalesOrders:SalesOrder," +
	"LoadID:Products:Product," +
	"LoadID:Assets:Predecessor," +
	"LoadID:Assets:CoveredProduct," +
	"LoadID:Organizations:Customer," +
	"LoadID:Persons:PrimaryContact," +
	"LoadID:Organizations:Reseller," +
	"loadid:persons:resellercontact," +
	"LoadID:Organizations:Distributor," +
	"TXT:epicorSalesOrder," +
	"TXT:salesOrder," +
	"EXT:contractNumber" +
	"\n";


db.app.assets.find().forEach( function(i) { 
	
		csv +=
			// LoadID,
			i._id.toString() +
			 
			// SerialNumber,
			"," + 
			
			 // DisplayName,
			// "," + i.extensions.master.contractNumber.value + "Q2 2012" +
			// "," + i.displayName +

			 // Description,
			"," + i.description +
			
			// Quantity,
			"," + 
			
			// StartDate,
			"," + getDateAsString(i.startDate) +

			// EndDate,  
			"," + getDateAsString(i.endDate) +
			
			// Amount@TransactionAmount,
			"," + i.amount.amount + // amount
			// Code@TransactionAmount,
			"," + i.amount.code.name +  // currency code


			// Address1@Location,
			"," + 			
			// Address2@Location
			"," + 			
			// ,City@Location
			"," +
			// ,State@Location
			"," +
			// ,Zip@Location
			"," +
			// ,Country@Location
			"," +
			// ,PONumber
			"," +
			// ,ContractNumber,
			"," +
			// LoadID:SalesOrders:SalesOrder
			"," +

			// ,LoadID:Products:Product
			"," + getRelationKey(i.relationships,"Product") +

			// ,LoadID:Assets:Predecessor
			"," +

			// ,LoadID:Assets:CoveredProduct,
			"," +

			// LoadID:Organizations:Customer,
			"," + getRelationKey(i.relationships,"Customer") +

			// LoadID:Persons:PrimaryContact,
			"," + getNestedRelationKey(i.relationships, "Customer") +

			// LoadID:Organizations:Reseller,
			"," + getRelationKey(i.relationships, "Incumbent Reseller") +

			// loadid:persons:resellercontact,
			"," + getNestedRelationKey(i.relationships, "Incumbent Reseller") +			
			
			// LoadID:Organizations:Distributor			
			"," +


			// ,TXT:epicorSalesOrder,
			",\"" + i.extensions.tenant.epicorSalesOrder.value + "\"" +

			// TXT:salesOrder
			",\"" + i.extensions.tenant.salesOrder.value + "\"" +

			// ,EXT:contractNumber
			"," + i.extensions.master.contractNumber.value + // Contract Number

			"\n";
	} );

print(csv);
