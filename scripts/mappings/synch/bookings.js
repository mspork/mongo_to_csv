var mapping = {
	
	"Row ID" : {
		path: "$.externalIds[?(/Refine/.test(@.schemeId.name))].id",
		// script: "value.split(\"_\")[1].substring(3,8)",
		type: "string"
	},

	"systemProperties.lastModifiedOn" : {
		path: "$.systemProperties.lastModifiedOn",
		type: "date",
		crmName: "lastModifiedOn"
	},
	"systemProperties.lastModifiedBy" : {
		path: "$.systemProperties.lastModifiedBy",
		type: "string",
		crmName: "lastModifiedBy"
	},
	
	"poDate" : {
		path : "$.poDate",
		type : "date",
		crmName: "new_ssibookingdate"
	},
	"soDate" : {
		path : "$.soDate",
		type : "date",
		crmName: "new_clientbookingdate"
	},
	"poNumber" : {
		path : "$.poNumber",
		type : "string",
		crmName: "new_newponumber"
	},
	"soNumber" : {
		path : "$.soNumber",
		type : "string",
		crmName: "new_newsonumber"
	},
	"amount" : {
		path : "$.amount.amount",
		type : "number",
		crmName: "new_localtransactionamount"
	},	
	"amount.code" : {
		path : "$.amount.code.name",
		type : "string",
		crmName: "new_localtransactioncurrencyname"
	},
	"soAmount" : {
		path : "$.soAmount.amount",
		type : "number",
		crmName: "new_localtransactionamount"
	},	
	"soAmount.code" : {
		path : "$.soAmount.code.name",
		type : "string",
		crmName: "new_localtransactioncurrencyname"
	},
	"poAmount" : {
		path : "$.poAmount.amount",
		type : "number",
		crmName: "new_localtransactionamount"
	},	
	"poAmount.code" : {
		path : "$.poAmount.code.name",
		type : "string",
		crmName: "new_localtransactioncurrencyname"
	},

	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: ""
	}
};
