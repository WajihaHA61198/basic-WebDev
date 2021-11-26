// 1----- Ways to print on JavaScript -----

/* console.log("Hello World");
alert("me");
document.write("Hello World 2!");*/
// =============================================================

// 2----- Console API of js -----   

/*console.log("Hello World", 4 + 6);  // 10
console.warn("This is warning");
console.error("this is an error");
console.clear();
console.assert(3==3);*/
// =============================================================

// 3----- Varibles in JS ------

// --What are var? container to store values.
var num1 = 40;
var num2 = 50;
// console.log(num1 + num2);  
// =============================================================

// 4----- Data types in JS -----

// @ --Number
var num3 = 450;
var num4 = 56.90;



// @ --String
// var str1 = "This is string";
// var str2 = 'This is also string';
var namee = 'Wajiha';
var channel = 'code with harry';
// *
var temp = `${namee} is a 'nice' person "and" he has a channel called ${channel}`;
// console.log(temp);



// @ --Object
// var <name> = {-,-,-}

var marks = {
    Wajiha: 90,
    Iqra: 67,
    qarsai: 78
}
// console.log(marks);



// @ --Boolean
var yes = true;
var no = false;
// console.log(yes, no);



// @ --undefined
// var und = undefined;
var und;
// console.log(und);



// @ --Null
var n = null;
// console.log(n);

/*TWO types of data type in JS
1.  PRIMITIVE DT(6)---> undefined, null, num, str, bool, symbol
2.  REFERENCE DT(2)---> Arrays & Object
*/



// @ --Array
var arr = [1, 2, "wajiha", 4, 5];
// console.log(arr[2]); // wajiha
// console.log(arr);  // full-----
// ==============================================================

// 5----- Operators in JS -----

// @ --Arithematic operator
var a = 100;
var b = 10;
/*
console.log("The value of a+b is: ", a+b);
console.log("The value of a-b is: ", a-b);
console.log("The value of a*b is: ", a*b);
console.log("The value of a/b is: ", a/b);*/



// @ --Assignment operator
var c = b;  // b=10  
c += 2;
c -= 2;
c *= 2;
c /= 2;
// console.log(c);



// @ --Comparison Operator
var x = 30;
var y = 40;
/*
console.log(x == y); 
console.log(x >= y); 
console.log(x <= y); 
console.log(x < y);
console.log(x > y);  
console.log(x != y); */ // True/False



// @ --Logical operator

// 1. LOGICAL AND
/*console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);*/


// 2. LOGICAL OR
/*console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);*/


// 3. LOGICAL NOT
/*console.log(!true);  // false
console.log(!false);*/
// ================================================================

// 6----- FUNCTION in js -----

// function may hv arguments or not.
// DRY = Don't Repeat Yourself

function avg(a, b) {
    // return (a + b)/2;
    c = (a + b) / 2;
    return c;
}
// function calling
c1 = 56, 12;
c2 = 40, 30;
// console.log("The avg: ", c1, c2);


// @ --Arrow funtions--
/*function summ(a, b){
    return a + b;
}*/
// --instead
summ = (a, b) => {
    return a + b;
}

//
const myFunction = function () {
    return 'Hello!';
};
// ================================================================

// 7----- Conditionals in JS -----

var age = "41";
// @ --Single if statement--
/*if(age > 18){ console.log("You can drink alcohol."); }
else{ console.log("You can't drink alcohol.");   }*/

// @ --if-else_if-else ladder--
/*if(age > 32){ console.log("You aren't kid."); }
else if(age > 26){ console.log("You aren't Bacha."); }
else if(age > 22){ console.log("You are Bacha."); }
else if(age > 17){ console.log("You aren't Adult."); }
else{ console.log("cut finger to save the hand.");   }*/
// ================================================================

// 8----- Loops -----

var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// @ --for-loop--
/*for(var i=0; i< arr.length; i++) {
    console.log(arr[i]);
}*/


// @ --forEach-loop--
/*arr.forEach(function(element) {  // element(new) <--- arr
    console.log(element);
})*/


// @ --while-loop--
// "const" means final
/*const ac = 0;
ac++;*/
// "let" is good practice, useful for memory manag. use instead var.
let j = 0;
/*while(j < arr.length){
    console.log(arr[j]);
    j ++;
}*/


// @ --do-while--
/*do{
    console.log(arr[j]);
    j ++;
} while(j< arr.length);
*/
// ===============================================================

// 9-----Switch_case -----

const cups = 47;
switch (cups) {
    case 4:
    // console.log("The value of cups is 4")
    // break;

    case 41:
    // console.log("The value of cups is 41")
    // break;

    case 42:
    // console.log("The value of cups is 42")
    // break;

    case 43:
    // console.log("The value of cups is 43")
    // break;

    default:
    // console.log("The value of cups is none of 4, 41, 42, 43")
    // break;
}
// =============================================================

// 10----- Break & Cont. st -----

// Continue: esc this iteration, aage barho in next iteration
// Break: looping krna chordo

// var arr = [0, 1, 2, 3, 4, 5];
/*for(var i=0; i< arr.length; i++) {
    if(i == 2){
        // break;      // print-> 0, 1
        // continue;   // print-> 0, 1, 3, 4, 5
    }
    console.log(arr[i]);
}*/
// =============================================================

