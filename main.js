//Desde el inicio se crea un estado de "pendiente" donde:
//Esta esperando a que se ingresen los digitos 1-9 y . ( en caso de que empiece con '.' mantener el cero inicial, para el primer numero) y 0-9 para del segundo en delante o 
//Esta esperando a que se ingrese la operacion (-) por si se va a realizar una operacion con numero negativo.
//

//Prevent default sobre los botones (evita que se refresque la pagina)
window.onload = ()=>{
    const botones = document.querySelectorAll(".digit");
    for(let i=0;i<botones.length;i++) {
        botones[i].event.preventDefault();
    }
};
