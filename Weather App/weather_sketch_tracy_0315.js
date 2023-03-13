// this will store all the weather data
let w;

// a dictionary to map condition names to image data
let iconImages = { };


// scroll to the bottom of this code to see alternative approaches
function preload() {
  iconImages['clear-day'] = loadImage('icons/clear-day.png');
  iconImages['clear-night'] = loadImage('icons/clear-night.png');
  iconImages['cloudy'] = loadImage('icons/cloudy.png');
  iconImages['fog'] = loadImage('icons/fog.png');
  iconImages['partly-cloudy-day'] = loadImage('icons/partly-cloudy-day.png');
  iconImages['partly-cloudy-night'] = loadImage('icons/partly-cloudy-night.png');
  iconImages['rain'] = loadImage('icons/rain.png');
  iconImages['sleet'] = loadImage('icons/sleet.png');
  iconImages['snow'] = loadImage('icons/snow.png');
  iconImages['wind'] = loadImage('icons/wind.png');
}


function setup() {
  windowRatio(375, 667);  // use the size of your phone

  // get the current weather for MIT's latitude and longitude
  //w = requestWeather(42.3596764, -71.0958358);  // MIT

  // several location options
  w = requestWeather('locations/washington-dc.json');  // partly-cloudy-day
  //w = requestWeather('locations/nairobi.json');  // partly-cloudy-night
  //w = requestWeather('locations/brno.json');  // clear-night
  //w = requestWeather('locations/jakarta.json');  // cloudy
  //w = requestWeather('locations/mount-washington.json');  // wind
  //w = requestWeather('locations/yuma.json');  // clear-day
  //w = requestWeather('locations/tierra-del-fuego.json');  // snow
}


function draw() {
  updateRatio();
  background('white');
  ellipseMode(CENTER);
  

  if (w.ready) {
    // get the name of the weather icon to use
    let value = w.getTemperature();
    let m = map(value,-4,104,0,140);
   
    
  
    push();
    noStroke();
    
    

    let c2 = color(250, 231, 141);
    let c1 = color(248, 117, 0);

   // fill of the image to indicate temperature
 
    
    for( let i =0;i<m; i++){
        let inter=map(i,0,m,0,1);
        let c = lerpColor(c1,c2,inter);
        stroke(c);
        line(rwidth/4,rheight*0.47-m+i,rwidth/4+170,rheight*0.47-m+i);
      }
    
    
    
    
    
    pop();
    
    let name = w.getIcon();

    // get the image with this name
    let icon = iconImages[name];

    // calculate the y-coordinate to center the icon on the screen
    let top = (rheight - rwidth) / 6;

    // draw that icon
    image(icon, 0, top, rwidth, rwidth);
    
    push(); 
    stroke(0);
    noFill();
    strokeWeight(0.5);
    circle(rwidth/2,rheight*0.37,rwidth*0.78);
    pop();
    
    push();
    textAlign(CENTER);
    textSize(35);
    stroke(2);
    text(round(value)+'°',rwidth*0.5, rheight*0.55);
    pop();
    
    push();
    textSize(10);
    let max=w.getApparentTemperatureMax('daily');
    let min=w.getApparentTemperatureMin('daily');
    fill(150);
    text(round(max[0])+'°',rwidth*0.6, rheight*0.52);
    text(round(min[0])+'°',rwidth*0.6, rheight*0.55);
    pop();
    
    push();
    noStroke();
    fill(c1);
    triangle(rwidth*0.6+20, rheight*0.52-3, rwidth*0.6+25, rheight*0.52-3, rwidth*0.6+22.5, rheight*0.52-8);
    pop();
    
     push();
    noStroke();
    fill(c2);
    triangle(rwidth*0.6+20, rheight*0.55-5, rwidth*0.6+25, rheight*0.55-5, rwidth*0.6+22.5, rheight*0.55);
    pop();
    
    // draw Parameter humidity
    textSize(10);
    text('Humidity',rwidth/6,rheight*0.7);
    push();
    noStroke();
    let gray1=color(150);
    let gray2=color(220);
    for(let i=0; i<10;i++){
     
      let c3= lerpColor(gray2,gray1,i*0.1);
      fill(c3);
      circle(rwidth*0.15+80+i*15,rheight*0.7,7);}
    let humidity = w.getHumidity();
    pop();
    let humidX= round(map(humidity,0,1,0,10));
    push();
    noStroke();
    fill(c1);
    circle(rwidth*0.15+80+humidX*15,rheight*0.7,11);
    pop();
    
    // draw parameter wind
    text('Wind',rwidth/6,rheight*0.78);
    let wind= w.getWindSpeed();
    let windX=round(map(wind,0,100,0,10));
    push();
    noStroke();
    for(let i=0; i<10;i++){
      let c3= lerpColor(gray2,gray1,i*0.1);
      fill(c3);
      circle(rwidth*0.15+80+i*15,rheight*0.78,7);}
    pop();
    push();
    noStroke();
    fill(c1);
    circle(rwidth*0.15+80+windX*15,rheight*0.78,11);
    pop();
    
     // draw parameter cloud
     
    text('Cloud',rwidth/6,rheight*0.86);
    let cloud= w.getCloudCover();
    let cloudX=round(map(cloud,0,1,0,10));
    push();
    noStroke();
    for(let i=0; i<10;i++){
      let c3= lerpColor(gray2,gray1,i*0.1);
      fill(c3);
      circle(rwidth*0.15+80+i*15,rheight*0.86,7);}
    pop();
    push();
    noStroke();
    fill(c1);
    circle(rwidth*0.15+80+windX*15,rheight*0.86,11);
    pop();
    
     

    // stop drawing
    noLoop();
    
    
 
  
  

  } else {
    textSize(40);
    text('Loading…', rwidth/2, rheight/2);
  }
}




/*
// an alternative version of the preload() from the top of the sketch,
// more readable but not necessarily as clear to understand what it's doing
function preload() {
  iconImages = { 
    'clear-day': loadImage('icons/clear-day.svg'),
    'clear-night': loadImage('icons/clear-night.svg'),
    'cloudy': loadImage('icons/cloudy.svg'),
    'fog': loadImage('icons/fog.svg'),
    'partly-cloudy-day': loadImage('icons/partly-cloudy-day.svg'),
    'partly-cloudy-night': loadImage('icons/partly-cloudy-night.svg'),
    'rain': loadImage('icons/rain.svg'),
    'sleet': loadImage('icons/sleet.svg'),
    'snow': loadImage('icons/snow.svg'),
    'wind': loadImage('icons/wind.svg')
  };
}
*/


/*
// a more programmatic way to do the preload(), but not as readable
// for folks who are less familiar with coding.

// all possible values that might come back from getIcon()
const iconNames = [
  'clear-day', 'clear-night', 'cloudy', 'fog', 'partly-cloudy-day',
  'partly-cloudy-night', 'rain', 'sleet', 'snow', 'wind'
];

function preload() {
  iconNames.forEach((name, index) => {
    iconImages[name] = loadImage('icons/' + iconNames[index] + '.svg');
  });
}
*/
