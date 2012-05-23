var csv = 
		"LoadID," +
		"LoadID:Persons:Contact," +	
		"Channel Tier," +	
		"Name," +	
		"OnlineAddresses:PrimaryEmail," +	
		"ContactNumbers:Fax," +	
		"ContactNumbers:Business," +	
		"LoadID:Organizations:Parent," +	
		"ContactNumbers:Secondary," +	
		"OnlineAddresses:CorporateWebsite," +	
		"Address1@Addresses:Business," +	
		"City@Addresses:Business," +	
		"State@Addresses:Business," +	
		"Country@Addresses:Business," +	
		"Zip@Addresses:Business," +	
		"Address2@Addresses:Business," +	
		"Address1@Addresses:Shipping," +	
		"City@Addresses:Shipping," +	
		"Country@Addresses:Shipping," +	
		"State@Addresses:Shipping," +	
		"Zip@Addresses:Shipping," +	
		"Address2@Addresses:Shipping," +
		"\n";

var getReleationshipByName = function(rels, name) {
	for(var i=0; i < rels.length; i++) {
		var rel = rels[i];
		if (rel.relation.name == name) {
			return rel;
		}
	}
	return null;
}

var getRelationKey = function(rels, name){
	var relation = getReleationshipByName(rels, name);
	if(relation){
		return relation.target.key;
	} else {
		return "";
	}	
}

var getState = function(i){
	if(i.addresses[0]){
		if(i.addresses[0].state){
			return i.addresses[0].state;			
		}
	}
	return "";
}
var getCountry = function(i){
	if(i.addresses[0]){
		if(i.addresses[0].country){
			return i.addresses[0].country;			
		}
	}
	return "";
}




db.core.contacts.find({ "type" : "core.contact/organization" }).forEach( function(i) { 
		csv +=

		// LoadID
		i._id.toString() +
		
		// LoadID:Persons:Contact	
		"," +

		// Channel Tier	
		"," +

		// Name	
		",\"" + i.name + "\"" +
		
		// OnlineAddresses:PrimaryEmail	
		"," +

		// ContactNumbers:Fax	
		"," +

		// ContactNumbers:Business	
		"," +

		// LoadID:Organizations:Parent	
		"," +

		// ContactNumbers:Secondary	
		"," +

		// OnlineAddresses:CorporateWebsite	
		"," +

		// Address1@Addresses:Business	
		",\" \"" +
		
		// City@Addresses:Business	
		"," +
		
		// State@Addresses:Business	
		",\"" + getState(i) + "\"" +
		
		// Country@Addresses:Business	
		",\"" + getCountry(i) + "\"" +

		// Zip@Addresses:Business	
		"," +

		// Address2@Addresses:Business	
		"," +

		// Address1@Addresses:Shipping	
		"," +

		// City@Addresses:Shipping	
		"," +

		// Country@Addresses:Shipping	
		"," +

		// State@Addresses:Shipping	
		"," +

		// Zip@Addresses:Shipping	
		"," +

		// Address2@Addresses:Shipping
		"," +
		
		"\n";
	} );

print(csv);
