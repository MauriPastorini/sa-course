/*

## Javascript main types ##

* Number
* String
* Boolean
* Symbol (new in ES2015)
* Object
  - Function
  - Array
  - Date
  - RegExp
  - Error
* null
* undefined

*/

//////////////////////
// Number
//////////////////////

// Javascript numbers are double-precision 64-bit format IEEE 754 values

101;
0.25;
.25;

// Be careful with precision

0.1 + 0.2 // 0.30000000000000004;
0.1 + 0.7 // 0.7999999999999999;
https://qntm.org/notpointthree

// Math object

Math.random(); // random value between 0 and 1
Math.sqrt(4); // 2
const radius = 5;
const circumference = 2 * Math.PI * radius;

// Coercion explicit and implicit
// Explicit
var a = "42";
var b = Number( a );

console.log( a );	// "42"
console.log( b );	// 42

// Implicit
"99" == 99 // True

//////////////////////
// Boolean
//////////////////////

true;
false;

0 == false; // true
"" == false; // true
NaN == false; // false
null == false; // false
undefined == false; // false
1 == true; // true
10 == true; // false
10 == '10'; //true
"hello" == true; // false
0 === false // false, strict equal, no type conversion
1 === true; // false, stric equal, no type conversion
10 === '10'; // false, stric equal, no type conversion

// There are also "!=" and "!==" operators

// Implicit Boolean conversion
/*
Javascript truth
- false, 0, empty strings (""), NaN, null, and undefined all become false.
- All other values become true.
    - "hello"
    - 42
    - true
    - [ ], [ 1, "2", 3 ] (arrays)
    - { }, { a: 42 } (objects)
    - function foo() { .. } (functions)
*/
const values = [0, "", NaN, null, undefined];
values.forEach((value) => {
    if (!value) { 
        console.log(`${value} is false`);
    }
});


// Explicit Boolean conversion

Boolean(''); // false
Boolean(NaN); // false
Boolean(10); // true

// Parsing numbers
parseInt('10'); // 10
parseFloat('0.25'); // 0.25
+ '10'; // 10 using '+' unary operator
+ '0.25'; // 0.25 using '+' unary operator

// NaN (Not a number) special type

parseInt('hello'); // NaN

//////////////////////
// String
//////////////////////

'hellp'.length; // 5
'hello'.charAt(0); // "h"
'hello, world'.replace('world', 'ort'); // "hello, ort"
'hello'.toUpperCase(); // "HELLO"
var interpolation = ', world';
`hello${interpolation}`;

//////////////////////
// Other types
//////////////////////

var object = {};
object.attribute // undefined
object.attribute = null;
object.attribute // null

// Diferencia entre null y undefined
// null es una valor asignado y significa "nada".
// undefined significa que una variable fue declarada pero no definida aun
// null es una objeto. undefined es de tipo undefined.
// null !== undefined pero null == undefined.

//////////////////////
// Variables
//////////////////////

// Block level variables, let 

let foo = 0;
if (true) {
    let foo = 1;
    console.log(foo); // 1
}
console.log(foo); // 0

// Constant variables, const

const PI = 3.14;
PI = 3.14158; // throws a TypeError: Assignment to constant variable

// "Normal" variables, var

var baz = 0; // number
baz = 10; // number
baz = { attribute: 0 }; // object
baz = [1, 2, 3, 4]; // array

var bar = 0;
if (true) {
    var bar = 1;
    console.log(bar); // 1
}
console.log(bar); // 1

//////////////////////
// Operators
//////////////////////

x = 0;
x += 5; // 5
y = 0;
y = y + 5; // 5

x++ // 5
x // 6
++x // 7

var xPlus = 2;
testFun(++xPlus);
function testFun(param){
    console.log('Param: ', param);
}

y-- // 5
y // 4
--y // 3

'hello' + 'ort'; // "hello ort"
'1' + 2 + 3 // "123"
1 + 2 + '3' // "33"

//////////////////////
// Control structures
//////////////////////

// if, else if, else

var animal = 'dog';
var sound = '';
if (animal == 'cat') {
    sound = 'meow';
} else if (animal == 'dog') {
    sound = 'woof';
} else {
    sound = 'no sound';
}
sound == 'woof';

// while, do while

while (true) {
    // an infinite loop!
}
  
var input;
do {
  input = Math.random();
} while (input < 0.5);

// for

for (var i = 0; i < 5; i++) {
    console.log(`iteration with "for" n˚: ${i}`);
}

// for..of

var numbers = [0, 1, 2 ,3, 4];
for (let item of numbers) {
    console.log(`iteration whit "for..of" n˚: ${item}`);
}

// for..in

var person = { name: 'John', lastName: 'Doe' };
for (let attribute in person) {
    console.log(`iteration whit "for..in" n˚: ${person[attribute]}`);
}

// short circuit
var obj = { name: 'John' };
var name = obj && obj.name;

// cached example

var cachedName = null;
var name = cachedName || (cachedName = obj.name); 

// ternary operator

var age = 25;
var allowed = (age > 18) ? 'yes' : 'no';
console.log(allowed);

// switch

const action = 'update';
switch (action) {
    case 'create':
        console.log('Create invoked');
        break;
    case 'update':
        console.log('Update invoked');
        break;
    case 'delete':
        console.log('Delete invoked');
        break;
    default:
        console.log('Default action invoked');
}

