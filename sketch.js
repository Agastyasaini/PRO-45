var man,manimg;
var box1,boximg,box2,box3,box4,box5 ;


function preload(){

manimg = loadAnimation("MAN_1.png","MAN_2.png","MAN_3.png","MAN_4.png");
boximg = loadImage("box.png");
   
}

function setup(){
createCanvas(1000,1000);
man=createSprite(200,500)
man.addAnimation("running",manimg);
man.scale=0.5

box1=createSprite(100,50,50,50)
box1.addImage(boximg)

box2=createSprite(250,150,50,50)
box2.addImage(boximg)

box3=createSprite(350,150,50,50)
box3.addImage(boximg)
}

function draw(){

    background(0);

    
    drawSprites();
}


