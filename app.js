AOS.init({
    duration: 1000,
    mirror: true,
    offset: 120,
});

// function toggleMenu(){
//     const menuToggle = document.querySelector('.toggle');
//     // const nav = document.querySelector('nav');

//     menuToggle.classList.toggle('active');
//     // nav.classList.toggle('active');
// }

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})

const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})