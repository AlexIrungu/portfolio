// Import Bootstrap modules
import ScrollSpy from 'bootstrap/dist/js/bootstrap.bundle.min';

// Function to initialize Bootstrap scrollspy
function initializeScrollSpy() {
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }
}

// Function to collapse responsive navbar when toggler is visible
function collapseNavbarOnItemClick() {
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');

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
