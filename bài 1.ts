/*
    Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và phương thức abstract getSize.

    Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.

    Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha, phương thức getSize để in ra các kích cỡ của hình trong lớp con. 
*/
abstract class Shape{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    getName(){
        return this.name
    }
    abstract getSize():void
}

class Rectangle extends Shape{
    width:number;
    height:number;
    constructor(name:string,width:number,height:number){
        super(name)
        this.width=width;
        this.height=height;
    }
    getSize(): void {
        console.log(`kích thước của hình chữ nhật là "${this.name}": ${this.width}x${this.height}`);
        
    }
}
let rectangle= new Rectangle("Hình chữ nhật",5,6)
console.log(rectangle.getName());
rectangle.getSize()

