// Sidebar toggle button
let sidebarToggle = document.getElementById("sidebar-toggle");
let sidebar = document.getElementById("sidebar");
let body = document.body;
let toggleFirst = document.querySelector('.menu-icon');

//toggle first
toggleFirst.addEventListener("click", function () {
    openSidebar();
});

// Toggle sidebar
sidebarToggle.addEventListener("click", function () {
    closeSidebar();
});

function openSidebar() {
    sidebar.classList.add("sidebar-responsive");
}

function closeSidebar() {
    sidebar.classList.remove("sidebar-responsive");
}


// Get the button and dropdown menu
var button = document.querySelector(".toggle");
var dropdown = document.querySelector(".content-user");

// Show or hide the dropdown menu when the button is clicked
function toggleDropdown() {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "flex";
        dropdown.classList.add('hide')
        document.addEventListener("click", outsideDropdown);
    } else {
        dropdown.style.display = "none";
        dropdown.classList.remove('hide')
        document.removeEventListener("click", outsideDropdown);
    }
}

// Close the dropdown menu when the user clicks outside of it or another time press the button
function outsideDropdown(event) {
    if (!event.target.closest(".content-user") && !event.target.closest(".toggle")) {
        dropdown.style.display = "none";
        document.removeEventListener("click", outsideDropdown);
    }
}


// ---------- animation random ----------
var randomCol = {
    nameCol: [{
        data: [10, 8, 6, 4, 2],
        colors: [
            "#246dec",
            "#cc3c43",
            "#367952",
            "#f5b74f",
            "#4f35a1"
        ],
    }]
};
/**
 *take animation to titles 
*/


/**
 * Search bar 
*/
function searchBar() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let results = document.getElementsByClassName('results');
    let noFind = document.querySelector('.no-find');
    let found = false;

    for (i = 0; i < results.length; i++) {
        let linkText = results[i].getElementsByTagName("a")[0].textContent.toLowerCase();

        if (!linkText.includes(input)) {
            results[i].style.display = "none";
        }
        else {
            found = true;
            results[i].style.display = "list-item";
        }
    }

    if (!found) {
        noFind.style.display = "flex";
        noFind.innerHTML = "<p>No matches found</p>";
    } else {
        noFind.style.display = "none";
        noFind.innerHTML = "";
    }
}





/**
 * Dark mode
*/
let btnDarkMode = document.querySelector('.darkBtn')
let BodyDark = document.body;

btnDarkMode.addEventListener("click", function () {
    BodyDark.classList.toggle('dark');
});
