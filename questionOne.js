/*
Question 1
The following questions are related to the set below.
*/
const elements = [
	{
		name: "John",
		count: 5
	},
	{
		name: "Sarra",
		count: 13
	},
	{
		name: "Kevin",
		count: 38
	},
	{
		name: "Shaun",
		count: 5
	},
	{
		name: "Gerald",
		count: 31
	},
	{
		name: "Amos",
		count: 27
	}
];

/* new object for testing */

// testing 1.4

let newObj = {
	name: "Bob",
	count: 7
};

// testing 1.5

let newObj2 = {
	name: "Steve",
	count: 12
};

/*
1.1 Write a function that returns the sum of the values 
of the count key in the elements set.
*/

function countSum(arr) {
	let sumOfCount = arr.reduce((prev, curr) => prev + curr.count, 0);
	return sumOfCount;
}

/*
1.2 Write a function that returns the elements set with 
a new key(named order) added to each object indicating 
their order when sorted by the count key.
*/

function arrSort(arr) {
	arr.sort((a, b) => a.count - b.count);
	arr.forEach((arrayItem, index) => {
		arrayItem.order = index + 1;
	});
	return arr;
}

/*
1.3 Write a function that will receive an object with 
name and count key and add this object to the elements 
set.
*/

function addElement(newElement) {
	if (newElement.name && newElement.count) {
		elements.push(newElement);
		return elements;
	} else {
		throw new Error('Element does not contain "name" or "count" key');
	}
}

/*
1.4 Pass the elements set to your functions written in 
1.1 and 1.2 and record the resulting elements object here.
*/

console.log(countSum(elements));
console.log(arrSort(elements));
console.log(addElement(newObj));

/*
1.1) 119

1.2) [ { name: 'John', count: 5, order: 1 },
  { name: 'Shaun', count: 5, order: 2 },
  { name: 'Sarra', count: 13, order: 3 },
  { name: 'Amos', count: 27, order: 4 },
  { name: 'Gerald', count: 31, order: 5 },
  { name: 'Kevin', count: 38, order: 6 } ]

1.3) [ { name: 'John', count: 5, order: 1 },
  { name: 'Shaun', count: 5, order: 2 },
  { name: 'Sarra', count: 13, order: 3 },
  { name: 'Amos', count: 27, order: 4 },
  { name: 'Gerald', count: 31, order: 5 },
  { name: 'Kevin', count: 38, order: 6 },
  { name: 'Bob', count: 7 } ]
*/

/*
1.5 Rewrite your functions for 1.2 and 1.3 to be able to 
use method chaining on the elements object, then write a 
line of code that uses method chaining to achieve the 
same results as 1.4
*/

class Chainable {
	constructor(elements) {
		this.elements = elements;
	}

	sortOrder() {
		this.elements
			.sort((a, b) => a.count - b.count)
			.map((el, index) => {
				el.order = index + 1;
			});
		return this;
	}

	addElem(newElem) {
		if (newElem.name && newElem.count) {
			this.elements.push(newElem);
			return this;
		}
		throw new Error('New element is missing either the "name" or "count" key');
	}
}

const chain = new Chainable(elements);
console.log(chain.sortOrder().addElem(newObj2).elements);

/*
[ { name: 'John', count: 5, order: 1 },
  { name: 'Shaun', count: 5, order: 2 },
  { name: 'Bob', count: 7, order: 3 },
  { name: 'Sarra', count: 13, order: 4 },
  { name: 'Amos', count: 27, order: 5 },
  { name: 'Gerald', count: 31, order: 6 },
  { name: 'Kevin', count: 38, order: 7 },
  { name: 'Bob', count: 7 } ]
*/
