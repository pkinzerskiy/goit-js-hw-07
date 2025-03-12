"use strict"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector(".change-color");
const clr = document.querySelector(".color");
const bdy = document.querySelector('body');

btn.addEventListener("click", btnHandler);

function btnHandler(event) {
  let color = getRandomHexColor();
  clr.innerHTML = `<span class=\"color\">${color}</span>`;
  bdy.style.backgroundColor = color;
  console.log(event); 
}
