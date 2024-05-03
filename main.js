objects = [];
status = "";

function preload(){
 video = createVideo("video.mp4")
}

function setup(){
canvas = createCanvas(500 , 400) ;
canvas.center();
video.hide();
}

function draw(){
image(video , 0, 0, 500, 400);
if (status != ""){
     objectDetector.detect(video, gotResult);
     for( i=0; i < objects.length; i++ ) {
        document.getElementById("status").innerHTML = "Objeto detectado";
        document.getElementById("num_objects").innerHTML = "Numero de objetos detectado " + objects.length;
        fill("#ff000");
        text(objects[i].label, objects[i].x, objects[i].y);
        stroke("#ff000");
        rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height)
     }
     
}
}

function start(){
    objectDetector = ml5.objectDetector("'cocossd', modelLoaded");
    document.getElementById("status").innerHTML = " Status: Detectando objetos ";
}

function modelLoaded(){
    console.log(" model OK! ");
    status = true;
    video.loop;
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }

    console.log(results);
    objects = results;
    
}