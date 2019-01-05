/* Day #1 100DaysOfCode - TUESDAY 1 JANUARY 2019 */

//Javascript Comment

/*Javascript Multi-line comment
 */

//Basic Javascript:Declare Javascript Variables
var myName;

//Basic Javascript:Storing Values wuth the Assignment Operator
var a;
var b = 2;

var a = 7;
var b = a;

//Basic Javascript:Initializing Variables with the Assignment Operator
var a = 9;

//Basic Javascript:Understanding Uninitialized Variables
var a = 5;
var b = 10;
var c = "I am a";

//Basic Javascript:Understanding Case Sensitivity in Variables
//camelCase
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//Basic Javascript:Add Two Numbers with Javascript
var sum = 10 + 10;

//Basic Javascript:Subtract One Number from Another with JavaScript
var difference = 45 - 33;

//Basic Javascript:Multiply Two Numbers with Javascript
var product = 8 * 10;

//Basic Javascript:Divide One Number by Anothe with Javascript
var division = 66 / 33;

//Basic Javascript:Increment a Number with Javascript
var inc = 3;
inc++;

//Basic Javascript:Decrement a Number with Javascript
var dec = 4;
dec--;

//Basic Javascript:Create Decimal Numbers with Javascript
var myDecimal = 8.5;

//Basic Javascript:Multiply Two Decimals with Javascript
var product = 2.0 * 2.5;

//Basic Javascript:Divide One Decimal by Another with Javascript
var quotient = 4.4 / 2.0;

//Basic Javascript:Finding a Remainder in Javascript
var remainder = 11 % 3;

//Basic Javascript:Compound Assignment With Augmented Addition
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

//Basic Javascript:Compound Assignment With Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

//Basic Javascript:Compound Assignment With Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

//Basic Javascript:Compound Assignment With Augmented Division
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

/* Day #2 100DaysOfCode */

//Basic Javascript:Declare String Variables
var myFirstName = "Mahamat";
var myLastName = "Legrand";

//Basic Javascript:Escaping Literal Quotes in Strings
var myStr = 'I am a "double quoted" string inside "double quotes".';

//Basic Javascript:Quoting Strings with Singles Quotes
var myStr = '<a href="http://www.example.com" target =_blank>Link</a>';

//Basic Javascript:Escape Sequences in Strings
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

//Basic Javascript:Concatenating Strings with Plus Operator
var myStr = "This is the start. " + "This is the end.";

//Basic Javascript:Concatenating Strings with Plus Equals Operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//Basic Javascript:Constructing Strings with Variables
var myName = "Mahamat";
var myStr = "My name is " + myName + " and I am well!";

//Basic Javascript:Appending Variables to Strings
var someAdjective = "Awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Basic Javascript:Find the Length of a String
var lastNameLength = 0;
var lastName = "Lovelace";

lastName.length;
lastNameLength = lastName.length;

/* Day #3 100DaysOfCode */

//Basic Javascript:Use Bracket Notation to Find the character in a string
var firstLetterOfLastName = "";
var lastName = "Lovelace";
lastName[0];
firstLetterOfLastName = lastName[0];

//Basic Javascript:Understand String Immutability
var myStr = "Jello World";
myStr = "Hello World";

//Basic Javascript:Use Bracket Notation to Find the Nth Character in a string
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

//Basic Javascript:Use Bracket Notation to Find the Last Character in a string
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

//Basic Javascript:Use Bracket Notation to Find the Nth-to-Last Character in a string
var lastName = "Lovelace";
var secondToLastOfLastName = lastName[lastNameLength - 2];

//Basic Javascript:Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result =
    "In Australia, " +
    myAdjective +
    " " +
    myNoun +
    " usually " +
    myVerb +
    " " +
    myAdverb;
  // console.log(result);
  return result;
}
wordBlanks("dog", "big", "ran", "quickly");

//Basic Javascript:Store Multiple Values in One Variable using JavaScript Arrays
var myArray = ["Mahamat", 21];

//Basic Javascript:Nest one Array within Another Array - Multi-dimensional Array.
var myArray = [["Mahamat", 21], ["Legrand", 21]];

//Basic Javascript:Access Array Data with Indexes
var myArray = [50, 60, 70];
var myData = myArray[0];

//Basic Javascript:Modify Array Data With Indexes
var myArray = [18, 64, 99];
myArray[0] = 45;

/* Day #4 100DaysOfCode */

//Basic Javascript:Access Multi-Dimensional Arrays With Indexes
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[2][1];

//Basic Javascript:Manipulate Arrays With push()
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

//Basic Javascript:Manipulate Arrays With pop()
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

//Basic Javascript:Manipulate Arrays With shift()
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

//Basic Javascript:Manipulate Arrays With unshift()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//Basic Javascript:Shopping List
var myList = [
  ["Javascript in depth", 2],
  ["CSS in depth", 5],
  ["Node js", 4],
  ["Laravel framework", 5],
  ["php for beginners", 15]
];

//Basic Javascript:Write Reusable Javascript with Functions
function reusableFunction() {
  console.log("Hi World");
}
//reusableFunction();

//Basic Javascript:Passing Values to Functions with Arguments
function functionWithArgs(a, b) {
  console.log(a + b);
}
//functionWithArgs(10, 5);

//Basic Javascript:Global Scope and Functions
var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}

//Basic Javascript:Local Scope and Functions
function myLocalScope() {
  var myVar = "use strict";
  console.log(myVar);
}
//myLocalScope();
//console.log(myVar);

//Basic Javascript:Global vs. Local Scope in Functions
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();

//Basic Javascript:Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}
//var answer = timesFive(5);

/* Day #5 100DaysOfCode */

//Basic Javascript:Understanding Undefined Value returned from a Function
var sum = 0;
function addFive() {
  sum += 5;
}

//Basic Javascript:Assignment with a Returned Value
processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

//Basic Javascript:Stand in Line
function nextInLine(arr, item) {
  var inArr = arr.push(item);
  var outArr = arr.shift(item);
  return outArr;
}
//var out = nextInLine([], 5);

//Basic Javascript:Understanding Boolean Values
function welcomeToBooleans() {
  return true;
}
//var result = welcomeToBooleans();

//Basic Javascript:Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
var res = trueOrFalse(false);

//Basic Javascript:Comparison with the Equality Operator(type Coercion)
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
var res = testEqual(12);

//Basic Javascript:Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
var res = testStrict(7);

//Basic Javascript:Practice comparing different values
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
var res = compareEquality(10, 10);
console.log(res);

/* Day #6 100DaysOfCode */

//Basic Javascript:Comparison with the Inequality Operator
