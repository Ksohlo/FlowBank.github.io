function showMenu() {
    document.getElementById('navLinks').style.display = 'block';
    document.querySelector('#menu').style.opacity='0';
}
function hideMenu() {
    document.getElementById('navLinks').style.display = 'none';
    document.querySelector('#menu').style.opacity='100';
}


document.querySelector('#menu').addEventListener('click', showMenu);

document.querySelector('#close').addEventListener('click', hideMenu);
