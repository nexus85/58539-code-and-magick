'use strict';

window.renderStatistics = function(ctx, names, times){

  // Draw cloud
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
  ctx.strokeStyle = "#000000";
  ctx.strokeRect(100,10,420,270);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(100,10,420,270);

  //Write text
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#000000";
  ctx.font = "16px PT Mono";
  ctx.textBaseline = "hanging";
  ctx.fillText("Ура, вы победили!", 140, 30);
  ctx.fillText("Список результатов:", 140, 55);


  // Get the worst player time
  var maxTime = -1;
  for (var i = 0; i < times.length; i++){
    if (times[i] > maxTime){
      maxTime = times[i];
    }
  }

  // Draw players results
  ctx.fillStyle = "#000000";
  ctx.textBaseline = "top";
  var fontHeight = 20;
  var startX = 140;
  var startY = 100;
  var barWidth = 40;
  var barWidth = 40;
  var barSpace = 50;
  var histogramHeight = 150;
  var step = histogramHeight/maxTime;
  for (var i = 0; i < times.length; i++){
    if (names[i] === 'Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }else{
      var alpha = 0;
      while(alpha === 0){
        alpha = Math.random().toFixed(1);
      }
      ctx.fillStyle = 'rgba(0, 0, 255, '+ alpha +')';
    }
    ctx.fillRect(startX+(barWidth+barSpace)*i,startY+histogramHeight-step*times[i],barWidth,step*times[i]);
    ctx.fillText(times[i].toFixed(0), startX+(barWidth+barSpace)*i, startY+histogramHeight-step*times[i] - fontHeight);
    ctx.fillText(names[i], startX+(barWidth+barSpace)*i, startY+histogramHeight+5);
  }

}
