document.querySelector('#menu').addEventListener('click', showMenu);

document.querySelector('#close').addEventListener('click', hideMenu);




function showMenu() {
    document.getElementById('navLinks').style.right = '0px';
    document.querySelector('#menu').style.opacity='0';
}
function hideMenu() {
    document.getElementById('navLinks').style.right = '-150px';
    document.querySelector('#menu').style.opacity='100';
}


