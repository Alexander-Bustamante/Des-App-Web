console.log("Funcionando correctamente")


function primeros_cinco() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"))
    let contador = 1;
    let numeros_array = []

    while (contador <= num_ingresado) {
        numeros_array.push(contador);
        contador++;
    }
    alert(`Los numeros son: ${numeros_array.join(" ")}`)
}

function cuenta_regresiva() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"))
    let contador = num_ingresado;
    let numeros_array = []

    while (contador >= 1) {
        numeros_array.push(contador);
        contador--;
    }
    alert(`Los numeros son: ${numeros_array.join(" ")}`)
}

function sumar_numeros() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"))
    let resultado = 0

    for (let i = 1; i <= num_ingresado; i++){
        resultado += i 
    }
    alert(resultado)
}

function multiplos_del_dos() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"))
    let numeros_array = []
    let multiplos_dos = 0

    for (let i = 0; i <= num_ingresado; i += 2){
        numeros_array.push(multiplos_dos)
        multiplos_dos += 2
    }
    alert(`Los numeros multiplos son: ${numeros_array.join(" ")}`)
}