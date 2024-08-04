//Fist class
class User{
    UserName
    UserEmail
   UserPassword
   printUserData(){
       console.log(this.UserName,this.UserEmail,this.UserPassword)
   }
}

let U1 = new User();
U1.UserEmail='Surjeet12@gamil.com'
U1.UserName= 'Surjeet Singh'
U1.UserPassword ="Surjeet12@"
U1.printUserData()

//SecondClass

class Student {
    // let Student_name;
    // let roll_no;
    // let sec ;  //not allow
    //First Class
    
    constructor(Student_name,roll_no , sec){
        this.Student_name = Student_name
        this.roll_no = roll_no
        this.sec = sec
    }

 printStudentData() {
    console.log(this.Student_name,this.roll_no,this.sec)
}

}

let Student1 = new Student("Surjeet",45,'H')
Student1.printStudentData()
console.log(Student1.Student_name)
console.log(Student1.roll_no)
console.log(Student1.sec)

//Second Class
