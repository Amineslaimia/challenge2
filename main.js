// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/
//this function takes the parameters and returns them as the object computer's keys

function makeComputer(type, color, weight) {
  // TODO: Your code here
  var computer={
  	tyrpe:type,
  	color:color,
  	weight:weight
  };

  	return computer;
}

// Write a function displayComputer that can be used to display one computer.
//this function takes the object computer and returns it as a string with the values of its keys 

function displayComputer(computer) {
  // TODO: Your code here
  return 'this computer is '+computer.type+' of color '+computer.color+' and weighs '+computer.weight;
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/
//takes every  element of the array and executes the function to uppercase on it using map to return an array of the result 

function uppercaseAll(arrayOfStrings) {
  // TODO: your code here
  return map(arrayOfStrings,function(element){
  	return element.toUpperCase();
  })
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];
// this function takes an array of objects and filters it useing filter with the predecit of population greater than 500 millions
function highestPopulation(arrayOfObjects) {
  // TODO: your code here
  return filter (arrayOfObjects,function(obj,key){
  			return obj.population> 500000000
  })
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/
//here i used map because i need an array as a return and to execute a function on every elements of the array in the parameters
function halveAll(numbers) {
  // your code is here
  return map (numbers,function(number,index){
  	return number/2;
  });
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/
// here map is used to return an array and the values of the object entered in the parameters as its values 
function values(obj) {
  // TODO: your code here
  return map( obj,function(obj,key){
  	return obj;
  })
}

//Good Luck :))
