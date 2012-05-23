var csv =
		"LoadID," +	
		"FirstName," +	
		"LastName," +
		"JobTitle," +
		"Role," +	
		"LoadID:Organizations:Company," +
		"Department," +	
		"ContactNumbers:Business," +
		"ContactNumbers:Home," +
		"ContactNumbers:Mobile," +	
		"ContactNumbers:Fax," +
		"OnlineAddresses:PrimaryEmail," +	
		"LoadID:Memberships:Membership," +
		"UIProfile," +	
		"Address1@Addresses:Office," +
		"Address2@Addresses:Office," +
		"City@Addresses:Office," +
		"State@Addresses:Office," +
		"Country@Addresses:Office," +
		"Zip@Addresses:Office," +
		"LoadID:Persons:Manager," +
		"LoadID:Persons:Assistant" +
		"\n";




var getReleationshipByName = function(rels, name) {
    for (var i = 0; i < rels.length; i++) {
        var rel = rels[i];
        if (rel.relation.name == name) {
            return rel;
        }
    }
    return null;
};

var getRelationKey = function(rels, name) {
    var relation = getReleationshipByName(rels, name);
    if (relation) {
        return relation.target.key;
    } else {
        return "";
    }
};

var getPhoneNumber = function(i) {
    if (i.contactNumbers[0]) {
        if (i.contactNumbers[0].tNumber) {
            return i.contactNumbers[0].tNumber;
        }
    }
    return "";
};

var getEmail = function(i) {
    if (i.emailAddresses[0]) {
        if (i.emailAddresses[0].address) {
            return i.emailAddresses[0].address;
        }
    }
    return "";
};

var getFirstName = function(i) {
    if (i.firstName) {
        return i.firstName;
    }
    return "";
};

var getLastName = function(i) {
    if (i.lastName) {
        return i.lastName;
    }
    return "";
};


var getValue = function(i, property) {
    if (i[property]) {
        return i[property];
    }
    return "";
};


var getCompanyForCustomerContact = function(i) {
    var contactkey = i._id.toString();

    var query = {
        "relationships": {
            "$elemMatch": {
                "relation.name": "Customer",
                "relationships": {
                    "$elemMatch": {
                        "relation.name": "Primary Contact",
                        "target.key": contactkey
                    }
                }
            }
        }
    };

	var asset = db.app.assets.find(query)[0];
	if(asset){
		var customerkey = getRelationKey(asset.relationships, "Customer");
		return customerkey;		
	}
	return "";
};


var getCompanyForResellerContact = function(i) {
    var contactkey = i._id.toString();

    var query = {
        "relationships": {
            "$elemMatch": {
                "relation.name": "Incumbent Reseller",
                "relationships": {
                    "$elemMatch": {
                        "relation.name": "Primary Contact",
                        "target.key": contactkey
                    }
                }
            }
        }
    };

	var asset = db.app.assets.find(query)[0];
	if(asset){
		var key = getRelationKey(asset.relationships, "Incumbent Reseller");
		return key;		
	}
	return "";
};

var getCompanyForPerson = function(i) {
	var key = getCompanyForCustomerContact(i);
	if(key != ""){
		return key;
	} else {
		return getCompanyForResellerContact(i);
	}
};



db.core.contacts.find({ "type": "core.contact/person", "systemProperties.tenant": "guidance"})
	.forEach(function(i) {
		
		if(getValue(i, "membership") == ""){
		
	    csv +=
		// LoadID
	
	    i._id.toString() +
		// FirstName
	    ",\"" + getFirstName(i) + "\"" +
	
		// LastName
	    ",\"" + getLastName(i) + "\"" +
	
		// JobTitle
		"," +
		// Role
		"," +
		// LoadID:Organizations:Company
		",\"" + getCompanyForPerson(i) + "\"" +

		// Department	
		"," +

		// ContactNumbers:Business	
	    ",\"" + getPhoneNumber(i) + "\"" +

		// ContactNumbers:Home	
		"," +

		// ContactNumbers:Mobile	
		"," +

		// ContactNumbers:Fax	
		"," +

		// OnlineAddresses:PrimaryEmail	
	    ",\"" + getEmail(i) + "\"" +

		// LoadID:Memberships:Membership
		"," + getValue(i, "membership")  +
		// UIProfile	
		"," +

		// Address1@Addresses:Office	
		"," +

		// Address2@Addresses:Office	
		"," +

		// City@Addresses:Office	
		"," +

		// State@Addresses:Office	
		"," +

		// Country@Addresses:Office
		"," +

		// Zip@Addresses:Office	
		"," +

		// LoadID:Persons:Manager	
		"," +

		// LoadID:Persons:Assistant	
		"," +
		
	    "\n";
	
		} // end of if statement

});

print(csv);
