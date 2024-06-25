const advocatesData = {
    kdPathak: {
        name: "K.D. Pathak",
        profession: "Criminal lawyer",
        details: "legal luminary and one of India's most prominent and influential lawyers. With his sharp intellect, unparalleled courtroom skills, and fearless advocacy, he left an indelible mark on the Indian legal system.",
        price: 700,
        location: "Solan",
        court: "Supreme Court",
        rating: 5
    },
    mickeyhaller: {
        name: "Mickey Haller",
        profession: "HDFC-Bank",
        details: "banker with over 20 years of experience in the financial industry. He holds a Bachelor's degree in Economics from a prestigious university and pursued further education in finance, earning an MBA with a focus on banking and finance.",
        price: 200,
        location: "Delhi",
        court: "District Court",
        rating: 4
    },
    mukulrohatgi: {
        name: "Mukul Rohatgi",
        profession: "C.A.",
        details: "experienced Chartered Accountant with a stellar academic background and extensive professional experience in accounting, auditing, taxation, and financial advisory services. She holds a Bachelor's degree in Commerce with a specialization in Accounting and Finance from a renowned university. After completing her undergraduate studies, she pursued the rigorous Chartered Accountancy (CA) program, earning her CA designation from the Institute of Chartered Accountants of India (ICAI)",
        price: 300,
        location: "Mumbai",
        court: "District Court",
        rating: 4
    },
    ramjethmalani: {
        name: "Ram Jethmalani",
        profession: "Criminal lawyer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint repudiandae nobis necessitatibus sequi beatae excepturi ad minus eum velit libero ab porro quod, temporibus neque! At natus impedit deserunt? Distinctio, architecto eum? Quidem explicabo maxime nisi assumenda aperiam nesciunt nemo aliquam labore, magnam rem porro! Repellat unde quidem sed.",
        price: 600,
        location: "Mumbai",
        court: "supreme Court",
        rating: 4
    },
    ashokdesai: {
        name: "Ashok Desai",
        profession: "Criminal lawyer",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint repudiandae nobis necessitatibus sequi beatae excepturi ad minus eum velit libero ab porro quod, temporibus neque! At natus impedit deserunt? Distinctio, architecto eum? Quidem explicabo maxime nisi assumenda aperiam nesciunt nemo aliquam labore, magnam rem porro! Repellat unde quidem sed.",
        price: 400,
        location: "Solan",
        court: "High Court",
        rating: 3
    }
};

hidePopup();
// Function to show the popup with data
function hidePopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("popupOverlay");

    popup.classList.remove('show');

    setTimeout(() => {
        overlay.style.display = "none";
        popup.style.display = "none";
    }, 400);
}

function showPopup(event) {
    const advocateKey = event.currentTarget.getAttribute("data-advocate");
    const data = advocatesData[advocateKey];

    if (data) {
        document.getElementById("name").textContent = data.name;
        document.getElementById("professionPopup").textContent = data.profession;
        document.getElementById("details").textContent = data.details;
        document.getElementById("price").textContent = `₹ ${data.price}`;

        const popup = document.getElementById("popup");
        const overlay = document.getElementById("popupOverlay");

        overlay.style.display = "block";
        popup.style.display = "block";

        setTimeout(() => {
            popup.classList.add('show');
        }, 50);
    }
}

function showFilterContainer() {
    const filterContainer = document.getElementById("filterContainer");
    if (filterContainer.style.display === "none" || !filterContainer.style.display) {
        filterContainer.style.display = "block";
    } else {
        filterContainer.style.display = "none";
    }
}

document.getElementById("filterIcon").addEventListener("click", showFilterContainer);

document.getElementById("applyFilter").addEventListener("click", function () {
    applyFilters();
});
document.getElementById("resetFilter").addEventListener("click", resetFilter);
document.getElementById("autoLocation").addEventListener("change", function () {
    if (this.checked) {
        getLocation();
    } else {
        document.getElementById("manualLocation").style.display = "block";
    }
});
function resetFilter() {
    document.getElementById("location").value = '';
    document.getElementById("profession").value = '';
    document.getElementById("priceRange").value = 1000;
    document.getElementById("rating").value = '1';

    displayFilteredData(Object.values(advocatesData));
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const userLocation = position.coords.latitude + "," + position.coords.longitude;
    console.log("User location: ", userLocation);
    // Here, you would ideally convert coordinates to a location and set it as a selected option
    document.getElementById("manualLocation").style.display = "none";
    // Auto-detect location logic should go here
}

function applyFilters() {
    const location = document.getElementById("location").value;
    const profession = document.getElementById("profession").value;
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;
    const rating = document.getElementById("rating").value;

    // Filter the data based on the selected filters
    const filteredAdvocates = Object.values(advocatesData).filter(advocate => {
        return (!location || advocate.location === location) &&
            (!profession || advocate.profession === profession) &&
            (!minPrice || advocate.price >= minPrice) &&
            (!maxPrice || advocate.price <= maxPrice) &&
            (!rating || advocate.rating >= rating);
    });

    renderAdvocates(filteredAdvocates);
}

function renderAdvocates(advocates) {
    const advocatesList = document.getElementById("advocatesList");
    advocatesList.innerHTML = advocates.map(advocate => `
        <li class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div class="contact-directory-box">
                <div class="contact-dire-info text-center">
                    <div class="contact-avatar">
                        <span>
                            <img src="/client_interface/vendors/images/photo2.jpg" alt="">
                        </span>
                    </div>
                    <div class="contact-name">
                        <h4>${advocate.name}</h4>
                    </div>
                    <div class="contact-skill">
                        <span class="badge badge-pill">${advocate.location}</span>
                        <span class="badge badge-pill">${advocate.court}</span>
                    </div>
                    <div class="profile-sort-desc">
                        ${advocate.details}
                    </div>
                </div>
                <div class="view-contact">
                    <a href="#" data-advocate="${advocate.name}" class="showPopupButton">View Profiles</a>
                </div>
            </div>
        </li>
    `).join('');
}

// Add event listeners to all buttons with the class 'showPopupButton'
const buttons = document.querySelectorAll(".showPopupButton");
buttons.forEach(button => {
    button.addEventListener("click", showPopup);
});

document.getElementById("popupOverlay").addEventListener("click", hidePopup);
document.getElementById("closePopup").addEventListener("click", hidePopup);
document.getElementById("bookingButton").addEventListener("click", function () {
    alert("Booking button clicked!");
    hidePopup();
});
