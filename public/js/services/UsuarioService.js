'use strict'

let usuariosArray = [];

function cargaJson()
{
   console.log('Empezando carga de usuarios....');

 fetch("/public/assets/data/infoUsuarios.json")
 .then(response =>  response.json())
 .then(response => {
   usuariosArray = response;
   console.log(usuariosArray);
 });
  return usuariosArray; 
}

function buscaUsuario(pUsuario){

let result = null;
for (let i = 0; i < usuariosArray.length; i++) {
if( usuariosArray[i].Usuario == pUsuario){
   result = usuariosArray[i];
}

return result;
}
};

function buscaUsuarioPorID(pUsuarioID){
return "";
};
