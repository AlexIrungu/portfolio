// Import Bootstrap modules
import ScrollSpy from 'bootstrap/dist/js/bootstrap.bundle.min';

// Function to initialize Bootstrap scrollspy
function initializeScrollSpy() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        new ScrollSpy(document.body, {
            target: '.navbar',
            offset: 50,
        });
    }
}

// Function to collapse responsive navbar when toggler is visible
function collapseNavbarOnItemClick() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('.navbar-nav .nav-link');

    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
}

// Event listener for DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
    initializeScrollSpy();
    collapseNavbarOnItemClick();
});
