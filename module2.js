//*************Varuables and Strings************** *//

var namyName = "Paul"; //this is a javascript variable
/* if you declare a variable with no value it will be undefined, if you do an operation to an undefined variable it will return NaN = not a number*/

let dogsName = "Max"; // a let variable can only be declared once unlike usine var, best common pratice to use let in javascript

const catsName =
	"Maisy"; /* using const has the same impact as let but it can no longer be charged again, it will retain "Maisy" forver unless const is changed, 
This means they are unmutable , can't be changed. Common practice is to also name any const variables in all capitals const MYVAR */

myVar = 10;
myVar++; // ++ will add 1 to the original value of myVar, same with -- it will takeaway 1

// adding quotes into a string you need to escape the quotes do the following
let escapeQuotes = 'To add an escape use "these quotes will be escaped" ';

// \n = new line \t = tab , use \\ to actually add a backslash

//When concatenating strings that include variables make sure to add 2 * + before and after if there is a sentence after the variable
const addingStrings = "My name is" + myVar + "Hello";

//You can use the .length propertly to get the character count
catsName.length; //this would return 5 but this also includes any spaces //

//*************Accessing Array Data************** *//

//using bracket notation you can find the first value of a string or number, remember everything starts at 0
catsName[0]; // This would return M in Maisy //

//Strings in javascript are immutable you can only reassign the variable to a new value

//using negative values in javascropt won't return the last letter of a string, have to use the following format using the string property
catsName[catsName.lenght - 1]; //this will return y in Maisy //

//*************ARRAYS and Array manipulation********************/

//Arrays make sure to use [] you can also used nested arrays which is an array within an array
catsName[("maisy", 10)]; //or a nested array//
catsName[(["masiy", 10], ["Max", 2])]; // in a nested array you can acccess the nested portions by the same numbersing system, first nested array is 0 which gives access to maisy

//.push() method is used to add on to an array simliar to python apend method to use this use the following syntax, push adds to the end of  an array
catsName[(["masiy", 10], ["Max", 2])];
catsName.push(["jasmin", 4]); // this will end up looking like the following
catsName[(["masiy", 10], ["Max", 2], ["jasmin", 4])];

//pop function will strip off the last array value and you can add it into a new varaible, it always removes the last element in an array
catsName[(["masiy", 10], ["Max", 2])];
catsName.pop(); // this would take max, 2 off the array

//.shift() does the same thing as pop but it just removes the first element not last in an array
catsName[(["masiy", 10], ["Max", 2])];
catsName.shift(); // this would take masiy, 10 off the array

//unshift() method is used to add on to an array simliar to python apend method to use this use the following syntax, unshift will add to the start of an array/ UNSHIFT ONLY MODIFIES THE ORIGINAL VARIABLE
catsName[(["masiy", 10], ["Max", 2])];
catsName.unshift(["jasmin", 4]); // this will end up looking like the following
catsName[(["jasmin", 4], ["masiy", 10], ["Max", 2])];

//**************FUNCTIONS********************/
// Function syncax is below
function functionNamehere() {
	console.log("Hello world"); }
//to call a function just the fucnitionname(), funcitions contain arguements these are what is put inside the curly brackets eg fucntionName(param1, param2)
function funcNamehere(param1, param2, param3) {;} // this function has 3 parameters. Replace the parmeters with strings, numbers whaever you want and when it is called it will display these

//It's possible to have local and global variables that have the same name, local variables take precedence over glabal. Probably best to keep the naming seperate


//*************BOOLEANS & IF STATEMENTS****************//
//if statements syntax below
if (condition is true) {
	statement in here is executed;
}

// if statement syntax inside a function, no else or elseif required for simple if statement
function TrueOrFalse (IsThisTrue) {
	if (IsThisTrue) {
		return "This is true";
	}
	return "This is false";
}

//In javascript when using comparisons operators if a string is used with a num it will convert to a number or vise versa if required, this is called type coercion
// IF you don't want the above you can use the "Strict" operator which is 3 * equals symbols ===

//in JS uou can check the type of variable or value with "Typoeof" operator
// != this means NOT equal too === strict equal to  , == equal to that has type conversion !== strict NOT equal too
// > greater than left number is greater than the right, >= greater than or equal too symbol, will return true if number is bigger or the same
// < less than operater same as the above just less than , can also do <= same number or less will give true
// && operator can be used to compare more than one thing, syntax below
if (num > 10 && num < 12) {
	return "Yes";
}
// || this is the OR operator, this will return true if either statements come back as true
// Using IF else statements, syntax below

if (num > 5) {
	return "num is more than 5";
} else {
	return "num is less than 5"
}
// Remeber the last condition does not need to be an if statement, you can just add a return or print 
//Golf par if else statement challenge, details below for refernce
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  
  } else if (strokes == par-2 || strokes == par -3) {
    return names[1];
  
  } else if (strokes == par -1) {
    return names[2];
  
  } else if (strokes == par) {
    return names[3];
  
  } else if (strokes == par+1) {
    return names[4];
  
  } else if (strokes == par+2) 
    return names[5];

  { if (strokes > par+2)
    return names[6];
  }
}
golfScore(5, 4);

//*************SWITCH STATEMENT*****************//
// Switch statements compares your value aganist what the user has entered, if the user enters your value the code is then executed, if the user
// does not enter your value the code will execute the option that does not equal any of the values you have selected, the values are treated with a === strict quality
//Switch example below

function caseInSwitch(val) {
  let answer = '';
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
        answer = 'beta';
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;   

    default:
        answer = "default text"   
        break;
}
  // Only change code above this line
  return answer;
}

// You can use a default statement to fall back on it none of the cases are met, added to code above
// Can have multiple cases under that all have the same answer if required

//****COMPLEX BOOLEEN IF STATEMENTS *//
// The below
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
//Can be turned into this
function isEqual(a, b) {
  return a < b;
}
// The above will give a true or false answer which is not requiring a full if else statement

//**************OBJECTS*******************//
//Objects are simliar to have CSS is done in terms of syntax, you will add propertires and it will be simliar to key/value pairs eg see below
const myDog = {
  // Only change code below this line
  "name": "Max",
  "legs": 4,
  "tails": 1,
  "friends": ["Jasmin", "Paul"]
};
//Javascript will automatically typecase any non strings as strings this is something to remember
//You can access object properties using dot notation, eg below
const newVar = myDog.name;
// Can also access these via bracket notiation
const newVartwp = myDog[legs]

