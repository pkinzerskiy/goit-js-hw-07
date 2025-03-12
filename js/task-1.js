'use strict'


// const ctgory = document.querySelector("#categories"); 
// console.log(`number of categories ${ctgory.children.length}`);


const ss = document.querySelectorAll(".item");
console.log(`number of categories ${ss.length}`);
//console.log(ss);


ss.forEach(el => {
    //const elH2 = document.querySelector("h2"); 
    console.log(el.firstElementChild.textContent);
    console.log(el.lastElementChild.children.length);
    // console.log(`Category: ${el.children[0].textContent}`);
    // console.log(`Element: ${el.children[1].children.length}`); 
    }
);
