console.log("Funcionando Correctamente...")

//Creacion de variables//

function saludar(){
    alert("Hola mundo")
};

function numero(){
    let numero = 0; //Numerico INT//
    alert(numero);
}

function decimal(){
    let decimal = 2.5; //Numerico Float//
    alert(decimal);
}

function texto(){
    let texto = "Hola"; //String//
    alert(texto);
}

function booleano(){
    let booleano = true; //bool//
    alert(booleano);
}

function indefinida(){
    let indefinida = undefined
    alert(indefinida);
}

function array(){
    let array = [1, "Hola", 25]; //array o lista//
    alert(array[1]);
}

function matriz(){
    let matriz = [[1,2], [3,4]]; //Lista dentro de lista (Array dentro de array)//
    alert(matriz[1][1]);
}

function objeto(){
    let objeto = {
    "nombre" : "Pepito",
    "edad" : 20,
    }; //Objeto o diccionario//

    alert(objeto.nombre);
}

function sumar(a,b){
    sum = a + b;
    alert(sum);
}