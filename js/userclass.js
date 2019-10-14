"use strict";
//let s: string = "Hello, World!";
//class def for user
//create array of user, fill with three instances
//itirate through and present in a table 
class User {
    constructor(id, username, password, firstname, lastname, phone, email, isReviewer = true, isAdmin = true) {
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
