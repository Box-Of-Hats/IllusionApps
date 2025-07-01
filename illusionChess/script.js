"use strict";

if (!localStorage.getItem("reloaded")) {
    localStorage.setItem("reloaded", "true");
    window.location.reload();
} else {
    localStorage.removeItem("reloaded");
}; //(Hopefully) Fix Scaling Issues On Elder Kindles


/**
 * @typedef DomNodes object
 * @property {HTMLElement} word
 * @property {HTMLElement} keyboard 
 * @property {HTMLElement} debug 
 * 
 */

var Hangman = {
    /** @type {string} */
    word: "TESTING",

    /** @type {string[]} */
    guesses: [],

    /** @type {number} */
    incorrectGuesses: 0,

    /** @type {DomNodes}  */
    dom: {
        /**@type {HTMLElement} */
        word: null,

        /**@type {HTMLElement} */
        keyboard: null,

        /**@type {HTMLElement} */
        debug: null,

    },

    loadDomNodes: function () {
        this.dom = {
            word: document.getElementById("word"),
            keyboard: document.getElementById("keyboard"),
            debug: document.getElementById("debug")
        }
    },

    /**
     * @param {string} msg 
     */
    debug: function(msg){
        this.dom.debug.innerText = msg;
    },

    addEventListeners: function () {
        /** @type {HTMLCollectionOf<HTMLButtonElement>} */
        var keys = document.getElementsByClassName("key");
        for (var index = 0; index < keys.length; index++) {
            var key = keys[index];
            var self = this;
            var keyText = key.innerText;
            key.addEventListener("click", function (event) {
                self.guess(event.target.innerText);
                event.target.setAttribute("disabled", "disabled")
            });
        }
    },

    guess: function (/**@type {string} */ letter) {
        letter = letter.toUpperCase()
        
        if (this.guesses.indexOf(letter) !== -1) {
            this.debug("You've already guessed " + letter + "!")
            return;
        }

        this.guesses.push(letter)

        if (this.word.indexOf(letter) !== -1) {
            // Correct guess
            //TODO: implement check for win condition
            this.debug("Correct guess " + letter)

        } else {
            // Incorrect guess
            this.incorrectGuesses = this.incorrectGuesses + 1;
            //TODO: implement lose condition
            this.debug("Bad guess: " + letter + ". Bad guesses: " + this.incorrectGuesses)
        }

        this.draw()
    },
    draw: function () {
        var output = "";
        for (var index = 0; index < this.word.length; index++) {
            var letter = this.word[index];
            if (this.guesses.indexOf(letter) == -1) {
                // Letter not in word
                output = output + "_" + " "
            } else {
                // Letter is in word
                output = output + letter + " "
            }
        }

        this.dom.word.innerText = output;
    }
}

function resetgame() {
    //TODO: reset

    setTimeout(function () {
        document.getElementById("title").textContent = "Hangman";
    }, 10000);
}

$("#reset").on("click", resetgame);

Hangman.loadDomNodes()
Hangman.addEventListeners()