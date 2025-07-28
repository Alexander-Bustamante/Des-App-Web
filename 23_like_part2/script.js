let likes_neil = 9;
let likes_nichole = 12;
let likes_jim = 9;

function sumar_likes(){
    likes_neil++;
    document.getElementById('like1').textContent = likes_neil + " Like(s)";
}

function sumar_likes2(){
    likes_nichole++;
    document.getElementById('like2').textContent = likes_nichole + " Like(s)";
}

function sumar_likes3(){
    likes_jim++;
    document.getElementById('like3').textContent = likes_jim + " Like(s)";
}

