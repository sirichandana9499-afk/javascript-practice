// Day 3- JavaScript Basics

// 1. Truthy and Falsy Values

let value = "";

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

let name = "Ravi";

if (name) {
  console.log("Name is available");
}

// 2. Logical Operators

let age = 22;
let hasId = true;

console.log(age >= 18 && hasId);
console.log(age < 18 || hasId);
console.log(!hasId);

// 3. Loops

// For loop

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// While loop

let j = 1;

while (j <= 5) {
  console.log(j);
  j++;
}

// 4. Break and Continue

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }

  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i == 4) {
    break;
  }

  console.log(i);
}

// 5. Functions

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

function greet(name) {
  console.log("Hello " + name);
}

greet("Ravi");
