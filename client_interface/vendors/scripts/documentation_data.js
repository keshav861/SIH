const documentData = {
    mukulrohatgi: {
        name: "Mukul Rohatgi",
        profession: "Documentator",
        details: "professional specializing in documentation management and archival services. He holds a Bachelor's degree in Library Science and Information Management from a reputed institution, where he gained comprehensive knowledge and practical experience in organizing, cataloging, and managing documents and information resources effectively."
    },
    ramjethmalani: {
        name: "Ram Jethmalani",
        profession: "Documentator",
        details: "professional specializing in documentation management and archival services. He holds a Bachelor's degree in Library Science and Information Management from a reputed institution, where he gained comprehensive knowledge and practical experience in organizing, cataloging, and managing documents and information resources effectively."
    },
    ashokdesai: {
        name: "Ashok Desai",
        profession: "Documentator",
        details: "professional specializing in documentation management and archival services. He holds a Bachelor's degree in Library Science and Information Management from a reputed institution, where he gained comprehensive knowledge and practical experience in organizing, cataloging, and managing documents and information resources effectively."
    }
    
};

// Function to show the popup with data
hidePopup();

function showPopup(event) {
    // Fetch the advocate data based on the data-advocate attribute
    const documentKey = event.currentTarget.getAttribute("data-document");
    const data = documentData[documentKey];

    if (data) {
        document.getElementById("name").textContent = data.name;
        document.getElementById("profession").textContent = data.profession;
        document.getElementById("details").textContent = data.details;

        const popup = document.getElementById("popup");
        const overlay = document.getElementById("popupOverlay");

        overlay.style.display = "block";
        popup.style.display = "block";

        setTimeout(() => {
            popup.classList.add('show');
        }, 50);
    }
}

function hidePopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("popupOverlay");

    popup.classList.remove('show');

    setTimeout(() => {
        overlay.style.display = "none";
        popup.style.display = "none";
    }, 400);
}

// Add event listeners to all buttons with the class 'showPopupButton'
const buttons = document.querySelectorAll(".showPopupButton");
buttons.forEach(button => {
    button.addEventListener("click", showPopup);
});

document.getElementById("popupOverlay").addEventListener("click", hidePopup);
document.getElementById("closePopup").addEventListener("click", hidePopup);
document.getElementById("bookingButton").addEventListener("click", function() {
    alert("Booking button clicked!");
    hidePopup();
});
