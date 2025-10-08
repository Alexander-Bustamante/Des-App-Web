console.log("funcionando...")


function cambiar_video(element){

    let video_main = document.getElementById("main_video");
    
    console.log(element)
    console.log(video_main)
    video_main.src = element.src;
    element.src = video_main.src;
}