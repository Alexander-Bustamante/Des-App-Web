console.log("Funcionando correctamente...");


// Ejercicio 1: Suma de los N primeros numeros, N es ingresado por el usuario //

function primeros_num() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"));
    let num_sumados = [];
    let resultado = 0;

    for (let i = 1; i <= num_ingresado; i++){
        resultado += i ;
        num_sumados.push(i);
    };
    alert(`Los numeros sumados son: ${num_sumados.join(" - ")}
El resultado de la suma es: ${resultado}`);
};

// Ejercicio 1: Suma de los N primeros numeros, N es ingresado por el usuario //


// Ejercicio 2: Imprimir los primeros 100 numeros pares //

function num_pares() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"));
    let array_pares = [];

    for (let i = 1; i <= num_ingresado * 2; i++) {
        if (i % 2 === 0){
            array_pares.push(i)
        };
    };
    alert(`Los numeros pares hasta el numero ingresado son: ${array_pares.join(" - ")}`);
};

// Ejercicio 2: Imprimir los primeros 100 numeros pares //


// Ejercicio 3: Imprimir los primeros 100 numeros impares //

function num_impares() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"));
    let array_impares = [];

    for (let i = 1; i <= num_ingresado * 2; i++) {
        if (i % 2 !== 0){
            array_impares.push(i)
        };
    }
    alert(`Los numeros impares hasta el numero ingresado son: ${array_impares.join(" - ")}`);
};

// Ejercicio 3: Imprimir los primeros 100 numeros impares //


// Ejercicio 4: Sumar 5 numeros ingresados por el usuario //

function sum_5_num() {
    let limite = 5;
    let resultado = 0;

    for (let i = 0; i < limite; i++){
        num_suma = parseInt(prompt("Ingrese un numero"));
        resultado += num_suma;
    }
    alert(`La suma de los 5 numeros ingresados es: ${resultado}`);
};

// Ejercicio 4: Sumar 5 numeros ingresados por el usuario //


// Ejercicio 5: Sumar la cantidad de numeros que el ususario desee, ademas el usuario ingresara los numeros //

function sum_cantidad_num_deseado() {
    let limite = parseInt(prompt("Ingrese la cantidad de numero que quiere sumar"));
    let resultado = 0;

    for (let i = 0; i < limite; i++){
        num_suma = parseInt(prompt("Ingrese un numero"));
        resultado += num_suma;
    };
    alert(`La suma de los numeros ingresados es: ${resultado}`);
};

// Ejercicio 5: Sumar la cantidad de numeros que el ususario desee, ademas el usuario ingresara los numeros //


// Ejercicio 6: Solicitar 2 numeros y pedir que operacion aritmetica basica desea usar con esos numeros//

function mini_calculadora() {
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("ingrese el segundo numero"));

    let operacion = (prompt(`¿Que desea hacer con los numeros?
Escriba "suma" , "resta" , "multiplicacion" o "division"`));
    
    function operaciones(x){
        if(operacion === "suma"){
            resultado = num1 + num2;
            return (resultado);
        };
        if(operacion === "resta"){
            resultado = num1 - num2;
            return (resultado);
        };
        if(operacion === "multiplicacion"){
            resultado = num1 * num2;
            return (resultado);
        };
        if(operacion === "division"){
            resultado = num1 / num2;
            return (resultado);
        } else if(num1 === 0 || num2 === 0){
            alert("No es posible dividir entre cero")
        };
    }

    alert(`Usted ingreso ${num1} y ${num2} y quiso usar la operacion ${operacion}
El resultado es ${operaciones(operacion)}`)
};

// Ejercicio 6: Solicitar 2 numeros y pedir que operacion aritmetica basica desea usar con esos numeros//


// Ejercicio 7: Sumar N numeros pares //

function sum_pares() {
    let num_ingresado = parseInt(prompt("Ingrese la cantidad de numeros que desea sumar"));
    let resultado = 0;
    let numeros_extras = [];

    for (let i = 1; i <= num_ingresado; i++){
        let num = parseInt(prompt(`Ingrese el ${i}° numero`));
        numeros_extras.push(num);
        if (num % 2 === 0){
            resultado += num;
        };
    } 
    alert(`Los numeros ingresados son: ${numeros_extras.join(" - ")}
El resultado de la suma de solo los numeros pares ingresados es: ${resultado}`);
}
// Ejercicio 7: Sumar N numeros pares //


// Ejercicio 8: Sumar los N primeros numeros pares //

function sum_primeros_pares() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"));
    let array_pares = [];
    let resultado = 0;

    for (let i = 1; i <= num_ingresado * 2; i++) {
        if (i % 2 === 0){
            array_pares.push(i);
            resultado += i;
        };
    };
    alert(`Los numeros pares hasta el numero ingresado son: ${array_pares.join(" - ")}
Y la suma de estos es ${resultado}`);
};

// Ejercicio 8: Sumar los N primeros numeros pares //


// Ejercicio 9: Sumar N numeros impares //

function sum_impares() {
    let num_ingresado = parseInt(prompt("Ingrese la cantidad de numeros que desea sumar"));
    let resultado = 0;
    let numeros_extras = [];

    for (let i = 1; i <= num_ingresado; i++){
        let num = parseInt(prompt(`Ingrese el ${i}° numero`));
        numeros_extras.push(num);
        if (num % 2 !== 0){
            resultado += num
        };
    } ;
    alert(`Los numeros ingresados son: ${numeros_extras.join(" - ")}
El resultado de la suma de solo los numeros impares ingresados es: ${resultado}`);
};

