/*
    programa que pida dos números y que nos diga
    cuál es el mayor, el menor y si son iguales
*/ 

let numero_1;
let numero_2; 
numero_1 = (prompt("introduce un numero"));
numero_2= (prompt("introduce otro número"));

if( isNaN(numero_1) === true &&  isNaN(numero_2) === true) {
    alert("debe ingresar números")
} else if(numero_1 > numero_2) {
    alert(`${numero_1} es mayor que ${numero_2}`)
} else if(numero_1 < numero_2){
    alert(`${numero_2} es mayor que ${numero_1}`)
} else if(numero_1 === numero_2) {
    alert(`${numero_1} y ${numero_2} son iguales`)
}
