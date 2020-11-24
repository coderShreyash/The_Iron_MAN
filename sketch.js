
function preload(){

 bg=loadImage("bg.jpg");
 IronManImg=loadImage("Iron.png");
 stoneI=loadImage("stone.png");

}

function setup(){

    createCanvas(1200,600);

    back=createSprite(600,300,1200,600);
    back.addImage(bg);
    
    IronMan=createSprite(random(300,700),450,80,200);
    IronMan.addImage(IronManImg);
    IronMan.scale=0.25;
    IronMan.setCollider("rectangle",20,0,250,850);

    stoneGroup=new Group();

    edges=createEdgeSprites();

}

function draw(){
if(back.y>1000){
    back.y=700;
}
background(0);
drawSprites();

back.velocityY=5+(0.005*frameCount);

if(keyDown("up")){
    IronMan.velocityY=-10;
}

if(keyDown("left")){
    IronMan.velocityX=-6;
    IronMan.velocityY=0;
}
if(keyDown("right")){
    IronMan.velocityX=6;
    IronMan.velocityY=0;
}

IronMan.bounceOff(edges)
IronMan.velocityY+=0.275;

for(var i=0;i<stoneGroup.length;i++){
    currentStone=stoneGroup[i];
    currentStone.collide(IronMan);
    
}

if(frameCount%45==0){
    stone=createSprite(random(100,1100),random(50,300),150,30);
    stone.addImage(stoneI);
    stone.lifetime=400;
    stone.scale=0.1;
   
    stone.velocityY=back.velocityY;
    stoneGroup.add(stone);
}

}