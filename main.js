//Desde el inicio se crea un estado de "pendiente" donde:
//Esta esperando a que se ingresen los digitos 1-9 y . ( en caso de que empiece con '.' mantener el cero inicial, para el primer numero) y 0-9 para del segundo en delante o 
//Esta esperando a que se ingrese la operacion (-) por si se va a realizar una operacion con numero negativo.
//

//Prevent default sobre los botones (evita que se refresque la pagina)
window.onload = ()=>{
  var estado = "listo";
  var punto = true; //se puede insertar un punto a la cantidad
  var negativo = true; //se puede hacer este numero en negativo;
  var ValorA = 0;//valores que se usaran para las operaciones
  var ValorB = 0;
  //variable general de estado donde:
  //
  // 1.-listo - recien limpiado todo y listo para recibir:
  // cualquier digito exceptuendo el "0" 
  // el Digito negativo (-) para hacer operaciones con negativos
  // el punto para una cantidad fraccionaria
  // 
  // 2.- escribiendo
  // al pasar de listo a escribiendo lo que hace es borrar el (0) inicial
  // y empezar a escribir los digitos correspondientes (aqui tambien se incluye el punto, pero solamente una vez);
  //
  // Cuando esta en escribiendo y se da click en algun operador... 
  // este se pone en modo operador en esta seccion el usuario elige que operacion se va a realizar 
  // (suma, resta, multiplicacion, division, porcentaje, raiz o potencia)
  
  const objDisplay = document.querySelector(".display");
  objDisplay.value = "0";
  objDisplay.textContent = "0";
  //Boton Reset
  const objClear = document.querySelector(".digit-clear");
  
  const objDigito_1 = document.querySelector(".digit-1");
  const objDigito_2 = document.querySelector(".digit-2");
  const objDigito_3 = document.querySelector(".digit-3");
  const objDigito_4 = document.querySelector(".digit-4");
  const objDigito_5 = document.querySelector(".digit-5");
  const objDigito_6 = document.querySelector(".digit-6");
  const objDigito_7 = document.querySelector(".digit-7");
  const objDigito_8 = document.querySelector(".digit-8");
  const objDigito_9 = document.querySelector(".digit-9");
  const objDigito_0 = document.querySelector(".digit-0");
  const objDigito_resta = document.querySelector(".digit-sub");
//-------------------Funciones--------------------------//
//Limpiar
  function fncLimpiar() {
    estado = "listo";
    objDisplay.textContent = "0";
    objDisplay.value = "0";
  }
  
  function fncDigitos1_9(objeto){
    this.objeto = objeto;
    //console.log(objeto);
    //console.log(estado);
    //Primero verificar en que estado estamos
    if (objeto == "0") {
      if (estado == "listo") {
        //console.log("La cantidad es:" + objDisplay.textContent);
        return false; //si el primer digito que quieres ingresar es el 0 no haga nada;
        
        /////TODO:
        //cuando se presiona el negativo se pueden presionar numeros (0) lo cual no es correcto
        //agregar una condicional para solucionar que no se agreguen 0 a no ser que haya un digito detras de el y no el negativo
      } else if (estado =="escribiendo") {
        objDisplay.textContent += objeto;//como ya hay un numero mayor a cero, ya puede escribir los que necesite.
        objDisplay.value = objDisplay.textContent;
      }
    }else if (
      objeto == "1" || 
      objeto == "2" || 
      objeto == "3" || 
      objeto == "4" || 
      objeto == "5" ||
      objeto == "6" ||
      objeto == "7" ||
      objeto == "8" ||
      objeto == "9" ){
        if (estado == "listo") {
          objDisplay.textContent = objeto;
          objDisplay.value = objDisplay.textContent;
          estado = "escribiendo";//cambio de estado, pues ya se definio el primer digito
        } else if (estado =="escribiendo") {
          objDisplay.textContent += objeto;
          objDisplay.value = objDisplay.textContent;
        }
      }
    if (objeto == "-"){//Negativo de un numero
        if (estado == "listo") {
          objDisplay.textContent = "-";
          objDisplay.value = objDisplay.textContent;
          estado = "escribiendo";
        } else if (estado =="escribiendo") {
          //Ponerlo en la seccion de operador
        }
      }
  }
  //Asignacion de botones
  objClear.onclick = fncLimpiar;
  
  objDigito_1.onclick = ()=>fncDigitos1_9(objDigito_1.textContent);
  objDigito_2.onclick = ()=>fncDigitos1_9(objDigito_2.textContent);
  objDigito_3.onclick = ()=>fncDigitos1_9(objDigito_3.textContent);
  objDigito_4.onclick = ()=>fncDigitos1_9(objDigito_4.textContent);
  objDigito_5.onclick = ()=>fncDigitos1_9(objDigito_5.textContent);
  objDigito_6.onclick = ()=>fncDigitos1_9(objDigito_6.textContent);
  objDigito_7.onclick = ()=>fncDigitos1_9(objDigito_7.textContent);
  objDigito_8.onclick = ()=>fncDigitos1_9(objDigito_8.textContent);
  objDigito_9.onclick = ()=>fncDigitos1_9(objDigito_9.textContent);
  objDigito_0.onclick = ()=>fncDigitos1_9(objDigito_0.textContent);
  objDigito_resta.onclick = ()=>fncDigitos1_9(objDigito_resta.textContent);
};
