const advocatesData = {
    kdPathak: {
        name: "K.D. Pathak",
        profession: "Criminal lawyer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint repudiandae nobis necessitatibus sequi beatae excepturi ad minus eum velit libero ab porro quod, temporibus neque! At natus impedit deserunt? Distinctio, architecto eum? Quidem explicabo maxime nisi assumenda aperiam nesciunt nemo aliquam labore, magnam rem porro! Repellat unde quidem sed."
    },
    mickeyhaller: {
        name: "Mickey Haller",
        profession: "Criminal lawyer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint repudiandae nobis necessitatibus sequi beatae excepturi ad minus eum velit libero ab porro quod, temporibus neque! At natus impedit deserunt? Distinctio, architecto eum? Quidem explicabo maxime nisi assumenda aperiam nesciunt nemo aliquam labore, magnam rem porro! Repellat unde quidem sed."
    },
    mukulrohatgi: {
        name: "Mukul Rohatgi",
        profession: "Criminal lawyer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint repudiandae nobis necessitatibus sequi beatae excepturi ad minus eum velit libero ab porro quod, temporibus neque! At natus impedit deserunt? Distinctio, architecto eum? Quidem explicabo maxime nisi assumenda aperiam nesciunt nemo aliquam labore, magnam rem porro! Repellat unde quidem sed."
    },
    ramjethmalani: {
        name: "Ram Jethmalani",
        profession: "Criminal lawyer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint repudiandae nobis necessitatibus sequi beatae excepturi ad minus eum velit libero ab porro quod, temporibus neque! At natus impedit deserunt? Distinctio, architecto eum? Quidem explicabo maxime nisi assumenda aperiam nesciunt nemo aliquam labore, magnam rem porro! Repellat unde quidem sed."
    },
    ashokdesai: {
        name: "Ashok Desai",
        profession: "Criminal lawyer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint repudiandae nobis necessitatibus sequi beatae excepturi ad minus eum velit libero ab porro quod, temporibus neque! At natus impedit deserunt? Distinctio, architecto eum? Quidem explicabo maxime nisi assumenda aperiam nesciunt nemo aliquam labore, magnam rem porro! Repellat unde quidem sed."
    }
    
};

// Function to show the popup with data
hidePopup();

function showPopup(event) {
    // Fetch the advocate data based on the data-advocate attribute
    const advocateKey = event.currentTarget.getAttribute("data-advocate");
    const data = advocatesData[advocateKey];

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
