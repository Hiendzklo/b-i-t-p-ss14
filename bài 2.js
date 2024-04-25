"use strict";
/*
Định nghĩa lớp abstract Job có thuộc tính type, phương thức printType để in ra loại công việc và phương thức abstract calculateSalary
để tính lương khi làm công việc đó.

Định nghĩa lớp PartimeJob và lớp FulltimeJob kế thừa lớp Job. Lớp PartimeJob có thêm thuộc tính workingHour.

Xây dựng phương thức printType để in ra loại công việc trong lớp cha, phương thức calculateSalary để tính lương công việc.
Lương fulltime sẽ mặc định là 10.000.000, lương partime sẽ được tính theo công thức 30.000 * workingHour.
*/
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        return this.type;
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
let fulltime = new FulltimeJob("Lương fulltime");
let partime = new PartimeJob("Lương Partime", 5);
console.log(fulltime.type);
console.log(fulltime.calculateSalary());
console.log(partime.type);
console.log(partime.calculateSalary());
