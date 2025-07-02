"use strict";

/** Helper functions for running a k5 app */
class Kindling {
    private dom: {
        alertPopup: HTMLElement
    }

    init() {
        const body = document.querySelector("body");
        const alertPopup = document.createElement("div");
        alertPopup.classList.add("alert");
        body?.appendChild(alertPopup);
        this.dom = {
            alertPopup: alertPopup
        }
    }

    showAlert(text: string, duration: number = 5000) {
        this.dom.alertPopup.innerText = text;
        this.dom.alertPopup.style.display = "block";
        setTimeout(() => {
            this.dom.alertPopup.style.display = "none";
        }, duration);
    }
}


const counterElement = document.querySelector<HTMLElement>(".counter");

let counter = 0;
setInterval(() => {
    counter += 1;
    if (counterElement) {
        counterElement.innerText = `${counter}`;
    }
}, 2000)

const kindling = new Kindling();
kindling.init();
kindling.showAlert("Hello world!")