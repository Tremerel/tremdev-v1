AOS.init({
    duration: 1000,
    mirror: true,
    offset: 120,
});

function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    // const nav = document.querySelector('nav');

    menuToggle.classList.toggle('active');
    // nav.classList.toggle('active');
}

const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})