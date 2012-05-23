var mapping = {
	
	"Row ID" : {
		path: "$.externalIds[?(@.schemeId.name =~ /Refine/)].id",
		script: "value.split(\"_\")[1].substring(3,8)",
		type: "number"
	},
	"Opportunity ID" : {
		path: "$.extensions.tenant.migration_crmid.value",
		type: "string",
		crmName: "Opportunity.opportunityid"
	},
	"Contract#" : {
		path: "$.extensions.master.contractNumber.value",
		type: "string",
		crmName: "Asset.new_existingcontractnumber"
	},
	"Name" : {
		path: "$.displayName",
		type: "string",
		crmName: "Opportunity.name"
	}, 
	"Order#" : {
		path: "$.extensions.tenant.salesOrder.value",
		type: "string",
		crmName: "NA"
	}, 
	"Target Date" : {
		path : "$.targetDate",
		type : "date",
		crmName: "Opportunity.new_earliestexistingenddate"
	}, 
	"Resolution Date" : {
		path : "$.resolutionDate ",
		type : "date",
		crmName: "Opportunity.new_resolutiondate"
	}, 
	"Batch Quarter" : {
		path: "$.extensions.master.batchQuarter.value",
		type: "string",
		crmName: "Asset.new_clientbatchquartername"
	},
	"Client Region" : {
		path: "$.extensions.master.clientRegion.value",
		type: "string",
		crmName: "Opportunity.new_clientregionname"
	},
	"Client Territory" : {
		path: "$.extensions.master.clientTerritory.value",
		type: "string",
		crmName: "Opportunity.new_clientterritoryname"
	},
	"Client Theatre" : {
		path: "$.extensions.master.clientTheatre.value",
		type: "string",
		crmName: "Opportunity.new_clienttheatrename"
	},
	"Country" : {
		path: "$.extensions.master.country.value",
		type: "string",
		crmName: "Opportunity.new_countryname"
	},
	"Business Line" : {
		path: "$.extensions.master.businessLine.value",
		type: "string",
		crmName: "Opportunity.new_ssibusinesslinename"
	},
	"Earliest New Start Date" : {
		path: "$.extensions.master.earliestNewStartDate.value",
		type: "date",
		crmName: "Opportunity.new_earliestnewstartdate"
	},
	"Latest New End Date" : {
		path: "$.extensions.master.latestNewEndDate.value",
		type: "date",
		crmName: "Opportunity.new_latestnewenddate"
	},
	"Target Date" : {
		path: "$.targetDate",
		type: "date",
		crmName: "Opportunity.new_earliestexistingenddate"
	},
	"Renewal Amount" : {
		path : "$.previousAmount.amount",
		type : "number",
		crmName: "Opportunity.new_localrenewalamount"
	}, 
	"Renewal Currency" : {
		path : "$.previousAmount.code.name",
		type : "string",
		crmName: "Opportunity.new_localrenewalcurrencyname"
	},
	"Target Amount" : {
		path : "$.targetAmount.amount",
		type : "number",
		crmName: "Opportunity.new_localrenewalamount"
	}, 
	"Target Currency" : {
		path : "$.targetAmount.code.name",
		type : "string",
		crmName: "Opportunity.new_localrenewalcurrencyname"
	},
	"Transaction Amount" : {
		path : "$.amount.amount",
		type : "number",
		crmName: "Opportunity.new_localtransactionamount"
	}, 
	"Transaction Amount Currency" : {
		path : "$.amount.code.name",
		type : "string",
		crmName: "Opportunity.new_localtransactioncurrencyname"
	},
	"Sales Stage" : {
		path : "$.flows.salesStages.state.displayName",
		type : "string",
		crmName: "Opportunity.new_ssisalesstagename"
	}, 
	"Commit Level" : {
		path : "$.commitLevel.name",
		type : "string",
		crmName: "Opportunity.new_commitlevelname"
	}, 
	"Customer" : {
		path : "$.relationships[?(@.relation.name === \"salesRep\")].target.displayName",
		type : "string",
		crmName: "Opportunity.owneridname"
	},
	// "SSI Booking Date" : {
	// 	path : "$.poDate",
	// 	type : "date",
	// 	link : "booking",
	// 	targetType : "app.bookings",
	// 	crmName: "Opportunity.new_ssibookingdate"
	// },
	"Client Booking Date" : {
		path : "$.soDate",
		type : "date",
		link : "booking",
		targetType : "app.bookings",
		crmName: "Opportunity.new_clientbookingdate"
	},
	"PO Number" : {
		path : "$.poNumber",
		type : "string",
		link : "booking",
		targetType : "app.bookings",
		crmName: "Opportunity.new_newponumber"
	},
	"Customer" : {
		path : "$.relationships[?(@.relation.name === \"customer\")].target.displayName",
		type : "string",
		crmName: "Company.name"
	}, 
	"Customer CRM ID" : {
		path : "$.extensions.tenant.migration_crmid.value",
		type : "string",
		link : "customer",
		targetType : "core.contacts",
		crmName: "Company.accountid"
	},
	"Customer Client ID" : {
		path : "$.externalIds[?(@.schemeId.name === \"crm\")].id",
		type : "string",
		link : "customer",
		targetType : "core.contacts",
		crmName: "Company.new_clientcompanyid"
	},
	"Customer Contact First Name" : {
		path : "$.firstName",
		type : "string",
		link : "customer",
		targetType : "core.contacts",		
		nestedLink : "primaryContact",
		crmName: "Contact.firstname"
	},
	"Customer Contact Last Name" : {
		path : "$.lastName",
		type : "string",
		link : "customer",
		targetType : "core.contacts",
		nestedLink : "primaryContact",
		crmName: "Contact.lastname"
	},
	"Customer Contact Email" : {
		path : "$.emailAddresses[?(@.emailType.name === \"business\")].address",
		type : "string",
		link : "customer",
		targetType : "core.contacts",
		nestedLink : "primaryContact",
		crmName: "Contact.emailaddress1"		
	}, 
	"Customer Contact Phone" : {
		path : "$.contactNumbers[?(@.telecomType.name === \"primary\")].tNumber",
		type : "string",
		link : "customer",
		targetType : "core.contacts",
		nestedLink : "primaryContact",
		crmName: "Contact.telephone1"				
	},	
	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: ""
	}
};
