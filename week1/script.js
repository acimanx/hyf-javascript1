//1
console.log("Привет мир!" + '\n' +
            "Hello world!");

//2
console.log("I'm awesome");

//3
var x;
console.log("the value of my variable x will be: undefined");
console.log(x);
x = 8;
console.log("the value of x will be: 8");
console.log(x);

//4
var y = "string";
console.log("the value of my variable y will be: string");
console.log(y);
y = "secondString";
console.log("the value of my variable y will be: secondString");
console.log(y);

//5
var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);
console.log(Math.max(z, a));

//6
var animals=["cat","dog","mouse"];
animals.push('baby pig');
console.log(animals);

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
let third = 'foobar';
console.log('the value of the variable third is: ' + third);
console.log('I think the type of the variable third is string.');
console.log(typeof third);
let fourth = [1, 2, 3, 4, 5];
console.log('the value of the variable fourth is: ' + fourth);
console.log('I think the type of the variable fourth is object.');
console.log(typeof fourth);

if (typeof first === typeof second) {
    console.log('variables are the same');
} else {
      console.log('variables are not the same');
}

//9
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
var dividend = 1004;
var divisor = 935;
var remainder = dividend % divisor;
console.log(remainder);
//wolframalpha.com/input/?i=QuotientRemainder%5B1004,935%5D

//10
var multipleTypes = ["string", 1];
console.log(multipleTypes);
var x = 6 / 0;
var y = 10 / 0;
if (x === y) {
	console.log(x + '=' + y);
} else {
	console.log("can't calculate");
}
