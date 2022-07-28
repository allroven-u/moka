'use strict'



function ImprimirListaCitas(){
    let tbody = document.getElementById('tbdCitas');

    let listaCitas = ObtenerListaCitas();

    tbody.innerHTML = '';

    for (let i = 0; i < listaCitas.length; i++) {
        
        let fila = tbody.insertRow();
        let celdaNumCita = fila.insertCell();
        let celdaMascota = fila.insertCell();
        let celdaVeterinario = fila.insertCell();
        let celdaFecha= fila.insertCell();
        let celdaEstado = fila.insertCell();
        let celdaBoton = fila.insertCell();

        celdaNumCita.innerHTML = listaCitas[i][1];
        celdaNumCita.classList.add('infoTd');
        celdaMascota.innerHTML = listaCitas[i][2];
        celdaMascota.classList.add('infoTd');
        celdaVeterinario.innerHTML = listaCitas[i][3];
        celdaVeterinario.classList.add('infoTd');
        celdaFecha.innerHTML = listaCitas[i][4];
        celdaFecha.classList.add('infoTd');
        celdaEstado.innerHTML = listaCitas[i][5];
        celdaEstado.classList.add('Estado');
        celdaEstado.classList.add('infoTd');
        

        
    }
    let EstadoCita = document.querySelectorAll('.Estado');
        console.log(EstadoCita.length);
        VerEstado(EstadoCita);
}





function ImprimirListaReservas(){
    let tbody = document.getElementById('tbdReservas');

    let listaReservas = ObtenerListaReservas();

    tbody.innerHTML = '';

    for (let i = 0; i < listaReservas.length; i++) {
        
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
        
        let EstadoCitaif = document.querySelectorAll('.Estado');
        if (EstadoCitaif[i].innerHTML == 'Pendiente' ) {
        let BotonV = document.createElement('a');
        BotonV.setAttribute('href','#')
        let iconoV =document.createElement('i');
        iconoV.classList.add("fa-solid")
        iconoV.classList.add("fa-eye")
        iconoV.classList.add("btnV")
        BotonV.appendChild(iconoV);
        celdaBoton.appendChild(BotonV);
        
        let Boton = document.createElement('a');
        Boton.setAttribute('href','#')
        let icono =document.createElement('i');
        icono.classList.add("fa-solid")
        icono.classList.add("fa-pen-to-square")
        icono.classList.add("btnEd")
        Boton.appendChild(icono);
        celdaBoton.appendChild(Boton);

        let BotonC = document.createElement('a');
        BotonC.setAttribute('href','#')
        let iconoC =document.createElement('i');
        iconoC.classList.add("fa-solid")
        iconoC.classList.add("fa-circle-xmark")
        iconoC.classList.add("btnCa")
        BotonC.appendChild(iconoC);
        celdaBoton.appendChild(BotonC);
        }else{
        let BotonV = document.createElement('a');
        BotonV.setAttribute('href','#')
        let iconoV =document.createElement('i');
        iconoV.classList.add("fa-solid")
        iconoV.classList.add("fa-eye")
        iconoV.classList.add("btnV")
        BotonV.appendChild(iconoV);
        celdaBoton.appendChild(BotonV);
        }
        
        
    }
    let EstadoCita = document.querySelectorAll('.Estado');
        console.log(EstadoCita.length);
        VerEstado(EstadoCita);
}


function VerEstado(EstadoCita){
    
    for (let i = 0; i < EstadoCita.length; i++) {
    let sEstadoCita = EstadoCita[i].innerHTML;    
    console.log(sEstadoCita)
    if (sEstadoCita == 'Pendiente'){
        EstadoCita[i].classList.add("Pendiente")
        
    }
    if (sEstadoCita == 'Cancelada'){
        EstadoCita[i].classList.add("Cancelada")
       
    }
    if (sEstadoCita == 'Finalizada'){
        EstadoCita[i].classList.add("Finalizada")
        
    }   
    }
}
