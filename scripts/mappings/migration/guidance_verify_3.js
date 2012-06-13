var mapping = {
	
	"Row ID" : {
		path: "$.externalIds[?(/Refine/.test(@.schemeId.name))].id",
		// script: "value.split(\"_\")[1].substring(3,8)",
		type: "string"
	},
	// "Opportunity.extensions.tenant.migration_crmid" : {
	// 	path: "$.extensions.tenant.migration_crmid.value",
	// 	type: "string",
	// 	crmName: "Opportunity.opportunityid"
	// },
	"Opportunity.systemProperties.lastModifiedOn" : {
		path: "$.systemProperties.lastModifiedOn",
		type: "date",
		crmName: "Opportunity.lastModifiedOn"
	},
	"Opportunity.systemProperties.lastModifiedBy" : {
		path: "$.systemProperties.lastModifiedBy",
		type: "string",
		crmName: "Opportunity.lastModifiedBy"
	},
	"Opportunity.externalIds.crm.id" : {
		path: "$.externalIds[?(/crm/.test(@.schemeId.name))].id",
		type: "string",
		crmName: "Opportunity.opportunityid"
	},
	"Opportunity.externalIds.crm.id" : {
		path: "$.externalIds[?(/crm/.test(@.schemeId.name))].id",
		type: "string",
		crmName: "Opportunity.opportunityid"
	},

	"Opportunity.extensions.master.contractNumber" : {
		path: "$.extensions.master.contractNumber.value",
		type: "string",
		crmName: "Asset.new_existingcontractnumber"
	},
	"Opportunity.displayName" : {
		path: "$.displayName",
		type: "string",
		crmName: "Opportunity.name"
	}, 
	"Opportunity.extensions.tenant.salesOrder.value" : {
		path: "$.extensions.tenant.salesOrder.value",
		type: "string",
		crmName: "??"
	}, 
	"Opportunity.targetDate" : {
		path : "$.targetDate",
		type : "date",
		crmName: "Opportunity.new_earliestexistingenddate"
	}, 
	"Opportunity.extensions.master.earliestNewStartDate" : {
		path: "$.extensions.master.earliestNewStartDate.value",
		type: "date",
		crmName: "Opportunity.new_earliestnewstartdate"
	},
	"Opportunity.extensions.master.latestNewEndDate" : {
		path: "$.extensions.master.latestNewEndDate.value",
		type: "date",
		crmName: "Opportunity.new_latestnewenddate"
	},	
	"Opportunity.resolutionDate" : {
		path : "$.resolutionDate",
		type : "date",
		crmName: "Opportunity.new_resolutiondate"
	}, 
	"Opportunity.extensions.master.batchQuarter" : {
		path: "$.extensions.master.batchQuarter.value",
		type: "string",
		crmName: "Asset.new_clientbatchquartername"
	},
	"Opportunity.extensions.master.clientRegion" : {
		path: "$.extensions.master.clientRegion.value.displayName",
		type: "string",
		crmName: "Opportunity.new_clientregionname"
	},
	"Opportunity.extensions.master.clientTerritory" : {
		path: "$.extensions.master.clientTerritory.value.displayName",
		type: "string",
		crmName: "Opportunity.new_clientterritoryname"
	},
	"Opportunity.extensions.master.clientTheatre" : {
		path: "$.extensions.master.clientTheatre.value.displayName",
		type: "string",
		crmName: "Opportunity.new_clienttheatrename"
	},
	"Opportunity.extensions.master.country" : {
		path: "$.extensions.master.country.value.name",
		type: "string",
		crmName: "Opportunity.new_countryname"
	},
	"Opportunity.extensions.master.businessLine" : {
		path: "$.extensions.master.businessLine.value.name",
		type: "string",
		crmName: "Opportunity.new_ssibusinesslinename"
	},
	"Opportunity.extensions.master.directChannel" : {
		path: "$.extensions.master.directChannel.value.displayName",
		type: "string",
		crmName: "Opportunity.new_directchannelname"
	},
	"Opportunity.extensions.tenant.endUserCompany" : {
		path: "$.extensions.tenant.endUserCompany.value",
		type: "string",
		crmName: "Asset.new_amproject"
	},
	

	// "Opportunity.targetDate" : {
	// 	path: "$.targetDate",
	// 	type: "date",
	// 	crmName: "Opportunity.new_earliestexistingenddate"
	// },
	"Opportunity.targetAmount" : {
		path : "$.targetAmount.amount",
		type : "number",
		crmName: "Opportunity.new_localrenewalamount"
	}, 
	"Opportunity.targetAmount.code" : {
		path : "$.targetAmount.code.name",
		type : "string",
		crmName: "Opportunity.new_localrenewalcurrencyname"
	},
	"Opportunity.amount" : {
		path : "$.amount.amount",
		type : "number",
		crmName: "Opportunity.new_localtransactionamount | Opportunity.new_localrenewalamount"
	}, 
	"Opportunity.amount.code" : {
		path : "$.amount.code.name",
		type : "string",
		crmName: "Opportunity.new_localtransactioncurrencyname"
	},
	"Opportunity.flows.salesStages.state" : {
		path : "$.flows.salesStages.state.displayName",
		type : "string",
		crmName: "Opportunity.new_ssisalesstagename"
	}, 
	"Opportunity.commitLevel" : {
		path : "$.commitLevel.displayName",
		type : "string",
		crmName: "Opportunity.new_commitlevelname"
	}, 
	"Opportunity.salesRep.displayName" : {
		path : "$.relationships[?(@.relation.name === \"salesRep\")].target.displayName",
		type : "string",
		crmName: "Opportunity.owneridname"
	},
	
	"Opportunity.extensions.tenant.quoteReady" : {
		path : "$.extensions.tenant.quoteReady.value",
		type: "string",
		crmName: "Opportunity.new_quotereadyname"
	},	

	"Opportunity.flows.salesStages.transitions[to contacted].changeDate" : {
		path : "$.flows.salesStages.transitions[?(@.toState === \"contacted\")].changeDate",
		type: "date",
		crmName: "Opportunity.new_firstcontactdate"
	},	
	"Opportunity.flows.salesStages.transitions[to quoteRequested].changeDate" : {
		path : "$.flows.salesStages.transitions[?(@.toState === \"quoteRequested\")].changeDate",
		type: "date",
		crmName: "Opportunity.new_firstquotedate"
	},	
	
	
	//////////// OFFERS ////////////////
	
	
	// "Opportunity.offer.extensions.tenant.migration_crmid" : {
	// 	path: "$.extensions.tenant.migration_crmid.value",
	// 	type: "string",
	// 	linkPath : "offer",
	// 	crmName: "Asset.new_opportunityassetid"
	// },

	"Opportunity.offer.externalIds.crm.id" : {
		path: "$.externalIds[?(/crm/.test(@.schemeId.name))].id",
		type: "string",
		linkPath : "offer",
		crmName: "Asset.new_opportunityassetid"
	},
	
	"Opportunity.offer.extensions.master.batchType" : {
		path: "$.extensions.master.batchType.value.displayName",
		type: "string",
		linkPath : "offer",
		crmName: "Asset.new_batchtypename"
	},
	"Opportunity.offer.extensions.master.subBatchType" : {
		path: "$.extensions.master.subBatchType.name",
		type: "string",
		linkPath : "offer",
		crmName: "Asset.new_subbatch"
	},
	"Opportunity.offer.extensions.master.existingContractNumber" : {
		path: "$.extensions.master.existingContractNumber.value",
		type: "string",
		linkPath : "offer",
		crmName: "Asset.new_existingcontractnumber"
	},
	"Opportunity.offer.extensions.master.batchQuarter" : {
		path: "$.extensions.master.batchQuarter.value",
		type: "string",
		linkPath : "offer",
		crmName: "Asset.new_clientbatchquartername"
	},
	"Opportunity.offer.amount" : {
		path: "$.amount.amount",
		type: "number",
		linkPath : "offer",
		crmName: "Asset.new_localtransactionamount | Asset.new_localrenewalamount"
	},
	"Opportunity.offer.amount.code" : {
		path: "$.amount.code.name",
		type: "number",
		linkPath : "offer",
		crmName: "Asset.new_localrenewalcurrencyname | Asset.new_localtransactioncurrencyname"
	},
	"Opportunity.offer.targetAmount" : {
		path: "$.targetAmount.amount",
		type: "number",
		linkPath : "offer",
		crmName: "Asset.new_localrenewalamount"
	},
	"Opportunity.offer.targetAmount.code" : {
		path: "$.targetAmount.code.name",
		type: "number",
		linkPath : "offer",
		crmName: "Asset.new_localrenewalcurrencyname"
	},	
	"Opportunity.offer.endDate" : {
		path: "$.endDate",
		type: "date",
		linkPath : "offer",
		crmName: "Asset.new_newenddate"
	},
	"Opportunity.offer.startDate" : {
		path: "$.startDate",
		type: "date",
		linkPath : "offer",
		crmName: "Asset.new_newenddate"
	},
	
	"Opportunity.offer.resultReason" : {
		path: "$.resultReason.displayName",
		type: "string",
		linkPath : "offer",
		crmName: "Asset.new_ssiresultreasonname"
	},

	"Opportunity.offer.result" : {
		path: "$.result.displayName",
		type: "string",
		linkPath : "offer",
		crmName: "??"
	},
	
	"Opportunity.offer.resolutionDate" : {
		path : "$.resolutionDate",
		type : "date",
		linkPath : "offer",		
		crmName: "Opportunity.new_resolutiondate"
	},

	//////////// Offer PRODUCT ////////////////
	
	"Opportunity.offer.product.displayName" : {
		path: "$.displayName",
		type: "string",
		linkPath : "offer.product",
		crmName: "Asset.new_existingserviceproduct"
	},	
	
	//////////// SERVICE PRODUCT ////////////////
	
	"Opportunity.offer.description" : {
		path: "$.description",
		type: "string",
		linkPath : "offer",
		crmName: "Asset.new_existingserviceproduct"
	},	
	
	
	//////////// ASSETS ////////////////
	
	// "Opportunity.offer.predecessor.extensions.tenant.migration_crmid" : {
	// 	path: "$.extensions.master.poNumber.value",
	// 	type: "string",
	// 	linkPath : "offer.predecessor",
	// 	crmName: "Asset.new_existingponumber"
	// },

	"Opportunity.offer.predecessor.externalIds.crm.id" : {
		path: "$.externalIds[?(/crm/.test(@.schemeId.name))].id",
		type: "string",
		crmName: "Asset.new_opportunityassetid"
	},
	
	"Opportunity.offer.predecessor.endDate" : {
		path: "$.endDate",
		type: "date",
		linkPath : "offer.predecessor",
		crmName: "Asset.new_existingenddate"
	},
	"Opportunity.offer.predecessor.startDate" : {
		path: "$.startDate",
		type: "date",
		linkPath : "offer.predecessor",
		crmName: "Asset.new_existingstartdate"
	},

	
	///////////// BOOKINGS /////////////////
	
	"Opportunity.booking.poDate" : {
		path : "$.poDate",
		type : "date",
		linkPath : "booking",
		crmName: "Opportunity.new_ssibookingdate"
	},
	"Opportunity.booking.soDate" : {
		path : "$.soDate",
		type : "date",
		linkPath : "booking",
		crmName: "Opportunity.new_clientbookingdate"
	},
	"Opportunity.booking.poNumber" : {
		path : "$.poNumber",
		type : "string",
		linkPath : "booking",
		crmName: "Opportunity.new_newponumber"
	},
	"Opportunity.booking.soNumber" : {
		path : "$.soNumber",
		type : "string",
		linkPath : "booking",
		crmName: "Opportunity.new_newsonumber"
	},
	"Opportunity.booking.amount" : {
		path : "$.amount.amount",
		type : "number",
		linkPath : "booking",
		crmName: "Opportunity.new_localtransactionamount"
	},	
	"Opportunity.booking.amount.code" : {
		path : "$.amount.code.name",
		type : "string",
		linkPath : "booking",
		crmName: "Opportunity.new_localtransactioncurrencyname"
	},
	"Opportunity.booking.soAmount" : {
		path : "$.soAmount.amount",
		type : "number",
		linkPath : "booking",
		crmName: "Opportunity.new_localtransactionamount"
	},	
	"Opportunity.booking.soAmount.code" : {
		path : "$.soAmount.code.name",
		type : "string",
		linkPath : "booking",
		crmName: "Opportunity.new_localtransactioncurrencyname"
	},
	"Opportunity.booking.poAmount" : {
		path : "$.poAmount.amount",
		type : "number",
		linkPath : "booking",
		crmName: "Opportunity.new_localtransactionamount"
	},	
	"Opportunity.booking.poAmount.code" : {
		path : "$.poAmount.code.name",
		type : "string",
		linkPath : "booking",
		crmName: "Opportunity.new_localtransactioncurrencyname"
	},		
	//// QUOTE /////
	
	"Opportunity.primaryQuote.displayName" : {
		path: "$.displayName",
		type: "string",
		linkPath : "primaryQuote",
		crmName: "Quote.new_ssiquotenumber"
	},

	"Opportunity.primaryQuote.externalIds[crm].id" : {
		path: "$.externalIds[?(/crm/.test(@.schemeId.name))].id",
		type: "string",
		linkPath : "primaryQuote",		
		crmName: "Quote.new_quoterecordid"
	},

	
	"Opportunity.primaryQuote.extensions.master.earliestNewStartDate" : {
		path : "$.extensions.master.earliestNewStartDate.value",
		type: "date",
		linkPath : "primaryQuote",
		crmName: "Quote.new_earliestnewstartdate"
	},
	"Opportunity.primaryQuote.extensions.master.latestNewEndDate" : {
		path : "$.extensions.master.latestNewEndDate.value",
		type: "date",
		linkPath : "primaryQuote",
		crmName: "Quote.new_latestnewenddate"
	},
	"Opportunity.primaryQuote.amount" : {
		path : "$.amount.amount",
		type : "number",
		linkPath : "primaryQuote",
		crmName: "Quote.new_localtransactionamount"
	},	
	"Opportunity.primaryQuote.amount.code" : {
		path : "$.amount.code.name",
		type : "string",
		linkPath : "primaryQuote",
		crmName: "Quote.new_localtransactioncurrencyname"
	},	
	
	"Opportunity.primaryQuote.externalIds[crm_ownerid].id" : {
		path : "$.externalIds[?(/crm_ownerid/.test(@.schemeId.name))].id",
		type : "string",
		linkPath : "primaryQuote",
		crmName: "Quote.owneridname"
	},
	
	//// CUSTOMER ////
	"Opportunity.customer.displayName" : {
		path : "$.relationships[?(@.relation.name === \"customer\")].target.displayName",
		type : "string",
		crmName: "Company.name"
	}, 
	// "Opportunity.customer.extensions.tenant.migration_crmid" : {
	// 	path : "$.extensions.tenant.migration_crmid.value",
	// 	type : "string",
	// 	linkPath : "customer",
	// 	crmName: "Company.accountid | Opportunity.customerid"
	// },
	"Opportunity.customer.externalIds[crm].id" : {
		path : "$.externalIds[?(@.schemeId.name === \"crm\")].id",
		type : "string",
		linkPath : "customer",
		// targetType : "core.contacts",
		crmName: "Company.accountid"
	},	
	
	"Opportunity.customer.externalIds[crm_clientcompanyid].id" : {
		path : "$.externalIds[?(@.schemeId.name === \"crm_clientcompanyid\")].id",
		type : "string",
		linkPath : "customer",
		// targetType : "core.contacts",
		crmName: "Company.new_clientcompanyid"
	},

	"Opportunity.customer.industry" : {
		path : "$.industry",
		type : "string",
		linkPath : "customer",
		crmName: "Asset.new_description"
	},
	
	
	
	//// CUSTOMER PRIMARY CONTACT ////
	
	"Opportunity.customer.primaryContact.displayName" : {
		path : "$.displayName",
		type : "string",
		linkPath : "customer",
		nestedlinkPath : "primaryContact",
		// targetType : "core.contacts",
		crmName: "Contact.fullname"
	},	
	"Opportunity.customer.primaryContact.externalIds[crm].id" : {
		path : "$.externalIds[?(@.schemeId.name === \"crm\")].id",
		type : "string",
		linkPath : "customer",
		nestedlinkPath : "primaryContact",
		// targetType : "core.contacts",
		crmName: "Contact.contactid"
	},
	"Opportunity.customer.primaryContact.externalIds[crm_clientcompanyid].id" : {
		path : "$.externalIds[?(@.schemeId.name === \"crm\")].id",
		type : "string",
		linkPath : "customer",
		nestedlinkPath : "primaryContact",
		// targetType : "core.contacts",
		crmName: "Company.new_contactid"
	},
	
	"Opportunity.customer.primaryContact.firstName" : {
		path : "$.firstName",
		type : "string",
		linkPath : "customer",
		// targetType : "core.contacts",		
		nestedlinkPath : "primaryContact",
		crmName: "Contact.firstname"
	},
	"Opportunity.customer.primaryContact.lastName" : {
		path : "$.lastName",
		type : "string",
		linkPath : "customer",
		// targetType : "core.contacts",
		nestedlinkPath : "primaryContact",
		crmName: "Contact.lastname"
	},
	"Opportunity.customer.primaryContact.emailAddresses[primary].address" : {
		path : "$.emailAddresses[?(@.emailType.name === \"primary\")].address",
		type : "string",
		linkPath : "customer",
		// targetType : "core.contacts",
		nestedlinkPath : "primaryContact",
		crmName: "Contact.emailaddress1"		
	}, 
	"Opportunity.customer.primaryContact.contactNumbers[business].tNumber" : {
		path : "$.contactNumbers[?(@.telecomType.name === \"business\")].tNumber",
		type : "string",
		linkPath : "customer",
		// targetType : "core.contacts",
		nestedlinkPath : "primaryContact",
		crmName: "Contact.telephone1"				
	},	
	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: ""
	}
};
