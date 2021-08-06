"use strict";

//select elements and store them
const modalBtns = document.querySelectorAll(".open-modal");
const modalBack = document.querySelector(".modal-background");
const closebtn = document.querySelector(".close");

//functions for opening and closing the modal
const open = function () {
  modalBack.classList.remove("hidden");
};
const close = function () {
  modalBack.classList.add("hidden");
};

//add an eventlistner for if any of the buttons are pressed
//the modal will open
for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener("click", open);
}

//if the user presses close button or background
closebtn.addEventListener("click", close);
modalBack.addEventListener("click", close);
//add eventlistener for when user presses esc key;
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    close();
  }
});
