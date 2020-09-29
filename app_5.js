/* 
    Todos los números divisores de un número en prompt
*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));

document.write(`<h1> Los números divisibles de ${numero1} son : </h1>`)
for( var i = 0; i <= numero1; i++) {
    if(numero1 % i === 0) {
        document.write(`${i} divisible<br/>`)
    } 
}   