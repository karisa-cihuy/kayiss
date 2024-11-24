// toggle class active
const navbarExtra = document.querySelector( '.navbar-extra');
// ketike hamburger menu di klik
document.querySelector('hamburger-menu').onclick = () => {
    navbarExtra.classList.toggle('active');
};
