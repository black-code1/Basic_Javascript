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
//console.log(res);

/* Day #6 100DaysOfCode */

//Basic Javascript:Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
var res = testNotEqual(10);

//Basic Javascript:Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
// res = testStrictNotEqual(10);

//Basic Javascript:Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
// res = testGreaterThan(10);

//Basic Javascript:Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}

//Basic Javascript:Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}

//Basic Javascript:Comparison with the Less Than Or Equal To Operator
function testLessThanOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}

//Basic Javascript:Comparison with the Logical And Operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

//Basic Javascript:Comparison with the Logical Or Operator
function testLogicalOr(val) {
  if (val > 20 || val < 10) {
    return "Outside";
  }
  return "Inside";
}

//Basic Javascript:Introducing Else Statements
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

/* Day #7 100DaysOfCode & 301DaysOfCode */

//Basic Javascript:Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller thna 5";
  } else {
    return "Between 5 and 10";
  }
}

//Basic Javascript:Logical Order in If Else Statements
function orderMyLogical(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

//Basic Javascript:Chaining If Else Statements
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }
}

//Basic Javascript:Golf Code
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } else {
    return "Change Me";
  }
}
// console.log(golfScore(4, 1));
// console.log(golfScore(4, 2));
// console.log(golfScore(5, 2));
// console.log(golfScore(4, 3));
// console.log(golfScore(4, 4));
// console.log(golfScore(1, 1));
// console.log(golfScore(5, 5));
// console.log(golfScore(4, 5));
// console.log(golfScore(4, 6));
// console.log(golfScore(4, 7));
// console.log(golfScore(5, 9));

/* Day #8 100DaysOfCode & 301DaysOfCode */

//Basic Javascript:Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

//Basic Javascript:Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}

//Basic Javascript:Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

//Basic Javascript:Replacing If Else Chains with Switch
function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}

//Basic Javascript:Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b;
}
//Basic Javascript:Return Early Pattern for Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

/* Day #9 100DaysOfCode & 301DaysOfCode  still unsolved Counting Cards*/

//Basic Javascript:Counting Cards
//Not solve
// var count = 0;
// function cc(card) {
//   if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
//     count++;
//     return count + " Bet";
//   } else if (card == 7 || card == 8 || card == 9) {
//     return count + " Bet";
//   } else if (
//     card == 10 ||
//     card == "J" ||
//     card == "Q" ||
//     card == "K" ||
//     card == "A"
//   ) {
//     count--;
//     return count + " Hold";
//   }
// }

/* Day #10 100DaysOfCode & 301DaysOfCode*/

//Basic Javascript:Counting Cards :) Finaly solved it
var count = 0;
var answer = "";
function cc(card) {
  switch (card) {
    case 2:
      count++;
      answer = count + " Bet";
      break;
    case 3:
      count++;
      answer = count + " Bet";
      break;
    case 4:
      count++;
      answer = count + " Bet";
      break;
    case 5:
      count++;
      answer = count + " Bet";
      break;
    case 6:
      count++;
      answer = count + " Bet";
      break;
    case 7:
      if (count <= 0) {
        answer = count + " Hold";
      } else {
        answer = count + " Bet";
      }

      break;
    case 8:
      if (count <= 0) {
        answer = count + " Hold";
      } else {
        answer = count + " Bet";
      }
      break;
    case 9:
      if (count <= 0) {
        answer = count + " Hold";
      } else {
        answer = count + " Bet";
      }
      break;
    case 10:
      count--;
      if (count > 0) {
        answer = count + " Bet";
      } else {
        count + " Hold";
      }

      break;
    case "J":
      count--;
      answer = count + " Hold";
      break;
    case "Q":
      count--;
      answer = count + " Hold";
      break;
    case "K":
      count--;
      answer = count + " Hold";
      break;
    case "A":
      count--;
      answer = count + " Hold";
      break;
  }
  return answer;
}
// console.log(cc(2));
// console.log(cc(2));
// console.log(cc(10));
// console.log(cc(2));
// console.log(cc(7));

//Basic Javascript:Build JavaScript Objects
var myDog = {
  name: "Luffy",
  legs: 4,
  tails: 1,
  friends: ["man", "baby-dog"]
};

//Basic Javascript:Accessing Object Properties with Dot Notation
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
// console.log(hatValue);

//Basic Javascript:Accessing Object Properties with Bracket Notation
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

//Basic Javascript:Accessing Object Properties with Variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
// console.log(player);

/* Day #11 100DaysOfCode & 301DaysOfCode*/

//Basic Javascript:Updating Object Properties
var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

//Basic Javascript:Add New Properties to a JavaScript Object
var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"]
};
myDog.bark = "woof";

//Basic Javascript:Delete Properties from a JavaScript Object
var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof"
};
delete myDog.tails;

//Basic Javascript:Using Objects for Lookups
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = lookup[val];
  return result;
}

//Basic Javascript:Testing Objects for Properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  return "Not Found";
}
// console.log(checkObj("gift"));

//Basic Javascript:Manipulating Complex Objects
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  {
    artist: "Colt Play",
    title: "Numb",
    release_year: 2007,
    formats: ["DVD", "9T", "LP"]
  }
];

//Basic Javascript:Accessing Nested Objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passsenger seat": "crumbs"
    },
    outside: {
      trunk: "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

//Basic Javascript:Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];
var secondTree = myPlants[1].list[1];

/* Day #12 100DaysOfCode & 301DaysOfCode for the next day*/

//Basic Javascript:Record Collection
var collection = {
  "2548": {
    album: "Slippery When Wet",
    Artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1999",
    Artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    Artist: "Robert Palmer",
    tracks: []
  },
  "5439": {
    album: "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  switch (id) {
    case id:
      if (prop !== "tracks" && value !== "") {
        collection[id][prop] = value;
      } else if (
        prop === "tracks" &&
        collection[id].hasOwnProperty("tracks") == false
      ) {
        collection[id][prop] = [];
        collection[id][prop].push(value);
      } else if (prop === "tracks" && value !== "") {
        collection[id][prop].push(value);
      } else if (value === "") {
        delete collection[id][prop];
      }
  }
  return collection;
}
// console.log(updateRecords(2548, "tracks", ""));
// console.log(secondTree);

/* Day #13 100DaysOfCode & 301DaysOfCode*/

//Basic Javascript:Iterate with JavaScript While Loops
