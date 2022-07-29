'use strict'

// let inputNombreMascota = document.querySelector('#selectMacota');
// let inputFecha = document.getElementById('txtFecha');
// let inputTipoIdentificacion = document.querySelector('#selectVeterinario');
// let inputDireccion = document.getElementById('txtDireccion');

// let btnCrear = document.getElementById('btnIniciar');
// btnCrear.addEventListener('click',CrearCita);
// var numCita= 0;//guardar base de datos

// function CrearCita(){
//     if(ValidarDatos() ==true){
//         ConfirmarDatos();
//         numCita++;
//         let pendID= 206790172;
//         let pendCalif = 3;
//         let EstadoInicial = "Pendiete";
//         let sNombreMascota = inputNombreMascota.options[inputNombreMascota.selectedIndex].text
//         let dFecha = inputFecha.value;
//         let sIdentificacion = inputNombreMascota.options[inputNombreMascota.selectedIndex].text
//         let sDireccion = inputDireccion.value; 
//         RegistrarCita(pendID,numCita,sNombreMascota,sIdentificacion,dFecha,EstadoInicial,pendCalif,sDireccion);
//         console.log(ObtenerListaCitas());
//     }
// }





// function ValidarDatos(){
//     console.log(ObtenerListaCitas());
//     let sNombreMascota = inputNombreMascota.value;
//     let dFecha = inputFecha.value;
//     let sIdentificacion = inputTipoIdentificacion.value;
//     let sDireccion = inputDireccion.value;

//     if (sNombreMascota == null || sNombreMascota == undefined || sNombreMascota == ""){
//         inputNombreMascota.classList.add("error")
//         MostrarError();
//         return false;
//     }else{
//         inputNombreMascota.classList.remove("error")
//     }

//     if (dFecha == null || dFecha == undefined || dFecha == ""){
//         inputFecha.classList.add("error")
//         MostrarError();
//         return false;
//     }else{
//         inputFecha.classList.remove("error")
//     }

//     if (sIdentificacion == null || sIdentificacion == undefined || sIdentificacion == ""){
//         inputTipoIdentificacion.classList.add("error")
//         MostrarError();
//         return false;
//     }else{
//         inputTipoIdentificacion.classList.remove("error")
//     }

//     if (sDireccion == null || sDireccion == undefined || sDireccion == ""){
//         inputDireccion.classList.add("error")
//         MostrarError();
//         return false;
//     }else{
//         inputDireccion.classList.remove("error")
//     }
//     return true;
// }
// function MostrarError(){
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Dato Requerido!',
//     })
// }
// function ConfirmarDatos(){
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Cita Asignada',
//         showConfirmButton: false,
//         timer: 1500
//       })
// }


// //carga Mascotas
// function ImprimirListaMascotas(){
//     let Select = document.getElementById('selectMacota');
//     let idCliente = 206790172;
//     let listaMascotas = ObtenerListaMascotas();
//     let opcion;
//     let valor;


//     for (let i = 0; i < listaMascotas.length; i++) {
        
//         if(idCliente == listaMascotas[i][0]){
//             opcion = document.createElement('option');
//             valor = (i+1);
//             opcion.value = valor;
//             opcion.text = listaMascotas[i][1];
//             Select.appendChild(opcion);
//             }
//         }
//         opcion = document.createElement('option');
//         opcion.value = valor+2;
//         opcion.text = 'Otro' ;
//         Select.appendChild(opcion);
//     }


var userSession;
window.addEventListener('load', () =>{
    userSession=GetSesion();
    cargaJsonMascota();

    setTimeout(function(){
    
    ImprimirListaMascotasCita(userSession.Identificacion);
    },3000)
});

let inputNombreMascota = document.querySelector('#selectMacota');
let inputFecha = document.getElementById('txtFecha');
let inputTipoIdentificacion = document.querySelector('#selectVeterinario');
let inputDireccion = document.getElementById('txtDireccion');

let btnCrear = document.getElementById('btnIniciar');
btnCrear.addEventListener('click',CrearCita);
var numCita= 0;//guardar base de datos

function CrearCita(){
    if(ValidarDatos() ==true){
        ConfirmarDatos();
        numCita++;
        let pendID= 206790172;
        let pendCalif = 3;
        let EstadoInicial = "Pendiete";
        let sNombreMascota = inputNombreMascota.options[inputNombreMascota.selectedIndex].text
        let dFecha = inputFecha.value;
        let sIdentificacion = inputNombreMascota.options[inputNombreMascota.selectedIndex].text
        let sDireccion = inputDireccion.value; 
        RegistrarCita(pendID,numCita,sNombreMascota,sIdentificacion,dFecha,EstadoInicial,pendCalif,sDireccion);
        console.log(ObtenerListaCitas());
    }
}

function ValidarDatos(){
    console.log(ObtenerListaCitas());
    let sNombreMascota = inputNombreMascota.value;
    let dFecha = inputFecha.value;
    let sIdentificacion = inputTipoIdentificacion.value;
    let sDireccion = inputDireccion.value;

    if (sNombreMascota == null || sNombreMascota == undefined || sNombreMascota == ""){
        inputNombreMascota.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputNombreMascota.classList.remove("error")
    }

    if (dFecha == null || dFecha == undefined || dFecha == ""){
        inputFecha.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputFecha.classList.remove("error")
    }

    if (sIdentificacion == null || sIdentificacion == undefined || sIdentificacion == ""){
        inputTipoIdentificacion.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputTipoIdentificacion.classList.remove("error")
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
        title: 'Cita Asignada',
        showConfirmButton: false,
        timer: 1500
      })
}


//carga Mascotas
function ImprimirListaMascotasCita(user){
    let Select = document.getElementById('selectMascotaCita');
    let idCliente = user;
    let listaMascotas = getMascotasArray();
    
    let opcion;
    let valor;

    
    for (let i = 0; i < listaMascotas.length; i++) {
        
        
        if(idCliente == listaMascotas[i].IdentificacionDuenio){
            opcion = document.createElement('option');
            valor = (i+1);
            opcion.value = valor;
            opcion.text = listaMascotas[i].NombreMascota;
            Select.appendChild(opcion);
            }
        }
        opcion = document.createElement('option');
        opcion.value = valor+2;
        opcion.text = 'Otro' ;
        Select.appendChild(opcion);
    }