// Ejercicio 9: Sumar N numeros impares //


// Ejercicio 10: Sumar los N primeros numeros impares //

function sum_primeros_impares() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"));
    let array_impares = [];
    let resultado = 0;

    for (let i = 1; i <= num_ingresado * 2; i++) {
        if (i % 2 !== 0){
            array_impares.push(i);
            resultado += i;
        };
    };
    alert(`Los numeros impares hasta el numero ingresado son: ${array_impares.join(" - ")}
Y la suma de estos es ${resultado}`);
};

// Ejercicio 10: Sumar los N primeros numeros impares //


// Ejercicio 11: Sumar los N primeros multiplos de 3 //

function multiplos_del_tres() {
    let num_ingresado = parseInt(prompt("Ingrese cuantos de los primeros multiplos de 3 desea sumar"));
    let numeros_array = [];
    let multiplos_tres = 0;
    let resultado = 0;
    let multiplo = 1;

    for (let i = 0; i <= num_ingresado * 3; i += 3){
        numeros_array.push(multiplos_tres);
        multiplos_tres += 3;
    };
    
    for (let i = 1; i <= num_ingresado; i++){
        let num = i * 3;
        multiplo ++;
        resultado += num;
    };

    alert(`Los ${num_ingresado} primeros multiplos de 3 son: ${numeros_array.join(" - ")}
Y la suma de estos es: ${resultado}`);
};
// Ejercicio 11: Sumar los N primeros multiplos de 3 //


// Ejercicio 12: Factorial de numero ingresado //

function factorial_n() {
    let num_ingresado = parseInt(prompt("Ingrese el numero para calcular su factorial"));
    let resultado = 1;

    for (let i = 1; i <= num_ingresado; i++){
        resultado *= i;
    };
    alert(`El factorial del numero ingresado es: ${resultado}`);
};

// Ejercicio 12: Factorial de numero ingresado //


// Ejercicio 13: Conversion de grados Celsius a Fahrenheit //

function celsius_a_fahrenheit() {
    let celsius = parseInt(prompt("Ingrese una temperatura en grados celsius"));
    let fahrenheit = 0 + ((celsius * (9/5)) + 32);

    alert(`Usted ingreso la temperatura de ${celsius}° grados Celsius
lo cual equivale a ${fahrenheit}° grados Fahrenheit`);
};
// Ejercicio 13: Conversion de grados Celsius a Fahrenheit //

// Ejercicio 14: Buscar la palabra más larga de una cadema de texto //

function palabra_mas_larga() {
    let cadena = prompt("Ingrese una cadena de texto");
    let palabras = cadena.split(" ");
    let palabra_larga = "";

    for(let i = 0; i < palabras.length ; i++) {
        if (palabras[i].length > palabra_larga.length){
            palabra_larga = palabras[i]
        };
    };

    alert(`La frase que ingreso es: ${cadena}
La palabra más larga de la frase que ingreso es: ${palabra_larga}`);
}

// Ejercicio 14: Buscar la palabra más larga de una cadema de texto //


// Ejercicio 15: Imprimir todos los numeros primos hasta el numero ingresado //

function generador_Numeros_Primos() {
    let limite = parseInt(prompt("Ingrese un numero limite para la impresión: "));
    let array_Primos = [];

    if (limite === 0 || limite === 1 || limite < 0) {
        alert("Ingrese un valor valido");
    };

    for(let i = 2; i < limite + 1; i++) {
        if(es_Primo(i)) {
            array_Primos.push(i)
        };
    };

    function es_Primo(numero) {
        for(let j = 2; j < numero; j++) {
            if(numero % j === 0) {
                return false;
            };
        };
        return numero !== 1;
    };

    if(limite === 0 || limite === 1 || limite < 0) {
        alert("No se ha generado nada");
    } else {
        alert(`Los numeros primos al numero que ingresaste son: ${array_Primos.join(" - ")}`);
    };
};

// Ejercicio 15: Imprimir todos los numeros primos hasta el numero ingresado //



// Ejercicio 16: Contador de cuantas veces se repite cada letra//

function contar_letras() {
    let cadena = prompt("Escribe un texto:");
    let repeticiones = {};
    
    for (let i = 0; i < cadena.length; i++) {
        repeticiones[i] = (repeticiones[i] || 0) + 1;
    };

    alert("Cantidad de repeticiones: ")
    for (let i = 0; i < repeticiones.length; i++) {

        alert(`${repeticiones[i]}`);
    };
};

// Ejercicio 16: Contador de cuantas veces se repite cada letra//


// Ejercicio 17: Impresion de solo los numeros pares //

function mostrar_pares() {
    let num_ingresado = parseInt(prompt("Ingrese la cantidad de numeros a ingresar"));
    let numeros_extras = [];
    let numeros_pares = [];

    for (let i = 1; i <= num_ingresado; i++){
        let num = parseInt(prompt(`Ingrese el ${i}° numero`));
        numeros_extras.push(num);
        if (num % 2 === 0){
            numeros_pares.push(num)
        };
    };
    alert(`Los numeros ingresados son: ${numeros_extras.join(" - ")}
Los numeros pares son: ${numeros_pares.join(" - ")}`);
};

// Ejercicio 17: Impresion de solo los numeros pares //