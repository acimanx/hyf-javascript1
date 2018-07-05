//1
console.log("Привет мир!");
console.log("Hello world!");

//2
console.log("I'm awesome");
// console.log('I\'m awesome');

//3
var x;
console.log('the value of my variable x will be: undefined');
console.log(x);
x = 8;
console.log('the value of x will be: 8');
console.log(x);

//4
var y = "string";
console.log('the value of my variable y will be: string');
console.log(y);
y = "secondString";
console.log('the value of my variable y will be: secondString');
console.log(y);

//5
var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);
console.log(Math.max(z, a));

//6
var animals = [];
var mypets = [{
	1: "Cat",
	2: "Dog",
	3: "Mouse"
}];
var danspets = [{
	1: 'baby pig'
}];
animals.push(mypets, danspets);
console.log(animals);
//var animals=['cat','dog','mouse'];
//animals.push('baby pig');
//console.log(animals);

//7
let myString = "this,is,a,test";
console.log(myString);
console.log(myString.length);

//8
let first = 1;
console.log('the value of the variable first is: ' + first);
console.log('I think the type of the variable first is number.');
console.log(typeof first);
let second = ('value');
console.log('the value of the variable second is: ' + second);
console.log('I think the type of the variable second is string.');
console.log(typeof second);
let third = 'foobar';
console.log('the value of the variable third is: ' + third);
console.log('I think the type of the variable third is string.');
console.log(typeof third);
let fourth = [1, 2, 3, 4, 5];
console.log('the value of the variable fourth is: ' + fourth);
console.log('I think the type of the variable fourth is object.');
console.log(typeof fourth);

//if (typeof first == typeof second) {
//    console.log('variables are the same');
//} else {
//      console.log('variables are not the same');
//}
var compare = [typeof second];
if (compare.indexOf(typeof third) >= 0) {
	console.log('variables are the same');
} else {
	console.log('variables are different');
}
//indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).
//deep multiple values diff checker???

//9
//The modulus operator (%) returns the division remainder.
//In arithmetic, the division of two integers produces a quotient and a remainder.
//quotient a result obtained by dividing one quantity by another.
//the remainder is the amount "left over" after performing some computation.
//The % [remainder] operator yields the remainder of its operands from an implied division; the left operand is the dividend and the right operand is the divisor..
//.. the [floating-point] remainder r from a dividend n and a divisor d is defined by the mathematical relation r = n − (d * q) where q is an integer that is negative only if n/d is negative and positive only if n/d is positive ..
var x = 7;
x = x % 3;
console.log(x);
//wolframalpha.com/input/?i=QuotientRemainder%5B7,3%5D
var dividend1 = 202;
var divisor1 = 10;
remainder1 = dividend1 % divisor1;
console.log(remainder1);
//wolframalpha.com/input/?i=QuotientRemainder%5B202,10%5D
var dividend2 = 55;
var divisor2 = 35;
remainder2 = dividend2 % divisor2;
console.log(remainder2);
//wolframalpha.com/input/?i=QuotientRemainder%5B55,35%5D
var dividend3 = 999;
var divisor3 = 666;
remainder3 = dividend3 % divisor3;
console.log(remainder3);
//wolframalpha.com/input/?i=QuotientRemainder%5B999,666%5D
var drugs = 1004;
var rockandroll = 935;
whatislove = drugs % rockandroll;
console.log(whatislove);
//wolframalpha.com/input/?i=QuotientRemainder%5B1004,935%5D

//10
var multipleTypes = ['noproblem', 0];
console.log(multipleTypes);
var x = 6 / 0;
var y = 10 / 0;
if (x === y) {
	console.log('same');
} else {
	console.log('not the same');
}
