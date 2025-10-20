console.log("Funcionando...")

function convertir(){
    const tipo_tem = document.getElementById("tipo_temperatura").value
    console.log(tipo_tem)

    // Temperaturas Día 1 (Today)
    const min_c = document.getElementById("min")
    const max_c = document.getElementById("max")
    let minC = parseInt(min_c.textContent);
    let maxC = parseInt(max_c.textContent);

    // Temperaturas Día 2 (Tomorrow)
    const min_c2 = document.getElementById("min2")
    const max_c2 = document.getElementById("max2")
    let minC2 = parseInt(min_c2.textContent);
    let maxC2 = parseInt(max_c2.textContent);

    // Temperaturas Día 3 (Friday)
    const min_c3 = document.getElementById("min3")
    const max_c3 = document.getElementById("max3")
    let minC3 = parseInt(min_c3.textContent);
    let maxC3 = parseInt(max_c3.textContent);

    // Temperaturas Día 4 (Saturday)
    const min_c4 = document.getElementById("min4")
    const max_c4 = document.getElementById("max4")
    let minC4 = parseInt(min_c4.textContent);
    let maxC4 = parseInt(max_c4.textContent);

    if (tipo_tem == "fahrenheit"){
        console.log("Cambiando a Fahrenheit")
        // Día 1
        min_c.textContent = Math.round((minC * 1.8) + 32) + "°"
        max_c.textContent = Math.round((maxC * 1.8) + 32) + "°"
        // Día 2
        min_c2.textContent = Math.round((minC2 * 1.8) + 32) + "°"
        max_c2.textContent = Math.round((maxC2 * 1.8) + 32) + "°"
        // Día 3
        min_c3.textContent = Math.round((minC3 * 1.8) + 32) + "°"
        max_c3.textContent = Math.round((maxC3 * 1.8) + 32) + "°"
        // Día 4
        min_c4.textContent = Math.round((minC4 * 1.8) + 32) + "°"
        max_c4.textContent = Math.round((maxC4 * 1.8) + 32) + "°"
    }
    
    if (tipo_tem == "celsius"){
        console.log("Cambiando a Celsius")
        // Día 1
        min_c.textContent = Math.round((minC - 32) / 1.8) + "°"
        max_c.textContent = Math.round((maxC - 32) / 1.8) + "°"
        // Día 2
        min_c2.textContent = Math.round((minC2 - 32) / 1.8) + "°"
        max_c2.textContent = Math.round((maxC2 - 32) / 1.8) + "°"
        // Día 3
        min_c3.textContent = Math.round((minC3 - 32) / 1.8) + "°"
        max_c3.textContent = Math.round((maxC3 - 32) / 1.8) + "°"
        // Día 4
        min_c4.textContent = Math.round((minC4 - 32) / 1.8) + "°"
        max_c4.textContent = Math.round((maxC4 - 32) / 1.8) + "°"
    }
}

function hide(){
    const cookie = document.getElementById("cookies")

    cookie.remove();
}