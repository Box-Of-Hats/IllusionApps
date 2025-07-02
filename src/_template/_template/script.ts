"use strict";

const counterElement = document.querySelector<HTMLElement>(".counter");

let counter = 0;
setInterval(() => {
    counter += 1;
    if (counterElement){
        counterElement.innerText = `${counter}`;
    }
}, 2000)