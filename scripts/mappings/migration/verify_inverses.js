var mapping = {

	"Name" : {
		path: "$.displayName",
		type: "string",
		crmName: "Opportunity.name"
	},
	
	/// Quotes ////
	"Quote Mongo ID" : {
		path : "$.relationships[?(@.relation.name === \"primaryQuote\")].target.key",
		type : "string",
		crmName: "Opportunity.primaryQuote"
	},
	
	"Inverse Opportunity Mongo ID" : {
		path : "$.inverseRelationships[?(@.relation.name === \"primaryQuotedOpportunity\")].target.key",
		type : "string",
		// inverseFor : "primaryQuote",
		inverseName : "primaryQuotedOpportunity",
		crmName: "inverse for primary quote to opportunity "
	},
	
	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: ""
	}
	
};