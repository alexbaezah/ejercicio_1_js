
var numero1 = parseInt(prompt("Introduce el primer número", 0));

while(numero1 <= 0 || isNaN(numero1) ) {
    numero1 = parseInt(prompt("Introduce el primer número", 0));
}



if(numero1 % 2 === 0) {
    document.write(`${numero1} es par </br>`);
} else {
    document.write(`${numero1} es impar </br>`);
}