// 11----- Array Method -----

let Myarr = ["Fan", "Camera", 32, 56.89, true, 'hi', null];
//console.log(Myarr);        //print 
//console.log(Myarr.length); //7

//Myarr.pop();             // --pop from last
//Myarr.push("Harry");     // --at end
//Myarr.shift();           // --pop at start
//Myarr.unshift("Wajiha"); // --push at start

Myarr.toString();          // The toString() method converts a number to a string.
Myarr.sort();
// =============================================================

// 12----- String Method -----

let myLovelyStr = "Harry you're a good boy."; //24
// var len = myLovelyStr.length;
// console.log(`Length of name is ${len}`);

// console.log(myLovelyStr.length);
// console.log(myLovelyStr.indexOf("you're"));
// console.log(myLovelyStr.lastIndexOf("boy"));
// console.log(myLovelyStr.slice(1, 4));

// instead = myLovelyStr.replace("Harry", "Wajiha");
// console.log(instead, myLovelyStr);
// =============================================================

//  13----- Dates in JS -----

let myDate = new Date();
/*console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getFullYear());
console.log(myDate.getHours());*/
// =============================================================

// 14----- DOM(Documented Object Model) -----

// With the HTML DOM, Js can access and change all the elements of an HTML document.

/*Browser events:
      click
      contextmenu
      mouseover/mouseout
      mousedown/mouseup
      mousemove

      submit
      focus

      DOMContentLoaded
      transitionend */

// @--Id name--
document.getElementById("click").click();    // 1
let elem = document.getElementById("click"); // 2



// @--class name--
let elemClass = document.getElementsByClassName("container");
// *
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("txt-success");
elemClass[0].classList.remove("txt-success");

/* console.log(elemClass[0].innerHTML);
   console.log(elemClass[0].innerText); */
// console.log(elem.innerHTML);
// console.log(elem.innerText);


// @--Tag name--
tn = document.getElementsByTagName("div");
// document.getElementsByTagName("h1")[0].style.background = "red"


// @--appendChild()--
createdElement = document.createElement('p');
createdElement.innerText = "This is inner txt";
tn[0].appendChild(createdElement);


// @--replaceChild()--
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is inner bold";
tn[0].replaceChild(createdElement2, createdElement);


// @--removeChild()--
removeChild(element); // ---->removes an element 


// The document object represents your web page.
/*document.title
  document.URL
  document.links
  document.scripts
  document.images
  document.domain
  document.location
*/


// @--DOM Selector using Query--

/* The d/f b/w querySelector() & querySelectorAll() is that:
   querySelector()->    returns a single object with the first HTML element that matches the 'selectors', but
   querySelectorAll()-> returns an array of objects with all the HTML elements that match the 'selectors'.*/

// sel = document.querySelector(".container");
// sel2 = document.querySelectorAll(".container");
// ------------------


// .appendChild()---
const newSpan = document.createElement('span');
const mainHeading = document.querySelector('h1');
mainHeading.appendChild(newSpan);
// ------------------


// .removeChild()---
const mainHeading = document.querySelector('h1');
mainHeading.parentElement.removeChild(mainHeading);
// ------------------


// .remove()---
const mainHeading = document.querySelector('h1');
mainHeading.remove();
// ------------------


// .style.<property>---
const mainHeading = document.querySelector('h1');
mainHeading.style.color = 'red';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';
// ------------------


// .style.cssText---
const mainHeading = document.querySelector('h1');
mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
// ------------------


// .setAttribute()---
const mainHeading = document.querySelector('h1');
mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');

// 2
// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');
// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';
// ------------------



// .className()---
// HTML:
/* <h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1> */
const mainHeading = document.querySelector('#main-heading');
const listOfClasses = mainHeading.className;
//console.log(listOfClasses);     // logs out the string "ank-student jpk-modal"
// ------------------


// split() for giving space---
const arrayOfClasses = listOfClasses.split(' ');
//console.log(arrayOfClasses);  // logs out the array of strings ["ank-student", "jpk-modal"]
// ------------------------


monitorEvents(document);   // start displaying all events on the document object.
unmonitorEvents(document); // turn off the displaying of all events on the document object.
// =============================================================

// 15----- Events in JS -----

function clicked() {
    console.log('The button was clicked.');
}
window.onload = function () {
    console.log("documant was loaded.");
}


// @---button---
// --<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);
// --<event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);


/*first_container.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>";
    console.log("clicked on container.")
})*/

/*first_container.addEventListener('mouseover', function(){
    console.log("mouseover on container.");
})*/

function myEventListeningFunction() {
    console.log('howdy');
}
document.addEventListener('click', myEventListeningFunction);
document.removeEventListener('click', myEventListeningFunction);


// @--.preventDefault();---->prevent the default action with .preventDefault()
const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});
// ------------------


// Avoid too many events - poor performance
// here 200 events envoke
const myCustomDiv = document.createElement('div');
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick() {
        console.log('A paragraph was clicked.');
    });
    myCustomDiv.appendChild(newElement);
}
document.body.appendChild(myCustomDiv);
// !!!


