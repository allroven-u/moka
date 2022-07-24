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
        
        let Boton = document.createElement('a');
        Boton.innerHTML = 'detalle';
        Boton.setAttribute('href','./IniciarSesion.html')
        Boton.classList.add('btn');
        celdaBoton.appendChild(Boton);
        
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
        let celdaNumCita = fila.insertCell();
        let celdaMascota = fila.insertCell();
        let celdaVeterinario = fila.insertCell();
        let celdaFecha= fila.insertCell();
        let celdaEstado = fila.insertCell();
        let celdaBoton = fila.insertCell();

        celdaNumCita.innerHTML = listaReservas[i][1];
        celdaNumCita.classList.add('infoTd');
        celdaMascota.innerHTML = listaReservas[i][2];
        celdaMascota.classList.add('infoTd');
        celdaVeterinario.innerHTML = listaReservas[i][3];
        celdaVeterinario.classList.add('infoTd');
        celdaFecha.innerHTML = listaReservas[i][4];
        celdaFecha.classList.add('infoTd');
        celdaEstado.innerHTML = listaReservas[i][5];
        celdaEstado.classList.add('Estado');
        celdaEstado.classList.add('infoTd');
        
        let Boton = document.createElement('a');
        Boton.innerHTML = 'detalle';
        Boton.setAttribute('href','./IniciarSesion.html')
        Boton.classList.add('btn');
        celdaBoton.appendChild(Boton);
        
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
