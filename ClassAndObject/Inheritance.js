class User{
    // User_Name
    // User_Age
    // User_email 
    // User_passward 
    constructor(nam, age, email,pass){
    this.User_Name =nam
    this.User_Age =age
    this.User_email = email
    this.User_passward = pass
    }
    
}

class PrintData extends User{
    constructor(Uname,age,email,pass){
        super(Uname,age,email,pass)
    }
    Print_User_Data(){
        console.log(this.User_Name,this.User_Age,this.User_email,this.User_passward);
    }
}

let U1 = new PrintData("Surjeet ",45,"Surjeet12@gmail.com","Surjeet12@")
console.log(U1.User_Name)
U1.Print_User_Data()

