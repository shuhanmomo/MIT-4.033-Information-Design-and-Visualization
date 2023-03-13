 let table;
 let sour =[] ;
 let sourRecipes=[];
 let d= 20;
 let press=false;
 let locked=false;
 let sourballs=[];
 let bitterballs=[];
 let alcoholballs=[];
 let sourNm;
 let bitterNm;
 let alcoholNm;
 let sourNm2;
 let bitterNm2;
 let alcoholNm2;
 let sourColumn=[];
 let bitterColumn=[];
 let alcoholColumn=[];
 let selId;
 let recipes=[];
 let iconImages={ };
 let title;
 
function preload() {
    table = loadTable('table/Cocktails.csv','csv','header');
    iconImages['Collins-Glass'] = loadImage('icon/Collins-Glass.png');
    iconImages['Hurricane-Glass'] = loadImage('icon/Hurricane-Glass.png');
    iconImages['Martini-Glass'] = loadImage('icon/Martini-Glass.png');
    iconImages['Rocks-Glass'] = loadImage('icon/Rocks-Glass.png');
    title = loadImage('icon/title.png');
}


class recipe{
  constructor(r,csv){
    this.r=r;
    this.x=0;
    this.y=0;
    this.csv=csv;
    this.c1=color(100,100,100);
    this.m=[];
    this.n=[];
    this.f=[];
    this.clickC=0;
  }
  
  position(rx,ry){
  this.x=rx;
  this.y=ry;
  }
  changeColor(c2){
  this.c1=c2;  
  }
  show(){
  noStroke();
  push();
  fill(this.c1);
  rectMode(CENTER);
  rect(this.x,this.y-10,200,40,8);
  pop();
  textSize(20);
  textAlign(CENTER);
  fill(250);
  text(this.csv.getString(this.r,0),this.x,this.y);
  }
  
 clicked(a){
  this.clickC=a;
 }
  
  
  showcontent(){
  let py=630;
  let y0=height*0.4+315;
  let dy=0;
  if(this.x-100< mouseX && this.x+100>mouseX && this.y-30 <mouseY && this.y+10 >mouseY && this.clickC>0){
  push();
  noStroke();
  rectMode(CENTER);
  fill(250);
  rect(width/2,height*0.4,500,630);
  pop();
  push();
  fill(50);
  textAlign(CENTER);
  // draw component
  let texty;
  let texty2=0;
  this.m=['Spirits1','Spirits2','Spirits3','Lime Juice','Juice1','Juice2','Syrup1','Syrup2','Bitter1','Bitter2','Other1','Other2','Other3','Liqueur 1','Liqueur 2','Liqueur 3'];
  this.n=['Spirits1am','Spirits2am','Spirits3am','Lime Juiceam','Juice1am','Juice2am','Syrup1am','Syrup2am','Bitter1am','Bitter2am','Other1am','Other2am','Other3am','Liqueur 1am','Liqueur 2am','Liqueur 3am'];
  this.f=['Spirits1c','Spirits2c','Spirits3c','Lime Juicec','Juice1c','Juice2c','Syrup1c','Syrup2c','Bitter1c','Bitter2c','Other1c','Other2c','Other3c','Liqueur 1c','Liqueur 2c','Liqueur 3c'];
  let tCount=0;
  let name;
  for (let z=0; z<this.m.length;z++){
  name= this.csv.get(this.r,'Glass');
  if (name == 'Collins-Glass'){
    dy=10;
    py=630-dy;
  }
  
  if (name == 'Hurricane-Glass'){
    dy=105;
    py=630-dy;
  }
   if (name == 'Martini-Glass'){
    dy=400;
    py=630-dy;
  }
  
    if (name == 'Rocks-Glass'){
    dy=17;
    py=630-dy;
  }
  
  
  texty=py*this.csv.get(this.r,this.n[z])/this.csv.get(this.r,'Amount');
  texty2=texty+texty2;
  fill(50);
  if (this.csv.get(this.r,this.n[z])!=0){
  tCount ++;
  rectMode(LEFT);
  noStroke();
  let cc= '#'+this.csv.get(this.r,this.f[z]);
  fill(cc);
  rect(width/2-250,y0-dy-texty2,500,texty);
  pop();
  // load glass png
  imageMode(CORNER);
  let icon = iconImages[name];
  image(icon,width/2-250,y0-630,500,630);
  
  
  
  
  
  push();
  //fill(250);
  //rectMode(LEFT);
  //rect(width*0.5+260,height*0.15,800,650);
  fill(30);
  textSize(30);
  text(this.csv.get(this.r,0),width*0.65+150,y0-400 );
  fill(50);
  textSize(20);
  text(this.csv.get(this.r,this.m[z])+' '+this.csv.get(this.r,this.n[z])+'ml',width*0.65+150,y0-380+tCount*25);
  
  pop();
  
  }
  } 
  fill(50);
  textSize(20);
  text(this.csv.get(this.r,'Operation')+' the '+this.csv.get(this.r,'Ice')+' ice',width*0.65+150,y0-380+tCount*25+40 );
  text('Decorated with '+ this.csv.get(this.r,'Decoration'),width*0.65+150,y0-380+tCount*25+65 );
  }
  }
 
