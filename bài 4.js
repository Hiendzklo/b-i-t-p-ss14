"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return Math.PI * this.radius * 2;
    }
}
class Rectangles {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
}
let circle1 = new Circle(5);
console.log("Diện tích và chu vi hình tròn có cạnh là 5:");
console.log(circle1.calculateArea());
console.log(circle1.calculatePerimeter());
let rectangles = new Rectangles(4, 5);
console.log("Diện tích và chu vi hình chữ nhật có cạnh là 4,5:");
console.log(rectangles.calculateArea());
console.log(rectangles.calculatePerimeter());
