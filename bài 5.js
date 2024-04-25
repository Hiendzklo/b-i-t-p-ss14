"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        console.log(`Tốc độ được tăng lên! Tốc độ hiện tại:${this.speed}`);
    }
    slowDown() {
        this.speed -= 10;
        console.log(`Tốc độ đã giảm đi!Tốc độ hiện tại:${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`Đã dừng lại!Tốc độ hiện tại:${this.speed}`);
    }
}
const vehicle = new Vehicle(20);
vehicle.speedUp();
vehicle.slowDown();
vehicle.stop();
