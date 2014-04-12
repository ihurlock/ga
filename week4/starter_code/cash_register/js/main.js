var d = document;
var entryField = d.getElementById('newEntry');
var total = 0;

d.getElementById('entry').onsubmit = addNewEntry;

function addNewEntry () {

	var entry = parseFloat(entryField.value)
	total += entry;
	console.log(total)

	var entryValue = convertCurrency(entryField.value);
	//console.log(entryValue);

	var entryRow = '<tr><td></td><td>' + entryValue + '</td></tr>';

//+= below adds in the new info rather than overriding
	d.getElementById('entries').innerHTML += entryRow;

// returning false prevents default behaviour of a form submission
	d.getElementById('total').innerHTML = convertCurrency(total);
	return false; 

}

function convertCurrency(entryValue){
	var currency = parseFloat(entryValue);
	currency = currency.toFixed(2);
	currency = '£' + currency;

	return currency;
}



// select the entry field - store it in a variable (going to manipulate it later)

// listen to submit of form

// fire a call to a function - add new entry

// define new entry function
// add a new row, innerHTML to insert new HTML inside the entry id 

// update total using sum 