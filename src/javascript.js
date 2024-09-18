window.onload = function() {
    fadeIn();
};

function fadeIn(){
    const nav = document.getElementById('navbar');
    const iframe = document.getElementById('iframes');
    const headerNewVid = document.getElementById('header_newest_video');
    nav.style.opacity = 1;
    iframe.style.opacity = 1;
    headerNewVid.style.opacity = 1;
}


const navbar = document.getElementById("navbar-container");

window.onscroll = function() {
    checkScrollY();
}

function checkScrollY() {
    if(window.scrollY > 50) {
        navbar.classList.add("backdrop-blur-sm", "transition-opacity", "duration-[0.3s]", "border-b-[1px]", "border-solid");
    } else {
        navbar.classList.remove("backdrop-blur-sm", "transition-opacity", "duration-[0.3s]", "border-b-[1px]", "border-solid");

    }
}