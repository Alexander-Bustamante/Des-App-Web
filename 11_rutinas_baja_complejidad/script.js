console.log("Funcionando correctamente...")

function multiplos_hasta_diez() {
    let num_ingresado = parseInt(prompt("Ingrese un numero"))
    let numeros_array = []
    let multiplo = 1
    
    for (let i = 1; i <= 10; i++){
        numeros_array.push(`${num_ingresado} x ${multiplo} es igual a ` + num_ingresado * multiplo)
        multiplo ++
    }
    alert(`Los numeros multiplos son: \n${numeros_array.join("\n")}`)
}

function sumar_numeros() {
    let numeros_array = []
    let cantidad_numeros = parseInt(prompt("Ingrese cuantos numeros quiere sumar: "))
    let resultado = 0

    for (let i = 1; i <= cantidad_numeros; i++){
        numeros_array.push(parseInt(prompt(`Ingrese el numero ${i} : `)))
    }

    for (let i = 0; i < cantidad_numeros; i++){
        resultado += numeros_array[i]
    }
    alert(`El resultado de todos los numeros es: ${resultado}`)
}

function numeros_pares_entre() {
    let numero_min = parseInt(prompt("Ingrese un numero para comenzar"))
    let numero_max = parseInt(prompt("Ingrese un numero como limite de los pares (Debe ser mayor que el numero de inicio)"))
    let pares = []

    for (numero_min; numero_min <= numero_max ; numero_min++){
        if (numero_min % 2 === 0){
            pares.push(numero_min)
        }
    }
    alert(`Los numeros pares entre el primer numero ingresado y el segundo es: ${pares.join(" ")}`)
}