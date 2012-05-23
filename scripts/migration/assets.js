var assets_mapping = {
	
	"RowID" : {
		path: "$.externalIds[?(/Refine/)].id",
		eval: "split(\"_\")[1].substring(3,5)",
		type: "string"
	},
	"Contract#" : {
		path: "$.extensions.master.contractNumber.value",
		type: "string"
	},
	"Name" : {
		path: "$.displayName",
		type: "string"
	}, 
	"Order#" : {
		path: "$.extensions.tenant.salesOrder.value",
		type: "string"
	}, 
	"Epicor #" : {
		path: "$.extensions.tenant.epicorSalesOrder.value",
		type: "string"
	}, 
	"StartDate" : {
		path : "$.startDate",
		type : "date"
	}, 
	"EndDate" : {
		path : "$.endDate",
		type : "date"
	}, 
	"Product Cat" : {
		path : "$.relationships[?(@.relation.name === \"Product\")].target.displayName",
		type : "string"
	}, 
	"Contract Line Amount" : {
		path : "$.amount.amount",
		type : "number"
	}, 
	"Currency Code" : {
		path : "$.amount.code.name",
		type : "string"
	},
	"Customer" : {
		path : "$.relationships[?(@.relation.name === \"Customer\")].target.displayName",
		type : "string"
	}, 
	"Customer State" : {
		path : "$.addresses[?(@.relation.name === \"business\")].state",
		type : "string",
		link: "Customer"
	},
	"Customer Territory" : {
		path : "$.addresses[?(@.relation.name === \"business\")].country",
		type : "string",
		link: "Customer"		
	},
	"Customer Contact First Name" : {
		path : "$.firstName",
		type : "string",
		link : "Customer",
		nestedLink : "primaryContact"
	},
	"Customer Contact Last Name" : {
		path : "$.lastName",
		type : "string",
		link : "Customer",
		nestedLink : "primaryContact"
	},
	"Customer Contact Email" : {
		path : "$.emailAddresses[?(@.emailType.name === \"primary\")].address",
		type : "string",
		link : "Customer",
		nestedLink : "primaryContact"		
	}, 
	"Customer Contact Phone" : {
		path : "$.contactNumbers[?(@.telecomType.name === \"business\")].tNumber",
		type : "string",
		link : "Customer",
		nestedLink : "primaryContact"				
	},	
	"Reseller" : {
		path : "$.relationships[?(@.relation.name === \"Incumbent Reseller\")].target.displayName",
		type : "string"
	}, 
	"Reseller State" : {
		path : "$.addresses[?(@.relation.name === \"business\")].state",
		type : "string",
		link: "Incumbent Reseller"
	},
	"Reseller Territory" : {
		path : "$.addresses[?(@.relation.name === \"business\")].country",
		type : "string",
		link: "Incumbent Reseller"		
	},
	"Reseller Contact First Name" : {
		path : "$.firstName",
		type : "string",
		link : "Incumbent Reseller",
		nestedLink : "primaryContact"
	},
	"Reseller Contact Last Name" : {
		path : "$.lastName",
		type : "string",
		link : "Incumbent Reseller",
		nestedLink : "primaryContact"
	},
	"Reseller Contact Email" : {
		path : "$.emailAddresses[?(@.emailType.name === \"primary\")].address",
		type : "string",
		link : "Incumbent Reseller",
		nestedLink : "primaryContact"		
	}, 
	"Reseller Contact Phone" : {
		path : "$.contactNumbers[?(@.telecomType.name === \"business\")].tNumber",
		type : "string",
		link : "Incumbent Reseller",
		nestedLink : "primaryContact"				
	},
	"MongoID" : {
		path : "$._id",
		eval : "toString()"
	}
};
