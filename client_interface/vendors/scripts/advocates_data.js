const advocatesData = {
    kdPathak: {
        name: "K.D. Pathak",
        profession: "Criminal lawyer",
        details: "legal luminary and one of India's most prominent and influential lawyers. With his sharp intellect, unparalleled courtroom skills, and fearless advocacy, he left an indelible mark on the Indian legal system."
    },
    mickeyhaller: {
        name: "Mickey Haller",
        profession: "HDFC-Bank",
        details: "banker with over 20 years of experience in the financial industry. He holds a Bachelor's degree in Economics from a prestigious university and pursued further education in finance, earning an MBA with a focus on banking and finance."
    },
    mukulrohatgi: {
        name: "Mukul Rohatgi",
        profession: "C.A.",
        details: "experienced Chartered Accountant with a stellar academic background and extensive professional experience in accounting, auditing, taxation, and financial advisory services. She holds a Bachelor's degree in Commerce with a specialization in Accounting and Finance from a renowned university. After completing her undergraduate studies, she pursued the rigorous Chartered Accountancy (CA) program, earning her CA designation from the Institute of Chartered Accountants of India (ICAI)"
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
