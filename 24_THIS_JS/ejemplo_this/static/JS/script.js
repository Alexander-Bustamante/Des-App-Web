function TurnOff(element){
    if (element.innerText == "Login"){
        element.innerText = "Logout";
    } else{
        element.innerText = "Login";
    }
}

function Hide(element){
    element.remove();
}

function Like(element){
    alert("Ninja a recibido un 'Me gusta'")
}