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
  fill('gray');
  let hourCenter = width/2;
  let hourAngle = map(hour() % 12, 0, 12, startAngle, stopAngle);
  arc(hourCenter, y, each/2, each/2, startAngle, hourAngle);
  
  
  
  push();
  translate(width/2, height/2);
  strokeWeight(2);
  let secondSize = 150;
  let secondAngle = map(second(),  0, 60,  0, TAU);
  rotate(secondAngle);
  noStroke();
  fill(0);
  ellipse(0, -secondSize, 10, 10);
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
