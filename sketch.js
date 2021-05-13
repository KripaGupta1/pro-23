var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var block1 , block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-20, width,30);
	groundSprite.shapeColor=("yellow");

	block1= createSprite(width/2,height-45,150,20);
	block1.shapeColor="red";

	block2= createSprite(475,height-70,20,70);
	block2.shapeColor="red";

	block3= createSprite(325,height-70,20,70);
	block3.shapeColor="red";

	packageSprite=createSprite(width/2, 60, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 742, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
	 
	helicopterSprite.x=helicopterSprite.x-20;
	translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation) 
  } 
else if (keyCode === RIGHT_ARROW) { 
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:20,y:0} 
	Matter.Body.translate(packageBody, translation)
  } 
else if (keyCode === DOWN_ARROW) { 
	Matter.Body.setStatic(packageBody,false);
    
  }
}



