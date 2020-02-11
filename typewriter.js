"use strict";
window.addEventListener("DOMContentLoaded", init);

function init() {
  // Define elements
  let texts = document.querySelectorAll(".typewritten");
  texts.forEach(function(oneText) {
    let text = oneText.textContent;
    text = text.trim();
    let len = text.length;
    let e = 0;
    let newString = "";
    let button = document.querySelector(".button");
    oneText.textContent = "";
    let eachCut;
    button.addEventListener("click", startTyping);

    // Define audio

    const typekey1 = document.querySelector("#typekey1");
    const typekey2 = document.querySelector("#typekey2");
    const typespace = document.querySelector("#typespace");

    // Audio array for random keysound

    let typeArr = [typekey1, typekey2];

    // Cut string into individual bits and put them together
    function startTyping() {
      button.removeEventListener("click", startTyping);
      let randomSpeed = Math.floor(Math.random() * (250 - 150) + 150);
      eachCut = setInterval(cutTheString, randomSpeed);
    }

    function cutTheString() {
      // Figure out whether the character is a space or any other character
      if (text[e] == " ") {
        // Play sound according to the character
        typespace.play();
      } else {
        let sound = Math.floor(Math.random() * 2);
        typeArr[sound].play();
      }
      newString = newString + text[e];
      console.log(newString);
      oneText.textContent = newString;
      e++;
      clearInterval(eachCut);
      if (e == len) {
        clearInterval(eachCut);
      } else {
        startTyping();
      }
    }
  });
}
// Find each .typewritten class and apply above steps one at a time
