// // Canvas Fishing Scene

// // Canvas setup
// var cnv = document.getElementById("myCanvas");
// var ctx = cnv.getContext("2d");
// cnv.width = 400;
// cnv.height = 500;

// // Animation Variables
// let cloud1X = 50;
// let cloud2X = 175;
// let cloud3X = 275;
// let fish1X = 220;
// let fish2X = 300;

// let cloud1Y = 35;
// let cloud2Y = 10;
// let cloud3Y = 70;
// let sunY = 50;
// let fish1Y = 370;
// let fish2Y = 400;

// requestAnimationFrame(draw);

// function draw() {
//   // Sky
//   ctx.fillStyle = "lightblue";
//   ctx.fillRect(0, 0, 400, 500);

//   // Sun
//   ctx.fillStyle = "yellow";
//   ctx.beginPath();
//   ctx.arc(75, sunY, 20, 0, 2 * Math.PI);
//   ctx.fill();

//   // Clouds
//   let cloud = document.getElementById("cloud-img");
//   ctx.drawImage(cloud, cloud1X, cloud1Y, 85, 60);
//   ctx.drawImage(cloud, cloud2X, cloud2Y, 90, 70);
//   ctx.drawImage(cloud, cloud3X, cloud3Y, 85, 60);

//   // Water
//   ctx.fillStyle = "blue";
//   ctx.fillRect(0, 300, 400, 200);

//   // Pier Landing
//   ctx.fillStyle = "maroon";
//   ctx.fillRect(0, 250, 250, 25);

//   // Pier posts
//   for (let n = 1; n <= 4; n++) {
//     ctx.fillStyle = "maroon";
//     if (n == 1) {
//       ctx.fillRect(10, 200, 15, 300);
//     } else if (n == 2) {
//       ctx.fillRect(60, 200, 15, 300);
//     } else if (n == 3) {
//       ctx.fillRect(110, 200, 15, 300);
//     } else if (n == 4) {
//       ctx.fillRect(160, 200, 15, 300);
//     }
//   }

//   // Draw Fish
//   drawFish(fish1X, fish1Y);
//   drawFish(fish2X, fish2Y);

//   // Stickman Butt
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = "black";
//   ctx.beginPath();
//   ctx.moveTo(240, 240); // butt
//   ctx.lineTo(270, 255); // knee
//   ctx.stroke();

//   // Stickman Leg
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = "black";
//   ctx.beginPath();
//   ctx.moveTo(270, 255); // knee
//   ctx.lineTo(280, 280); // foot
//   ctx.stroke();

//   // Stickman Torso
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = "black";
//   ctx.beginPath();
//   ctx.moveTo(240, 240); // butt
//   ctx.lineTo(250, 180); // neck
//   ctx.stroke();

//   // Arm
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = "black";
//   ctx.beginPath();
//   ctx.moveTo(245, 200); // armpit
//   ctx.lineTo(275, 220); // hand
//   ctx.stroke();

//   // Head
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = "black";
//   ctx.beginPath();
//   ctx.arc(260, 162, 20, 0, 2 * Math.PI);
//   ctx.stroke();

//   // Fishing rod
//   ctx.lineWidth = 5;
//   ctx.strokeStyle = "gray";
//   ctx.beginPath();
//   ctx.moveTo(265, 230); // rod bottom
//   ctx.lineTo(360, 130); // tip of rod
//   ctx.stroke();

//   // Fishing line
//   ctx.lineWidth = 1;
//   ctx.strokeStyle = "gray";
//   ctx.beginPath();
//   ctx.moveTo(360, 130); // tip of rod
//   ctx.lineTo(360, 370); // end of line
//   ctx.stroke();

//   // Hook bottom
//   ctx.lineWidth = 1;
//   ctx.strokeStyle = "white";
//   ctx.beginPath();
//   ctx.moveTo(360, 370); // end of line
//   ctx.lineTo(350, 370); // hook left
//   ctx.stroke();

//   // Hook top
//   ctx.lineWidth = 1;
//   ctx.strokeStyle = "white";
//   ctx.beginPath();
//   ctx.moveTo(350, 370); // hook left
//   ctx.lineTo(350, 360); // hook tip
//   ctx.stroke();

//   // Title
//   ctx.fillStyle = "gray";
//   ctx.font = "20px Arial";
//   ctx.fillText("JavaScript Canvas", 10, 20);

