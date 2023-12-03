window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
});

document.querySelector('.historial-link a').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('historial').scrollIntoView({ behavior: 'smooth' });
});

function toggleSidebar() {
    var menuOverlay = document.querySelector('.menu-overlay');
    var menu = document.querySelector('.menu');

    if (menuOverlay && menu) {
        menuOverlay.style.display = (menu.style.left === '-100%' || menu.style.left === '') ? 'block' : 'none';
        menu.style.left = (menu.style.left === '0%') ? '-100%' : '0%';
    }
}

document.addEventListener('click', function(event) {
    var menuOverlay = document.querySelector('.menu-overlay');
    var menu = document.querySelector('.menu');

    if (!menu.contains(event.target)) {
        menuOverlay.style.display = 'none';
        menu.style.left = '-100%';
    }
});

document.querySelector('.menu').addEventListener('click', function(event) {
    event.stopPropagation();
});