// Refactoring The Number of Event Listeners
const myCustomDiv = document.createElement('div');
function respondToTheClick() {   //make func separately
    console.log('A paragraph was clicked.');
}
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);
    myCustomDiv.appendChild(newElement);
}
document.body.appendChild(myCustomDiv);
// here we shift event to div so it call not many time, good for performance: Now there is only:
// 1- a single event listener, 2- a single listener function
// !!!

// best for performance
const myCustomDiv = document.createElement('div');
function respondToTheClick() {
    console.log('A paragraph was clicked.');
}
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;
    // no event call here, here we shift event to div so it call not many time
    myCustomDiv.appendChild(newElement);
}
myCustomDiv.addEventListener('click', respondToTheClick);
document.body.appendChild(myCustomDiv);
// !!!
// ------------------


// @--DOMContentLoaded---
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});
// =============================================================

// 16----- Set Timeout & set interval ------

// @ --SetTimeout (will appear after 2000 ms time)--
logKaro = () => {
    document.querySelectorAll(".container")[1].innerHTML = "<b>Set timeOut</b>";
    console.log("I'm your log");
}
setTimeout(logKaro, 2000);
// @ --SetTime interval (want to repeat after certain interval)--
// setInterval(logKaro, 2000);
clr = setInterval(logKaro, 2000);
clearInterval(clr);
// =============================================================

// 17 ----- Local storage -----

// localStorage.setItem('name', 'wajiha')
// localStorage.getItem('name')
// localStorage.clear()
// localStorage.removeItem('name')
// =============================================================

// 18 ----- JSON (JS Object Notation) -----

/* JSON is a format for storing and transporting data.
   JSON is often used when data is sent from a server to a web page.
   JSON is a lightweight data interchange format.
   JSON is language independent *
*/

// accept only double quote
// obj->str(conversion)

obj = { name: 'harry', length: 1, a: { this: 'tha"t' } }
jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);


// @ --parse  --JSON.parse() to convert the string into a JavaScript object:
parsed = JSON.parse('{"name": "harry", "length": 1, "a": {"this": "tha"t"}}');
// console.log(parsed);
// =============================================================

// 19----- Interaction - Alert, Prompt, Confirm -----

// @--Alert in in-browser JavaScript - Does not return anything
alert("This is a message");

// @--Prompt in JS
let name1 = prompt("What is your name?", "Guest");

// @--Confirm in JS
let deletePost = confirm("Do you really want to delete this post?");
console.log(deletePost);
if (deletePost) {  
    console.log("Your post has been deleted successfully");
}
else { 
    console.log("Your post has not been deleted");
}
// =============================================================

// 20 ----- Math Object ------

// Printing the Math Object
let m = Math;
console.log(m);

// @--Printing the constants from Math Object--
console.log("The value of Math.E is ", Math.E);
console.log("The value of Math.PI is ", Math.PI);
console.log("The value of Math.LN2 is ", Math.LN2);
console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2);
console.log("The value of Math.LOG2E is ", Math.LOG2E);

// @--Printing the Functions from Math Object--
let a = 34.64534;
let b = 89;

console.log("The value of a and b rounded is: ", Math.round(a), Math.round(b));
console.log("3 raised to the power of 2 is: ", Math.pow(3, 2));
console.log("Sqr of 36: ", Math.sqrt(36));

// @--Ceil and floor--
console.log("5.8 rounded up to nearest integer is: ", Math.ceil(5.8));
console.log("5.8 rounded down to nearest integer is: ", Math.floor(5.8));

// @--Abs function--
console.log("Absolute value of 5.66 is: ", Math.abs(5.66));
console.log("Absolute value of -5.66 is: ", Math.abs(-5.66));

// @--Trignometric Functions--
console.log("The value of sin(pi) is: ", Math.sin(Math.PI / 2));
console.log("The value of tan(pi) is: ", Math.tan(Math.PI / 2));
console.log("The value of cos(pi) is: ", Math.cos(Math.PI / 2));

// @--Min and max functions--
console.log("Minimum value of 4, 5, 6 is ", Math.min(4, 5, 6));
console.log("Maximum value of 4, 5, 6 is ", Math.max(4, 5, 6));

// @--Generating a random number--
let r = Math.random();
// Random number b/w (a, b) = a + (b-a)*Math.random()
let a1 = 50;
let b1 = 60;
let r50_60 = a1 + (b1 - a1) * Math.random();
console.log("The random number is ", r);
console.log("The random number is ", r50_60);
// =============================================================

// 21 ----- Performance -----

const startingTime = performance.now();

for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
        console.log('i and j are ', i, j);
    }
}
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
// -----------------------

// @--fragment--
const fragment = document.createDocumentFragment();//uses DocumentFragment instead of <div>
for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); // reflow and repaint here -- once!

/* @Reflow: is the process of browser laying out the page. It happens when you first display the DOM 
         (generally after the DOM and CSS have been loaded), & happens again every time something could 
         change the layout. This is a fairly expensive (slow) process.
   @Repaint: happens after reflow as the browser draws the new layout to the screen. This is fairly quick, 
          but you still want to limit how often it happens.*/
// =============================================================

