const countEl1 = document.getElementById('count1-el');
const countEl2 = document.getElementById('count2-el');

var count1 = 0;
var count2 = 0;

function updateCount1() {
	countEl1.textContent = count1;
}

function incrementByOne() {
	count1++;
	updateCount1();
}

function incrementByTwo() {
	count1 += 2;
	updateCount1();
}

function incrementByThree() {
	count1 += 3;
	updateCount1();
}

// GUEST

function updateCount2() {
	countEl2.textContent = count2;
}

function addOne() {
	count2++;
	updateCount2();
}

function addTwo() {
	count2 += 2;
	updateCount2();
}

function addThree() {
	count2 += 3;
	updateCount2();
}

// RESET FEATURE

function reset1() {
	count1 = 0;
	updateCount1();
}

function reset2() {
	count2 = 0;
	updateCount2();
}
