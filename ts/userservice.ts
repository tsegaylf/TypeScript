$().ready(()=>{
    $("#refresh").click(()=>{
        refresh();
    });
    refresh();
});

const list = (): JQuery.jqXHR =>{
    return $.getJSON("http://localhost:54318/api/users");
}