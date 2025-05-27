function agregar_participántes() {
    let participantes = []
    let ingresar = prompt("¿Usted desea ingresar nombres? (Si/No) ")


    while (ingresar != "no"){
        let nuevo_nombre = prompt("Ingrese el nombre: ")
        participantes.push(nuevo_nombre)
        ingresar = prompt("¿Usted desea seguir ingresando nombres? (Si/No) ")
    }

    if (participantes.length > 5){
        alert(participantes.length)
        alert(participantes)
    } else {
        alert(`Hay más de 5 personas en total en la lista de participantes, los cuales son: \n${participantes.join(" - ")}
            \nY el total es: ${participantes.length}`)
    }
}

function vender(){
    let productos_iniciales = ["manzana", "pan", "leche"]

    for (let i = 1; i <= 5; i++){
        if (productos_iniciales.length > 0){
            producto_vendido = alert(`Producto vendido: ${productos_iniciales[productos_iniciales.length - 1]}`)
            productos_iniciales.pop()
        } else {
            alert(`Sin stock`)
        }
    }

    alert(`Todos los productos vendidos`)

    let nuevos_productos = []
    let ingresar = prompt("¿Usted desea ingresar productos? (Si/No) ")


    while (ingresar != "no"){
        let nuevo_p = prompt("Ingrese el nombre: ")
        nuevos_productos.push(nuevo_p)
        ingresar = prompt("¿Usted desea seguir ingresando nombres? (Si/No) ")
    }

    productos_iniciales = nuevos_productos

    alert(`Los productos agregados fueron: ${productos_iniciales.join(" - ")}.`)
}