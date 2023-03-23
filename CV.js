"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelector(".show-modal");

const navList = document.querySelector(".nav-list");
const hamb = document.querySelector(".hamb");
const lists = document.querySelector(".nav-list li");

// funckija hamburger menu

hamb.addEventListener("click", function () {
  this.classList.toggle("click");
  navList.classList.toggle("open");
});

// funkcija otkrivanja
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// funkcija skrivanja
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", openModal);
}
btnsShowModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
