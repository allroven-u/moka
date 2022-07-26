"use strict";

window.addEventListener("scroll", function () {
  let navBar = document.querySelector("nav");
  let logoNav = document.querySelector("#logo-nav");
  let navRight = document.querySelector(".nav-right");
  let body = document.querySelector('body');

  body.classList.toggle('background-animation', window.scrollY > 0);
  navBar.classList.toggle("nav-bar-scroll", window.scrollY > 0);

  if (window.scrollY > 0) {
    logoNav.setAttribute("src", "./assets/img/moka-logo.png");
  } else {
    logoNav.setAttribute("src", "./assets/img/moka-logo-blanco.png");
  }

  navRight.classList.toggle("nav-right-scroll", window.scrollY > 0);
});

const loginModal = document.querySelector('.lModal-form');
const signinModal = document.querySelector('.rModal-form');
const showModalLogin = document.querySelector(".show-modal-login");
const showModalSignin = document.querySelector(".show-modal-signin");
const closeModalLogin = document.querySelector('.lBtnCancelar');
const redirectModalLogin = document.querySelector('.rBtnCancelar');
const overlay = document.querySelector('.overlay');
const general = document.querySelector('body');


function disableScroll(){  
  window.scrollTo(0, 0);
}


///////////////// SHOW AND HIDE MODAL LOGIN ///////////////////////////////
const hiddenModalLogin = function () {
  loginModal.classList.add('hidden');
  overlay.classList.add('hidden');
  window.removeEventListener('scroll', disableScroll);  
};

// start function show modal
function ShowModalLoginFunct() {
  loginModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  location.href = "#top-page";
  window.addEventListener('scroll', disableScroll);

  closeModalLogin.addEventListener('click', hiddenModalLogin);
  overlay.addEventListener('click', hiddenModalLogin);
  document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
          hiddenModalLogin();
      }
  });
};

showModalLogin.addEventListener('click', function () {
  ShowModalLoginFunct();
});

///////////////////// SHOW MODAL SIGNIN AND HIDE CODE //////////////////
const hiddenModalSignin = function () {
  signinModal.classList.add('hidden');
  overlay.classList.add('hidden');
  window.removeEventListener('scroll', disableScroll); 
};

// start function show modal
function ShowModalSigninFunct() {
  signinModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  location.href = "#top-page";
  window.addEventListener('scroll', disableScroll);
  

  redirectModalLogin.addEventListener('click', function(){
    hiddenModalSignin();
    ShowModalLoginFunct();
  });
  overlay.addEventListener('click', hiddenModalSignin);
  document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !signinModal.classList.contains('hidden')) {
          hiddenModalSignin();
      }
  });
};

showModalSignin.addEventListener('click', function () {
  ShowModalSigninFunct();
});







