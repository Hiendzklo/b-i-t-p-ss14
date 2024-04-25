"use strict";
/*
    Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và phương thức abstract getSize.

    Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.

    Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha, phương thức getSize để in ra các kích cỡ của hình trong lớp con.
*/
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`kích thước của hình chữ nhật là "${this.name}": ${this.width}x${this.height}`);
    }
}
let rectangle = new Rectangle("Hình chữ nhật", 5, 6);
console.log(rectangle.getName());
rectangle.getSize();
