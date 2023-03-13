// Clock 04
// (c) Fathom Information Design BY-NC-SA
// https://creativecommons.org/licenses/by-nc-sa/4.0/


function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(255);
  stroke(0);

  // where to start drawing boxes
  let y = height * 0.2;
  let x;

  let hourBetween = 4;
  let hourSize = (height - hourBetween * 11) / 12;
  let h = hour() % 12;
  for (let i = 0; i < 12; i++) {
    if (i <= h) {
      fill(0);
    } else {
      noFill();
    }
    x = (hourSize + hourBetween) * i;
    circle(y, x+hourSize/2, hourSize/2);
  }
  // move down a row
  y += hourSize + hourBetween;

  let minuteBetween = 4;
  let minuteSize = (height - minuteBetween * 19) / 20;
  x = 0;
  for (let i = 0; i < 60; i++) {
    if (i <= minute()) {
      fill(0);
    } else {
      noFill();
    }
    rect(y, x, minuteSize, minuteSize,5);
    x += minuteSize + minuteBetween;
    if (x >= height) {
      x = 0;
      y += minuteSize + minuteBetween;
    }
  }

  // nearly identical to minutes loop
  let secondBetween = 2;
  let secondSize = (height - secondBetween * 29) / 30;
  x = 0;
  for (var i = 0; i < 60; i++) {
    if (i <= second()) {
      fill(0);
    } else {
      noFill();
    }
    rect(y, x, secondSize, secondSize);
    x += secondSize + secondBetween;
    if (x >= height) {
      x = 0;
      y += secondSize + secondBetween;
    }
  }
}