// 22 ------ Objects in Depth -------

/*--the "Object() constructor" function is a bit slower and more verbose. As such, the 
recommended way to create new objects in JavaScript is to use "literal notation".*/
// @--Using literal notation:
const myObject = {};
// @--Using the Object() constructor function:
const myObject = new Object();


const cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
        console.log('Meow!');
    },
    greet: function (name) {
        console.log(`Hello ${name}`);
    }
};
// Now, let's go ahead change it up a bit!
cat.age += 1;
cat.age;  // 3
cat.name = 'Bambi';
cat.name; // 'Bambi'
// !!!!


// ==== Adding Properties =====
const printer = {};
printer.on = true;
printer.mode = 'black and white';
// uses dot notation to add properties, but keep in mind that square bracket notation works just as well:
printer['remainingSheets'] = 168;
//>>>>
printer.print = function () {
    console.log('The printer is printing!');
};
// printer looks like 
{
    // on: true,
    // mode: 'black and white',
    // remainingSheets: 168,
    // print: function () {
    //   console.log('The printer is printing!');
    // }
}
// ==== DELETING Properties =====
delete printer.mode; // true


// -----Passing Arguments-----

// 1==> (Passing a Primitive)
function changeToEight(n) {
    n = 8; // whatever n was, it is now 8... but only in this function!
}
let n = 7;
changeToEight(n);
console.log(n); // 7


// 2==> (Passing an Object)
let originalObject = {
    favoriteColor: 'red'
};
function setToBlue(object) {
    object.favoriteColor = 'blue';
}
setToBlue(originalObject);
originalObject.favoriteColor; // 'blue'
// --In above eg, originalObject contains 1 prop.->favoriteColor, which has a value of 'red'.
// We pass originalObject into the setToBlue() function and invoke it. After accessing 
// originalObject's favoriteColor property, we see that the value is now 'blue'!
// How'd'happen? Well, since objects in JS are passed by reference, if we make changes to
// that reference, we're actually directly modifying the original object itself!
const iceCreamOriginal = {
    Andrew: 3,
    Richard: 15
};
const iceCreamCopy = iceCreamOriginal;
iceCreamCopy.Richard; // 15
// OR
iceCreamCopy.Richard = 99;
iceCreamCopy.Richard; // 99
iceCreamOriginal.Richard; // 99


// ---Comparing an Object with Another Object---
const parrot = {
    group: 'bird',
    feathers: true,
    chirp: function () {
        console.log('Chirp chirp!');
    }
};

const pigeon = {
    group: 'bird',
    feathers: true,
    chirp: function () {
        console.log('Chirp chirp!');
    }
};
// BUT
parrot === pigeon; // false
// ALSO,
const myBird = parrot;
myBird === parrot; // true
myBird === pigeon; // false


// --self practice
let bigBag = {  // obj
    color: black,
    zip: 5,
    additional: port,
    name: blackBerry,
    blacky: function () {
        console.log(this.name + " has approx " + "this.zip" + " zips.");
    },
    shadow: function () {
        console.log("My bag to have " + this.color + " color & also hv " + this.additional);
    }
}
// =============================================================

// 23 ------ Invoking Object Methods ------

// @--Functions vs Methods--
// (A method is a property that points to a function)

function sayHello() {   //FUNCTION
    console.log('Hi there!');
}
const developer = {     //OBJECT
    name: 'Andrew'
};
// obj k andar func
// <obj name>.<func name> = function () {---};
developer.sayHello = function () {
    console.log('Hi there!');
};
/*{
    name: 'Andrew',
    sayHello: function () {
      console.log('Hi there!');
    }
}*/

// @-- Calling Methods--
developer.sayHello();      // 'Hi there!'
developer['sayHello']();   // 'Hi there!'

// @--Passing Arguments Into Methods--
const developer = {
    name: 'Andrew',
    sayHello: function () {
        console.log('Hi there!');
    },
    favoriteLanguage: function (language) {   //here
        console.log(`My favorite programming language is ${language}`);
    }
};
developer.favoriteLanguage('JavaScript');// My favorite programming language: JavaScript'

// @--A Method Can Access the Object it was Called On (.this)
// Using `this`, methods can access and manipulate an object's properties.
// `this` is a reserved word in JavaScript.
const triangle = {
    type: 'scalene',
    identify: function () {
        console.log(`This is a ${this.type} triangle.`);
    }
};
triangle.identify(); // 'This is a scalene triangle.'
// ================================================================

// 24------CallBack-------

function callAndAdd(n, callbackFunction) { //func that takes another func in as an argument is a higher-order func
    return n + callbackFunction();
}
function returnsThree() {
    return 3;
}
callAndAdd(2, returnsThree); // 5


//>>>>>
function each(array, callback) {
    for (let i=0; i<array.length; i++) {
        if (callback(array[i])) {
            console.log(array[i]);
        }
    }
}
function isPositive(n) {
    return n > 0;
};
each([-2, 7, 11, -4, -10], isPositive); //7, 11
// --Functions are commonly passed into array methods & called on elements within an array (i.e., 
// the array on which the method was called).  -foreach() -map() -filter()



