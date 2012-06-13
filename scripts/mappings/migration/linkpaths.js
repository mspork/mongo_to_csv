var mapping = {

	"Name" : {
		path: "$.displayName",
		type: "string",
		crmName: "Opportunity.name"
	},
	
	"offer.predecessor.displayName" : {
		path: "$.displayName",
		type: "string",
		linkPath : "offer.predecessor",
		crmName: "Asset.name"
	},
	
	"MongoID" : {
		path : "$._id",
		eval : "toString()",
		crmName: "MongoID"
	}
	
};