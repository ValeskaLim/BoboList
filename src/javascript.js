window.onload = fadeIn;

function fadeIn(){
    const nav = document.getElementById('navbar');
    const iframe = document.getElementById('iframes');
    const headerNewVid = document.getElementById('header_newest_video');
    const modeSwitch = document.getElementById('darkmode');
    nav.style.opacity = 1;
    iframe.style.opacity = 1;
    headerNewVid.style.opacity = 1;
    modeSwitch.style.opacity = 1;
}

function darkMode() {
    const button = document.getElementById("modeButton");
    const body = document.body;
    const footer = document.getElementsByTagName("footer");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        button.src = '/assets/night-mode.png';
        button.style.filter = 'invert(0%)';
        footer[0].style.color = 'white';
        footer[0].style.backgroundColor = 'black';
    } else {
        body.classList.add("dark-mode");
        button.src = '/assets/light-mode.png';
        button.style.filter = 'invert(100%)';
        footer[0].style.color = 'black';
        footer[0].style.backgroundColor = 'white';
    }
}
