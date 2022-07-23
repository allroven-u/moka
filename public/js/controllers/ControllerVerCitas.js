let EstadoCita = document.querySelectorAll('.Estado');
function VerEstado(){
    console.log(EstadoCita.length)
    
    for (let i = 0; i < EstadoCita.length; i++) {
    let sEstadoCita = EstadoCita[i].innerHTML;    
    console.log(sEstadoCita)
    if (sEstadoCita == 'Pendiente'){
        EstadoCita[i].classList.add("Pendiente")
        
    }
    if (sEstadoCita == 'Activa'){
        EstadoCita[i].classList.add("Activa")
        
    }
    if (sEstadoCita == 'Finalizada'){
        EstadoCita[i].classList.add("Finalizada")
        
    }   
    }
}
