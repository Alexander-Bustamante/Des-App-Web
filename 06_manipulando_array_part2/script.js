console.log("Vinculado correctamente...")

function Producto_pares() {
    let numeros = [2,3,4,6,8,10,12]
    let pares = []
    let resultado = 1

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }

    }


    for (let i = 0; i < pares.length; i++) {

        resultado *= pares[i];

    }

    alert("El array es: " + numeros + "\nEl resultado de la multiplicacion de los pares es: " + resultado);
}
