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
	"externalIds.crm.id" : {
		path: "$.externalIds[?(/crm/.test(@.schemeId.name))].id",
		type: "string",
		crmName: "opportunityid"
	},
	"externalIds.crm.id" : {
		path: "$.externalIds[?(/crm/.test(@.schemeId.name))].id",
		type: "string",
		crmName: "opportunityid"
	},

	"extensions.master.contractNumber" : {
		path: "$.extensions.master.contractNumber.value",
		type: "string",
		crmName: "Asset.new_existingcontractnumber"
	},
	"displayName" : {
		path: "$.displayName",
		type: "string",
		crmName: "name"
	}, 
	"extensions.tenant.salesOrder.value" : {
		path: "$.extensions.tenant.salesOrder.value",
		type: "string",
		crmName: "??"
	}, 
	"targetDate" : {
		path : "$.targetDate",
		type : "date",
		crmName: "new_earliestexistingenddate"
	}, 
	"extensions.master.earliestNewStartDate" : {
		path: "$.extensions.master.earliestNewStartDate.value",
		type: "date",
		crmName: "new_earliestnewstartdate"
	},
	"extensions.master.latestNewEndDate" : {
		path: "$.extensions.master.latestNewEndDate.value",
		type: "date",
		crmName: "new_latestnewenddate"
	},	
	"resolutionDate" : {
		path : "$.resolutionDate",
		type : "date",
		crmName: "new_resolutiondate"
	}, 
	"extensions.master.batchQuarter" : {
		path: "$.extensions.master.batchQuarter.value",
		type: "string",
		crmName: "Asset.new_clientbatchquartername"
	},
	"extensions.master.clientRegion" : {
		path: "$.extensions.master.clientRegion.value.displayName",
		type: "string",
		crmName: "new_clientregionname"
	},
	"extensions.master.clientTerritory" : {
		path: "$.extensions.master.clientTerritory.value.displayName",
		type: "string",
		crmName: "new_clientterritoryname"
	},
	"extensions.master.clientTheatre" : {
		path: "$.extensions.master.clientTheatre.value.displayName",
		type: "string",
		crmName: "new_clienttheatrename"
	},
	"extensions.master.country" : {
		path: "$.extensions.master.country.value.name",
		type: "string",
		crmName: "new_countryname"
	},
	"extensions.master.businessLine" : {
		path: "$.extensions.master.businessLine.value.name",
		type: "string",
		crmName: "new_ssibusinesslinename"
	},
	"extensions.master.directChannel" : {
		path: "$.extensions.master.directChannel.value.displayName",
		type: "string",
		crmName: "new_directchannelname"
	},
	"extensions.tenant.endUserCompany" : {
		path: "$.extensions.tenant.endUserCompany.value",
		type: "string",
		crmName: "Asset.new_amproject"
	},
	

	// "targetDate" : {
	// 	path: "$.targetDate",
	// 	type: "date",
	// 	crmName: "new_earliestexistingenddate"
	// },
	"targetAmount" : {
		path : "$.targetAmount.amount",
		type : "number",
		crmName: "new_localrenewalamount"
	}, 
	"targetAmount.code" : {
		path : "$.targetAmount.code.name",
		type : "string",
		crmName: "new_localrenewalcurrencyname"
	},
	"amount" : {
		path : "$.amount.amount",
		type : "number",
		crmName: "new_localtransactionamount | new_localrenewalamount"
	}, 
	"amount.code" : {
		path : "$.amount.code.name",
		type : "string",
		crmName: "new_localtransactioncurrencyname"
	},
	"flows.salesStages.state" : {
		path : "$.flows.salesStages.state.displayName",
		type : "string",
		crmName: "new_ssisalesstagename"
	}, 
	"commitLevel" : {
		path : "$.commitLevel.displayName",
		type : "string",
		crmName: "new_commitlevelname"
	}, 
	"salesRep.displayName" : {
		path : "$.relationships[?(@.relation.name === \"salesRep\")].target.displayName",
		type : "string",
		crmName: "owneridname"
	},
	
	"extensions.tenant.quoteReady" : {
		path : "$.extensions.tenant.quoteReady.value",
		type: "string",
		crmName: "new_quotereadyname"
	},	

	"flows.salesStages.transitions[to contacted].changeDate" : {
		path : "$.flows.salesStages.transitions[?(@.toState === \"contacted\")].changeDate",
		type: "date",
		crmName: "new_firstcontactdate"
	},	
	"flows.salesStages.transitions[to quoteRequested].changeDate" : {
		path : "$.flows.salesStages.transitions[?(@.toState === \"quoteRequested\")].changeDate",
		type: "date",
		crmName: "new_firstquotedate"
	},
	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: ""
	}

};
