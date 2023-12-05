"use strict";

const headerMenu = document.querySelector(".header__block");
const headerLogo = document.querySelector(".header__logo");
const menuBtn = document.querySelector(".header__btn--menu");
const menuBtnClose = document.querySelector(".header__btn--close");
const headerList = document.querySelector(".header__list");
const form = document.querySelector(".form");
const inputName = document.querySelector('[name="name"]');
const inputPhone = document.querySelector('[name="phone"]');

menuBtn.addEventListener("click", () => {
  headerMenu.classList.add("active");
  menuBtnClose.classList.add("active");
  menuBtn.classList.add("hover");
});

menuBtnClose.addEventListener("click", () => {
  headerMenu.classList.remove("active");
  menuBtnClose.classList.remove("active");
  menuBtn.classList.remove("hover");
});

const allItems = Array.from(headerList.children);
allItems.forEach((el) => {
  el.addEventListener("click", () => {
    headerMenu.classList.remove("active");
    menuBtnClose.classList.remove("active");
    menuBtn.classList.remove("hover");
  });
});

const time = 2000;
const step = 1;

function outNum(num, step, elem) {
  let el = document.querySelector(elem);
  let count = 0;
  let timeInterval = Math.round(time / (num / step));
  const intervalId = setInterval(() => {
    count = count + step;
    if (count === num) {
      clearInterval(intervalId);
    }
    el.textContent  = count + '+';
  }, timeInterval);
}

outNum(20, 1, ".number__experience");
outNum(100, 1, ".number__clients");
outNum(5000, 100, ".number__order");

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elementsBot = document.querySelectorAll(".element-animation");
let elementLeft = document.querySelectorAll(".element-animation-left");
let elementRight = document.querySelectorAll(".element-animation-right");

for (let elem of elementsBot) {
  observer.observe(elem);
}

for(let elem of elementLeft) {
  observer.observe(elem);
}

for(let elem of elementRight) {
  observer.observe(elem);
}

//vacancy
const vacancyContainer = document.querySelector('.vacancy__container');

vacancyContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('vacancy__subtitle')) {
    e.target.parentElement.classList.toggle('active');
    e.target.nextElementSibling.classList.toggle('active');
  }
});


//swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

//form
form.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(e) {
  e.preventDefault();
  const nameValue = inputName.value;
  const phoneValue = inputPhone.value;

  console.log(nameValue, phoneValue);

  form.reset();
}




