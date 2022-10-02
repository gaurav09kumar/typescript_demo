var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStudentGrade = function () {
        if (this.studentMarks >= 75) {
            return "A";
        }
        else if (this.studentMarks >= 65 && this.studentMarks < 75) {
            return "B";
        }
        else {
            return "C";
        }
    };
    return Student;
}());
//creating object
var studentObj1 = new Student();
studentObj1.studentMarks = 64;
studentObj1.studentName = "Akash";
studentObj1.studentRank = 1;
console.log("Student Grade is : " + studentObj1.getStudentGrade());
console.log("Student Marks is : " + studentObj1.studentMarks);
console.log("Student Name is : " + studentObj1.studentName);
console.log("Student Rank is : " + studentObj1.studentRank);
//creating second object
var studentObj2 = new Student();
studentObj2.studentMarks = 96;
studentObj2.studentName = "John";
studentObj2.studentRank = 3;
console.log("Student Grade is : " + studentObj2.getStudentGrade());
console.log("Student Marks is : " + studentObj2.studentMarks);
console.log("Student Name is : " + studentObj2.studentName);
console.log("Student Rank is : " + studentObj2.studentRank);
