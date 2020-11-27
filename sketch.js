var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxEdge1, boxEdge2, boxBottom
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
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxEdge1 = createSprite(300,700,100,20);
	boxEdge1.shapeColor = ("red");
	boxEdge2 = createSprite(500,700,100,20);
	boxEdge2 = shapeColor = ("red");
	boxBottom = createSprite(400,680,20,200);
    boxBottom = shapeColor = ("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();

  if (packageBody.isTouching(boxEdge1,boxEdge2,boxBottom)){
	  packageBody.setStatic = true;
  }
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody.isStatic = false;
	packageBody.velocityY = -3;
	//should there be restitution code here?
 }
}



