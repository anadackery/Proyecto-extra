var precio_base = 2000;

// Porcentajes edades
var edad_18 = 0.1;
var edad_25 = 0.2;
var edad_50 = 0.3;

var casado_18 = 0.1;
var casado_25 = 0.2;
var casado_50 = 0.3;

var hijos_recargo = 0.2;

//CICLO HASTA   QUE ESCRIBA SALIR
while (true) {

  var continuar = prompt("Ingrese su nombre para cotizar o escriba 'Salir' para terminar");

  if (continuar.toUpperCase() == "SALIR") {
    alert("Sistema finalizado.");
    break;
  }

  var nombre = continuar;

  var recargo_total = 0;
  var precio_final = 0;

  var porcentaje_asegurado = 0;
  var porcentaje_conyuge = 0;
  var porcentaje_hijos = 0;

  // Edad asegurado
  var edad = parseInt(prompt("¿Cuántos años tiene?"));

  // Estado civil
  var casado = prompt("¿Está casado actualmente? ");

  var edad_conyuge_numero = 0;

  
if("SI" == casado.toUpperCase()){
 var  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
  edad_conyuge_numero = parseInt(edad_conyuge)
}

  // Hijos
  var hijos = prompt("¿Tiene hijos o hijas? ");
  var cantidad_hijos = 0;

  
if("SI" == hijos.toUpperCase()){
    cantidad_hijos = parseInt(
      prompt("¿Cuántos hijos tiene?")
    );
  }

  // PROPIEDADES
  var propiedades = parseInt(
    prompt("¿Cuántas propiedades posee?")
  );

  //INGRESOS
  var salario = parseFloat(
    prompt("¿Cuál es su salario mensual?")
  );

  
  // RECARGO DEL ASEGURADO
  
  if (edad >= 18 && edad < 25) {
    porcentaje_asegurado = edad_18;
  } 
  else if (edad >= 25 && edad < 50) {
    porcentaje_asegurado = edad_25;
  } 
  else if (edad >= 50) {
    porcentaje_asegurado = edad_50;
  }

  recargo_total += precio_base * porcentaje_asegurado;

  // RECARGO CONYUGE

  if("SI" == casado.toUpperCase()){

    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
      porcentaje_conyuge = casado_18;
    } 
    else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
      porcentaje_conyuge = casado_25;
    } 
    else if (edad_conyuge_numero >= 50) {
      porcentaje_conyuge = casado_50;
    }

    recargo_total += precio_base * porcentaje_conyuge;
  }

 
  // RECARGO HIJOS
 
  if (cantidad_hijos > 0) {
    porcentaje_hijos = hijos_recargo * cantidad_hijos;
    recargo_total += precio_base * porcentaje_hijos;
  }

 
  //PROPIEDADES 35%
  
  var recargo_propiedades = precio_base * 0.35 * propiedades;
  recargo_total += recargo_propiedades;

  
  //  RECARGO SALARIO 5%

  var recargo_ingresos = salario * 0.05;
  recargo_total += recargo_ingresos;

  // PRECIO FINAL

  precio_final = precio_base + recargo_total;

  
  // RESULTADOS
 
  alert("Cotización para: " + nombre);

  alert(
    "Recargo asegurado: " +
    (porcentaje_asegurado * 100) + "%"
  );

  if (casado.toUpperCase() == "SI") {
    alert(
      "Recargo cónyuge: " +
      (porcentaje_conyuge * 100) + "%"
    );
  } else {
    alert("No posee recargo por cónyuge");
  }

  if (cantidad_hijos > 0) {
    alert(
      "Recargo por hijos: " +
      (porcentaje_hijos * 100) + "%"
    );
  } else {
    alert("No posee recargo por hijos");
  }

  alert("Recargo por propiedades: Q" + recargo_propiedades);
  alert("Recargo por ingresos: Q" + recargo_ingresos);

  alert("Recargo total: Q" + recargo_total);
  alert("Precio final: Q" + precio_final);
  }