function sideNavBar() {
    const sideNav = document.querySelector('.side-nav-options');
    sideNav.style.left = '0'; // Slide in the side navbar
}

function cancelSideNav() {
    const sideNav = document.querySelector('.side-nav-options');
    sideNav.style.left = '-100%'; // Slide out the side navbar
}
