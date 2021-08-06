img="";
status="";

function preload(){
img=loadImage('p.jpg');
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status : detecting Object";
}

function modelLoaded(){
console.log("modelLoaed");
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
console.log(error);
}
console.log(results);
}

function draw(){
image(img,0,0,640,420);

fill(255,0,0);
text("bed",45,75);
noFill();
stroke(255,0,0);
rect(30,60,450,350);

fill(255,0,0);
text("room",320,120);
noFill();
stroke(255,0,0);
rect(300,90,270,320);
}