 showflavor(){
 
 if(this.x-100< mouseX && this.x+100>mouseX && this.y-30 <mouseY && this.y+10 >mouseY && this.clickC>0){
   for(let m=1;m<6;m++){
      push(); 
      let title='Flavor'+str(m);
      let flavorTemp=this.csv.get(this.r,title);
      
      stroke(100);
      noFill();
      rectMode(CENTER);
      if(flavorTemp!=='n'){
      rect(width*0.6+140*m-60,height*0.7-10,120,40,8);
      noStroke();
      textSize(20);
      textAlign(CENTER);
      fill(244,122,158);
      
      text(flavorTemp,width*0.6+140*m-60,height*0.7);}
      pop();
   }}

 }
 
  //evaluate(other){
 // if (other.b1==this.b1 && this.b1==true){  
  //  return true;
  //  }else{
  //  return false;
 // }  } 
  
  
  

  mouseWithin(px,py){
    
  if(this.x-100< px && this.x+100>px && this.y-30 <py && this.y+10 >py){
    return true;
  }else{
    return false;
  }
    
  }
  
  
  
  
}
class ball{
  constructor(x,y,r) {
    this.x=x;
    this.y=y;
    this.r=r;
    this.c=color(220,220,220);
    this.c1=true;
 
  }
 show(){
  noStroke();
  if(this.c1){
    fill(this.c);
  }else{
    fill(244,122,158);
  }
  circle(this.x,this.y,this.r);
 }
 
 mouseWithin(px,py){
  let d= dist(px,py,this.x,this.y);
  if (d<this.r){
    return true;
  }else{
    return false;
  } 
 }
 
 changeColor(pc){
   
   this.c=pc;
 }  
 changePink(s){
   this.c1=s;
 }  
 
 changeSize(ps){
   this.r=ps;
 }
 
 evaluate(other){
   if ( this.r == other.r){
   return true;
   }else{
   return false;
   }
 }

 
}


function setup(){
     createCanvas(2560,1440);
     let ballx=width*0.1;
     let bally=height*0.7;
     
     for (let i =0;i<5;i++){

       sourballs[i] = new ball ( ballx+250*i,bally,d);}
     
     for (let i=0; i<3;i++){
       bitterballs[i]= new ball( ballx+500*i,bally+150,d);
       alcoholballs[i]= new ball( ballx+500*i,bally+300,d);
      }
      
     // sour column
     sourColumn= table.getColumn('Sour');
     bitterColumn= table.getColumn('Bitter');
     alcoholColumn=table.getColumn('Alcohol');
}

