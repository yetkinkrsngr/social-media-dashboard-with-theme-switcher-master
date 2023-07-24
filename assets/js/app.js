"use strict";
//bg color change
const main = document.querySelector("main");
const header = document.querySelector("header");
const bigBoxes = document.querySelectorAll(".bigBox");
const smallBoxes = document.querySelectorAll(".smallbox");
// event listener for checkbox
const checkBox = document.querySelector(".checkbox");
//font color change
const navh = document.querySelector(".nav-h");
const navp = document.querySelector(".nav-p");
const h4 = document.querySelectorAll("h4");
const h1 = document.querySelectorAll("h1");
const p = document.querySelectorAll("p");
//text change
const swichp = document.querySelector(".swich-p");

checkBox.addEventListener("click", function () {
  if (checkBox.checked) {
    main.classList.add("darkThemeBg");
    header.classList.add("darkThemeTopBG");
    bigBoxes.forEach((box) => box.classList.add("darkThemeBoxBg"));
    smallBoxes.forEach((box) => box.classList.add("darkThemeBoxBg"));
    navh.classList.add("darkThemeFont");
    navp.classList.add("darkThemeFont");
    h4.forEach((box) => box.classList.add("darkThemeFont"));
    h1.forEach((box) => box.classList.add("darkThemeFont"));
    p.forEach((box) => box.classList.add("darkThemeFont"));
    swichp.textContent = "Light Mode";
  } else {
    main.classList.remove("darkThemeBg");
    header.classList.remove("darkThemeTopBG");
    bigBoxes.forEach((box) => box.classList.remove("darkThemeBoxBg"));
    smallBoxes.forEach((box) => box.classList.remove("darkThemeBoxBg"));
    navh.classList.remove("darkThemeFont");
    navp.classList.remove("darkThemeFont");
    h4.forEach((box) => box.classList.remove("darkThemeFont"));
    h1.forEach((box) => box.classList.remove("darkThemeFont"));
    p.forEach((box) => box.classList.remove("darkThemeFont"));
    swichp.textContent = "Dark Mode";
  }
});