//   // Animation
//   cloud1X = cloud1X + 1;
//   cloud2X = cloud2X + 0.7;
//   cloud3X = cloud3X + 0.5;
//   sunY += 0.5;

//   fish1X = fish1X - 0.5;
//   fish2X = fish2X - 0.7;

//   // Cloud reappears on the left side
//   if (cloud1X >= 400) {
//     cloud1X = -85;
//     cloud1Y = Math.random() * 250;
//   }

//   if (cloud2X >= 400) {
//     cloud2X = -90;
//     cloud2Y = Math.random() * 250;
//   }

//   if (cloud3X >= 400) {
//     cloud3X = -85;
//     cloud3Y = Math.random() * 250;
//   }

//   if (fish1X >= 400) {
//     fish1X = 10;
//   }

//   if (fish2X >= 400) {
//     fish2X = 10;
//   }

//   if (sunY >= 300) {
//     sunY = 300;
//   }

//   if (fish1X <= -20) {
//     fish1X = 400;
//   }

//   if (fish2X <= -20) {
//     fish2X = 400;
//   }

//   requestAnimationFrame(draw);
// }

// // X: 220 y: 370
// function drawFish(x, y) {
//   // FISH head 1
//   ctx.fillStyle = "green";
//   ctx.beginPath();
//   ctx.arc(x, y, 10, 0, 2 * Math.PI);
//   ctx.fill();

//   // FishTail 1
//   ctx.fillStyle = "green";
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   ctx.lineTo(x + 20, y - 10);
//   ctx.lineTo(x + 20, y + 10);
//   ctx.lineTo(x, y);
//   ctx.fill();
// }

// #2

// Canvas setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 500;

// varaibles for animation

let cloud1X = 10;
let cloud2X = 175;
let cloud3X = 300;
let cloud4X = 100;
let dogX = 100;
let horse1X = 350;
let frame = 0;

let cloud1Y = 55;
let cloud2Y = 10;
let cloud3Y = 10;
let cloud4Y = 50;
let sunY = -20;
let moonY = 200;
let gVal = 216;
let bVal = 230;
let rVal = 173;
let dog = document.getElementById("dog");
let dog2 = document.getElementById("dog2");
let currentDog = dog;

requestAnimationFrame(draw);

