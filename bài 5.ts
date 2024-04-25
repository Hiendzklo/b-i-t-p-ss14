/*
    Tạo ra interface changeSpeed chứa các phương thức: speedUp, slowDown và stop.
    Định nghĩa lớp Vehicle implement interface changeSpeed có thuộc tính private speed.

    Xây dựng các phương thức để thay đổi thuộc tính speed. 
    Tạo ra 1 thực thể từ lớp Vehicle và gọi các phương thức, sau mỗi phương thức thì in thông tin để kiểm tra kết quả.
*/
interface changeSpeed{
    speedUp():void;
    slowDown():void;
    stop():void;
}
class Vehicle implements changeSpeed{
    private speed:number;
    constructor(speed:number){
        this.speed=speed;
    }
    speedUp(): void {
        this.speed +=10
        console.log(`Tốc độ được tăng lên! Tốc độ hiện tại:${this.speed}`);
        
    }
    slowDown(): void {
        this.speed -=10
        console.log(`Tốc độ đã giảm đi!Tốc độ hiện tại:${this.speed}`);
        
    }
    stop(): void {
        this.speed =0
        console.log(`Đã dừng lại!Tốc độ hiện tại:${this.speed}`);
    }
}
const vehicle= new Vehicle(20)
vehicle.speedUp()
vehicle.slowDown()
vehicle.stop()
