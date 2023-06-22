function operaciones(){

  let mostrarCero = true; //Variable para mostrar el cero inicial en la pantalla

    //Variables obtenidas a traves de la funcion getElementById,que se utiliza para obtener una referencia a un elemento HTML especifico utilizando su id

    let resultado = document.getElementById("resultado");  
    let ac= document.getElementById("ac"); 
    let signoMenos = document.getElementById("signoMenos"); 
    let porcentaje= document.getElementById("porcentaje");
    let division= document.getElementById("division");
    let siete= document.getElementById("siete");
    let ocho= document.getElementById("ocho");
    let nueve= document.getElementById("nueve");
    let multiplicacion= document.getElementById("multiplicacion");
    let cuatro= document.getElementById("cuatro");
    let cinco= document.getElementById("cinco");
    let seis= document.getElementById("seis");
    let menos= document.getElementById("menos");
    let uno= document.getElementById("uno");
    let dos= document.getElementById("dos");
    let tres= document.getElementById("tres");
    let mas= document.getElementById("mas");
    let cero= document.getElementById("cero");
    let coma= document.getElementById("coma");
    let borrar= document.getElementById("borrar");
    let igual= document.getElementById("igual");

    //Eventos 

    cero.onclick = function(e) { //Al darle click en el boton cero
        if (mostrarCero) { //Si mostrarCero es verdadero,es decir, esta el cero inicial en la pantalla entonces
          resultado.textContent = ""; //Quitar ese cero de la pantalla
          mostrarCero = false; 
        }
        resultado.textContent = resultado.textContent + "0"; //Ingresar el numero cero
      }



//Nota: La propiedad textContent se utiliza para obtener o establecer el contenido de texto de un elemento HTML.

//Hacer lo mismo para cada uno de los botones

      uno.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "1";
      }

    
      dos.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "2";
      }
    
     tres.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "3";
      }


     cuatro.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "4";
      }

     cinco.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "5";
      }


     seis.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "6";
      }

     siete.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "7";
      }

     ocho.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "8";
      }

    
      nueve.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "9";
      }

     coma.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + ".";
      }

     signoMenos.onclick = function(e) {
        if (mostrarCero) {
          resultado.textContent = "";
          mostrarCero = false;
        }
        resultado.textContent = resultado.textContent + "-";
      }

    ac.onclick = function(e){
        borrarTodo(); //funcion
    }


    borrar.onclick = function(e){
        eliminar(); //funcion 
    }

    mas.onclick = function(e) {
      if (mostrarCero) {
        resultado.textContent = "";
        mostrarCero = false;
      }
      resultado.textContent = resultado.textContent + "+";
    }

    menos.onclick = function(e) {
      if (mostrarCero) {
        resultado.textContent = "";
        mostrarCero = false;
      }
      resultado.textContent = resultado.textContent + "-";
    }

    multiplicacion.onclick = function(e) {
      if (mostrarCero) {
        resultado.textContent = "";
        mostrarCero = false;
      }
      resultado.textContent = resultado.textContent + "*";
    }

    division.onclick = function(e) {
      if (mostrarCero) {
        resultado.textContent = "";
        mostrarCero = false;
      }
      resultado.textContent = resultado.textContent + "/";
    }

    porcentaje.onclick = function(e) {
      if (mostrarCero) {
        resultado.textContent = "";
        mostrarCero = false;
      }
      resultado.textContent = resultado.textContent + "/100";
    }

    igual.onclick=function(e){
     try {
    resultado.textContent = eval(resultado.textContent); //eval() devuelve el resultado de esa evaluación
     } catch {
    resultado.textContent = "Sintax error";
    }
     return;
     }


      //Funcion para eliminar un numero
      function eliminar(){
      
            if (resultado.textContent.length === 1 || resultado.textContent === "Error!") { //si la longitud de resultado es igual a 1 o si se ha producido un error entonces mostrar cero inicial:
                mostrarCero= true; 
                resultado.textContent = "0";
            } else { //sino
                resultado.textContent = resultado.textContent.slice("0", -1); //eliminar el ultimo caracter de resultado
            }
            return;
      }

      //Nota: el metodo slice, toma una porcion del texto desde el indice especificado hasta el indice antes del ultimo (-1). 
      //length es una propiedad utilizada para obtener la longitud de una cadena de texto u otros tipos de objetos 


      //Funcion para borrar todo con el boton ac

      function borrarTodo(){
         resultado.textContent="0"; //se muestra el cero inicial 
        mostrarCero= true;
      }
}
