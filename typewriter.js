"use strict";
window.addEventListener("DOMContentLoaded", init);

// Define variables

let texts = [];
let currentText = 0;
let text;
let len;
let textCounter = 0;
let newString;
let button = document.querySelector(".button");
let eachCut;
let storeTexts;

// Define audio

const typekey1 = document.querySelector("#typekey1");
const typekey2 = document.querySelector("#typekey2");
const typespace = document.querySelector("#typespace");

// Audio array for random keysound

let typeArr = [typekey1, typekey2];

function init() {
  storeTexts = document.querySelectorAll(".typewritten");
  storeTexts.forEach(storeThis);
  function storeThis(thisText) {
    texts.push(thisText.textContent);
  }
  let eraser = document.querySelectorAll(".typewritten");
  eraser.forEach(deleteText);
  function deleteText(thisText) {
    thisText.textContent = "";
  }
  readyText();
}
function readyText() {
  text = texts[currentText];
  text = text.trim();
  len = text.length;
  newString = "";
  button.addEventListener("click", startTyping);
}
// Cut string into individual bits and put them together
function startTyping() {
  button.removeEventListener("click", startTyping);
  let randomSpeed = Math.floor(Math.random() * (250 - 150) + 150);
  eachCut = setInterval(cutTheString, randomSpeed);
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
  newString = newString + text[textCounter];
  console.log(newString);
  storeTexts[currentText].textContent = newString;
  textCounter++;
  clearInterval(eachCut);
  if (textCounter == len) {
    currentText++;
    textCounter = 0;
    readyText();
    document.querySelector(".button").textContent = "Write another line";
  } else {
    startTyping();
  }
}

// Find each .typewritten class and apply above steps one at a time
