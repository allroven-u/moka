'use strict'


let btnRegistrar = document.getElementById("btnRegistrar");
let inputNombre = document.getElementById("txtNombre");
let inputDireccion = document.getElementById("txtDireccion");

btnRegistrar.addEventListener("click",Registrar);

function Registrar(){
    if(ValidarDatos() == true){
        ConfirmarDatos();
        let IDcliente = '206790172'
        let sNombre = inputNombre.value;
        let sDireccion = inputDireccion.value;
        RegistrarMascota(IDcliente,sNombre,sDireccion)
        console.log(ObtenerListaMascotas())
    }
}

function ValidarDatos(){
    console.log(ObtenerListaMascotas())
    let sNombre = inputNombre.value;
    let sDireccion = inputDireccion.value;

    

    if (sNombre == null || sNombre == undefined || sNombre == ""){
        inputNombre.classList.add("error")
        MostrarError();
        return false;

    }else{
        inputNombre.classList.remove("error")
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
        title: 'Registrado!',
        showConfirmButton: false,
        timer: 1500
      })
}