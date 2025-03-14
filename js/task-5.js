"use strict"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector(".change-color");
const clr = document.querySelector(".color");
const bdy = document.querySelector('body');
// const bdy = document.querySelector('widget');

btn.addEventListener("click", btnHandler);
//bty.addEventListener("click", btnHandler);
// bdy.addEventListener("click", checkColor);

function btnHandler(event) {
  let color = getRandomHexColor();
  clr.innerHTML = `<span class=\"color\">${color}</span>`;
  bdy.style.backgroundColor = color;

  console.log(color);
}

