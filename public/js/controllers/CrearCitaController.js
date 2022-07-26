'use strict'

let inputNombreMascota = document.getElementById('txtNombre');
let inputFecha = document.getElementById('txtFecha');
let inputTipoIdentificacion = document.querySelector('#selectVeterinario');
let inputDireccion = document.getElementById('txtDireccion');

let btnCrear = document.getElementById('btnIniciar');
btnCrear.addEventListener('click',CrearCita);

function CrearCita(){
    if(ValidarDatos() ==true){
        ConfirmarDatos();
    }
}
function ValidarDatos(){
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