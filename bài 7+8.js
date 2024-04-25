"use strict";
/*
    Bài 7:
    Định nghĩa lớp Student có các thuộc tính private id và name, tạo một mảng để chứa các thực thể được tạo ra từ lớp student.

    Định nghĩa lớp Classroom có thuộc tính students là mảng các học sinh trong lớp đó. Lớp có phương thức addStudent để thêm học sinh
    vào trong lớp, phương thức showStudents để in ra danh sách học sinh trong lớp. Phương thức sẽ có tham số truyền vào là id học sinh.
    Phương thức sẽ thêm học sinh từ trong mảng tất cả học sinh vào lớp học, sau khi thêm thì xóa học sinh đó khỏi mảng tất cả học sinh.

    Tạo 6 thực thể từ lớp Student và thêm vào mảng tất cả học sinh.

    Tạo 2 thực thể từ lớp Classroom và thêm học sinh cho chúng, mỗi lớp học sẽ có 3 học sinh.

    Bài 8:
    Xây dựng thêm phương thức removeStudent và editStudent cho lớp Classroom đã được định nghĩa trong bài trước.

    Phương thức removeStudent sẽ xóa học sinh ra khỏi mảng học sinh của lớp và thêm học sinh đã bị xóa vào mảng tất cả học sinh.

    Phương thức editStudent sẽ cho phép ghi đè thông tin của một học sinh trong lớp.

    Sử dụng 2 phương thức đã xây dựng và kiểm tra thông tin sau khi thay đổi bằng phương thức showStudents đã xây dựng.



*/
//tạo lớp Student
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
//tạo lớp classroom
class Classroom {
    constructor(allStudents) {
        this.students = [];
        this.allStudents = allStudents;
    }
    // phương thức addStudent để thêm học sinh vào trong lớp   
    addStudent(student) {
        this.students.push(student);
    }
    //phương thức showStudents để in ra danh sách học sinh trong lớp
    showStudents() {
        console.log("Học sinh có trong lớp:");
        this.students.forEach(student => {
            console.log(`ID:${student.getId()},Name:${student.getName()}`);
        });
    }
    //phương thức xóa học sinh ra khỏi lớp
    removeStudent(id) {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            const removeStudent = this.students.splice(index, 1)[0];
            this.allStudents.push(removeStudent);
            console.log(`Học sinh có ID${id} đã được xóa khỏi lớp`);
        }
        else {
            console.log(`Không tìm thấy học sinh có id:${id} trong lớp`);
        }
    }
    //phương thức ghi đè để chỉnh sửa thông tin học sinh
    editStudent(id, newName) {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            this.students[index] = new Student(id, newName);
            console.log(`Thông tin học sinh có id:${id} đã được sửa`);
        }
        else {
            console.log(`Không tìm thấy học sinh có id:${id} trong lớp`);
        }
    }
}
//Tạo 6 thực thể từ lớp Student và thêm vào mảng tất cả học sinh.
for (let i = 1; i <= 6; i++) {
    let student = new Student(i, `Student${i}`);
    allStudents.push(student);
}
//Tạo 2 thực thể từ lớp Classroom và thêm học sinh cho chúng, mỗi lớp học sẽ có 3 học sinh.
let classroom1 = new Classroom(allStudents);
let classroom2 = new Classroom(allStudents);
for (let i = 0; i < 3; i++) {
    classroom1.addStudent(allStudents.pop());
    classroom2.addStudent(allStudents.pop());
}
//hiện thị 2 lớp học
classroom1.showStudents();
classroom2.showStudents();
console.log("-----");
// Tạo một đối tượng Classroom với mảng học sinh
let classroom = new Classroom(allStudents);
// Thêm một số học sinh vào lớp
classroom.addStudent(new Student(7, "Học sinh 7"));
classroom.addStudent(new Student(8, "Học sinh 8"));
// Hiển thị danh sách học sinh trong lớp
classroom.showStudents();
// Xóa một học sinh khỏi lớp
classroom.removeStudent(4);
// Chỉnh sửa thông tin của một học sinh
classroom.editStudent(7, "Học sinh 7 đã chỉnh sửa");
// Hiển thị danh sách học sinh đã được cập nhật trong lớp
classroom.showStudents();
