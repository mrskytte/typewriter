"use strict";
window.addEventListener("DOMContentLoaded", cutTheString);
// Define strings

let text = document.querySelector(".typewritten").textContent;

let len = text.length;

// Cut string into individual bits

function cutTheString() {
  for (let i = 0; i < len; i++) {
    setTimeout(test, 1000);
    function test() {
      console.log(i);
    }
  }
}

// Put them back together one at a time

// Figure out whether the character is a space or any other character

// Play sound according to the character

// Find each .typewritten class and apply above steps one at a time

// Find <br> in string

// Add correct sounds and delay for <br>
