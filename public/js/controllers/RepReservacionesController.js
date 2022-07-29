'use strict'

window.addEventListener('load', () =>{
     cargaJsonReservas();
     cargaJson();   
});


// function ImprimirListaCitas(){

//     listaCitas = getCitasArray();
//     let tbody = document.getElementById('tbdCitas');

//     tbody.innerHTML = '';

//     for (let i = 0; i < listaCitas.length; i++) {

//       let  cita = listaCitas[i];
//       let veterinario = buscaUsuario(cita.IdentificacionVeterinario);

//         let fila = tbody.insertRow();
//         let celdaNumCita = fila.insertCell();
//         let celdaMascota = fila.insertCell();
//         let celdaVeterinario = fila.insertCell();
//         let celdaFecha= fila.insertCell();
//         let celdaEstado = fila.insertCell();
//         let celdaBoton = fila.insertCell();

//          celdaNumCita.innerHTML = cita.NumeroCita;
//          celdaNumCita.classList.add('infoTd');
//          celdaMascota.innerHTML = cita.NombreMascota;
//          celdaMascota.classList.add('infoTd');
//          celdaVeterinario.innerHTML = veterinario.Nombre + ' ' + veterinario.Apellido1;
//          celdaVeterinario.classList.add('infoTd');
//          celdaFecha.innerHTML = cita.FechaHora;
//          celdaFecha.classList.add('infoTd');
//          celdaEstado.innerHTML = cita.Estado;
//          celdaEstado.classList.add('Estado');
//          celdaEstado.classList.add('infoTd');
        
//     }
//      let EstadoCita = document.querySelectorAll('.Estado');
//          console.log(EstadoCita.length);
//          VerEstado(EstadoCita);
// }




function ImprimirListaReservas(){
    let tbody = document.getElementById('tbdReservas');

    let listaReservas = getReservasArray();

    tbody.innerHTML = '';

    for (let i = 0; i < listaReservas.length; i++) {
        
        let reserva = listaReservas[i];
        let veterinario = buscaUsuario(cita.IdentificacionVeterinario);

        let fila = tbody.insertRow();
        let celdaNumReserva = fila.insertCell();
        let celdaMascota = fila.insertCell();
        let celdafechaEnt = fila.insertCell();
        let celdaFecha= fila.insertCell();
        let celdaEstado = fila.insertCell();
        let celdaBoton = fila.insertCell();

        celdaNumReserva.innerHTML = listaReservas[i][1];
        celdaNumReserva.classList.add('infoTd');
        celdaMascota.innerHTML = listaReservas[i][2];
        celdaMascota.classList.add('infoTd');
        celdafechaEnt.innerHTML = listaReservas[i][3];
        celdafechaEnt.classList.add('infoTd');
        celdaFecha.innerHTML = listaReservas[i][4];
        celdaFecha.classList.add('infoTd');
        celdaEstado.innerHTML = listaReservas[i][5];
        celdaEstado.classList.add('Estado');
        celdaEstado.classList.add('infoTd');
        
    }
    let EstadoCita = document.querySelectorAll('.Estado');
        console.log(EstadoCita.length);
        VerEstado(EstadoCita);
}


 function VerEstado(EstadoCita){
    
     for (let i = 0; i < EstadoCita.length; i++) {
     let sEstadoCita = EstadoCita[i].innerHTML;    
     console.log(sEstadoCita)
     if (sEstadoCita == 'AGENDADA'){
         EstadoCita[i].classList.add("AGENDADA")
        
     }
     if (sEstadoCita == 'CANCELADA'){
         EstadoCita[i].classList.add("CANCELADA")
       
     }
     if (sEstadoCita == 'FINALIZADA'){
         EstadoCita[i].classList.add("FINALIZADA")
        
     }   
     }
 }




