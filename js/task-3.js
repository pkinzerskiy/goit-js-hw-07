"use strict"

const inElm = document.querySelector("#name-input"); 
const outElm = document.querySelector("#name-output"); 
inElm.addEventListener("input", handleInputMsg);

function handleInputMsg(event){
    let usrName = event.target.value;
    // if (usrName.match(/^\u0020{1,}$/) | usrName === "") {
    if (usrName === "" || usrName.match(/^\u0020{1,}$/)) {
        outElm.textContent = "Anonymous";
         console.log("event.target.value");
        return
    }
    outElm.textContent = usrName.trim();
    console.log(usrName);

};

