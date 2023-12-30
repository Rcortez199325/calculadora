window.onload = ()=>{
  var estado = "listo";
  var punto = true; //se puede insertar un punto a la cantidad
  var negativo = true; //se puede hacer este numero en negativo;---sale sobrando
  var valorA = "";//valores que se usaran para las operaciones
  var valorB = "";
  var valorOperador = "";
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
  // 3.- operador
  // Cuando esta en escribiendo y se da click en algun operador... 
  // este se pone en modo operador en esta seccion el usuario elige que operacion se va a realizar 
  // (suma, resta, multiplicacion, division, porcentaje, raiz o potencia)
  
  var objDisplay = document.querySelector(".display");
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
  const objDigito_punto = document.querySelector(".digit-point");
  const objDigito_suma = document.querySelector(".digit-add");
  const objDigito_multiplicacion = document.querySelector(".digit-mult");
  const objDigito_division = document.querySelector(".digit-div");
  
  const objDigito_resultado = document.querySelector(".digit-res");
  
  const objDigito_potencia = document.querySelector(".digit-pow");
  const objDigito_raiz = document.querySelector(".digit-root");
  const objDigito_porcentaje = document.querySelector(".digit-per");
  const objDisplay_sm = document.querySelector(".display-sm");
  
//-------------------Funciones--------------------------//
//Limpiar
  function fncLimpiar() {
    estado = "listo";
    objDisplay.textContent = "0";
    objDisplay.value = "0";
    punto = true;
    valorOperador = "";
    valorA = "";
    valorB = "";
    objDisplay_sm.textContent = "";
    objDisplay_sm.value = objDisplay_sm.textContent;
  }
  //---------------------------Funcion de resultado  ( = )-----------------------------//
  //----------------Funcion de Potencia testeando------
  function fncPotencia(objeto) {
    this.objeto = objeto;
    let resultadoFinal = 0;
    if (estado == "escribiendo") {
      valorA = objDisplay.textContent;
      resultadoFinal = valorA * valorA;
      objDisplay.textContent = resultadoFinal;
      objDisplay.value = objDisplay.textContent;
    }
  }
  //----------------Funcion Raiz cuadrada testeando-----
  function fncRaiz(objeto) {
    this.objeto = objeto;
    console.log("el objeto es: " + objeto);
    let resultadoFinal = 0;
    if (estado == "escribiendo") {
      valorA = objDisplay.textContent;
      console.log("El valor a operar es: " + valorA);
      resultadoFinal = Math.sqrt(valorA);
      console.log("el resultado es: " + resultadoFinal);
      objDisplay.textContent = resultadoFinal;
      objDisplay.value = objDisplay.textContent;
    }
  }
  /////////////////////////////////////////TODO: testeando la funcion
  function fncOperar(_valorA, _valorB,_signo){
    this._valorA = _valorA;
    this._valorB = _valorB;
    this._signo = _signo;
      switch (_signo) {
        case '+':
          return _valorA + _valorB;
        case '-':
          return _valorA - _valorB;
        case '*':
          return _valorA * _valorB;
        case '/':
          return _valorA / _valorB;
        case '%':
          return _valorA * (_valorB / 100);
      }
    }
  function fncResultado(objeto) {
    //tiene que tener un valor A y otro valor B a huevo si no, manda error.
    if (estado == "escribiendo") {
      if (valorA != "") {//si tiene algun valor que no sea una cadena vacia;
        valorB = objDisplay.textContent;
        if (valorOperador == "%"){
          if (valorB <=0 || valorB >100) {
            alert("el porcentaje tiene que ser un valor entre 1 y 100");
            alert("Se procede a limpiar los campor");
            objDisplay.textContent = "Error";
            objDisplay.value = "Error";
            objDisplay_sm.textContent = "";
            objDisplay_sm.value = objDisplay_sm.textContent;
            fncLimpiar();
            return false;
          }
        }
        //transformar ambas variables texto a numericas para la operacion;/
        let _valorA = parseFloat(valorA);
        let _valorB = parseFloat(valorB);
        console.log("El valor A es: " + _valorA);
        console.log("El operador es: " + valorOperador);
        console.log("el valor B es: " + _valorB);
        objDisplay.textContent = fncOperar(_valorA,_valorB,valorOperador);
        objDisplay.value = objDisplay.textContent;
        let resultadoFinal = objDisplay.textContent;
        console.log("El resultado es: " + resultadoFinal);
        objDisplay_sm.textContent = "";
        objDisplay_sm.value = objDisplay_sm.textContent;
      } else if (valorA == "" || valorA == undefined){//si el valor es totalmente vacio
        return false;
      }
    }
  }
  //------------------Funciones de operadores (+-*/% root)
  function fncOperador(objeto) {
    this.objeto = objeto;
    if (objeto == "%"){
      punto = false;
      objDisplay_sm.textContent = objeto;
      objDisplay_sm.value = objDisplay_sm.textContent;
    }else {
      punto = true;//activar punto en modo operador
    }
    if (estado == "escribiendo") {
      if (valorA == ""){
        valorA = objDisplay.textContent;
        objDisplay.textContent = objeto;
        objDisplay.value = objDisplay.textContent;
        estado = "operador";
        valorOperador = objDisplay.textContent;
        objDisplay.textContent = "0";
        objDisplay.value = objDisplay.textContent;
        objDisplay_sm.textContent = objeto;
        objDisplay_sm.value = objDisplay_sm.textContent;
        estado = "listo";
        //}
      } else{
        //aqui deducimos que el valor A ya tiene algun valor, por lo que seria correcto deshabilitar por el momento.
        return false;
      }
    } else if( estado == "operador"){
      objDisplay.textContent = objeto;
      objDisplay.value = objDisplay.textContent;
    }
  }
  //--------------------Funcion manejo de Digitos 0-9 negativo y punto
  function fncDigitos1_9(objeto){
    this.objeto = objeto;
    if (objeto == "0") {
      if (estado == "listo") {
        return false; //si el primer digito que quieres ingresar es el 0 no haga nada;
      } else if (estado =="escribiendo") {
        if (objDisplay.textContent == "-") {
          return false;
        }else {
          objDisplay.textContent += objeto;//como ya hay un numero mayor a cero, ya puede escribir los que necesite.
          objDisplay.value = objDisplay.textContent;
        }
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
        if (estado == "operador"){ //aqui ya se metio el primer valor, pero regresara la funcion en nombre de fichas.jpg
          valorOperador = objDisplay.textContent;
          objDisplay.textContent = objeto;
          objDisplay.value = objDisplay.textContent;
          estado = "escribiendo";
        }
      }
    if (objeto == "-"){//Aplicar el negativo a un numero.
        if (estado == "listo") {
          objDisplay.textContent = "-";
          objDisplay.value = objDisplay.textContent;
          estado = "escribiendo";
        } else if (estado =="escribiendo") {
           if (valorA == ""){
            valorA = objDisplay.textContent;
            objDisplay.textContent = objeto;
            objDisplay.value = objDisplay.textContent;
            estado = "operador";
            objDisplay_sm.textContent = objeto;
            objDisplay_sm.value = objDisplay_sm.textContent;
            valorOperador = objDisplay.textContent;
            objDisplay.textContent = "0";
            objDisplay.value = objDisplay.textContent;
            estado = "listo";
          }
          fncOperador(objeto);//Modo operador del negativo first click
          punto = true;//activar punto en modo operador
        }else{
          if (estado == "operador"){
            fncOperador(objDigito_resta.textContent);//tecnicamente es para cambiar el signo a negativo en modo operador.
            punto = true;//activar punto en modo operador - testing
          }
        }
      }
    if (objeto == ".") {
      if (estado == "listo" ){
        objDisplay.textContent = "0.";
        objDisplay.value = objDisplay.textContent;
        estado = "escribiendo";
      } else if (estado == "escribiendo") {
        if (punto == true) {//verifica que solo exita 1 punto en la calculadora
          if (objDisplay.textContent == "-") {
            objDisplay.textContent += "0.";
            objDisplay.value = objDisplay.textContent;
          } else {
            objDisplay.textContent += objeto;
            objDisplay.value = objDisplay.textContent;
          }
          punto = false;
        } else{return false;}//aqui que no realice nada, porque ya se co
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
  objDigito_punto.onclick = ()=>fncDigitos1_9(objDigito_punto.textContent);
  
  objDigito_suma.onclick = ()=>fncOperador(objDigito_suma.textContent);
  objDigito_multiplicacion.onclick = ()=>fncOperador(objDigito_multiplicacion.textContent);
  objDigito_division.onclick = ()=>fncOperador(objDigito_division.textContent);
  objDigito_resultado.onclick = ()=>fncResultado(objDigito_resultado.textContent);
  
  objDigito_potencia.onclick = ()=> fncPotencia(objDigito_potencia.textContent);
  objDigito_porcentaje.onclick = ()=>fncOperador(objDigito_porcentaje.textContent);
  objDigito_raiz.onclick = ()=>fncRaiz(objDigito_raiz.textContent);
};
