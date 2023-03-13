function setup() {
createCanvas(400,400);

}


function draw() {
background(255);
stroke(0);
strokeWeight(1);
textAlign(CENTER);
noFill();


let startAngle= radians(-90);
let stopAngle= radians(270);
let y = height/2;
let hourdiameter= width *0.2;
let mindiameter= width*0.4;
let secdiameter=width*0.6;
let center=width/2;
//hourcircle
let hourAngle=map(hour()%12,0,12,startAngle,stopAngle);
arc(center,y,hourdiameter,hourdiameter,startAngle,hourAngle);
//mincircle
let minAngle=map(minute(),0,60,startAngle,stopAngle);
arc(center,y,mindiameter,mindiameter,startAngle,minAngle);
//seccircle
let secAngle=map(second(),0,60,startAngle,stopAngle);
arc(center,y,secdiameter,secdiameter,startAngle,secAngle);

strokeWeight(1);
  text(hoursMinutesSeconds(), width/2, height/2);
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
