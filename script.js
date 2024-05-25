let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
// Slideshow
let slideIndex = 0;
const images = [
    'images/home1.jpg',
    'images/home2.jpg',
    'images/home3.jpg',
    'images/home4.jpg',
    'images/home5.jpg'
];

function showSlides() {
    const box = document.querySelector('.slideshow .box');
    box.style.backgroundImage = `url(${images[slideIndex]})`;
    slideIndex = (slideIndex + 1) % images.length;
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
