function setup() {
createCanvas(400,400);

}


function draw() {
background(255);
translate(width/2,height/2);
let secsize=150;
for(let i=0;i<60;i++){
  if(i<=second()){
    fill(0);
  }else{
    noFill();}
  rotate(TAU/60);
   ellipse(0,-secsize,7,7);}
 
   
 stroke('gray')
 let minsize=100;
for(let i=0;i<60;i++){
  if(i<=minute()){
    fill('gray');
  }else{
    noFill();}
  rotate(TAU/60);
   ellipse(0,-minsize,5,5);}
   
   let hoursize=50;
   let h=hour()%12;
for(let i=0;i<12;i++){
  if(i<=h){
    fill(0);
  }else{
    noFill();}
  rotate(TAU/12);
   ellipse(0,-hoursize,10,10);}
 
   

}
