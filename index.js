var canvas;
var ctx;
var stepCount = 2;

function reDraw(){
  clear();
  drawShape();
 }

function transform(){
    clear();
    ctx.save();
    stepCount = document.getElementById("stepField").value;
    drawF(stepCount);
    ctx.restore();
}

function drawF(step) {

  if (step > 0) {
    step = step - 1;
    ctx.save();
    ctx.save();
    ctx.save();

    //ctx.transform(0.5, 0, 0, -0.5, 0, 0);
    ctx.transform(0, -0.5, -0.5, 0, 250, 250);
    partColor(step, "red");
    drawF(step);
    ctx.restore();

    ctx.transform(0.25, 0, 0, 0.25, 0, 375);
    partColor(step, "blue");
    drawF(step);
    ctx.restore();

    ctx.transform(-0.5, 0, 0, -0.5, 500, 500);
    partColor(step, "green");
    drawF(step);
    ctx.restore();

    ctx.transform(0, 0.5, 0.5, 0, 250, 0);
    partColor(step, "purple");
    drawF(step);
  } else {
    drawShape();
  }
}
   
function drawShape() {
  ctx.beginPath();
  ctx.moveTo(0, 125);
  ctx.lineTo(125, 125);
  ctx.lineTo(125, 250);
  ctx.lineTo(250, 250);
  ctx.lineTo(250, 500);
  ctx.lineTo(500, 500);
  ctx.lineTo(500, 0);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(0,375);
  ctx.lineTo(125,375);
  ctx.lineTo(125,500);
  ctx.lineTo(0,500);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(0,187.5);
  ctx.lineTo(62.5, 187.5);
  ctx.lineTo(62.5, 250);
  ctx.lineTo(0,250);
  ctx.fill();
  ctx.closePath();
}

function partColor(step, color) {
  if (step === stepCount - 1) {
    ctx.fillStyle = color;
  }
}

function clear(){
  
  if (ctx != null)
  {
    ctx.clearRect(0, 0, 500, 500);
  }

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
 }

