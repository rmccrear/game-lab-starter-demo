
function doSpriteMovement() {
     if(player.x > 400) {
        player.velocityX = -player.velocityX;
    }
    if(player.y > 400) {
        player.velocityY = -player.velocityY;
    }
    if(player.x<0){
        player.velocityX = -player.velocityX;
    }
    if(player.y<0){
        player.velocityY = -player.velocityY;
    }

    if(star.x > 400) {
        star.velocityX = -star.velocityX;
    }
    if(star.y > 400) {
        star.velocityY = -star.velocityY;
    }
    if(star.x<0){
        star.velocityX = -star.velocityX;
    }
    if(star.y<0){
        star.velocityY = -star.velocityY;
    }  
}