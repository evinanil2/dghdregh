img ="";
status = "";
objects = [];
function preload(){
    img = loadImage('13.jpg');
    sound = loadSound('mixkit-retro-game-emergency-alarm-1000.wav')
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();

}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects"; 
}
function draw() {
    image(video, 0, 0, 380,380);
    if(status !="")
        {
            r = random(225)
            g = random(255);
            b = random(255);
            objectDetector.detect(video, gotResult)
            elseif(status = "") 
                document.getElementById("status").innerHTML = "Status : Baby NOT Detected";  
                sound = loadSound()
    
            }
             
            
            for(i = 0; i < objects.length; i++)
                {
                   document.getElementById("status").innerHTML = "Status : Baby Detected";
                   document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+ objects.length;

                   fill("r,g,b")
                   percent = floor(objects[i].confidence*100);
                   text(objects[i].label+ " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                   noFill();
                   stroke("r,g,b");
                   rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height);
                }
           
               
        }
    
}
function modelLoaded(){
    console.log("model Loaded!")
    status = true;
    
    }
    function gotResult(error, results){
        if(error) {
            console.log(error);
        }
        console.log(results);
        objects = results;
    }
