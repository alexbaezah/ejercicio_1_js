/* utilizando un bucle, mostrar la media y la suma 
    introducidos por el usuario, hasta que metan un
    número negativo
*/ 

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("introduce un número hasta que metas un negativo", 0));

    if(isNaN(numero)){
        numero = 0;
    } else if(numero >= 0) {
        suma += numero;

        contador ++;
    }
    console.log(`la suma es ${suma}`); // muestra la suma de los números ingresados por prompt
    console.log(`iteración: ${contador}`); //muestra el número de iteración
}while(numero >= 0) {
     alert(`la suma de los números es ${suma}`);
     alert(`la media de los números es ${suma/contador}`);

}

   

