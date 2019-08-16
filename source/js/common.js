var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
  }
});

document.createElement("picture");

var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var openModal = document.querySelectorAll(".button--modal");
var inputsize = document.getElementById("size-s");


var showModal = function (buttonClassName, modalClassname) {
  for (var i = 0; i < openModal.length; i++) {
    buttonClassName[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modalClassname.classList.add("modal--open");
      overlay.classList.add("overlay--open");
      inputsize.focus();
    });
  }
}

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--open");
  overlay.classList.remove("overlay--open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--open") && overlay.classList.contains("overlay--open")) {
      modal.classList.remove("modal--open");
      overlay.classList.remove("overlay--open");
    }
  }
});

showModal(openModal, modal);

