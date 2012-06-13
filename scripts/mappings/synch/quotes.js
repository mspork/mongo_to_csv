var mapping = {
	
	"Row ID" : {
		path: "$.externalIds[?(/Refine/.test(@.schemeId.name))].id",
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
	
	//// QUOTE /////
	
	"displayName" : {
		path: "$.displayName",
		type: "string",
		crmName: "Quote.new_ssiquotenumber"
	},

	"externalIds[crm].id" : {
		path: "$.externalIds[?(/crm/.test(@.schemeId.name))].id",
		type: "string",		
		crmName: "Quote.new_quoterecordid"
	},

	
	"extensions.master.earliestNewStartDate" : {
		path : "$.extensions.master.earliestNewStartDate.value",
		type: "date",
		crmName: "Quote.new_earliestnewstartdate"
	},
	"extensions.master.latestNewEndDate" : {
		path : "$.extensions.master.latestNewEndDate.value",
		type: "date",
		crmName: "Quote.new_latestnewenddate"
	},
	"amount" : {
		path : "$.amount.amount",
		type : "number",
		crmName: "Quote.new_localtransactionamount"
	},	
	"amount.code" : {
		path : "$.amount.code.name",
		type : "string",
		crmName: "Quote.new_localtransactioncurrencyname"
	},	
	
	"externalIds[crm_ownerid].id" : {
		path : "$.externalIds[?(/crm_ownerid/.test(@.schemeId.name))].id",
		type : "string",
		crmName: "Quote.owneridname"
	},
		
	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: ""
	}
};
