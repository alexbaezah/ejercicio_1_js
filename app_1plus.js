let numero_1;
let numero_2; 
numero_1 = parseInt((prompt("introduce un numero")));
numero_2= parseInt((prompt("introduce otro número")));

while(numero_1 <= 0 || numero_2 <= 0 || isNaN(numero_1)) {
    numero_1 = parseInt((prompt("introduce un numero", 0)));
    numero_2= parseInt((prompt("introduce otro número", 0)));
}


if(numero_1 === numero_2) {
    alert("Los números son iguales")
} else if(numero_1 > numero_2) {
    alert(`El número  ${numero_1} es mayor que ${numero_2}`)
} else if(numero_2 > numero_1) {
    alert(`el número ${numero_2} es mayor que ${numero_1}`)
} else {
    alert("Introduce los números correctos")
}