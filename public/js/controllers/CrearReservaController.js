
'use strict'
var userSession;
window.addEventListener('load', () =>{
    userSession=GetSesion();
    cargaJsonMascota();

    setTimeout(function(){
    
        ImprimirListaMascotasReserva(userSession.Identificacion);
    },3000)
});

let inputNombreMascotaReserva = document.querySelector('#selectMacota');
let inputEntrada = document.getElementById('dateCheckIn');
let inputSalida = document.getElementById('dateCheckOut');
let inputCuidadosReserva = document.getElementById('txtCuidadosEsp');

let btnCrearReserva = document.getElementById('btnReserva');
btnCrearReserva.addEventListener('click',CrearReserva);
var numReserva = 0;
function CrearReserva(){
    if(ValidarDatos() ==true){
        ConfirmarDatos();
        numReserva++;
        let pendID= userSession.Identificacion;
        let pendCalif = 0;
        let EstadoInicial = "AGENDADA";
        let sNombreMascota = inputNombreMascotaReserva.options[inputNombreMascotaReserva.selectedIndex].text;
        let dFechaE = inputEntrada.value;
        let dFechaS = inputSalida.value;
        let sDireccion = inputCuidadosReserva.value; 
        RegistrarReserva(pendID,numReserva,sNombreMascota,dFechaE,dFechaS,EstadoInicial,pendCalif,sDireccion);
        limpiarFormReserva();
    }
}


function ValidarDatos(){
    let sNombreMascota = inputNombreMascotaReserva.value;
    let dFechaEnt = inputEntrada.value;
    let dFechaSalida = inputSalida.value;
    let sDireccion = inputCuidadosReserva.value;

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
        inputCuidadosReserva.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputCuidadosReserva.classList.remove("error")
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
function ImprimirListaMascotasReserva(user){
    let Select = document.getElementById('selectMacota');
    let idCliente = user;
    let listaMascotas = getMascotasArray();
    let opcion;
    let valor;


    for (let i = 0; i < listaMascotas.length; i++) {
        
        if(idCliente == listaMascotas[i].IdentificacionDuenio){
            opcion = document.createElement('option');
            valor = (i+1);
            opcion.value = valor;
            opcion.text = listaMascotas[i].NombreMascota;;
            Select.appendChild(opcion);
            }
        }
    }

    function limpiarFormReserva(){
        document.getElementById('formCrearReserva').reset();
    }