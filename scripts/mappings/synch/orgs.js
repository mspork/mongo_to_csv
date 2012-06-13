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
	//// CUSTOMER ////
	"Opportunity.customer.displayName" : {
		path : "$.relationships[?(@.relation.name === \"customer\")].target.displayName",
		type : "string",
		crmName: "Company.name"
	}, 
	"Opportunity.customer.externalIds[crm].id" : {
		path : "$.externalIds[?(@.schemeId.name === \"crm\")].id",
		type : "string",
		crmName: "Company.accountid"
	},	
	
	"Opportunity.customer.externalIds[crm_clientcompanyid].id" : {
		path : "$.externalIds[?(@.schemeId.name === \"crm_clientcompanyid\")].id",
		type : "string",
		crmName: "Company.new_clientcompanyid"
	},

	"Opportunity.customer.industry" : {
		path : "$.industry",
		type : "string",
		crmName: "Asset.new_description"
	},
		
	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: ""
	}
};
