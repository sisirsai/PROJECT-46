var gun,gunImage;
var basket,basketImage;

var ing;

var edges;

var openingBackground,playingBackground;

var gameState = 0;

var bottle,fruits;

var bottle1,bottle1Image;
var bottle2,bottle2Image;
var bottle3,bottle3Image;
var bottle4,bottle4Image;
var bottle5,bottle5Image;
var bottle6,bottle6Image;
var bottle7,bottle7Image;

var fruit1,fruit1Image;
var fruit2,fruit2Image;
var fruit3,fruit3Image;
var fruit4,fruit4Image;
var fruit5,fruit5Image;
var fruit6,fruit6Image;
var fruit7,fruit7Image;

var gunShotSound,bottleBreakSound,playBgSound,startBgSound,gameOverSound;

var start,startImage;
var restart,restartImage;

var gameOverBottle,gameOverFruits;

var o;

var bullet,bulletImage;

var bottleGroup , fruitGroup, bulletGroup;

function preload(){
       bottle1Image = loadImage("assets/bottle_1.png");
       bottle2Image = loadImage("assets/bottle_2.png");
       bottle3Image = loadImage("assets/bottle_3.png");
       bottle4Image = loadImage("assets/bottle_4.png");
       bottle5Image = loadImage("assets/bottle_5.png");
       bottle6Image = loadImage("assets/bottle_6.png");
       bottle7Image = loadImage("assets/bottle_7.png");

       fruit1Image = loadImage("assets/fruit_1.png");
       fruit2Image = loadImage("assets/fruit_2.png");
       fruit3Image = loadImage("assets/fruit_3.png");
       fruit4Image = loadImage("assets/fruit_4.png");
       fruit5Image = loadImage("assets/fruit_5.png");
       fruit6Image = loadImage("assets/fruit_6.png");
       fruit7Image = loadImage("assets/fruit_7.png");

       gunShotSound = loadSound("assets/sounds/gun_shot.mp3");
       bottleBreakSound = loadSound("assets/sounds/glass_break.mp3");
       playBgSound = loadSound("assets/sounds/playBackground.mp3");
       startBgSound = loadSound("assets/sounds/StartBackground.mp3");
       gameOverSound = loadSound("assets/sounds/gameover.mp3");

       openingBackground = loadImage("assets/opening.png");
       playingBackground = loadImage("assets/Bg.png");

       startImage = loadImage("assets/start.png");
       restartImage = loadImage("assets/restart.png");

       gunImage = loadImage("assets/gun.png");
       basketImage = loadImage("assets/basket_2.png");

       gameOverBottle = loadImage("assets/gameOverBottle.png");
       gameOverFruits = loadImage("assets/gameOverFruits.png");

       bulletImage = loadImage("assets/bullet.png");

}

function setup() {
       createCanvas(windowWidth,windowHeight-5);

       gun = createSprite(width-100,300);
       gun.addImage(gunImage);
       gun.scale = 0.25;
       
       bottleGroup = new Group();
       fruitGroup = new Group();
       
       ing = createSprite(width/2,height-35,width,10);
       ing.visible = false;

       basket = createSprite(width/2,height-80);
       basket.addImage(basketImage);

       start = createSprite(width/2,height-50,30,70);
       start.addImage(startImage);
       start.scale = 0.7;

}

function draw() {
       background(openingBackground);
       o = Math.round(random(20,width-150));

       if(gun.y<height-50){
        gun.y = mouseY;
       }
       else{
        gun.y = 500;
       }

       if(keyDown(LEFT)){
        basket.x -= 20;
       }
       else if(keyDown(RIGHT)){
        basket.x += 20;
       }

       edges =  createEdgeSprites();
       basket.collide(edges);

       gun.collide(ing);
       if(gameState === 0){
              gun.visible = false;
              basket.visible = false;
       if(mousePressedOver(start)){
        gameState = 1;
       }

       
       }
       else if(gameState === 1){
              background(playingBackground);
              start.visible = false;
              gun.visible = true;
              basket.visible = true;
              if(keyWentDown("space")){
                     bullets();
              }
              spawnFruits();
              spawnBottles();
           /**  for(var i = 0;i < bottleGroup.length; i++){
                     if(bottleGroup.get(i).isTouching(bulletGroup)){
                        bottleGroup.get(i).destroy();
                     }
              }*/
            if(bottleGroup.isTouching(bulletGroup)){
                    bottleGroup.destroyEach();
                    bulletGroup.destroyEach();
              
             }
       }
       drawSprites();

}

