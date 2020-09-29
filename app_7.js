var numero1 = parseInt(prompt("Introduce el primer número", 0));

document.write("<h1> Tabla de multiplicación hasta el 10: </h1>")

for(var i = 0; i <= 10; i++) {
    document.write(`${i} x ${numero1} = ${i * numero1} </br>`)
}