// 1@ ---- forEach() ----
/*array.forEach(function callback(currentValue, index, array) {
    // -function code here
});*/
[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});// 1, 5, 3

// 2@ ----map() ----
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
} // 650, 440, 120, 40

// 3@ ----filter() ----
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}  // 32, 33, 40
// =================================================================

// 25 ----- Scope ------

const myName = 'Andrew';   // Global var.
function introduceMyself() {
    const you = 'student'; 
    function introduce() {
        console.log(`Hello, ${you}, I'm ${myName}!`);
    }
    return introduce();  //Hello, student, I'm Andrew!
}
// var. in JS are traditionally defined in scope of func, rather than in scope of block.

var globalNumber = 5;
function globalIncrementer() {
    const localNumber = 10;
    globalNumber += 1;
    return globalNumber;
}
console.log(globalIncrementer()); // 6
console.log(localNumber);         // ReferenceError: localNumber is not defined
// Variables in Js are also function-scoped.
// ==================================================================

// 26 ------ Closure -------

// Global variables can be made local (private) with closures.
// In a web page, global variables belong to the window object.
// A function maintains a reference to its parent's scope.
const myName = 'Andrew';
function introduceMyself() {
    const you = 'student';
    function introduce() {
        console.log(`Hello, ${you}, I'm ${myName}!`);
    }
    return introduce();
}
introduceMyself(); // 'Hello, student, I'm Andrew!'

// e.g
function outerFunction() {
    let num1 = 5;
    return function (num2) {
        console.log(num1 + num2);
    };
}
let result = outerFunction();
result(10); //15
// ================================================================

// 27 -------Function Declarations vs. Function Expressions--------

// --immediately-invoked function exp. (IIFE)--

// @1--anonymous--
const myFunction = function () {
    return 'Hello!';
};

// @2--named--
const myFunction = function returnHello() {
    return 'Hello!';
};

// >>>>>>!!
(function sayHi() {
    alert('Hi there!');
}
)(); // alerts 'Hi there!'

// >>>>>>!!
(function (name) {
    alert(`Hi, ${name}`);
}
)('Andrew'); // alerts 'Hi, Andrew'

// >>>>>!!
(function (x, y) {
    console.log(x * y);
}
)(2, 3); // 6
// >>>>>>

// using IIFE creates private scope that protects var/methods from being accessed.
// while these returned func are publicly-accessible, they still maintain privacy for var
// defined within them!

// great opportunity to use IFFE is when you want to execute some code without creating extra global variables.
// However, note that an IIFE is only intended to be invoked once, to create a unique execution context. 
// If you have some code that is expected to be "re-used" (e.g., a function meant to be executed more than 
// once in the application), declaring the function and then invoking it might be a better option.
// ========================================================================

// 28 ------- Constructor Functions --------

// @--initiate/create
new SoftwareDeveloper();

// @--Structure and Syntax
function SoftwareDeveloper() {
    this.favoriteLanguage = 'JavaScript';
}

// @--Creating a New Object (multiple obj)
let developer = new SoftwareDeveloper();
console.log(developer);        // SoftwareDeveloper {favoriteLanguage: 'JavaScript'}

let otherdeveloper = { favoriteLanguage: 'JavaScript' };
console.log(otherdeveloper);   // {favoriteLanguage: 'JavaScript'}

// @--Constructor Functions Can Have Parameters
function SoftwareDeveloper(name) {
    this.favoriteLanguage = 'JavaScript';
    this.name = name;
}
let instructor = new SoftwareDeveloper('Andrew');
console.log(instructor);  // SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Andrew' }
let teacher = new SoftwareDeveloper('Richard');
console.log(teacher);     // SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Richard' }


// new example
function Hero(name, role) {
    this.name = name;
    this.role = role;

    this.introduce = function () {
        console.log(`My name is ${this.name} and I'm a ${this.role}.`);
    }
}
const wajiha = new Hero('Wajiha', 'student');
const home = new Hero('Jiya', 'Daughter');
wajiha.introduce();    //My name is Wajiha and I'm a student.
// What about constructor func r true?-->must be invoked with `new`, are used to instantiate new obj.
// without using the new operator, no object was created.

// @--Seeing the Object's Constructor (instanceof, typeof)
function Developer(name) {
    this.name = name;
}
const dev = new Developer('Wajiha');

typeof dev;                // object
dev instanceof Developer;  // true
// instanceof confirmed->that specific constructor func did in fact create a specific obj. 
// ========================================================================

// 29 -------- This Keyword --------

/* value "this" is actually not assigned to anything until an obj calls the method where this is used.*/

// const dog = {---};
const dog = {
    bark: function () {
        console.log('Woof!');
    },
    barkTwice: function () {
        this.bark();
        this.bark();
    }
};
dog.bark();      // Woof!
dog.barkTwice(); // Woof! // Woof!
// -Using `this`, methods can access and manipulate an object's prop.
// -When invoking constructor func with the "new" operator, a "this" var. is set to newly-created object.
// ========================================================================

// 30 ------ More Ways to Invoke Functions -------

// @--call()
function multiply(n1, n2) {
    return n1 * n2;
}
multiply(3, 4);              // 12
multiply.call(window, 3, 4); // 12  (invoked with the given value of "this")


