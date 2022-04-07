var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4073960e-3c5a-4358-87fe-51c70a5fdd8a","bb9f1dea-9850-4a3c-9c80-761d9a772bdd","79da560e-604c-42ed-8b1b-2004117142fd","0cd873cb-2bd1-4533-b695-26da4788cdff","ec7f9fc9-6937-4c71-a792-c97224e922a5","418ddd2b-8fa3-4c6a-9b74-2c3719936358","23a595fa-dc0b-4ce2-9133-872bc2113e4b"],"propsByKey":{"4073960e-3c5a-4358-87fe-51c70a5fdd8a":{"name":"santa","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"bb9f1dea-9850-4a3c-9c80-761d9a772bdd":{"name":"ground","sourceUrl":"assets/api/v1/animation-library/gamelab/48a_8kq4NSAHoLjO0VNWNhoKgKghcJDK/category_video_games/ground_grass.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"48a_8kq4NSAHoLjO0VNWNhoKgKghcJDK","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48a_8kq4NSAHoLjO0VNWNhoKgKghcJDK/category_video_games/ground_grass.png"},"79da560e-604c-42ed-8b1b-2004117142fd":{"name":"spike","sourceUrl":"assets/api/v1/animation-library/gamelab/dKMso84t.chz9qgy.kbXYXCnkVWSBgqF/category_video_games/spike_top.png","frameSize":{"x":51,"y":87},"frameCount":1,"looping":true,"frameDelay":2,"version":"dKMso84t.chz9qgy.kbXYXCnkVWSBgqF","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":87},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dKMso84t.chz9qgy.kbXYXCnkVWSBgqF/category_video_games/spike_top.png"},"0cd873cb-2bd1-4533-b695-26da4788cdff":{"name":"cloud","sourceUrl":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png"},"ec7f9fc9-6937-4c71-a792-c97224e922a5":{"name":"earth","sourceUrl":"assets/api/v1/animation-library/gamelab/nGOenE1WijfC4DHy9IQB7Isq7IVsds8K/category_icons/earth.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"nGOenE1WijfC4DHy9IQB7Isq7IVsds8K","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nGOenE1WijfC4DHy9IQB7Isq7IVsds8K/category_icons/earth.png"},"418ddd2b-8fa3-4c6a-9b74-2c3719936358":{"name":"roberto","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MNORL9M1xkEPssmkEarKfv6eqbesfOxJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/418ddd2b-8fa3-4c6a-9b74-2c3719936358.png"},"23a595fa-dc0b-4ce2-9133-872bc2113e4b":{"name":"laser","sourceUrl":null,"frameSize":{"x":1292,"y":445},"frameCount":1,"looping":true,"frameDelay":12,"version":"Aab4BTktQYh4suBTM0TSsTjZguPZvDi4","loadedFromSource":true,"saved":true,"sourceSize":{"x":1292,"y":445},"rootRelativePath":"assets/23a595fa-dc0b-4ce2-9133-872bc2113e4b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


  var gameState = "serve";

  var bg = createSprite(200,200);
      bg.setAnimation("santa");
  
  var chao1 = createSprite(65,380,15,15);
      chao1.setAnimation("ground");
      chao1.scale=.3;
  
  var chao2 = createSprite(200,350,15,15);
      chao2.setAnimation("ground");
      chao2.scale=.2;
  
  var espinho1 = createSprite(225,325,15,15);
      espinho1.setAnimation("spike");
      espinho1.scale=.4;
  
  var chao3 = createSprite(325,300,15,15);
      chao3.setAnimation("ground");
      chao3.scale=.2;
      
  var chao4 = createSprite(200,250,15,15);
      chao4.setAnimation("ground");
      chao4.scale=.2;
  
  var chao5 = createSprite(75,200,15,15);
      chao5.setAnimation("ground");
      chao5.scale=.2;
  
  var nuvem1 = createSprite(80,260,15,15);
      nuvem1.setAnimation("cloud");
      nuvem1.scale=.5;
  
  var nuvem2 = createSprite(325,160,15,15);
      nuvem2.setAnimation("cloud");
      nuvem2.scale=.5;
  
  var chao6 = createSprite(200,150,15,15);
      chao6.setAnimation("ground");
      chao6.scale=.2;
  
  var chao7 = createSprite(325,100,15,15);
      chao7.setAnimation("ground");
      chao7.scale=.3;
  
  var espinho2 = createSprite(50,170,15,15);
      espinho2.setAnimation("spike");
      espinho2.scale=.5;
  
  var terra = createSprite(50,50,15,15);
      terra.setAnimation("earth");
      terra.scale=.2;

  var player = createSprite(65,357,20,20);
      player.shapeColor = "orange";
      
  var laser1 = createSprite(200,450,400,10);
      laser1.shapeColor = "red";
      
      
function draw() {  
  
 drawSprites();
  
 createEdgeSprites();
  

  if (gameState=="serve"){
  
    textSize(20);
    fill("red");
    text("Bem Ao Jogo Mais Dificil Do",90,50);
    text("MUNDO, Aperte Espaco Para ",90,70);
    text("Comecar",90,90);
    if (keyDown("space")){

      laser1.velocityY = -1;
      gameState = "play";
      
      
    }

  }
  
  if (gameState=="play"){
  
     if(keyDown("UP_ARROW")){
      
        player.velocityY = -2;
      
     }
  
     if(keyDown("DOWN_ARROW")){
  
        player.velocityY = 2;
    
     }
  
     if(keyDown("RIGHT_ARROW")){
       
       player.velocityX = 2;
       
     }
  
     if(keyDown("LEFT_ARROW")){
    
       player.velocityX = -2;
    
     }
 
     if (player.isTouching(espinho1)){
 
        laser1.velocityY = 0;
        textSize(35);
        fill("red");
        text("☆Fim De Jogo☆",120,220);
        player.velocityX = 0;
        player.velocityY = 0;
        
        gameState = "end";
    }
  
      if (player.isTouching(espinho2)){
 
        laser1.velocityY = 0;
        textSize(35);
        fill("red");
        text("☆Fim De Jogo☆",120,220);
        player.velocityX = 0;
        player.velocityY = 0;
        
        gameState = "end";
    }
    
      if (player.isTouching(nuvem1)){
 
        laser1.velocityY = 0;
        textSize(35);
        fill("red");
        text("☆Fim De Jogo☆",120,220);
        player.velocityX = 0;
        player.velocityY = 0;
        
        gameState = "end";
    }
    
      if (player.isTouching(nuvem2)){
 
        laser1.velocityY = 0;
        textSize(35);
        fill("red");
        text("☆Fim De Jogo☆",120,220);
        player.velocityX = 0;
        player.velocityY = 0;
        
        gameState = "end";
      }
        
      if (player.isTouching(laser1)){
        
        laser1.velocityY = 0;
        textSize(35);
        fill("red");
        text("☆Fim De Jogo☆",120,220);
        player.velocityX = 0;
        player.velocityY = 0;
       
        gameState = "end";
      }
   
      if (player.isTouching(chao7)){
      
        player.velocityX = 0;
        player.velocityY = 0;
        laser1.velocityY = 0;
        
        gameState = "end";
    }
  }
  
 if (gameState=="end"){
    
     textSize(35);
     fill("red");
     text("☆Fim De Jogo☆",120,220);
  }
  
  player.collide(chao1);
  player.collide(chao2);
  player.collide(chao3);
  player.collide(chao4);
  player.collide(chao5);
  player.collide(chao6);
  player.collide(chao7);
  player.collide(espinho1);
  player.collide(espinho2);
  player.collide(nuvem1);
  player.collide(nuvem2);
  player.collide(laser1);
  player.collide(leftEdge);
  player.collide(rightEdge);
  player.collide(bottomEdge);
  player.collide(topEdge);
  
  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
