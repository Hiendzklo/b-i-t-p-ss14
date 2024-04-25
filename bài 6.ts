/*
    1.Abstract Class:
        Một abstract class là một lớp có thể có phương thức trừu tượng.
        Có thể chứa cả phương thức trừu tượng và phương thức đã được triển khai.
        Các phương thức trừu tượng trong abstract class không có phần thân.
        Một lớp có thể mở rộng từ một abstract class bằng từ khóa extends.
        Một lớp con cần phải triển khai tất cả các phương thức trừu tượng của abstract class mà nó kế thừa.
    2.Interface:
        Một interface chỉ chứa các khai báo phương thức hoặc thuộc tính, không có bất kỳ phần thân nào.
        Các lớp không kế thừa từ interface mà triển khai nó bằng từ khóa implements.
        Một lớp có thể triển khai nhiều interface.
        Interface không thể chứa các biến hoặc thuộc tính dữ liệu, chỉ có thể chứa các phương thức hoặc các khai báo hằng số.
*/
//1.Abstract Class:
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark bark!");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Bark bark!
dog.move();      // Output: Moving...

//2.Interface:
interface Shape11 {
    area(): number;
}

class Rectangle11 implements Shape11 {
    constructor(private width: number, private height: number) {}
    
    area(): number {
        return this.width * this.height;
    }
}

const rectangle11 = new Rectangle11(5, 10);
console.log(rectangle11.area()); // Output: 50

