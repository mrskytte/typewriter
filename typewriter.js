"use strict";
window.addEventListener("DOMContentLoaded", cutTheString);
// Define strings

let text = document.querySelector(".typewritten").textContent;
let len = text.length;
let e = 0;
let newString = "";

document.querySelector(".typewritten").textContent = "";

// Cut string into individual bits and put them together
let eachCut = setInterval(cutTheString, 200);

function cutTheString() {
  if (e + 1 == len) {
    clearInterval(eachCut);
  }
  // Figure out whether the character is a space or any other character

  newString = newString + text[e];
  console.log(newString);
  document.querySelector(".typewritten").textContent = newString;
  e++;
}

// Play sound according to the character

// Find each .typewritten class and apply above steps one at a time

// Find <br> in string

// Add correct sounds and delay for <br>
