const menuBtn = document.querySelector('#menu');
const navBar = document.querySelector('.nav-bar');
const closeBtn = document.querySelector('#menu-close');


menuBtn.onclick = (e) => {
    navBar.style.display = 'block';
    menuBtn.style.display = 'none';
}
closeBtn.onclick = (e) => {
    navBar.style.display = 'none';
    menuBtn.style.display = 'block';
}
