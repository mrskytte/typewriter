"use strict";
window.addEventListener("DOMContentLoaded", init);

// Store strings in array and clear html
function init() {
  const element = document.querySelectorAll(".typewritten");
  typewriter(element, done);
}

function done(element) {
  console.log("Done");
}

function typewriter(element, callback) {
  console.log(element);
  // Define variables

  let texts = [];
  let currentText = 0;
  let text;
  let len;
  let textCounter = 0;
  let button = document.querySelector(".button");
  let eachCut;
  let counter = 0;

  // Define audio

  const typekey1 = document.querySelector("#typekey1");
  const typekey2 = document.querySelector("#typekey2");
  const typespace = document.querySelector("#typespace");

  // Audio array for random keysound

  let typeArr = [typekey1, typekey2];

  element.forEach(storeThis);

  function storeThis(thisText) {
    texts.push(thisText.textContent);
    thisText.textContent = "";
  }
  readyText();

  // Prepares current text to be written
  function readyText() {
    if (texts.length > currentText) {
      console.log(counter);
      counter++;
      text = texts[currentText];
      text = text.trim();
      len = text.length;
      button.addEventListener("click", startTyping);
    } else {
      document.querySelector(".button").textContent = "No more lines :-(";
    }
  }
  // Write one line with different intervals
  function startTyping() {
    button.removeEventListener("click", startTyping);
    let randomSpeed = Math.floor(Math.random() * (250 - 150) + 150);
    eachCut = setTimeout(cutTheString, randomSpeed);
  }

  function cutTheString() {
    // Figure out whether the character is a space or any other character
    if (text[textCounter] == " ") {
      // Play sound according to the character
      typespace.play();
    } else {
      let sound = Math.floor(Math.random() * 2);
      typeArr[sound].play();
    }
    element[currentText].textContent += text[textCounter];
    textCounter++;
    // Check if there are more characters
    if (textCounter == len) {
      currentText++;
      textCounter = 0;
      readyText();
      document.querySelector(".button").textContent = "Write another line";
      callback(element);
    } else {
      startTyping();
    }
  }
}