//--
const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
      console.log(`${this.title} is a classic novel`);
    }
};
mockingbird.describe();//To Kill a Mockingbird is a classic novel
const pride = {
    title: 'Pride and Prejudice'
};
mockingbird.describe.call(pride);//Pride and Prejudice is a classic novel


// @--apply()
/* -Just like call(), apply() method is called on a func. to not only invoke that func., but also to 
   associate with it a specific value of "this". apply() takes the function's arguments in an array.*/
function multiply(n1, n2) {
     return n1 * n2;
}
multiply.call(window, 3, 4);     // 12  .CALL()
multiply.apply(window, [3, 4]);  // 12

// above mockingbird & pridePrijudice eg
mockingbird.describe.apply(pride);  // 'Pride and Prejudice is a classic novel'


/* "call()" may be limited if you dk ahead of time the number of arguments that the function needs. 
   In this case, "apply()"" would be a better option, since it simply takes an array of arguments, 
   then unpacks them to pass along to the function. Keep in mind that the unpacking comes at a minor 
   performance cost, but it shouldn't be much of an issue.*/

// `bind()` is method that is called on a func
// `bind()` returns a new func that, when called, has `this` set to the provided object

/*call() invokes the function and has arguments passed in individually, separated by commas.
apply() is similar to call(); it invokes the function just the same, but arguments are passed in as an array.
bind() returns a new function with this bound to a specific object, allowing us to call it as a regular function.*/
// ========================================================================

// 31 --------- Prototype Inheritance ---------

/* NOTE: 
the prototype prop. just points to a regular obj, that obj itself also has a secret link to its 
prototype. And that prototype obj also has reference to its own prototype -- and so on. This is how
the prototype chain is formed.*/
// prototype method search on google
function Dog(age, weight, name) {
    this.age = age;
    this.weight = weight;
    this.name = name;
    /*this.bark = function () {
        console.log(`${this.name} says woof!`);
    }*/
}
Dog.prototype.bark = function () {
    console.log(`${this.name} says woof!`);
}
dog = new Dog(2, 60, 'java');
dog.prototype.bark; //no need
dog.bark();         //java says woof!

// @--Adding Methods
function Cat(name) {
    this.lives = 9;
    this.name = name;
    this.sayName = function () { //here
      console.log(`Meow! My name is ${this.name}`);
    };
}

// << =====Checking an Object's Properties==== >>
/* 1 @--hasOwnProperty()---->- It returns boolean indicating whether the object has the specified property as 
                              its own property (i.e., the property isn't inherited)
                             -`hasOwnProperty()` is invoked as a method onto an object*/

/* Let's now create a new object, "myPhone", & check whether "operatingSystem" is its own property, 
   meaning that it was not inherited from its prototype (or somewhere else along the prototype chain):*/
const myPhone = new Phone();
const own = myPhone.hasOwnProperty('operatingSystem');
console.log(own);       // true
const inherited = myPhone.hasOwnProperty('screenSize');
console.log(inherited); // false


// 2 @--isPrototypeOf()-----> checks whether or not an object exists in another object's prototype chain
const rodent = {
    favoriteFood: 'cheese',
    hasTail: true
};
function Mouse() {
    this.favoriteFood = 'cheese';
}  
Mouse.prototype = rodent;
const ralph = new Mouse();
const result = rodent.isPrototypeOf(ralph);  
console.log(result);   // true     ,check for inheritance


// 3 @--The constructor Property
function Longboard() {
    this.material = 'bamboo';
}
const board = new Longboard();
// If we access board's constructor property, we should see the original constructor function itself:
console.log(board.constructor);
// function Longboard() {
//   this.material = 'bamboo';
// }


function Phone() {
    this.operatingSystem = 'Android';
}
Phone.prototype.screenSize = 6;
// JS array obj is global obj that's used in construction of obj.
// inheritance in JS is when an object is based on another object. Inheritance allows us to reuse existing code.
/* When <function> is called as a <constructor> using the "new" operator, the function creates and returns a 
   new <object>. This object is secretly linked to its constructor's prototype, which is just another object.*/
// ========================================================================

// 32 --------- Prototype Inheritance: sub class ---------

// @--The Secret Link
const bear = {
    claws: true,
    diet: 'carnivore'
};
function PolarBear() {             // constructor function
    // ...
}
PolarBear.prototype = bear;        // inheritance
const snowball = new PolarBear();  // constructor

snowball.color = 'white';
snowball.favoriteDrink = 'cola';
// --This is how the snowball object looks at this point:
/*{
    color: 'white',
    favoriteDrink: 'cola'
}*/
console.log(snowball.claws);     // 'true'
console.log(snowball.diet);      // 'carnivore'
console.log(snowball.__proto__); // { claws: true, diet: 'carnivore' }
console.log(snowball.__proto__ === bear); // true
// ========================================================================

// 33 --------- Function ---------

// super & extend

