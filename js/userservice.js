"use strict";
$().ready(() => {
    $("#refresh").click(() => {
        refresh();
    });
    refresh();
});
const list = () => {
    return $.getJSON("http://localhost:54318/api/users");
};
