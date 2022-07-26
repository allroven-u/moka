'use strict'

let inputNombreMascota = document.getElementById('txtNombre');
let inputEntrada = document.getElementById('dateCheckIn');
let inputSalida = document.getElementById('dateCheckOut');
let inputDireccion = document.getElementById('txtDireccion');

let btnCrear = document.getElementById('btnIniciar');
btnCrear.addEventListener('click',CrearReserva);

function CrearReserva(){
    if(ValidarDatos() ==true){
        ConfirmarDatos();
    }
}


function ValidarDatos(){
    let sNombreMascota = inputNombreMascota.value;
    let dFechaEnt = inputEntrada.value;
    let dFechaSalida = inputSalida.value;
    let sDireccion = inputDireccion.value;

    if (sNombreMascota == null || sNombreMascota == undefined || sNombreMascota == ""){
        inputNombreMascota.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputNombreMascota.classList.remove("error")
    }

    if (dFechaEnt == null || dFechaEnt == undefined || dFechaEnt == ""){
        inputEntrada.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputEntrada.classList.remove("error")
    }
    
    if (dFechaSalida == null || dFechaSalida == undefined || dFechaSalida == ""){
        inputSalida.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputSalida.classList.remove("error")
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
        title: 'Reserva Asignada',
        showConfirmButton: false,
        timer: 1500
      })
}