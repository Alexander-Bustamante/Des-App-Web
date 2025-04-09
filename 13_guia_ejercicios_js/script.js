console.log("Funcionando correctamente...")


// Ejercicio 1: Suma de los N primeros numeros, N es ingresado por el usuario //

function primeros_num() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"))
    let resultado = 0

    for (let i = 1; i <= num_ingresado; i++){
        resultado += i 
    }
    alert(resultado)
}

// Ejercicio 1: Suma de los N primeros numeros, N es ingresado por el usuario //


// Ejercicio 2: Imprimir los primeros 100 numeros pares //

function num_pares() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"))
    let array_pares = []

    for (let i = 1; i <= num_ingresado; i++) {
        if (i % 2 === 0){
            array_pares.push(i)
        }
    }
    alert(`Los numeros pares hasta el numero ingresado son: ${array_pares.join(" - ")}`)
}

// Ejercicio 2: Imprimir los primeros 100 numeros pares //


// Ejercicio 3: Imprimir los primeros 100 numeros impares //

function num_impares() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"))
    let array_impares = []

    for (let i = 1; i <= num_ingresado; i++) {
        if (i % 2 !== 0){
            array_impares.push(i)
        }
    }
    alert(`Los numeros impares hasta el numero ingresado son: ${array_impares.join(" - ")}`)
}

// Ejercicio 3: Imprimir los primeros 100 numeros impares //


// Ejercicio 4: Sumar 5 numeros ingresados por el usuario //

function sum_5_num() {
    let limite = 5
    let resultado = 0

    for (let i = 0; i < limite; i++){
        num_suma = parseInt(prompt("Ingrese un numero"))
        resultado += num_suma
    }
    alert(`La suma de los 5 numeros ingresados es: ${resultado}`)
}

// Ejercicio 4: Sumar 5 numeros ingresados por el usuario //


// Ejercicio 5: Sumar la cantidad de numeros que el ususario desee, ademas el usuario ingresara los numeros //

function sum_cantidad_num_deseado() {
    let limite = parseInt(prompt("Ingrese la cantidad de numero que quiere sumar"))
    let resultado = 0

    for (let i = 0; i < limite; i++){
        num_suma = parseInt(prompt("Ingrese un numero"))
        resultado += num_suma
    }
    alert(`La suma de los numeros ingresados es: ${resultado}`)
}

// Ejercicio 5: Sumar la cantidad de numeros que el ususario desee, ademas el usuario ingresara los numeros //


// Ejercicio 6: Solicitar 2 numeros y pedir que operacion aritmetica basica desea usar con esos numeros//

function mini_calculadora() {
    let num1 = parseInt(prompt("Ingrese el primer numero"))
    let num2 = parseInt(prompt("ingrese el segundo numero"))

    let operacion = (prompt(`¿Que desea hacer con los numeros?
Escriba "suma" , "resta" , "multiplicacion" o "division"`))
    
    function operaciones(x){
        if(operacion === "suma"){
            resultado = num1 + num2
            return (resultado)
        }
        if(operacion === "resta"){
            resultado = num1 - num2
            return (resultado)
        }
        if(operacion === "multiplicacion"){
            resultado = num1 * num2
            return (resultado)
        }
        if(operacion === "division"){
            resultado = num1 / num2
            return (resultado)
        } else if(num1 === 0 || num2 === 0){
            alert("No es posible dividir entre cero")
        }
    }

    alert(`Usted ingreso ${num1} y ${num2} y quiso usar la operacion ${operacion}
El resultado es ${operaciones(operacion)}`)
}

// Ejercicio 6: Solicitar 2 numeros y pedir que operacion aritmetica basica desea usar con esos numeros//


// Ejercicio 7: Sumar N numeros pares //

function sum_pares() {
    let num_ingresado = parseInt(prompt("Ingrese la cantidad de numeros que desea sumar"))
    let resultado = 0

    for (let i = 1; i <= num_ingresado; i++){
        let num = parseInt(prompt(`Ingrese el ${i} numero`))
        
    } 

}
// Ejercicio 7: Sumar N numeros pares //