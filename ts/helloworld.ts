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
        lastname:string, phone:string, email:string, isReviewer:boolean = true, isAdmin:boolean = true)
    {
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

    log(): void {
        console.log(`User is ${this.firstname, " ", this.lastname}` 
            + `and contact info is ${this.email}, "Email:", ${this.email}`
        );
    }

}

let u: User = new User(1, "test", "test", "test","test", "111-111-1111", "test@gmail.com",true , false);
//new User(2, "test2", "test2", "test2","test2", "211-111-1111", "test2@gmail.com",false, true);
//new User(3, "test3", "test3", "test3","test3", "311-111-1111", "test3@gmail.com", false, false);
u.log();

let users: User[] = [];
users.push(u);

for (let user of users) {
user.log()};

/* function refresh(user: any){
    for(user of users){

    }
}

const getUsers = () => {

} */
