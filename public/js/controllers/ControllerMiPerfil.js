'use strict';
let txtUsuarioLogueado2 = document.getElementById('TxtUsuarioLogueado2');
let txtNombreP = document.getElementById('txtNombreP');
let txtApellidosP = document.getElementById('txtApellidosP');
let txtCedulaP = document.getElementById('txtCedulaP');
let txtEmailP = document.getElementById('txtEmailP');
let txtUsuarioP = document.getElementById('txtUsuarioP');
let txtContraseniaP = document.getElementById('txtContraseniaP');
let txtDireccionP = document.getElementById('txtDireccionP');
let txtCalificacionP = document.getElementById('txtCalificacionP');
window.addEventListener('load', () => {
    let usuario = GetSesion();
    console.log(usuario.Identificacion);
    txtUsuarioLogueado2.textContent = usuario.Nombre + ' ' + usuario.Apellido1;
    txtNombreP.textContent = usuario.Nombre;
    txtApellidosP.textContent = usuario.Apellido1 +  " " + usuario.Apellido2;
    txtEmailP.textContent = usuario.Email;
    txtUsuarioP.textContent = usuario.Usuario;
    txtContraseniaP.textContent = "*********";
    txtDireccionP.textContent = usuario.Direccion;
    txtCedulaP.textContent = usuario.Identificacion;
});

function ImprimirListaCitas(){
    let tbody = document.getElementById('tbbody-ultimas-citas');

    let listaCitas = ObtenerListaCitas();

    console.log(listaCitas);

    tbody.innerHTML = '';

    for (let i = 0; i < listaCitas.length; i++) {
        
        let fila = tbody.insertRow();
        let celdaMascota = fila.insertCell();
        let celdaVeterinario = fila.insertCell();
        let celdaFecha= fila.insertCell();


        celdaMascota.innerHTML = listaCitas[i][2];
        celdaMascota.classList.add('h-citas');
        celdaVeterinario.innerHTML = listaCitas[i][3];
        celdaVeterinario.classList.add('h-citas');
        celdaFecha.innerHTML = listaCitas[i][4];
        celdaFecha.classList.add('h-citas');

        
    };
   
};