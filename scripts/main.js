//---------1
var total = 0;

function totalPrice(currentValue) {

	total += currentValue.price;
}
items.forEach(totalPrice)
console.log("1. The average price is $" + (Math.round((total/items.length)/.01)*.01) + ".");


//---------2
function itemsInRange(currentValue) {
	return currentValue.price > 14 && currentValue.price < 18;
}

console.log("2. " + items.filter(itemsInRange));


//---------3
function findGBP(currentValue) {
	if (currentValue.currency_code === "GBP") {
		return true;
	} else {
		return false;
	}
}

var GBP = items.filter(findGBP);
console.log("3. " + GBP[0].title + " costs £" + GBP[0].price + ".");

//---------4
function getWood (currentValue) {
	if (currentValue.materials.includes('wood')) {
	console.log('4. ' +currentValue.title + ' is made of wood.');
}
}
items.forEach(getWood);

//---------5

function moreThanEight (currentValue) {
	if (currentValue.materials.length > 8) {
	console.log("5. " +currentValue.title+ " has " + currentValue.materials.length + " materials: \n" + currentValue.materials.join('\n'));
}
}
items.forEach(moreThanEight);

//---------6

function whoMade(currentValue) {
	if (currentValue.who_made === 'i_did') {
		return true;
	} else {
		return false;
	}
}

var totalMade = items.filter(whoMade);

console.log("6. " +totalMade.length + " were made by their sellers.");



