console.log("Funcionando correctamente...")

function el_clima_es() {
    let temperatura = prompt("Ingrese una temperatura: ");

    if (temperatura < 0){
        alert("La temperatura es: " + temperatura + "\nHace frio")
    }
        else if (temperatura < 25) {
            alert("La temperatura es: " + temperatura + "\nLa temperatura es agradable")
        }
            else {
                alert("La temperatura es: " + temperatura + "\nHace calor")
            }
}

function verificacion_cuenta() {
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let contraseña = prompt("Ingrese su contraseña: ");

    if (nombreUsuario === "usuario123" && contraseña === "secreto") {
        alert("Su nombre de usuario es: " + nombreUsuario + "\nSu contraseña es: " + contraseña + "\nAcceso concedido")
    } else {
        alert("Su nombre de usuario es: " + nombreUsuario + "\nSu contraseña es: " + contraseña + "\nAcceso denegado")
    }
}

function determinar_signo() {
    let numero = prompt("Ingrese un numero: ")

    if (numero < 0) {
        alert("El numero: " + numero + " es negativo")
    } else if (numero == 0) {
            alert("El numero: " + numero + " es cero")
        } else {
                alert("El numero: " + numero + " es positivo")
            }
}

function puntuacion_juego() {
    let puntaje = prompt("Ingrese un puntaje: ")

    if (puntaje >= 90){
        alert("Su puntaje es: " + puntaje + "\nExcelente")
    } else if (puntaje > 70){
            alert("Su puntaje es: " + puntaje + "\nBuen trabajo")
        } else {
            alert("Su puntaje es: " + puntaje + "\nNecesitas mejorar")
        }
}