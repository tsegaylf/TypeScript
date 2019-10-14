"use strict";
let users = [
    new User(2, "test2", "test2", "test2", "test2", "211-111-1111", "test2@gmail.com", false, true),
    new User(3, "test3", "test3", "test3", "test3", "311-111-1111", "test3@gmail.com", false, false),
];
const refresh = () => {
    let jqXHR = users.push();
    list().done((res) => {
        console.log("Users:", res);
        display(res);
    });
};
const display = (users) => { let tbody = $("tbody"); tbody.html(""); };
for (let user of users) {
    let tr = $("<tr></tr>");
    {
        tr.append(`<td>${user.id}</td>`);
        tr.append(`<td>${user.username}</td>`);
        tr.append(`<td>${user.password}</td>`);
        tr.append(`<td>${user.firstname}</td>`);
        tr.append(`<td>${user.lastname}</td>`);
        tr.append(`<td>${user.phone}</td>`);
        tr.append(`<td>${user.email}</td>`);
        tr.append(`<td>${user.isReviewer ? "Yes" : "No"}</td>`);
        tr.append(`<td>${user.isAdmin ? "Yes" : "No"}</td>`);
        tr.append();
    }
}
