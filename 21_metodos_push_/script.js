console.log("Funcionando correctamente...")

const resultado = document.getElementById("resultado");
let colores = ["rojo", "azul"];

// Ejercicio 1: Agregar elementos //

function agregar_elementos(){
    let elemento = document.getElementById("lista").value;

    // Crear elemento HTML --> createElement //
    let item = document.createElement("li");

    item.innerText = elemento; // <li>--InnerText--</li> //

    // appendChild inserta valor hijo en padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}

// Ejercicio 2: Agregar elementos //

function quitar_el_ultimo(){
    let elemento = document.getElementById("lista").value   

    let item = document.removeChild("li")

    item.innerText = elemento

    resultado.removeChild("li")
}

// Ejercicio 2: Agregar elementos //

function agregar_al_inicio(){

    colores.unshift("amarillo");
    
    alert(`Las compras son: ${colores.join(" - ")}`);
}