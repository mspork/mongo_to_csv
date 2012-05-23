var map = function () {
    emit("", {amount:this.amount.amount});
}

var reduce = function(key, values) {
	var i, sum = 0;
	for (i in values) {
		sum += values[i].amount;
	}
	return sum;
}

res = db.app.assets.mapReduce(map, reduce, {out: { reduce : "myoutput" }});



var sum = 0;
db.myoutput.find().forEach( function(i) { sum += i.value.amount } )

var csv = "";
csvout = function(i) {
	csv += i.
}

db.myoutput.find().forEach( function(i) { print(i.value.amount) } )


db.app.assets.find().forEach( function(i) { print(i.externalIds[0].id.substring(21,25) + "," + i.extensions.master.contractNumber.value + "," + i.amount.amount) + "\n" } )

db.app.assets.find()[1].extensions.master.contractNumber.value





