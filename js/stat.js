'use strict';

window.renderStatistics = function(ctx, names, times){
  // Draw cloud
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
  ctx.strokeStyle = "#000000";
  ctx.strokeRect(100,10,420,270);

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(100,10,420,270);

  ctx.fillStyle = "#000000";
  ctx.font = "16px PT Mono";
  ctx.textBaseline = "hanging";
  ctx.fillText("Ура, вы победили!", 120, 30);
  ctx.fillText("Список результатов:", 120, 55);
}
