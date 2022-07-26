"use strict";
let btnIniciar = document.getElementById("btnIniciar");
let inputUsuarioLogin = document.getElementById("txtUsuario-l");
let inputContrasenha1Login = document.getElementById("txtContrasenha-l");

document.addEventListener("load", cargaJson());

btnIniciar.addEventListener("click", IniciarSesion);

function IniciarSesion() {
  if (ValidarDatosLogin()) {
    if (validarLogin(inputUsuarioLogin.value.toUpperCase(), inputContrasenha1Login.value) == true) {
      ConfirmarDatosLogin();
    } else {
      ErrorDatosLogin();Login
    }
  }
}

function ValidarDatosLogin() {
  let sUsuario = inputUsuarioLogin.value;
  let pwContrasenha = inputContrasenha1Login.value;
  if (sUsuario == null || sUsuario == undefined || sUsuario == "") {
    inputUsuarioLogin.classList.add("error");
    MostrarErrorLogin();
    return false;
  } else {
    inputUsuarioLogin.classList.remove("error");
  }
  if (
    pwContrasenha == null ||
    pwContrasenha == undefined ||
    pwContrasenha == ""
  ) {
    inputContrasenha1Login.classList.add("error");
    MostrarErrorLogin();
    return false;
  } else {
    inputContrasenha1Login.classList.remove("error");
  }
  return true;
}

function MostrarErrorLogin() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Dato Requerido!",
  });
}

function ConfirmarDatosLogin() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Sesion Iniciada!",
    showConfirmButton: false,
    timer: 1500,
  });
}

function ErrorDatosLogin() {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Usuario o contaseña incorrectos!",
    showConfirmButton: false,
    timer: 1500,
  });
}