function spawnBottles(){
       if(frameCount%70 === 0){
              var r = Math.round(random(1,7));
              bottle = createSprite(10,0);
              bottle.x = o;
              bottle.velocityY = 5;
              bottle.lifetime = height/5;
              bottleGroup.add(bottle);

              if(r === 1){
                     bottle.addImage(bottle1Image);
                     bottle.scale = 0.15;
              }
              else if(r === 2){
                     bottle.addImage(bottle2Image);
                     bottle.scale = 0.35;
              }
              else if (r === 3){
                     bottle.addImage(bottle3Image);
                     bottle.scale = 0.15;
              }
              else if(r === 4){
                     bottle.addImage(bottle4Image);
                     bottle.scale = 0.15;
              }
              else if(r === 5){
                     bottle.addImage(bottle5Image);
                     bottle.scale = 0.15;
              }
              else if(r === 6){
                     bottle.addImage(bottle6Image);
                     bottle.scale = 0.15;
              }
              else if(r === 7){
                     bottle.addImage(bottle7Image);
                     bottle.scale = 0.15;
       }


       /**switch (r){
        case 1: bottle.addImage(bottle1Image);
              break;
       case 2: bottle.addImage(bottle2Image);
              break;
       case 3: bottle.addImage(bottle3Image);
              break;
       case 4: bottle.addImage(bottle4Image);
              break;
       case 5: bottle.addImage(bottle5Image);
              break;
       case 6: bottle.addImage(bottle6Image);
              break;
       case 7: bottle.addImage(bottle7Image);
              break;
       }
       //  bottle.scale = 0.15;*/
       }

}
function spawnFruits(){
       if(frameCount%70 === 0){
              var r = Math.round(random(1,7));
              // var x = Math.round(random(20,width-150));
              fruits = createSprite(10,0);
              fruits.x = o;
              fruits.velocityY = 5;
              fruits.lifetime = height/5;
              fruitGroup.add(fruits);

              /** switch (r){
               case 1: fruits.addImage(fruit1Image);
                     break;
              case 2: fruits.addImage(fruit2Image);
                     break;
              case 3: fruits.addImage(fruit3Image);
                     break;
              case 4: fruits.addImage(fruit4Image);
                     break;
              case 5: fruits.addImage(fruit5Image);
                     break;
              case 6: fruits.addImage(fruit6Image);
                     break;
              case 7: fruits.addImage(fruit7Image);
                     break;
              }
              fruits.scale = 0.5*/ 
              }
              if(r === 1){
                     fruits.addImage(fruit2Image);
                     fruits.scale = 0.5;
              }
              else if(r === 2){
                     fruits.addImage(fruit3Image);
                     fruits.scale = 0.5;
              }
              else if (r === 3){
                     fruits.addImage(fruit4Image);
                     fruits.scale = 0.13;
              }
              else if(r === 4){
                     fruits.addImage(fruit5Image);
                     fruits.scale = 0.5;
              }
              else if(r === 5){
                     fruits.addImage(fruit6Image);
                     fruits.scale = 0.5;
              }
              else if(r === 6){
                     fruits.addImage(fruit7Image);
                     fruits.scale = 0.5;
              }
              else if(r === 7){
                     fruits.addImage(fruit1Image);
                     fruits.scale = 0.083;
              } 
       
  }

  function bullets(){
         bullet = createSprite(10,10);
         bullet.x = gun.x;
         bullet.y = gun.y -35;
         bullet.addImage(bulletImage);
         bullet.scale = 0.08;
         bullet.velocityX = -6;
         bullet.lifetime = width/6;
         bulletGroup.add(bullet);
  }