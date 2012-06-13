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

	"externalIds.crm.id" : {
		path: "$.externalIds[?(/crm/.test(@.schemeId.name))].id",
		type: "string",
		crmName: "Asset.new_opportunityassetid"
	},
	
	"extensions.master.batchType" : {
		path: "$.extensions.master.batchType.value.displayName",
		type: "string",
		crmName: "Asset.new_batchtypename"
	},
	"extensions.master.subBatchType" : {
		path: "$.extensions.master.subBatchType.name",
		type: "string",
		crmName: "Asset.new_subbatch"
	},
	"extensions.master.existingContractNumber" : {
		path: "$.extensions.master.existingContractNumber.value",
		type: "string",
		crmName: "Asset.new_existingcontractnumber"
	},
	"extensions.master.batchQuarter" : {
		path: "$.extensions.master.batchQuarter.value",
		type: "string",
		crmName: "Asset.new_clientbatchquartername"
	},
	"amount" : {
		path: "$.amount.amount",
		type: "number",
		crmName: "Asset.new_localtransactionamount | Asset.new_localrenewalamount"
	},
	"amount.code" : {
		path: "$.amount.code.name",
		type: "number",
		crmName: "Asset.new_localrenewalcurrencyname | Asset.new_localtransactioncurrencyname"
	},
	"targetAmount" : {
		path: "$.targetAmount.amount",
		type: "number",
		crmName: "Asset.new_localrenewalamount"
	},
	"targetAmount.code" : {
		path: "$.targetAmount.code.name",
		type: "number",
		crmName: "Asset.new_localrenewalcurrencyname"
	},	
	"endDate" : {
		path: "$.endDate",
		type: "date",
		crmName: "Asset.new_newenddate"
	},
	"startDate" : {
		path: "$.startDate",
		type: "date",
		crmName: "Asset.new_newenddate"
	},
	
	"resultReason" : {
		path: "$.resultReason.displayName",
		type: "string",
		crmName: "Asset.new_ssiresultreasonname"
	},

	"result" : {
		path: "$.result.displayName",
		type: "string",
		crmName: "??"
	},
	
	"resolutionDate" : {
		path : "$.resolutionDate",
		type : "date",
		crmName: "new_resolutiondate"
	},
	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: ""
	}
};
