
function calcularNumeroFibonacci() {

    /*  
    
    Prueba de codigo suma dos input
    
    */
  
    //Numero 1
    var x = parseInt(
    document.getElementById("numeroFibonacci")
    .value
    );

    var z = 0;
    var a = 0;
    var b = 1;

    if(x == 0){
        a = 0;
    }
    else if(x == 1){
        z = 1;
    }

    if(x>1){
        for(var i = 2; i <= x; i++){
            a = b;
            b = z;
            z = a + b;
        }
    }

    document.getElementById("textoSalida").value = z;
  }
  