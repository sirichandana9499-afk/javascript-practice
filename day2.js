// Day 2 - JavaScript Practice

// 1. Loops

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let j = 1;

while (j <= 5) {
  console.log(j);
  j++;
}

// 2. Functions

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

function greet(name) {
  console.log("Hello " + name);
}

greet("Ravi");

// 3. Arrays

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

fruits.push("Orange");

console.log(fruits);

// 4. Array Methods

let numbers = [10, 20, 30, 40, 50];

let doubled = numbers.map((num) => num * 2);
console.log(doubled);

let filtered = numbers.filter((num) => num > 25);
console.log(filtered);

let found = numbers.find((num) => num > 25);
console.log(found);

// 5. Objects and Nested Objects

let student = {
  name: "Sita",
  age: 22,
  address: {
    city: "Warangal",
    pincode: 506001,
  },
};

console.log(student.name);
console.log(student.age);
console.log(student.address.city);
