// Clock 07
// (c) Fathom Information Design BY-NC-SA
// https://creativecommons.org/licenses/by-nc-sa/4.0


function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(255);
  fill(0);
  noStroke();
  ellipseMode(RADIUS);

  let startAngle = radians(-90);
  let stopAngle = radians(270);

  push();
  translate(width/2, height/2);
  let angle = map(minute(), 0, 60, startAngle, stopAngle);
  rotate(angle);  // start on the minute position
  stroke(0);
  line(-width/2, 0, width/2, 0);  // arbitrarily large
  let each = TAU / 120;  // each step is 1/120th of the circle
  for (let i = 0; i < second(); i++) {
    rotate(each);
    line(-width/2, 0, width/2, 0);
  }
  pop();

  noStroke();
  fill(0);
  text(hoursMinutesSeconds(), 20, 30);
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
