let x, y;
var emailsClient = ["client1@gmail.com", "client3@gmail.com", "client2@gmail.com"];
var emailsConsultant = ["consultant1@gmail.com", "consultant3@gmail.com", "consultant2@gmail.com"];
document.querySelectorAll("input")[3].addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        x = (document.forms["form"]["email"].value);
        y = (document.forms["form"]["password"].value);
    }
    if (emailsClient.includes(x) && y == "user")
        document.querySelector("#form").setAttribute("action", "../user_interface/index2.html");
    else if (emailsConsultant.includes(x) && y == "consultant")
        document.querySelector("#form").setAttribute("action", "#");

    console.log(x);
})
