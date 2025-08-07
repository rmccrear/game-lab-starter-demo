
function drawBackground() {
    if(score<25) {
        background1();
    }
    if(score>=25) {
        background2();
    }
}

function background1() {
    background("darkBlue");
    noStroke();
    fill("yellow");
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(340, 50, 60, 60);
    fill("darkBlue");
    ellipse(320, 30, 60, 60);
  }

  function background2() {
    background("purple");
    noStroke();
    fill("yellow");
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  }
