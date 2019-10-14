//let s: string = "Hello, World!";
//class def for user
//create array of user, fill with three instances
//itirate through and present in a table 

class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;

    constructor(id:number, username:string, password:string, firstname:string, 
        lastname:string, phone:string, email:string, isReviewer:boolean = true, isAdmin:boolean = true){
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
    }
}

