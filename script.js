// Select the menu button and navigation links
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu when a navigation link is clicked
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});

// Display the current year automatically
const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();