// 1 @--Arrow Functions
//  ----map() ----
const name1 = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
    return name.toUpperCase();
});
// intead
const name1 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);
// If u need more than single line of code in your arrow func body, then u use "block body syntax".
const name1 = ['Farrin', 'Kagure', 'Asser'].map(name => {
    name = name.toUpperCase();
    return `${name} has ${name.length} characters in their name`;
});
// ---------------------
// @--PL  => in var--- 
// 1) one PL
const greet = name => `Hello ${name}!`;
greet('Asser');   // Hello Asser!

// 2) none PL (empty parameter list requires parentheses.)
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();  //Hello Udacity Student!

// 3) multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');  //Here's your chocolate ice cream in a waffle cone.
// ----------------------
// @---Default Function Parameters-----
function greet(name, greeting) {
    name = (typeof name !== 'undefined') ? name : 'Student';
    greeting = (typeof greeting !== 'undefined') ? greeting : 'Welcome';
    return `${greeting} ${name}!`;
}
greet();        // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!
// -----------------
// 1 @--Defaults and destructuring "arrays" [] ---
function createGrid([width = 5, height = 5]) {
    return `Generates a ${width} x ${height} grid`;
}
createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid
createGrid(); // throws an error

// but if
function createGrid([width = 5, height = 5] = []) {
    return `Generates a ${width} x ${height} grid`;
}
createGrid(); // Generates a 5 x 5 grid
// -------------------
// 2 @--Defaults and destructuring "objects" {} ---
function createSundae({ scoops = 1, toppings = ['Hot Fudge'] }) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}
createSundae({});// Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2});// Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings:['Sprinkles']});//Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']});// Your sundae has 1 scoop with Cookie Dough toppings.
createSundae(); // throws an error
// --------------------
// @---JavaScript Classes--
function Plane(numEngines) {//"Plane" func is a constructor func that will create new Plane obj
    this.numEngines = numEngines;
    this.enginesActive = false;
}
Plane.prototype.startEngines = function () {//methods "inherited" by all instances
    console.log('starting engines...');
    this.enginesActive = true;
};
const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();
// function convert into class
class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }
    startEngines() {
        console.log('starting engines…');
        this.enginesActive = true;
    }
}
typeof Plane; // function
// -----------------------
// @--Super and Extends--
class Tree {
    constructor(size='10', leaves={spring:'green', summer:'green', fall:'orange', winter: null }) {
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }
    changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
            this.size += 1;
        }
    }
}
class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves) {
        super(size, leaves);
        this.syrupQty = syrupQty;
    }
    changeSeason(season) {
        super.changeSeason(season);
        if (season === 'spring') {
            this.syrupQty += 1;
        }
    }
    gatherSyrup() {
        this.syrupQty -= 3;
    }
}//
const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
/* -Both Tree and Maple are JS classes. 
   -The "Maple class" is a "subclass" of Tree & uses the extends kW to set itself as a "subclass".
   -To get from the "subclass" to the parent class, the "super kW" is used. 
   -Did you notice that "super" was used in two different ways? 
        -> In "Maple's constructor method", super is used as a  ---> function. 
        -> In "Maple's changeSeason() method", super is used as an ---> "object!"" 
*/
// ---------------------
// same code above in ES5
function Tree(size, leaves) {
    this.size = (typeof size === "undefined") ? 10 : size;
    const defaultLeaves = { spring: 'green', summer: 'green', fall: 'orange',winter: null }; //obj
    this.leaves = (typeof leaves === "undefined") ? defaultLeaves : leaves;
    this.leafColor;
}
Tree.prototype.changeSeason = function (season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
        this.size += 1;
    }
}
function Maple(syrupQty, size, leaves) {
    Tree.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === "undefined") ? 15 : syrupQty;
}
Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function (season) {
    Tree.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
        this.syrupQty += 1;
    }
}
Maple.prototype.gatherSyrup = function () {
    this.syrupQty -= 3;
}
const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
// --------
// @------Working with JavaScript Subclasses-----
// create a subclass using class, super, & extends.
// 1. super must be called before this
// ========================================================================

// 34 --------- Built in ---------

// @-- Symbols —that’s guaranteed to be unique -- 
const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3); //false


const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.15 },
    'orange': { color: 'orange', weight: 170.097 }
};
/*bowl contains fruit which r obj that are prop. of bowl.But, we run into a problem when the second
  banana gets added.*/
const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },  // 1
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }   // 2
};
console.log(bowl);// Object {apple: Object, banana: Object, orange: Object}

/* Instead of adding another banana to bowl, our prev. banana is overwritten by the new banana being added
   to the bowl. To fix this problem, we can USE SYMBOLS.*/
const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },  // 1
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }  // 2
};
console.log(bowl);//Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}
// ------------------

// @---Iteration & Iterable Protocols---

// 1- The Iterable Protocol
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {   // for(..of..)
  console.log(digit);
} // 0 1 2 3 4 5 6 7 8 9 

// 2- The Iterator Protocol
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
/*Object {value: 0, done: false}
  Object {value: 1, done: false}
  Object {value: 2, done: false}*/
// -------------------

// @---Sets-This let u store unique values of any type, whether primitive or obj references.---
const games = new Set();
console.log(games);     // This creates an empty Set games with no items. {}


const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);// Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}     
// remove duplicate itself


// 1- add()/delete()
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');
console.log(games);// Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}

// 2- delete all
games.clear()
console.log(games);// Set {}

