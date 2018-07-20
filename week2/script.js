//Main
//1 Strings

const myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString), console.log(myString.length);
const newMyString = myString.replace(/,/g, " ");
console.log(newMyString);

//2 Arrays
const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle"),
  console.log(favoriteAnimals),
  favoriteAnimals.splice(1, 0, "meerkat"),
  console.log(favoriteAnimals),
  console.log(`The array has a length of: ${favoriteAnimals.length}`),
  favoriteAnimals.splice(3, 1),
  console.log(favoriteAnimals),
  console.log(
    `The item you are looking for is at index: ${favoriteAnimals.indexOf("meerkat")}`
  );

//More JavaScript
//1
const a = 12;
const b = 245;
const c = 31;
function sum(d, e, f) {
  return d + e + f;
}
console.log(`Sum of ${a},${b},${c} is : ${sum(a, b, c)}`);

//2
function colorCar(a) {
  console.log(`My car have a ${a} color`);
}
colorCar("black");

//3
const pet = { name: "Alice", color: "white", age: 1.2 };
function info(a) {
  let b;
  (b = Object.keys(a)),
    b.forEach(c => {
      console.log(`${c} ${a[c]}`);
    });
}
info(pet);

//4
function vehicleType(a, b) {
  (b = 1 === b ? "car" : 2 === b ? "motorbike" : "(unknown vehicle type)"),
    console.log(`a ${a} ${b}`);
}
vehicleType("brown", 2);

//5
3 === 3 ? console.log("yes") : console.log("no");

//6
function vehicleType2(a, b, c) {
  (b = 1 === b ? "car" : 2 === b ? "motorbike" : "unknown vehicle type"),
    (c = 0 === c ? "new" : 1 === c ? "used" : "(unknown age)"),
    console.log(`a ${a} ${c} ${codeName}`);
}
vehicleType2("black", 1, 3);

//7
const vehicle = ["motorbike", "caravan", "bike", "car"];

//8
console.log(vehicle[2]);

//9
function vehicleType3(a, b, c) {
  (c = 0 === c ? "new" : 1 === c ? "used" : "(unknown age)"),
    vehicle[b] === void 0 && (vehicle[b] = "(unknown type)"),
    console.log(`a ${a} ${vehicle[b]} ${c}`);
}
vehicleType3("black", 5, 1);

//10
for (var message = "Amazing Joe's Garage, we service", i = 0; i < vehicle.length; ++i) {
  message += ` ${vehicle[i]}s${0 < i && i + 2 === vehicle.length ? " and" : i + 1 === vehicle.length ? "." : ","}`;
}
console.log(message);

//12
emptyObj = {}

//13
myTeachers = {
  Philipp: "",
  Unmesh: "",
  Mauro: "",
  Bonan: "",
  Joost: "",
  Daan: ""
};
console.log(myTeachers);

myTeachers.Philipp = "html/css";
myTeachers.Unmesh = "git";
myTeachers.Mauro = "javascript";
myTeachers.Bonan = "git";
myTeachers.Joost = "javascript";
myTeachers.Daan = "javascript";

console.log(myTeachers);

//15
const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;
console.log(x == y),
  console.log(x === y),
  console.log(z == y),
  console.log(z == x);

//16
const o1 = { foo: "bar" };
const o2 = { foo: "bar" };
const o3 = o2;
console.log(o2),
  (o3.foo = "changed"),
  console.log(o2),
  console.log(o3),
  (o1.foo = "changed"),
  console.log(o3);

//17
const bar = 42;
typeof typeof bar;
//return string because we check output of typeof, not a var
