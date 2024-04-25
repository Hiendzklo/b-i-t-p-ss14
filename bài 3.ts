abstract class Shape1 {
    abstract calculateArea(): number; // Abstract method

    displayArea(): void {
        console.log(`Area: ${this.calculateArea()}`); // Method
    }
}

class Circle1 extends Shape1 {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle1 extends Shape1 {
    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle1(5);
circle.displayArea(); // Output: Area: 78.53981633974483

const rectangle1 = new Rectangle1(4, 6);
rectangle1.displayArea(); // Output: Area: 24