function draw() {
  // Sky
  ctx.fillStyle = `rgb(${rVal}, ${gVal}, ${bVal})`;
  ctx.fillRect(0, 0, 400, 500);

  // ground
  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 300, 400, 200);

  // sun
  let sun = document.getElementById("sun-img");
  ctx.drawImage(sun, -40, sunY, 85, 60);

  // moon
  let moon = document.getElementById("moon");
  ctx.drawImage(moon, 320, moonY, 60, 60);

  // mountain
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(70, 40);
  ctx.lineTo(-50, 300);
  ctx.lineTo(240, 300);
  ctx.fill();

  // Snow 1
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(70, 40);
  ctx.lineTo(45, 90);
  ctx.lineTo(105, 90);
  ctx.fill();

  // mountain # 2
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(350, 60);
  ctx.lineTo(240, 300);
  ctx.lineTo(500, 300);
  ctx.fill();

  // Snow 2
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(350, 60);
  ctx.lineTo(370, 90);
  ctx.lineTo(335, 90);
  ctx.fill();

  // mountain # 3
  ctx.fillStyle = "darkgray";
  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(-30, 300);
  ctx.lineTo(500, 300);
  ctx.fill();

  // Snow 3
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(130, 90);
  ctx.lineTo(290, 90);
  ctx.fill();

  // house bottom
  ctx.fillStyle = "brown";
  ctx.fillRect(90, 300, 200, 25);

  // House pillars
  ctx.fillStyle = "brown";
  ctx.fillRect(90, 200, 15, 100);
  ctx.fillRect(275, 200, 15, 100);
  ctx.fillRect(90, 200, 200, 25);

  // roof
  ctx.fillStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(190, 150);
  ctx.lineTo(90, 200);
  ctx.lineTo(290, 200);
  ctx.fill();

  // Fences
  ctx.fillStyle = "lightbrown";
  ctx.fillRect(130, 270, 10, 40);
  ctx.fillRect(180, 270, 10, 40);
  ctx.fillRect(235, 270, 10, 40);
  ctx.fillRect(90, 280, 200, 10);

  // trees
  ctx.fillStyle = "brown";
  ctx.fillRect(35, 200, 10, 100);
  ctx.fillRect(350, 200, 10, 100);
  ctx.fillRect(325, 250, 10, 100);
  ctx.fillRect(60, 275, 10, 100);

  // Branches
  //#1
  ctx.lineWidth = 3;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(37, 250); // end of line
  ctx.lineTo(15, 225); // hook left
  ctx.stroke();
  // #2
  ctx.lineWidth = 3;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(65, 320); // end of line
  ctx.lineTo(30, 280); // hook left
  ctx.stroke();
  // #3
  ctx.lineWidth = 3;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(65, 320); // end of line
  ctx.lineTo(90, 330); // hook left
  ctx.stroke();

  // #4
  ctx.lineWidth = 3;
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(355, 250); // end of line
  ctx.lineTo(380, 230); // hook left
  ctx.stroke();

  // Clouds
  let cloud = document.getElementById("cloud-img");
  ctx.drawImage(cloud, cloud1X, cloud1Y, 85, 60);
  ctx.drawImage(cloud, cloud2X, cloud2Y, 90, 70);
  ctx.drawImage(cloud, cloud3X, cloud3Y, 85, 60);
  ctx.drawImage(cloud, cloud4X, cloud4Y, 85, 60);

  // Title
  ctx.fillStyle = "gray";
  ctx.font = "20px Arial";
  ctx.fillText(" Mini lookout near the mountains", 110, 495);

  // tree bush
  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(40, 200, 20, 0, 2 * Math.PI);
  ctx.fill();

  // tree bush #2
  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(355, 200, 20, 0, 2 * Math.PI);
  ctx.fill();

  // tree bush #3
  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(330, 245, 20, 0, 2 * Math.PI);
  ctx.fill();

  // tree bush #4
  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.arc(65, 265, 20, 0, 2 * Math.PI);
  ctx.fill();

  // bird
  ctx.fillStyle = "black";
  ctx.fillRect(185, 130, 10, 20);
  ctx.fillStyle = "grey";
  ctx.fillRect(185, 135, 10, 10);

  // roof
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(200, 135);
  ctx.lineTo(195, 130);
  ctx.lineTo(195, 135);
  ctx.fill();

  // horse
  let horse = document.getElementById("horse");
  ctx.drawImage(horse, horse1X, 400, 80, 60);

  // dog
  ctx.drawImage(currentDog, dogX, 320, 80, 60);

  // River
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 460, 400, 200);

  // river ground
  ctx.fillStyle = "brown";
  ctx.fillRect(0, 450, 400, 10);

  // Animation
  frame++;
  cloud1X = cloud1X + 1;
  cloud2X = cloud2X + 0.7;
  cloud3X = cloud3X + 0.5;
  cloud4X = cloud4X + 0.5;
  dogX = dogX + 0.5;
  horse1X = horse1X - 1;
  sunY += 0.5;
  moonY -= 0.5;

  // dog

  if (frame > 0 && frame <= 60) {
    currentDog = dog;
  }

  if (frame > 60 && frame <= 120) {
    currentDog = dog2;
  }

  if (frame > 120) {
    frame = 0;
  }

  if (dogX >= 400) {
    dogX = -50;
  }

  // horse

  if (horse1X < -50) {
    horse1X = 450;
  }

  // Cloud reappears
  if (cloud1X >= 400) {
    cloud1X = -85;
    cloud1Y = Math.random() * 100;
  }

  if (cloud2X >= 400) {
    cloud2X = -90;
    cloud2Y = Math.random() * 100;
  }

  if (cloud3X >= 400) {
    cloud3X = -85;
    cloud3Y = Math.random() * 100;
  }

  if (cloud4X >= 400) {
    cloud4X = -85;
    cloud4Y = Math.random() * 100;
  }

  if (sunY >= 200) {
    sunY = 200;
  }

  if (moonY < 0) {
    moonY = 0;
  }

  // Block color change
  gVal -= 0.5;
  if (gVal == 0) {
    gVal = 0;
  }

  bVal -= 0.5;
  if (bVal == 0) {
    bVal = 0;
  }

  rVal -= 0.5;
  if (rVal == 0) {
    rVal = 0;
  }

  requestAnimationFrame(draw);
}
