function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
  }
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.frameNo = 0;
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
  function startGame() {
    myGameArea.start();
  }
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
  }
  var myGamePiece;

function startGame() {
  myGameArea.start();
  myGamePiece = new component(30, 30, "red", 10, 120);
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameArea.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
<><script>
  function component(width, height, color, x, y) {this.width = width};
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {ctx = myGameArea.context};
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  &rbrace;
  this.newPos = function() {this.x += this.speedX};
  this.y += this.speedY;
  &rbrace;
  &rbrace;

  function updateGameArea() {myGameArea.clear()};
  myGamePiece.newPos();
  myGamePiece.update();
  &rbrace;

  function moveup() {myGamePiece.speedY -= 1};
  &rbrace;

  function movedown() {myGamePiece.speedY += 1};
  &rbrace;

  function moveleft() {myGamePiece.speedX -= 1};
  &rbrace;

  function moveright() {myGamePiece.speedX += 1};
  &rbrace;
</script><button onclick="moveup()">UP</button><button onclick="movedown()">DOWN</button><button onclick="moveleft()">LEFT</button><button onclick="moveright()">RIGHT</button></>
var myGamePiece;
var myObstacle;

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  myObstacle = new component(10, 200, "green", 300, 120);
  myGameArea.start();
}

function updateGameArea() {
  myGameArea.clear();
  myObstacle.update();
  myGamePiece.newPos();
  myGamePiece.update();
}
var myGamePiece;
var myObstacles = [];
var myScore;

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 160);
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGameArea.start();
}
function startGame() {
    myGamePiece = new component(30, 30, "smiley.gif", 10, 120, "image");
    myGameArea.start();
  }
  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }
  function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
      this.gravitySpeed += this.gravity;
      this.x += this.speedX;
      this.y += this.speedY + this.gravitySpeed;
    }
  }
  function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 0.6;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
      this.gravitySpeed += this.gravity;
      this.x += this.speedX;
      this.y += this.speedY + this.gravitySpeed;
      this.hitBottom();
    }
    this.hitBottom = function() {
      var rockbottom = this.gamearea.canvas.height - this.height;
      if (this.y > rockbottom) {
        this.y = rockbottom;
        this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      }
    }
  }
  function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = color;
      ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
      ctx.restore();
    }
  }
  
  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.angle += 1 * Math.PI / 180;
    myGamePiece.update();
  }
  function component(width, height, color, x, y) {
    this.gamearea = gamearea;
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.speed = 1;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = color;
      ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
      ctx.restore();
    }
    this.newPos = function() {
      this.x += this.speed * Math.sin(this.angle);
      this.y -= this.speed * Math.cos(this.angle);
    }
  }
