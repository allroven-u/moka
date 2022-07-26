"use strict";

let usuariosArray = []; // arreglo de usuarios

// Esta funcion carga un archivo tipo json y lo carga a un array utilizando un promesa de js
function cargaJson() {
  console.log("Empezando carga de usuarios....");

  fetch("/public/assets/data/infoUsuarios.json")
    .then((response) => response.json())
    .then((response) => {
      usuariosArray = response;
      console.log(usuariosArray);
    });
  return usuariosArray;
}

//Esta funcion busca un objeto dentro del arreglo de usuario segun el campo de usurio y lo devuelve en formato object.
function buscaUsuario(pUsuario) {
  let result = null;
  for (let i = 0; i < usuariosArray.length; i++) {
    if (usuariosArray[i].Usuario.toUpperCase() === pUsuario) {
      result = usuariosArray[i];
    }
  }
  return result;
}

//Esta funcion valida si el login es correcto devuelve un booleano.
function validarLogin(pUsuario, pClave) {
  let usuario = buscaUsuario(pUsuario);
  if (usuario.Contrasenia === pClave) {
    return true;
  } else {
    return false;
  }
}
