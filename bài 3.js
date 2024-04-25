"use strict";
class Shape1 {
    displayArea() {
        console.log(`Area: ${this.calculateArea()}`); // Method
    }
}
class Circle1 extends Shape1 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle1 extends Shape1 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle1(5);
circle.displayArea(); // Output: Area: 78.53981633974483
const rectangle1 = new Rectangle1(4, 6);
rectangle1.displayArea(); // Output: Area: 24
