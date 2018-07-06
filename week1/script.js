//1
console.log("Привет мир!" + '\n' +
            "Hello world!");

//2
console.log("I'm awesome" + "\n" +
           "or " + 'I\'m awesome' + '😀');

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
console.log("🏆 The winner is: " + Math.max(z, a));

//6
var animals = [];
var mypets = [{
	1: "🐈Cat",
	2: "🐤Bird",
	3: "🐁Mouse"
}];
var danspets = [{
	1: '🐖baby pig'
}];
animals.push(mypets, danspets);
console.log(animals);
//var animals=['cat','dog','mouse'];
//animals.push('baby pig');
//console.log(animals);

//7
let myString = "this is a test";
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
let third = 'foobar🍺';
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
//var compare = [typeof second];
//if (compare.indexOf(typeof third) >= 0) {
//	console.log('variables are the same');
//} else {
//	console.log('variables are different');
//}
//indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).
var a = typeof (first);
var b = typeof (second);
var c = typeof (third);
var d = typeof (fourth);
console.log("Same variables search. Initialization...");
if ([a].indexOf(b) >= 0){
  console.log('❤ a & b the same');
} else {
  console.log('a & b not the same');
}
if ([a].indexOf(c) >= 0){
  console.log('❤ a & c the same');
} else {
  console.log('a & c not the same');
}
if ([a].indexOf(d) >= 0){
  console.log('❤ a & d the same');
} else {
  console.log('a & d not the same');
}
if ([b].indexOf(c) >= 0){
  console.log('❤ b & c the same');
} else {
  console.log('b & c not the same');
}
if ([b].indexOf(d) >= 0){
  console.log('❤ b & d the same');
} else {
  console.log('b & d not the same');
}
if ([c].indexOf(d) >= 0){
  console.log('❤ c & d the same');
} else {
  console.log('c & d not the same');
}
//make it visually more intuitive with emodji

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
var dividend = 202;
var divisor = 10;
var remainder = dividend % divisor;
console.log(remainder);
//wolframalpha.com/input/?i=QuotientRemainder%5B202,10%5D
var dividend = 55;
var divisor = 35;
var remainder = dividend % divisor;
console.log(remainder);
//wolframalpha.com/input/?i=QuotientRemainder%5B55,35%5D
var remainder = 999 % 666;
console.log(remainder);
//wolframalpha.com/input/?i=QuotientRemainder%5B999,666%5D
var drugs = 1004;
var rockandroll = 935;
var whatislove = drugs % rockandroll;
console.log('🤡 ' + whatislove);
//wolframalpha.com/input/?i=QuotientRemainder%5B1004,935%5D

//10
var multipleTypes = ['(╯°□°）╯︵ ┻━┻', 111000];
console.log(multipleTypes);
var x = 6 / 0;
var y = 10 / 0;
if (x === y) {
	console.log("❤ can't divide by zero, but I say we are the same " + x + '=' + y);
} else {
	console.log('cant calculate');
}