function draw() {
  
 // draw control bar text
    background(240);
     push();
     noStroke();
     fill(244,122,158);
    strokeCap(ROUND);
     textSize(25);
     textAlign(LEFT);
     text('Sour/Sweet',width*0.1,height*0.7-60);
     text('Bitter',width*0.1,height*0.7+90);
     text('Alcohol',width*0.1,height*0.7+240);
     text('Flavor',width*0.6,height*0.7-60);
 
 // Caption Find Your Cocktail
     push();
  
     image(title,width*0.62+150,height*0.65,500,500);
     
     pop();
 
 // draw control bar line    
     stroke(220);
     strokeWeight(10);
     line(width*0.1,height*0.7,width*0.1+1000,height*0.7);
     line(width*0.1,height*0.7+150,width*0.1+1000,height*0.7+150);
     line(width*0.1,height*0.7+300,width*0.1+1000,height*0.7+300);
     pop();
     
     //mark text
     push();
     fill(180);
     textSize(18);
     textAlign(CENTER);
      textSour =['Sour','Less Sour','Balance','Less Sweet','Sweet'];
      textBitter =['Less Bitter','Medium','More Bitter'];
      textAlcohol =['Light','Medium','Heavy'];
     for (let a=0;a<5;a++){
       text(textSour[a],width*0.1+250*a,height*0.7+50);}
       
     for (let a=0; a<3;a++){
       text(textBitter[a],width*0.1+500*a,height*0.7+200);
       text(textAlcohol[a],width*0.1+500*a,height*0.7+350);
     }
       
          
     // pink text
     push();
     textAlign(CENTER);
     textSize(18);
     fill(229,164,183);
    
     text(textSour[sourNm],width*0.1+250*sourNm,height*0.7+50);
     text(textBitter[bitterNm],width*0.1+500*bitterNm,height*0.7+200);
     text(textAlcohol[alcoholNm],width*0.1+500*alcoholNm,height*0.7+350);
     pop();
     
   // draw pink line
   push();
   strokeCap(ROUND);
   strokeWeight(10);
   stroke(241,214,218);
   line(width*0.1,height*0.7,width*0.1+250*sourNm,height*0.7);
   line(width*0.1,height*0.7+150,width*0.1+500*bitterNm,height*0.7+150);
   line(width*0.1,height*0.7+300,width*0.1+500*alcoholNm,height*0.7+300);
   
   pop();
     

// draw sourballs
     push();
    
     for (var b of sourballs){
     b.show();
     let ba1=b.mouseWithin(mouseX,mouseY);
     if(ba1){
       if(mouseIsPressed){
         b.changeSize(50);
         b.changePink(false);
         for (let i=0;i<sourballs.length;i++){
           if (b== sourballs[i]){
             sourNm =i;}
         }
        }else{
         b.changeColor(color(120,120,120));   
        }}else{   
         b.changeColor(color(220,220,220));
        }
        
    
      for(var other of sourballs){
        if( b !== other && b.evaluate(other)){
          other.changeSize(20);
          other.changePink(true);}
      }
     }
   pop();
   
// draw bitter balls
 push();
    
     for (var c of bitterballs){
     c.show();
     let ca1=c.mouseWithin(mouseX,mouseY);
     if(ca1){
       if(mouseIsPressed){
         c.changeSize(50);
         c.changePink(false);
         for (let i=0;i<bitterballs.length;i++){
           if (c== bitterballs[i]){
             bitterNm =i;}
         }
        }else{
         c.changeColor(color(120,120,120));   
        }}else{   
         c.changeColor(color(220,220,220));
    }
    
    
      for(var otherC of bitterballs){
        if( c !== otherC && c.evaluate(otherC)){
          otherC.changeSize(20);
          otherC.changePink(true);}
      }
     }
   pop();
 // draw alcohol balls
 
 
 push();
    
     for (var d of alcoholballs){
     d.show();
     let da1=d.mouseWithin(mouseX,mouseY);
     if(da1){
       if(mouseIsPressed){
         d.changeSize(50);
         d.changePink(false);
         for (let i=0;i<alcoholballs.length;i++){
           if (d== alcoholballs[i]){
             alcoholNm =i;}
         }
        }else{
         d.changeColor(color(120,120,120));   
        }}else{    
         d.changeColor(color(220,220,220));
    }
     
      for(var otherD of alcoholballs){
        if( d !== otherD && d.evaluate(otherD)){
          otherD.changeSize(20);
          otherD.changePink(true);}
      }
     }
   pop();
   
  
   
   
   
  
   // select recipes
   push();
   let recipeTemp;
   
   let selbl=false;
   recipes=[];
   for (let i=0;i<table.getRowCount();i++){
     sourNm2=round(map(sourColumn[i],min(sourColumn),max(sourColumn),0,4));
     bitterNm2=round(map(bitterColumn[i],min(bitterColumn),max(bitterColumn),0,2));
     alcoholNm2=round(map(alcoholColumn[i],min(alcoholColumn),max(alcoholColumn),0,2));
     if(sourNm==sourNm2 && bitterNm ==bitterNm2 &&alcoholNm == alcoholNm2){
       recipeTemp= new recipe(i,table);
       recipes.push(recipeTemp);
       selbl=true;
    }else{   
       selbl=false;
    }
  
   }
   
   
   
  
// draw recipes part
   push();
   rectMode(CORNER);
   fill(250);
   noStroke();
   rect(0,0,width,height*0.6+40);
   pop();
 
   
   // draw popup icons
   for (let i=0;i<recipes.length;i++){
     if(i<8){
      recipes[i].position(150+i*300,100);
     }else{
      let N1= ceil(i/8);
      let N2 = floor(i/8);
      recipes[i].position(150+(i-8*N2)*300,100+50*N2);
       
     }
   }
   
   let clickC ;
   clickC =0;
   let count =0;
    
   for (var e of recipes){
    let ea1=e.mouseWithin(mouseX,mouseY);
    if(ea1){
        clickC=1;
        e.clicked(clickC);
       }
       
       for(var othere of recipes){
      if( e == othere.clickC && e.clickC==1){
         othere.clicked(0);
        }
     }
       if(ea1){
       if(mouseIsPressed){
         e.changeColor(color(244,122,158));
        
        }else{
         e.changeColor(color(120,120,120));  
         
        }}else{    
         e.changeColor(color(180,180,180));
    }

     e.showcontent();
     e.showflavor();
     e.show(); 
     
   }
   
  
 
     
}





 
     
     
