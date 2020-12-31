var cNote, csNote;
var dNote, dsNote;
var eNote;
var fNote, fsNote;
var gNote, gsNote;
var aNote, asNote
var bNote;
var cNote2,csNote2;
var dNote2, dsNote2;
var eNote2;

function preload() {
   bg= loadImage("bg.png");
   border1= loadImage("border.png");
   cSound= loadSound("cnote.wav");

}

function setup(){
    var canvas = createCanvas(1200,600);
    
bgs=createSprite(600,400,1200,800);
 bgs.addImage(bg);
 bgs.scale=1.5;

border= createSprite(600,250,2000,10);
border.addImage(border1);
border.scale=1.9;
console.log(border.x,border.y);

   cNote= createSprite(200,400,75,300); 
   cNote.shapeColor="white";
   
    
   dNote= createSprite(290,400,75,300); 
   dNote.shapeColor="white";
   eNote= createSprite(380,400,75,300); 
   eNote.shapeColor="white";
   fNote= createSprite(470,400,75,300); 
   fNote.shapeColor="white";
   gNote= createSprite(560,400,75,300); 
   gNote.shapeColor="white";
   aNote= createSprite(650,400,75,300); 
   aNote.shapeColor="white";
   bNote= createSprite(740,400,75,300); 
   bNote.shapeColor="white";
   cNote2= createSprite(830,400,75,300); 
   cNote2.shapeColor="white";
   dNote2= createSprite(920,400,75,300); 
   dNote2.shapeColor="white";
   eNote2= createSprite(1010,400,75,300); 
   eNote2.shapeColor="white";
   csNote= createSprite(245,350,60,200);
   csNote.shapeColor="black";
   dsNote= createSprite(335,350,60,200);
   dsNote.shapeColor="black";
   fsNote= createSprite(515,350,60,200);
   fsNote.shapeColor="black";
   gsNote= createSprite(605,350,60,200);
   gsNote.shapeColor="black";
   asNote= createSprite(695,350,60,200);
   asNote.shapeColor="black";
   csNote2= createSprite(875,350,60,200);
   csNote2.shapeColor="black";
   dsNote2= createSprite(965,350,60,200);
   dsNote2.shapeColor="black";
 
}

function draw(){
    background(0);
    fill(255);
    //fontStyle("calibri");
    textSize(50);
    text("Piano",550,100);
    textSize(20)
    text("Use the keys in your keyboard to play a virtual piano",400,150);
    

    textSize(32);
    textAlign(CENTER, TOP);
    textFont("Courier New");
    fill("white");
    stroke("red");
    text("A", 200,200, 400, 400);
    if(keyWentDown("A")){
       cNote.shapeColor=(219,218,215);
       cSound.play();}
       else{
    
           cNote.shapeColor="white";
       }
       
    drawSprites();
}
