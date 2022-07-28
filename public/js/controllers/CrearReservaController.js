'use strict'

let inputNombreMascotaReserva = document.querySelector('#selectMacota');
let inputEntrada = document.getElementById('dateCheckIn');
let inputSalida = document.getElementById('dateCheckOut');
let inputDireccionReserva = document.getElementById('txtDireccion');

let btnCrearReserva = document.getElementById('btnIniciar');
btnCrearReserva.addEventListener('click',CrearReserva);
var numReserva = 0;
function CrearReserva(){
    if(ValidarDatos() ==true){
        ConfirmarDatos();
        numReserva++;
        let pendID= 206790172;
        let pendCalif = 0;
        let EstadoInicial = "Pendiete";
        let sNombreMascota = inputNombreMascotaReserva.options[inputNombreMascotaReserva.selectedIndex].text;
        let dFechaE = inputEntrada.value;
        let dFechaS = inputSalida.value;
        let sDireccion = inputDireccionReserva.value; 
        RegistrarReserva(pendID,numReserva,sNombreMascota,dFechaE,dFechaS,EstadoInicial,pendCalif,sDireccion);
        console.log(ObtenerListaReservas());
    }
}


function ValidarDatos(){
    console.log(ObtenerListaReservas());
    let sNombreMascota = inputNombreMascotaReserva.value;
    let dFechaEnt = inputEntrada.value;
    let dFechaSalida = inputSalida.value;
    let sDireccion = inputDireccionReserva.value;

    if (sNombreMascota == null || sNombreMascota == undefined || sNombreMascota == ""){
        inputNombreMascotaReserva.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputNombreMascotaReserva.classList.remove("error")
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
        inputDireccionReserva.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputDireccionReserva.classList.remove("error")
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

//carga Mascotas
function ImprimirListaMascotas(){
    let Select = document.getElementById('selectMacota');
    let idCliente = 206790172;
    let listaMascotas = ObtenerListaMascotas();
    let opcion;
    let valor;


    for (let i = 0; i < listaMascotas.length; i++) {
        
        if(idCliente == listaMascotas[i][0]){
            opcion = document.createElement('option');
            valor = (i+1);
            opcion.value = valor;
            opcion.text = listaMascotas[i][1];
            Select.appendChild(opcion);
            }
        }
    }