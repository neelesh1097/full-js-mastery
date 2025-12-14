# JavaScript Basics & Core Concepts – Revision Guide

This README serves as a structured revision guide for **core JavaScript fundamentals**. It is designed for beginners to intermediate learners who want a solid conceptual foundation and hands-on clarity for interviews, projects, and daily development.

---

## 1. JavaScript Overview

JavaScript is a **high-level, interpreted, dynamically typed** programming language primarily used for building interactive web applications. It runs on the browser as well as on servers via environments like Node.js.

Key characteristics:

* Single-threaded
* Event-driven
* Prototype-based
* Supports functional and object-oriented programming

---

## 2. Data Types in JavaScript

JavaScript data types are broadly classified into **Primitive** and **Non-Primitive (Reference)** types.

### 2.1 Primitive Data Types

Primitive values are immutable and stored by value.

* **String** – sequence of characters
* **Number** – integers and floating-point values
* **Boolean** – true or false
* **BigInt** – large integers beyond Number limit
* **Null** – intentional absence of value
* **Undefined** – declared but not assigned
* **Symbol** – unique and immutable identifier

Example:

```js
let name = "JavaScript";
let isActive = true;
let score = 100;
```

---

### 2.2 Non-Primitive Data Types

Non-primitive types are mutable and stored by reference.

* **Array** – ordered collection of values
* **Object** – key-value pairs
* **Function** – reusable block of code

Example:

```js
let arr = [1, 2, 3];
let user = { name: "Alex", age: 25 };
function greet() { console.log("Hello"); }
```

---

## 3. Data Structures in JavaScript

### 3.1 Arrays

Arrays are indexed collections used to store multiple values.

Common operations:

* push / pop
* shift / unshift
* slice
* splice
* map, filter, reduce

```js
let nums = [1, 2, 3, 4];
nums.splice(1, 1); // removes element
nums.slice(0, 2);  // returns a portion
```

---

### 3.2 Objects

Objects store data as key-value pairs.

```js
let person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello");
  }
};
```

---

### 3.3 Array and Object Destructuring

Destructuring allows unpacking values efficiently.

```js
const [a, b] = [1, 2];
const { name, age } = person;
```

---

## 4. Scope in JavaScript

Scope determines the accessibility of variables.

* **Global Scope** – accessible everywhere
* **Function Scope** – accessible inside function
* **Block Scope** – variables declared with let and const

```js
function test() {
  let x = 10;
}
```

---

## 5. Functions in JavaScript

### 5.1 Function Declaration

```js
function add(a, b) {
  return a + b;
}
```

### 5.2 Function Expression

```js
const add = function(a, b) {
  return a + b;
};
```

### 5.3 Arrow Function

```js
const add = (a, b) => a + b;
```

---

### 5.4 IIFE (Immediately Invoked Function Expression)

Executed immediately after definition.

```js
(function() {
  console.log("IIFE executed");
})();
```

---

## 6. Strings and Operations

Common string methods:

* length
* toUpperCase / toLowerCase
* includes
* split
* replace

```js
let str = "Hello World";
str.toUpperCase();
```

---

## 7. Numbers and Math in JavaScript

Math object methods:

* Math.round()
* Math.floor()
* Math.ceil()
* Math.random()
* Math.max() / Math.min()

```js
Math.random();
```

---

## 8. Date and Time

Used to work with dates and timestamps.

```js
let date = new Date();
date.getFullYear();
```

---

## 9. Operators

### 9.1 Ternary Operator

```js
let result = age >= 18 ? "Adult" : "Minor";
```

### 9.2 Nullish Coalescing Operator (??)

Returns right-hand value if left is null or undefined.

```js
let value = input ?? "Default";
```

---

## 10. JavaScript Execution Context

### 10.1 Call Stack

* Keeps track of function calls
* Uses LIFO (Last In First Out)

### 10.2 Heap Memory

* Stores objects and reference types

---

## 11. DOM (Document Object Model)

DOM represents the structure of an HTML document as objects.

Common operations:

* getElementById
* querySelector
* addEventListener

```js
document.querySelector("button").addEventListener("click", () => {
  console.log("Clicked");
});
```

---

## 12. Object-Oriented JavaScript

### 12.1 Object Literals

```js
const car = { brand: "BMW", speed: 200 };
```

---

### 12.2 Classes and Inheritance

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
```

---

### 12.3 Prototypes

JavaScript uses prototype-based inheritance.

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log("Hi");
};
```

---

## 13. Call, Bind, and Apply

Used to control function context (`this`).

```js
function greet(city) {
  console.log(this.name + " from " + city);
}

greet.call(user, "Delhi");
greet.apply(user, ["Mumbai"]);
const boundFn = greet.bind(user);
```

---

## 14. Summary

This README covers:

* JavaScript fundamentals
* Data types and structures
* Functions and scope
* Execution model
* DOM manipulation
* OOP concepts

Mastering these concepts builds a strong foundation for advanced JavaScript, frameworks, and interview preparation.

---

**Next Steps:**

* Practice problems
* Build small projects
* Explore async JavaScript and ES6+ features
