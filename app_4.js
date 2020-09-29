var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("introduce el segundo número", 0));

// document.write("<h1> de" +numero1+" a "+numero2+" están estos números:</h1>")
document.write(`<h1> de ${numero1} a ${numero2} están estos números: </h1>`)
for( var i = numero1; i <= numero2; i++) {
    if(i % 2 === 1) {
        document.write(`${i} es impar<br/>`)
    } 
}