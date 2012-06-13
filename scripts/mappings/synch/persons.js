var mapping = {
	
	"Row ID" : {
		path: "$.externalIds[?(/Refine/.test(@.schemeId.name))].id",
		// script: "value.split(\"_\")[1].substring(3,8)",
		type: "string"
	},	
	
	"systemProperties.lastModifiedOn" : {
		path: "$.systemProperties.lastModifiedOn",
		type: "date",
		crmName: "Opportunity.lastModifiedOn"
	},
	"systemProperties.lastModifiedBy" : {
		path: "$.systemProperties.lastModifiedBy",
		type: "string",
		crmName: "Opportunity.lastModifiedBy"
	},
	
	"displayName" : {
		path : "$.displayName",
		type : "string",
		crmName: "fullname"
	},	
	"externalIds[crm].id" : {
		path : "$.externalIds[?(@.schemeId.name === \"crm\")].id",
		type : "string",
		crmName: "contactid"
	},
	"externalIds[crm_clientcompanyid].id" : {
		path : "$.externalIds[?(@.schemeId.name === \"crm\")].id",
		type : "string",
		crmName: "Company.new_contactid"
	},
	"firstName" : {
		path : "$.firstName",
		type : "string",
		crmName: "firstname"
	},
	"lastName" : {
		path : "$.lastName",
		type : "string",
		crmName: "lastname"
	},
	"emailAddresses[primary].address" : {
		path : "$.emailAddresses[?(@.emailType.name === \"primary\")].address",
		type : "string",
		crmName: "emailaddress1"		
	}, 
	"contactNumbers[business].tNumber" : {
		path : "$.contactNumbers[?(@.telecomType.name === \"business\")].tNumber",
		type : "string",
		crmName: "telephone1"				
	},	
	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: ""
	}
};