//////////////////////
// Objects
//////////////////////

/**

JavaScript objects can be thought of as simple collections of name-value pairs. As such, they are similar to:

* Dictionaries in Python.
* Hash tables in C and C++.
* HashMaps in Java.

 */

var obj = new Object();
var obj = {};
var obj = {
    id: 23,
    date: '2019-03-20',
    name: 'John',
    lastName: 'Doe',
    address: { // nested object
        street: 'Brasil Av. 4561',
        city: 'Montevideo'
    },
    courses: ['P1', 'P2', 'DA1', 'DA2', 'AS'] // array
};

`${obj.address.street}, ${obj.address.city}`
`${obj['address']['street']}, ${obj['address']['city']}`

// object class 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString () {
        return `{ name: "${this.name}", age: ${this.age} }`;
    }
    sayHi() {
        return `Hi!, I'm ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, number) {
        super(name, age);
        this.number = number;
    }
}

var student = new Student("John", 25, 190432);

//////////////////////
// Arrays
//////////////////////

var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3

var a = ['dog', 'cat', 'hen'];
a.length; // 3

a[100] = 'fox';
a.length; // 101

typeof a[90]; // undefined

a.push('cow');

//////////////////////
// Functions
//////////////////////

// object prototype

// Anonymous function 
var foo = function() {
	// ..
};

// Named function 
var x = function bar(){
	// ..
};

// functions are objects

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function () {
        return `{ name: "${this.name}", age: ${this.age} }`;
    }
}

var you = new Person('John', 25);
you.toString();

// extending object

Person.prototype.sayHi = function () {
    return `Hi!, I'm ${this.name}!`;
};

you.sayHi();

// regular functions

function multiply(a, b) {
    var result = a * b;
    return result;
}

multiply(2,4); // 8
multiply(); // NaN, you can ommit parameters

function sayHi(name) {
    if (name) {
        console.log(`Hi!, I'm ${name}!`);
    } else {
        console.log(`Hi!, I'm a stranger!`);
    }
}

sayHi('John');
sayHi();

var approved = function (score) {
    return score >= 86;
}
approved(90);

// nested functions

function calculate(score, assistance) {
    var factor = function (n) {
        return n > 40;
    }
    if (score >= 86) {
        return factor(assistance);
    }
    return score > 70 && factor(assistance);
}

//// Lexical Scope
// Lexical scope means that scope is defined by author-time decisions of where functions are declared. 
// The lexing phase of compilation is essentially able to know where and how all identifiers are declared, 
// and thus predict how they will be looked-up during execution.
https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/scope%20%26%20closures/fig2.png

// Closures
//Closure es cuando una funcion puede recordar el acceso al lexical scope incluso cuando es invocado afuera de el


function prefixAndSuffix(prefix) {
    return function(suffix) {
        return `${prefix} ${suffix}`;
    };
}
var addSuffix = prefixAndSuffix('Hi!, I\'m ');
addSuffix('John');

// Hoisting
// Hoisting es el comportamiento por defecto de JavaScript en mover declaraciones arriba del todo

a = 2;

var a;

console.log( a ); //2

///

function hoist() {
    a = 20;
    var b = 100;
}

hoist();

console.log(a); 
/* 
Accessible as a global variable outside hoist() function
Output: 20
*/

console.log(b); 
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/


// Garbage Collection
// En el siguiente caso, someReallyBigData seguiria en el scope por btn.addEventListener…. que mantiene el scope. 

function process(data) {
	// do something interesting
}

var someReallyBigData = {  };

process( someReallyBigData );

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
	console.log("button clicked");
}, /*capturingPhase=*/false );


// Para poder “decirle” al garbage collector que pase, podriamos hacer uso de los block scopes

function process(data) {
	// do something interesting
}

// anything declared inside this block can go away after!
{
	let someReallyBigData = {  };

	process( someReallyBigData );
}

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
	console.log("button clicked");
}, /*capturingPhase=*/false );


//THIS

// this is neither a reference to the function itself, nor is it a reference to the function's lexical scope.
// this is actually a binding that is made when a function is invoked, 
// and what it references is determined entirely by the call-site where the function is called.

// Default Binding
function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // 2

// Implicit Binding
function foo() {
	console.log( this.a );
}
var a = 3
var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2

// Explicit Binding
// In explicit binding we used an object to wrap the function so when it uses “this” it could get the properties of the object. 
// But, what if you want to force a function call to use a particular object for the this binding, 
// without putting a property function reference on the object?

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2

// Hard binding
function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = function() {
    console.log(arguments);
    return foo.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window );


// As hard binding is really common, ES5 use a prototype called bind to add this feature:”
function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5

// new Binding
// a brand new object is created (aka, constructed) out of thin air
// the newly constructed object is set as the this binding for that function call
// unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.
function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2
// By calling foo(..) with new in front of it, we've constructed a new object and set that new object as the this for the call of foo(..)

// Review 

// Determining the this binding for an executing function requires finding the direct call-site of that function. Once examined, four rules can be applied to the call-site, in this order of precedence:
// Called with new? Use the newly constructed object.
// Called with call or apply (or bind)? Use the specified object.
// Called with a context object owning the call? Use that context object.
// Default: undefined in strict mode, global object otherwise.
