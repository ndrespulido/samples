function mmostrarNombre() {
  var nombre = document.getElementById("textoNombre").value;
  alert("Hola "+nombre+", como estas?");
}

function sumar() {

  /*  
  
  Prueba de codigo suma dos input
  
  */

  //Numero 1
  var x = parseInt(
  document.getElementById("numero1")
  .value
  );

  //Numero 2
  var y = parseInt(document.getElementById("numero2").value);
  var z = x + y;
  document.getElementById("textoSalida").value = z;
}
