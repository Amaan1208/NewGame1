var bg,bgImg;
var player, playerImg, wiseMan, wiseManImg, cloud, cloudImg, ground, ground2, ground3, piece, chest, chestImg,playerImg2,
playerImg3,playerImg4,playerImg5,playerImg6
var textBox, textBoxImg

function preload(){
  
  playerImg2= loadAnimation("Images/character.png","Images/charracter2.png")

  playerImg3= loadAnimation("Images/characterflipped.png")

  playerImg4= loadAnimation("Images/characterflipped.png","Images/charracter2flipped.png")

  playerImg5= loadAnimation("Images/attack.png")

  playerImg6= loadAnimation("Images/attackflipped.png")

  playerImg = loadAnimation("Images/character.png")

  bgImg = loadImage("Images/lobby.jpg")

  wiseManImg = loadImage("Images/wise man.gif")

  cloudImg = loadImage("Images/cloud.png")

  chestImg = loadImage("Images/chest.png")

  textBoxImg = loadImage("Images/text box.png")

}

function setup() {


  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  //bg = createSprite(displayWidth/2,displayHeight/2-40,displayWidth,displayHeight)
  //bg.addImage(bgImg)
  //bg.scale = 1.3
  

//creating the player sprite

 wiseMan=createSprite(displayWidth-320 ,displayHeight/2-320, 50,50)
 wiseMan.addImage(wiseManImg);
 wiseMan.scale= .5
 //wiseMan.debug=true
 wiseMan.setCollider('rectangle',-180,60,5,520)

 textBox=createSprite(wiseMan.x+190,wiseMan.y-100,50,50)
 textBox.addImage(textBoxImg)
 textBox.scale=.2
 textBox.visible=false

 cloud=createSprite(wiseMan.x-20 ,wiseMan.y+120, 50,50)
 cloud.addImage(cloudImg);
 cloud.scale= .15

 player=createSprite(150 ,displayHeight-320, 50,50)
 player.addAnimation("rest",playerImg)
 player.addAnimation("walking",playerImg2);
 player.addAnimation("restflipped",playerImg3);
 player.addAnimation("walkingflipped",playerImg4);
 player.addAnimation("attack",playerImg5);
 player.addAnimation("attackflipped",playerImg6);
 player.scale= .5

 chest=createSprite(displayWidth/2+150, displayHeight-300, 100, 50) 
 chest.addImage(chestImg);
 chest.scale=.4
 //chest.debug=true
 chest.setCollider('rectangle',0,0,600,410)

ground=createSprite(displayWidth/2, displayHeight-200, displayWidth, 50)
ground.visible=false

ground2=createSprite(displayWidth-340, displayHeight/2+100, 670, 380)
ground2.visible=false

ground3=createSprite(250, 350, 500, 50)
ground3.visible=false

piece=createSprite(530, 350, 100, 25)
piece.visible=false

player.setCollider('rectangle',0,-10,300,410)
//player.debug=true




}

function draw() {
  background(bgImg); 

  console.log(getFrameRate())

  player.collide(ground)
  player.collide(ground2)
  player.collide(ground3)
  player.collide(piece)
  player.collide(chest)

  if(keyDown("d")){

    player.x=player.x+12
    player.changeAnimation("walking",playerImg2);
    
  } else{
    player.changeAnimation("rest",playerImg);
    }

  if(keyDown("a")){

    player.changeAnimation("walkingflipped",playerImg4);
    player.x=player.x-12
  }

  if(keyDown("s")){

    player.velocityY=player.velocityY+5
  }

  if(keyWentDown("space")){

    
      player.velocityY = -33;
    
    }

     player.velocityY = player.velocityY + 2
  
  if(player.isTouching(wiseMan)){
    
    textBox.visible=true
  }else{
    textBox.visible=false
  }

  if(keyDown("shift")){

    player.changeAnimation("attack",playerImg5);
  
  }

  if(keyDown("shift") && keyDown("d")){

    player.changeAnimation("attack",playerImg5);
  
  }

  if(keyDown("shift") && keyDown("a")){

    player.changeAnimation("attackflipped",playerImg6);
  
  }



  

drawSprites();

}
