"use strict";

var $canvas = document.querySelector('#canvas');
var $ctx = $canvas.getContext('2d');
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();
bird.src = './img/bird.png';
bg.src = './img/bg.png';
fg.src = './img/fg.png';
pipeUp.src = './img/pipeUp.png';
pipeBottom.src = './img/pipeBottom.png';
var fly = new Audio();
var scoreAudio = new Audio();
var gameOver = new Audio();
fly.src = './audio/fly.mp3';
scoreAudio.src = './audio/score.mp3';
gameOver.src = './audio/game_over.mp3';
gameOver.currentTime = 0;
gameOver.muted = true;
var gap = 90;
var xPos = 10;
var yPos = 150;
var grav = 1.5;
var score = 0;
document.addEventListener("keydown", moveUp);

function moveUp() {
  yPos -= 25;
  fly.play();
}

var pipe = [];
pipe[0] = {
  x: $canvas.width,
  y: 0
};

function draw() {
  $ctx.drawImage(bg, 0, 0);

  for (var i = 0; i < pipe.length; i++) {
    $ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    $ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x: $canvas.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
      });
    }

    if (xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width && (yPos <= pipe[i].y + pipeUp.height || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= $canvas.height - fg.height || yPos <= 0) {
      // gameOver.play();
      location.reload();
    }

    if (pipe[i].x == 5) {
      score++;
      scoreAudio.play();
    }

    if (pipe[i].x == 0) {
      pipe.splice(i, 1);
    }
  }

  $ctx.drawImage(fg, 0, $canvas.height - fg.height);
  $ctx.drawImage(bird, xPos, yPos);
  yPos += grav;
  $ctx.fillStyle = "#000";
  $ctx.font = "24px Verdana";
  $ctx.fillText("Hisob: " + score, 10, $canvas.height - 20);
  requestAnimationFrame(draw);
}

pipeBottom.onload = draw;