
function setupSprites() {
  // Example Code follows.
  // Please delete and replace with your own code.
  player = createSprite(200, 200, 50, 50);
  player.addAnimation('fly', alienAnimation);
  player.height = 50;
  player.width = 50;

  star = createSprite(100, 100, 50, 50);
  star.shapeColor = "aqua";
  // star.addAnimation('twinkle', starAnimation);
  // star.velocityX = -1;
  // star.velocityY = -2;
  // star.height = 30;
  // star.width = 30;

 //Eddie Added
 // platform1 = createSprite(randomNumber(100 , 300), -25, 50, 50);
 // platform1.addAnimation("platform", platformAnimation);
 // platform1.velocityY = 1;
 //Eddie Added
 // platform2 = createSprite(randomNumber(100 , 300), -225, 50, 50);
 // platform2.addAnimation("platform", platformAnimation);
 // platform2.velocityY = 1;
}