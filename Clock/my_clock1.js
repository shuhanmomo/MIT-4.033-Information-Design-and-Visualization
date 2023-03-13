function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}


function draw() {
  background(255);

  stroke(0);
  noFill();
  let between = 5;
  let radius = 40;
  for (let i = 0; i < second(); i++) {
    circle(width/2, height/2, radius);
    radius += between;
  }

  noStroke();
  fill(0);
  text(hoursMinutes(), width/2, 30);
  text(nf(second(), 2), width/2, height/2);
}


// return hours that read 1 through 12 rather than 0 through 23
function twelveHour() {
  let h = hour() % 12;
  if (h === 0) {
    h = 12;
  }
  return h;
}


// format hours and minutes
function hoursMinutes() {
  return nf(twelveHour(), 2) + ':' + nf(minute(), 2);
}
