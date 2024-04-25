"use strict";
/*
    bài 9
    Định nghĩa lớp Book có các thuộc tính id, title, author, stock và status.

    lớp Member có các thuộc tính id, name, contact, books và status. books là mảng chứa sách đang mượn.

    lớp LendedBook có các thuộc tính memberId, bookId và dueDate.

    Định nghĩa lớp Library có các thuộc tính: books là mảng chứa sách trong thư viện, members là mảng chứa khách hàng của thư viện.

    Trong lớp Library, xây dựng phương thức addBook để thêm sách vào thư viện, phương thức showBooks để xem tất cả sách đang có
    trong thư viện.

    Tạo ra một thực thể từ lớp Library, các thực thể từ lớp Book đã được định nghĩa. sử dụng các phương thức đã xây dựng để
    tiến hành thêm sách và xem tất cả sách trong thư viện.
    Bài 10
    Trong lớp Library, xây dựng phương thức registerMember để đăng ký thành viên cho thư viện. Mỗi khi được đăng ký thì sẽ tạo ra
    thực thể từ lớp Member và thêm thực thể đó vào mảng khách hàng của thư viện.

    Xây dựng phương thức blockMember để thay đổi status của thành viên thư viện, phương thức showMembers
    hiển thị tất cả thành viên trong thư viện.

    Sử dụng các phương thức đã xây dựng để tiến hành đăng ký cho khách hàng và hiển thị tất cả thành viên trong thư viện.
*/
// Định nghĩa lớp Book 
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
// Định nghĩa lớp Member
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = status;
    }
    // Phương thức mượn sách
    borrowBook(bookId, library) {
        // Tìm sách trong thư viện bằng id
        const book = library.books.find(book => book.id === bookId);
        if (book) {
            // Kiểm tra xem sách còn trong kho và có sẵn để mượn hay không
            if (book.stock > 0 && book.status === "Available") {
                // Kiểm tra xem thành viên đã từng mượn sách này chưa
                if (this.books.some(book => book.id === bookId)) {
                    console.log("Bạn đã mượn sách này trước đó. Vui lòng trả sách trước khi mượn tiếp.");
                }
                else {
                    // Giảm số lượng sách trong kho đi 1
                    book.stock--;
                    // Tạo đối tượng LendedBook và thêm vào mảng sách của thành viên
                    const lendedBook = new LendedBook(this.id, bookId, ""); // Due date sẽ được cập nhật khi trả sách
                    console.log(`Bạn đã mượn sách "${book.title}" thành công.`);
                    // Thêm sách vào mảng của thành viên
                    this.books.push(book);
                }
            }
            else {
                console.log(`Sách "${book.title}" không có sẵn để mượn.`);
            }
        }
        else {
            console.log("Không tìm thấy sách trong thư viện.");
        }
    }
    // Phương thức trả sách
    returnBook(bookId, library) {
        // Tìm sách trong mảng sách của thành viên bằng id
        const index = this.books.findIndex(book => book.id === bookId);
        if (index !== -1) {
            const book = this.books[index];
            // Tăng số lượng sách trong kho lên 1
            const libraryBook = library.books.find(libBook => libBook.id === bookId);
            if (libraryBook) {
                libraryBook.stock++;
            }
            // Xóa sách khỏi mảng sách đã mượn của thành viên
            this.books.splice(index, 1);
            console.log(`Bạn đã trả sách "${book.title}" thành công.`);
        }
        else {
            console.log("Bạn chưa mượn sách này.");
        }
    }
}
// Định nghĩa lớp LendedBook
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
//Định nghĩa lớp Library
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    // Phương thức thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    // Phương thức hiển thị tất cả sách trong thư viện
    showBooks() {
        console.log("Các sách trong thư viện");
        this.books.forEach(book => {
            console.log(`ID:${book.id},Title:${book.title},author:${book.author},stock:${book.stock},status:${book.status}`);
        });
    }
    // Phương thức đăng ký thành viên cho thư viện
    registerMember(name, contact) {
        const memberId = this.members.length + 1;
        const newMember = new Member(memberId, name, contact, "Atractive");
        this.members.push(newMember);
        console.log(`Đã đăng ký thành viên mới: ID: ${memberId}, Name: ${name}, Contact: ${contact}`);
    }
    //phương thức thay đổi trạng thái của thành viên
    blockMember(memberId) {
        const member = this.members.find(member => member.id === memberId);
        if (member) {
            member.status = "Blocked";
            console.log(`Đã chặn thành viên:ID: ${memberId}`);
        }
        else {
            console.log(`không tìm thấy thành viên có ID:${memberId}`);
        }
    }
    //Phương thức hiển thị các thành viên có trong thư viện
    showMembers() {
        console.log("Các thành viên có trong thư viên:");
        this.members.forEach(member => {
            console.log(`ID:${member.id},Name:${member.name},Contact:${member.contact},Status:${member.status}`);
        });
    }
}
//tạo một thực thể từ lớp Library
let library = new Library();
//tạo các thực thể từ lớp Book
let book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 10, "Available");
let book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee", 15, "Available");
let book3 = new Book(3, "1984", "George Orwell", 12, "Available");
//thêm sách vào thư viện và hiển thị tất cả sách trong thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
console.log("--------");
// Đăng ký thành viên mới và hiển thị tất cả thành viên
library.registerMember("Thái Tử", "Thaitu@example.com");
library.registerMember("Duy Hiển", "DuyHien@example.com");
library.showMembers();
// Chặn một thành viên và hiển thị lại danh sách thành viên
library.blockMember(1);
library.showMembers();
let member = new Member(1, "Nguyễn Văn A", "0901234567", "Hoạt động");
// Mượn sách
member.borrowBook(book1.id, library);
// Hiển thị lại tình trạng của sách và thành viên
library.showBooks();
console.log("--------");
library.showMembers();
console.log("--------");
member.returnBook(book1.id, library);
library.showBooks();
