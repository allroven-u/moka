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


// VALIDAR DATOS INICIAR SESION
let btnIniciar = document.getElementById("btnIniciar");
let inputUsuarioLogin = document.getElementById("txtUsuario-l");
let inputContrasenha1Login = document.getElementById("txtContrasenha-l");

btnIniciar.addEventListener("click",IniciarSesion);

function IniciarSesion(){
    if(ValidarDatosLogin() == true){
        ConfirmarDatosLogin();
    }
    
}
function ValidarDatosLogin(){

    let sUsuario = inputUsuarioLogin.value;
    let pwContrasenha = inputContrasenha1Login.value;
    if (sUsuario == null || sUsuario == undefined || sUsuario == ""){
        inputUsuarioLogin.classList.add("error")
        MostrarErrorLogin();
        return false;
    }else{
        inputUsuarioLogin.classList.remove("error")
    }
    if (pwContrasenha == null || pwContrasenha == undefined || pwContrasenha == ""){
        inputContrasenha1Login.classList.add("error")
        MostrarErrorLogin();
        return false;
    }else{
        inputContrasenha1Login.classList.remove("error")
    }
    return true
}


function MostrarErrorLogin(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dato Requerido!',
    })
}

function ConfirmarDatosLogin(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Inicio de sesion exitoso!',
        showConfirmButton: false,
        timer: 1500
      })
}

// FIN VALIDAR DATOS INICIAR SESION

// VALIDAR DATOS REGISTRO

let btnRegistrar = document.getElementById("btnRegistrar");
let inputNombre = document.getElementById("txtNombre");
let inputApellido = document.getElementById("txtApellido");
let inputCedula = document.getElementById("numCedula");
let inputEmail = document.getElementById("txtEmail");
let inputUsuario = document.getElementById("txtUsuario");
let inputContrasenha1 = document.getElementById("txtContrasenha");
let inputContrasenha2 = document.getElementById("txtContrasenha2");
let inputDireccion = document.getElementById("txtDireccion");

btnRegistrar.addEventListener("click",Registrar);

function Registrar(){
    if(ValidarDatos() == true){
        ConfirmarDatos();
    }
}

function ValidarDatos(){
    let sNombre = inputNombre.value;
    let sApellido = inputApellido.value;
    let sCedula = inputCedula.value;
    let sEmail = inputEmail.value;
    let sUsuario = inputUsuario.value;
    let pwContrasenha = inputContrasenha1.value;
    let pwContrasenha2 = inputContrasenha2.value;
    let sDireccion = inputDireccion.value;

    

    if (sNombre == null || sNombre == undefined || sNombre == ""){
        inputNombre.classList.add("error")
        MostrarError();
        return false;

    }else{
        inputNombre.classList.remove("error")
    }
    if (sApellido == null || sApellido == undefined || sApellido == ""){
        inputApellido.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputApellido.classList.remove("error")
    }
    if (sCedula == null || sCedula == undefined || sCedula == ""){
        inputCedula.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputCedula.classList.remove("error")
    }
    if (sEmail == null || sEmail == undefined || sEmail == ""){
        inputEmail.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputEmail.classList.remove("error")
    }
    if (sUsuario == null || sUsuario == undefined || sUsuario == ""){
        inputUsuario.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputUsuario.classList.remove("error")
    }
    if (pwContrasenha == null || pwContrasenha == undefined || pwContrasenha == ""){
        inputContrasenha1.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputContrasenha1.classList.remove("error")
    }
    if (pwContrasenha2 == null || pwContrasenha2 == undefined || pwContrasenha2 == "" || pwContrasenha != pwContrasenha2){
        inputContrasenha2.classList.add("error")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no son iguales!',
        })
        return false;
        
    }else{
        inputContrasenha2.classList.remove("error")
    }
    if (sDireccion == null || sDireccion == undefined || sDireccion == ""){
        inputDireccion.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputDireccion.classList.remove("error")
    }
    return true;
}
function MostrarError(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dato Requerido!',
    })
}
function ConfirmarDatos(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro exitoso!',
        showConfirmButton: false,
        timer: 1500
      })
}

// FIN VALIDAR DATOS REGISTRO


