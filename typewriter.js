"use strict";
window.addEventListener("DOMContentLoaded", activateBtn);

// Define elements

let text = document.querySelector(".typewritten").textContent;
text = text.trim();
let len = text.length;
let e = 0;
let newString = "";
let button = document.querySelector(".button");
document.querySelector(".typewritten").textContent = "";
let eachCut;
function activateBtn() {
  button.addEventListener("click", startTyping);
}

// Define audio

const typekey1 = document.querySelector("#typekey1");
const typekey2 = document.querySelector("#typekey2");
const typespace = document.querySelector("#typespace");
const typelast = document.querySelector("#typelast");
const typereturn = document.querySelector("#typereturn");

// Audio array for random keysound

let typeArr = [typekey1, typekey2];

// Cut string into individual bits and put them together
function startTyping() {
  button.removeEventListener("click", startTyping);
  eachCut = setInterval(cutTheString, 200);
}

function cutTheString() {
  if (e + 1 == len) {
    clearInterval(eachCut);
  }
  // Figure out whether the character is a space or any other character
  if (text[e] == " ") {
    typespace.play();
  } else {
    let sound = Math.floor(Math.random() * 2);
    typeArr[sound].play();
  }
  newString = newString + text[e];
  console.log(newString);
  document.querySelector(".typewritten").textContent = newString;
  e++;
}

// Play sound according to the character

// Find each .typewritten class and apply above steps one at a time

// Find <br> in string

// Add correct sounds and delay for <br>
