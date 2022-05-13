const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('.navegacion');

function abrir(){
    menu.classList.add('noshow');
    closeMenu.classList.remove('noshow');
    nav.classList.remove('noshow');
    document.body.style.overflow = 'hidden';
}

function cerrar(){
    menu.classList.remove('noshow');
    closeMenu.classList.add('noshow');
    nav.classList.add('noshow');
    document.body.style.overflow = 'scroll';
}


