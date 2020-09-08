img="";
status="";
function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting objects";
}

function draw(){
image(img,0,0,640,420);
fill("#FF0000");
text("DOG",45,75);
noFill();
stroke("#FF0000");
rect(30,60,450,350);

fill("#FF0000");
text("Cat",325,100);
noFill();
stroke("#FF0000");
rect(300,90,250,300);
}

function modelLoaded(){
console.log('modelLoaded');
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
console.log(error);
}
else{
console.log(results);
}
}