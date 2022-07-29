"use strict";


let citasArray = []; // arreglo de usuarios

// Esta funcion carga un archivo tipo json y lo carga a un array utilizando un promesa de js
function cargaJsonCitas() {
//   console.log("Empezando carga de Mascotas....");

  fetch("/public/assets/data/infoCitas.json")
    .then((response) => response.json())
    .then((response) => {
        citasArray = response;
        console.log(citasArray);
    });
    
//   return citasArray;
};


function getCitasArray(){
return citasArray;
};

function FiltrarCitas(pFecha1,pFecha2,pVeterinarioID,pNombreMascota,pDuenio){

  for (let i = 0; i < citasArray.length; i++) {
    const cita = citasArray[i];
    
  }

  return citasArray;
  };

// //Esta funcion busca un objeto dentro del arreglo de mascotas segun el campo de nombre y lo devuelve en formato json object.
// function buscaMascota(pNombreMascota) {
//   let result = null;
//   for (let i = 0; i < mascotasArray.length; i++) {
//     if (mascotasArray[i].NombreMascota.toUpperCase() == pNombreMascota) {
//       result = mascotasArray[i];
//     }
//   }
//   return result;
// }
// //Esta funcion busca un objeto dentro del arreglo de mascotas segun el campo de id y lo devuelve en formato json object.
// function buscaMascotaPorID(pidMascota) {
//   let result = null;
//   for (let i = 0; i < mascotasArray.length; i++) {
//     if (mascotasArray[i].IdMascota === pidMascota) {
//       result = mascotasArray[i];
//     }
//   }
//   return result;
// }

// // Retorna un array con las mascotas de este dueño
// function buscaMascotasPorDuenio(pIdentificacion) {
//   let result = [];
//   for (let i = 0; i < mascotasArray.length; i++) {
//     if (mascotasArray[i].IdentificacionDuenio === pIdentificacion) {
//       result.push(mascotasArray[i]);
//     }
//   }
//   return result;
// }

