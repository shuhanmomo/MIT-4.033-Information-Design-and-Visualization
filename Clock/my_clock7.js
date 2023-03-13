
var a=13;
var speed=1.6;
function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(255);
  textAlign(CENTER);
  

   push();
  fill(0);
  let startAngle = radians(-90);
  let stopAngle = radians(270);
   let y = height/2;
  let each = width/2;
 let minuteCenter = width/2;
  let minuteAngle = map(minute(), 0, 60, startAngle, stopAngle);
  arc(minuteCenter, y, each, each, startAngle, minuteAngle);
  pop();
  
  push();
  noFill();
  stroke(0);
   circle(minuteCenter,y,each);
   pop();
  
  push();
  fill('gray');
  let hourCenter = width/2;
  let hourAngle = map(hour() % 12, 0, 12, startAngle, stopAngle);
  arc(hourCenter, y, each/2, each/2, startAngle, hourAngle);
  pop();
  
  push();
  noFill();
  stroke(255);
  strokeWeight(10);
  circle(hourCenter,y,each/2);
  pop();
  
  
  
  push();
  translate(width/2, height/2);
  stroke(0);
  strokeWeight(1);
  let secondSize = 150;
  let secondAngle = map(second(),  0, 60,  0, TAU);
  let fillColor=map(second(),0,60,0,150);
  for(let i=0;i<60;i++){
  if(i<second()){
    fill(fillColor);
  }else{
    noFill();}
  rotate(TAU/60);
   ellipse(0,-secondSize,7,7);}
 
 
  pop();
  
  push();
  translate(width/2, height/2);
  rotate(secondAngle);
  stroke(150);
  noFill();
  ellipse(0,-secondSize,a,a);
  if(a>100){
    speed=-1.6;}
  if(a<13){
    speed=1.6;}
  a=a+speed;
  pop();
  


  

  

  noStroke();
  fill(0);
  // adds 1 to y so that it centers a little better
  text(hoursMinutesSeconds(), width/2, height - 20);
}


// return hours that read 1 through 12 rather than 0 through 23
function twelveHour() {
  let h = hour() % 12;
  if (h === 0) {
    h = 12;
  }
  return h;
}


// format hours, minutes, and seconds
function hoursMinutesSeconds() {
  return twelveHour() + ':' + nf(minute(), 2) + ':' + nf(second(), 2);
}
