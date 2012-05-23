var mapping = {
	
	"Row ID" : {
		path: "$.externalIds[?(@.schemeId.name =~ /Refine/)].id",
		script: "value.split(\"_\")[1].substring(3,8)",
		type: "number"
	},
	"Opportunity ID" : {
		path: "$.extensions.tenant.migration_crmid.value",
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
	"Target Date" : {
		path : "$.targetDate",
		type : "date"
	}, 
	"Batch Quarter" : {
		path: "$.extensions.master.batchQuarter.value",
		type: "string"
	},
	"Renewal Amount" : {
		path : "$.previousAmount.amount",
		type : "number"
	}, 
	"Renewal Currency" : {
		path : "$.previousAmount.code.name",
		type : "string"
	},
	"Transaction Amount" : {
		path : "$.amount.amount",
		type : "number"
	}, 
	"Transaction Amount Currency" : {
		path : "$.amount.code.name",
		type : "string"
	},
	"Sales Stage" : {
		path : "$.flows.salesStages.state.displayName",
		type : "string"
	}, 
	"Customer" : {
		path : "$.relationships[?(@.relation.name === \"Customer\")].target.displayName",
		type : "string"
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
	"MongoID" : {
		path : "$._id",
		eval : "toString()"
	}
};
