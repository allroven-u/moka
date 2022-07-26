"use strict";

let mascotasArray = []; // arreglo de usuarios

// Esta funcion carga un archivo tipo json y lo carga a un array utilizando un promesa de js
function cargaJsonMascota() {
  console.log("Empezando carga de Mascotas....");

  fetch("/public/assets/data/infoMascotas.json")
    .then((response) => response.json())
    .then((response) => {
      mascotasArray = response;
      console.log(mascotasArray);
    });
  return mascotasArray;
}

//Esta funcion busca un objeto dentro del arreglo de mascotas segun el campo de nombre y lo devuelve en formato json object.
function buscaMascota(pNombreMascota) {
  let result = null;
  for (let i = 0; i < mascotasArray.length; i++) {
    if (mascotasArray[i].NombreMascota.toUpperCase() == pNombreMascota) {
      result = mascotasArray[i];
    }
  }
  return result;
}
//Esta funcion busca un objeto dentro del arreglo de mascotas segun el campo de id y lo devuelve en formato json object.
function buscaMascotaPorID(pidMascota) {
  let result = null;
  for (let i = 0; i < mascotasArray.length; i++) {
    if (mascotasArray[i].IdMascota === pidMascota) {
      result = mascotasArray[i];
    }
  }
  return result;
}

// Retorna un array con las mascotas de este dueño
function buscaMascotasPorDuenio(pIdentificacion) {
  let result = [];
  for (let i = 0; i < mascotasArray.length; i++) {
    if (mascotasArray[i].IdentificacionDuenio === pIdentificacion) {
      result.push(mascotasArray[i]);
    }
  }
  return result;
}

function getMascotasArray(){
  return mascotasArray;
  };

