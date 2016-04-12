$(function() {
  var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d"),
      colors = ["#000", "#003", "#006", "#009", "#00c", "#00f"],
      x = canvas.width / 2,
      y = canvas.height / 2,
      radius = x / 2;

  function drawRec() {
    colors.forEach(function(color, i) {
      ctx.fillStyle = color;
      ctx.fillRect(i * 20, i * 20, canvas.width - i * 40, canvas.height - i * 40);

    });
    colors.unshift(colors.pop());
    setTimeout(drawRec, 100);
  }

  function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function drawTriangle() {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 102, 204, .7)";
    ctx.moveTo(x, y - 50);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x - 50, y);
    ctx.lineTo(x, y - 50);
    ctx.stroke();
    ctx.closePath();
  }

  drawCircle();
  drawTriangle();
  // drawRec();

  /*
  var img_src = canvas.toDataURL("png"),
      img = document.createElement("img");

  img.src = img_src;
  document.body.appendChild(img);
  */

  var img = document.querySelector("img");

  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);

  image_data = {
    width: 2,
    height: 2,
    data: [
      255, 0, 0, 255,
      255, 0, 0, 255,
      0, 0, 255, 255,
      0, 0, 255, 255
    ]
  };

  ctx.putImageData(image_data, 0, 0);
});
