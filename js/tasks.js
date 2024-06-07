const slider = document.querySelector(".slider");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
let current = 0;
//  текущий слайд 0 
let width = 369;

// slides = slider.querySelectorAll(".slide");
//     slides[1].classList.add("slider--diplace");

// const sliderDiplace = () => {
//     slider.classList.toggle("slider--displace");
// }

document.documentElement.style.setProperty("--width-of-slide", width + 'px');

btnNext.addEventListener('click', () => {
    let slides = slider.querySelectorAll(".slide");
    // slides[0].classList.remove("slider--diplace");
    // slides[1].classList.remove("slider--diplace");
    // slides[2].classList.remove("slider--diplace");
    slider.innerHTML = slider.innerHTML.replace(slides[0].outerHTML, "");
    slider.innerHTML += slides[0].outerHTML;

    // slides = slider.querySelectorAll(".slide");
    // slides[1].classList.add("slider--diplace");

});
btnPrev.addEventListener('click', () => {

    let slides = slider.querySelectorAll(".slide");
    // slides[0].classList.remove("slider--diplace");
    // slides[1].classList.remove("slider--diplace");
    // slides[2].classList.remove("slider--diplace");

    slider.innerHTML = slider.innerHTML.replace(slides[0].outerHTML, "");
    slider.innerHTML += slides[0].outerHTML;

    // slides = slider.querySelectorAll(".slide");
    // slides[1].classList.add("slider--diplace");

});


// фиксированная шапка

const header = document.querySelector("header");
const firstBlock = document.querySelector(".banner");
const firstBlockHeigth = 500;
const offsetFirstBlockHeight = firstBlock.offsetHeight;

let scrollStarted = 0;

window.addEventListener('scroll', headerScrollHandler);

function headerScrollHandler() {
    const scrolltop = window.pageYOffset

    if (scrolltop >= firstBlockHeigth) {
        header.classList.add('header--fixed')

    }
    else {

        header.classList.remove('header--fixed');


    }


};


//бурдер-меню

const menu = document.querySelector(".global__menu");
const burgerBtn = document.querySelector(".burger");

const mainnav = document.querySelector(".main-nav");

burgerBtn.addEventListener('click', (evnt) => {
    menu.classList.toggle('menu--open');
    mainnav.classList.toggle('main-nav--open');
});
