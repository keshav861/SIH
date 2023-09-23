let x, y;
var emailsClient = ["client1@gmail.com", "client3@gmail.com", "client2@gmail.com"];
var emailsConsultant = ["consultant1@gmail.com", "consultant3@gmail.com", "consultant2@gmail.com"];
document.querySelectorAll("input")[3].addEventListener("keypress", function(event) {
        if(event.key=="Enter")
        x = (document.forms["form"]["email"].value);
    
    if (emailsClient.includes(x))
    {document.querySelector("#form").setAttribute("action", "https://www.google.com");
    }
    else if (emailsConsultant.includes(x))
    {document.querySelector("#form").setAttribute("action", "https://www.bing.com");
    }
})
