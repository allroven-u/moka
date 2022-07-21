"use strict"
let btnIniciar = document.getElementById("btnIniciar");
let inputUsuario = document.getElementById("txtUsuario");
let inputContrasenha1 = document.getElementById("txtContrasenha");

btnIniciar.addEventListener("click",IniciarSesion);

function IniciarSesion(){
    console.log("hola");
    if(ValidarDatos() == true){
        ConfirmarDatos();
    }
    
}
function ValidarDatos(){

    let sUsuario = inputUsuario.value;
    let pwContrasenha = inputContrasenha1.value;
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
    return true
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
        title: 'Sesion Iniciada!',
        showConfirmButton: false,
        timer: 1500
      })
}