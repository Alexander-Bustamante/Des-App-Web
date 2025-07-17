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
    const input = document.getElementById("lista2");
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

function mostrar_lista_colores(){
    const lista = document.getElementById("resultado3");
    lista.innerHTML = ""; // Limpiar antes de mostrar //

    for (let i = 0; i < colores.length; i++){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between aling-items-center mb-2  "
        li.textContent = `-${colores[i]}`
        lista.appendChild(li)
    }
}

function agregar_inicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim(); // Guardo valor sin espacios extras //

    if (valor === ""){
        return;
    };

    colores.unshift(valor); //Agregar valor al inicio //
    input.value = "";
    input.focus(); // Agregamos foco hacia el input //

    mostrar_lista_colores()
}

// Ejercicio 4: Quitar al inicio //

let colores2 = []

function mostrar_lista_colores2(){
    const lista = document.getElementById("resultado4");
    lista.innerHTML = ""; // Limpiar antes de mostrar //

    for (let i = 0; i < colores2.length; i++){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between aling-items-center mb-2  "
        li.textContent = `-${colores2[i]}`
        lista.appendChild(li)
    }
}

function agregar_inicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim(); // Guardo valor sin espacios extras //

    if (valor === ""){
        return;
    };

    colores2.unshift(valor); //Agregar valor al inicio //
    input.value = "";
    input.focus(); // Agregamos foco hacia el input //

    mostrar_lista_colores2()
}

function eliminar_primer_elemento(){
    if (colores2.length > 0){
        colores2.shift();
    };

    mostrar_lista_colores2()
}

// Ejercicio 5: Combinación de métodos //

let numeros = []

function mostrar_lista_numeros(){
    const lista = document.getElementById("resultado5");
    lista.innerHTML = ""; // Limpiar antes de mostrar //

    for (let i = 0; i < numeros.length; i++){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between aling-items-center mb-2  "
        li.textContent = `-${numeros[i]}`
        lista.appendChild(li)
    }
}

function agregar_inicio3() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // Guardo valor sin espacios extras //

    if (valor === ""){
        return;
    };

    numeros.unshift(valor); //Agregar valor al inicio //
    input.value = "";
    input.focus(); // Agregamos foco hacia el input //

    mostrar_lista_numeros()
}

function quitar_ultimo(){
    if (numeros.length > 0){
        numeros.pop();
    };

    mostrar_lista_numeros()
}

function agregar_final() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // Guardo valor sin espacios extras //

    if (valor === ""){
        return;
    };

    numeros.push(valor); //Agregar valor al inicio //
    input.value = "";
    input.focus(); // Agregamos foco hacia el input //

    mostrar_lista_numeros()
}

function quitar_primero(){
    if (numeros.length > 0){
        numeros.shift();
    };

    mostrar_lista_numeros()
}

// Ejercicio 6: Agregar elementos en orden inverso //

let orden = []

function mostrar_lista_numeros(){
    const lista = document.getElementById("resultado6");
    lista.innerHTML = ""; // Limpiar antes de mostrar //

    for (let i = 0; i < orden.length; i++){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between aling-items-center mb-2  "
        li.textContent = `-${orden[i]}`
        lista.appendChild(li)
    }
}

function agregar_inicio3() {
    const input = document.getElementById("lista6");
    const valor = input.value.trim(); // Guardo valor sin espacios extras //

    if (valor === ""){
        return;
    };

    orden.unshift(valor); //Agregar valor al inicio //
    input.value = "";
    input.focus(); // Agregamos foco hacia el input //

    mostrar_lista_numeros()
}

// Ejercicio 7: Historial de mensajes //

let historial = []

let mensajes_eliminados = []

function mostrar_lista_mensajes(){
    const lista = document.getElementById("resultado7");
    lista.innerHTML = ""; // Limpiar antes de mostrar //

    for (let i = 0; i < historial.length; i++){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between aling-items-center mb-2  "
        li.textContent = `-${historial[i]}`
        lista.appendChild(li)
    }
}

function mostrar_lista_mensajes_eliminados(){
    const lista = document.getElementById("resultado7.1");
    lista.innerHTML = ""; // Limpiar antes de mostrar //

    for (let i = 0; i < mensajes_eliminados.length; i++){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between aling-items-center mb-2  "
        li.textContent = `-${mensajes_eliminados[i]}`
        lista.appendChild(li)
    }
}

function agregar_mensaje() {
    const input = document.getElementById("lista7");
    const valor = input.value.trim(); // Guardo valor sin espacios extras //

    if (valor === ""){
        return;
    };

    historial.push(valor); //Agregar valor al inicio //
    input.value = "";
    input.focus(); // Agregamos foco hacia el input //

    mostrar_lista_mensajes()
}

function eliminar_mensaje() {
    const input = document.getElementById("lista7");
    const valor = input.value.trim(); // Guardo valor sin espacios extras //

    if (valor === ""){
        return;
    };

    mensajes_eliminados.push(valor); //Agregar valor al inicio //
    historial.pop(valor)
    input.value = "";
    input.focus(); // Agregamos foco hacia el input //

    mostrar_lista_mensajes_eliminados()
}