console.log(games.size);              //4
console.log(games.has('September'));  //false
/*.has() method to check if item exists in Set. in T/F*/
console.log(months.values());  //retrieving all the values also for of loop

// 3- Using the SetIterator
const iterator = months.values();
iterator.next();   // Object {value: 'January', done: false}
iterator.next();   // Object {value: 'February', done: false}
// ------------------

// @--- WeakSets---
let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Rehan', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);// WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'Richard', age: 31, gender: 'male'}, Object {name: 'James', age: 26, gender: 'male'}}
roster.add('Amanda');// error
/* In JS, memory is allocated when new values r created & is "automatically" freed up when those values 
   r no longer needed. This process of freeing up memory after it is no longer needed is what is known as
   "garbage collection". */
/* WeakSets: r collections of objects only. They cannot contain arbitrary values of any type, as Sets can.*/
// --------------------

// @--- Maps ---

/* If SETS r similar to ARRAYS, then MAPS are similar to OBJ bcz Maps store key-value pairs similar
   to how obj contain named properties with values. */
// 1- create Maps
const employees = new Map();
console.log(employees);// Map {}

// 2- Modifying Maps
const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});
console.log(employees);// Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}}

// 3- delete()
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees);// Map {'james.parkes@udacity.com' => Object {...}}

// 4- clear()
employees.clear()
console.log(employees);// Map {}

// 5- has()
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));  // false
console.log(members.has('Marcus'));  // true

//  6- get()
console.log(members.get('Evelyn'));  // 75.68

// @---Looping Through Maps---
// 7.1) Using the MapIterator

// Using both the .keys() & .values() methods on Map will return a new iterator object called "MapIterator".
let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();// Object {value: 'Evelyn', done: false}

let iteratorObjForValues = members.values();
iteratorObjForValues.next(); // Object {value: 75.68, done: false}

// 7.2) for...of
for (const member of members) {
    console.log(member);
}

// 7.3) forEach
members.forEach((value, key) => console.log(key, value));
/* 'Evelyn' 75.68
   'Liam' 20.16
   'Sophia' 0
   'Marcus' 10.25
*/
// ----------------

// @--- WeakMaps ---
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);// WeakMap {Object {title: 'Pride and Prejudice', author: 'Jane Austen'} => true, Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}
/*…but if u try to add something other than obj as a key, you’ll get an error!*/
library.set('The Grapes of Wrath', false);// Uncaught TypeError: Invalid value used as weak map key(…)
// ----------------

// @--- Promises ---
new Promise(function() {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
    }, Math.random() * 2000);
});
/*how does Js notify us that it's finished & ready for us to pick back up? 
  --resolve & reject.*/
new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        // if (  iceCreamConeIsEmpty(flavor)  ) {
        //     reject(`Sorry, we're out of that flavor :-(`);
        // }
        // resolve(sundae);
    }, Math.random() * 2000);
});
// -----------------
// @--- Proxy ---

// 1- A Pass Through Proxy
/* simplest way to create proxy is to provide an obj & then an empty handler object.*/
var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});
agent.status; // returns 'looking for work'

// 2- Get Trap
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target);// the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
        // --Accessing the Target object from inside the proxy (additional)
        // return target[propName];

        // --Having the proxy return info, directly (just)
        // return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent = new Proxy(richard, handler);
agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)

// 3- getter/setter
var obj = {
    _age: 5,
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
};
obj.age;    // logs 'getting the "age" property' & 5
obj.height; // logs 'getting the "height" property' & 4

obj.weight = 120; 
obj.weight; // logs just 120

// With ES6 Proxies, we do not need to know the properties beforehand:
const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObj[property]);
    }
});
proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4
/* A proxy object sits between a real object and the calling code. 
   The calling code interacts with the proxy instead of the real object. */
// -------------------

// @--- Generators ---
function getEmployee() {
    console.log('the function has started');
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    for (const name of names) {
        console.log(name);
    }
    console.log('the function has ended');
}
getEmployee();  // run as in sequence
/* But what if u want to print out the first 3 employee names then stop for a bit, then, at some later point,
   you want to continue where you left off and print out more employee names. PAUSE 
*/
function* getEmployee() {
 // ----- (above) That asterisk indicates that this function is actually a generator!
}
getEmployee();
// this is the response I get in Chrome:
// getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}


// --Generators & Iterators--
const generatorIterator = getEmployee();
generatorIterator.next();  // not paused here


// --Yield Keyword -pausible function
function* getEmployee() {
    console.log('the function has started');
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    for (const name of names) {
        console.log(name);
        yield; //
    }
    console.log('the function has ended');
}
/* the function has started
   Amanda
*/
generatorIterator.next(); // Diego
// ========================================================================

// 35 ----------- dev. fu ------------

// 1- polyfill

// startsWith()
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
    };
}

// 2- Transpiler-Babel
class Student {
    constructor (name, major) {
      this.name = name;
      this.major = major;
    }
    displayInfo() {
      console.log(`${this.name} is a ${this.major} student.`);
    }
}  
const richard = new Student('Richard', 'Music');
const james = new Student('James', 'Electrical Engineering');
// ========================================================================