img="";
status="";
objects=[];
r="";
g="";
b="";
function preload(){
}

function setup(){
canvas=createCanvas(360,360);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(360,360)
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting objects";
}
function modelLoaded(){
console.log('modelLoaded');
status=true;
}

function gotResult(error,results){
if(error){
console.log(error);
}
else{
console.log(results);
objects=results;
}
}

function draw(){
image(video,0,0,360,360);
if(status != "")
{
objectDetector.detect(video,gotResult);
for (i=0;i<objects.length;i++)
{
r=random(255);
g=random(255);
b=random(255);

document.getElementById("status").innerHTML="status : Object detected";
document.getElementById("number_of_objects").innerHTML="Number of objects : "+objects.length;
fill(r,g,b);
percentage=floor(objects[i].confidence*100);
text(objects[i].label+ " " +percentage+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke(r,g,b)
rect(objects[i].x-75,objects[i].y-25,objects[i].width,objects[i].height)
}
}
}