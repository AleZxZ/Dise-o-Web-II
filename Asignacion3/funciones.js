function ParImpar(numero1,numero2){
    var num1=parseFloat(document.getElementById('numero1').value);
    var num2=parseFloat(document.getElementById('numero2').value);
    var res1=num1+num2;

    if (num1 && num2 != null) {
        document.getElementById('resultado').value=res1;
        if (res1%2==0) {
            document.getElementById('respuesta').value="La suma de los dos numeros es Par";
        }
        else{
            document.getElementById('respuesta').value="La suma de los dos numeros es Impar";
    
        }
    }
    else{
        document.getElementById('respuesta').value="Ingrese numeros";

    }
}

function NumeroMedio(M1,M2,M3){
    var A=parseFloat(document.getElementById('M1').value);
    var B=parseFloat(document.getElementById('M2').value);
    var C=parseFloat(document.getElementById('M3').value);
  
    document.getElementById('respuestaMedio').value="El numero del medio es: "+B;
}


function Factorial(F){
    var A=parseFloat(document.getElementById('F').value);
    var res=1;
    if (A==1) {
        document.getElementById('respuestaFactorial').value="Su factorial es: "+A;
    }
    else{
        for (var i = 1; i <= A; i++) {
           res=res*i;
        }
        document.getElementById('respuestaFactorial').value="Su factorial es: "+res;
    }
  
    
}

function Primos(P){
    var A=parseFloat(document.getElementById('P').value);
    var cont=0;
    if (A==1 || A==0) {
        document.getElementById('respuestaPrimos').value=A+" No es un numero primo";
    }
    else{
        for (var i = 0; i <= A; i++) {
            if (A%i==0) {
                cont=cont+1;
            } 
        }
        if (cont>2) {
            document.getElementById('respuestaPrimos').value=A+" No es un numero primo";
        }
        else{
            document.getElementById('respuestaPrimos').value=A+" Es un numero primo divisible entre 1 y "+A;

        }
    }
  
    
}