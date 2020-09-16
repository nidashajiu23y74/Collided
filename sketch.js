var bullet, wall;
var speed, weight, thickness;
function setup() {
  thickness= random(22,83)
  speed=random(223,321);
  weight=random(30,52);
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor= color(80,80,80);
  bullet=createSprite(50,200,50,10);
  bullet.velocityx=speed;
  HasCollided();
  drawSprites();

  if (HasCollided(bullet,wall))
  {
    bullet.velocityx=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0)
    }
    if (damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }

  background(255,255,255); 
}

function HasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width ;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {

          return true
  
  return false;
  }
}

