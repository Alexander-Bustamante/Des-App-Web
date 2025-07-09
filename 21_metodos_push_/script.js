console.log("Funcionando correctamente...")

const resultado = document.getElementById("resultado");

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

// Ejercicio 1 opcion 2: Agregar elementos //

let carrito = [];

function mostrar_lista_compra(){
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // Limpiar antes de mostrar //

    for (let i = 0; i < carrito.length; i++){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between aling-items-center mb-2  "
        li.textContent = `-${carrito[i]}`
        lista.appendChild(li)
    }
}

function agregar_elemento2() {
    const input = document.getElementById("lista2").value;
    const valor = input.value.trim(); // Guardo valor sin espacios extras //

    if (valor === ""){
        return;
    };

    carrito.push(valor); //Agregar valor al final //
    input.value = "";
    input.focus(); // Agregamos foco hacia el input //

    mostrar_lista_compra()
}

// Ejercicio 2: Quitar el ultimo //

function eliminar_ultimo_elemento(){
    if (carrito.length > 0){
        carrito.pop();
    };

    mostrar_lista_compra()
}

// Ejercicio 3: Agregar al inicio //

let colores = []

function agregar_al_inicio(){
    let agregar_color = document.getElementById("insert-color").value;
    carrito.unshift(agregar_color)
    document.getElementById("colors").innerHTML =
    `Los colores son: <br>-${colores.join("<br>-")}`;
}