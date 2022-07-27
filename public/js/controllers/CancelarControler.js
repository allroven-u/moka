function CancelarCita() {
    let listaCitas = ObtenerListaCitas();
    let numCita = 0;
    let nombreMascota ='bobo';
    let inputCancelar = document.getElementById(motivoCancelar).value;
    if (motivoCancelar == null || motivoCancelar == undefined || motivoCancelar == ""){
        inputCancelar.classList.add("error")
        MostrarError();
        return false;
    }else{
        inputNombreMascota.classList.remove("error")
        ConfirmarDatos();
    }


    document.getElementById('numCitaCancelar').innerHTML=numCita;
    document.getElementById('nombreCitaCancelar').innerHTML=nombreMascota;


    for (let i = 0; i < listaCitas.length; i++) {
           if(listaCitas[i][1]==numCita){
               listaCitas[i][5]= "Cancelar"
           }
           
       }
   }

   function MostrarError(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe ingresar Observación',
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