"use strict";

var counterElement = document.querySelector(".counter");
var counter = 0;
setInterval(function () {
  counter += 1;
  if (counterElement) {
    counterElement.innerText = "".concat(counter);
  }
}, 2000);