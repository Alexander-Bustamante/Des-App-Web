console.log("Funcionando correctamente...")

function verificar_par() {
    let num = parseInt(prompt("Ingrese un numero: "))
    if (num % 2 === 0){
        alert("Su numero es par")
    } else {
        alert("Su numero es impar")
    }
}

function calculadora_imc() {
    let peso = parseFloat(prompt("Ingrese su peso en Kg"))
    let altura = (parseInt(prompt("Ingrese su altura en cm"))) / 100
    let imc = (peso / (altura ** 2))

    imc = Number(imc.toFixed(2))
    if (imc < 18.5) {
        alert("Su peso es: " + peso + " kilogramos\nSu altura es " + altura + " metros\nSu imc es " + imc + "\nUsted esta bajo peso")
    } else if (imc >= 18.5 && imc < 25) {
        alert("Su peso es: " + peso + " kilogramos\nSu altura es " + altura + " metros\nSu imc es " + imc + "\nUsted esta en un peso normal")
    } else {
        alert("Su peso es: " + peso + " kilogramos\nSu altura es " + altura + " metros\nSu imc es " + imc + "\nUsted esta sobrepeso")
    }
}

function calcular_notas() {
    let nota1 = parseFloat(prompt("Ingrese su primer nota entre 1 y 7"))
    let nota2 = parseFloat(prompt("Ingrese su segunda nota entre 1 y 7"))
    let nota3 = parseFloat(prompt("Ingrese su tercera nota entre 1 y 7"))

    let promedio = (nota1 + nota2 + nota3) / 3
    
    promedio = Number(promedio.toFixed(2))

    if (promedio < 1) {
        alert("Ingrese valores validos")
    } else if (promedio >= 1 && promedio < 4){
        alert("Su nota es " + promedio + "\nUsted esta reprobado")
    } else if (promedio >= 4 && promedio <= 7) {
        alert("Su nota es " + promedio + "\nUsted esta aprobado")
    } else {
        alert("ingrese valores validos")
    }
}
