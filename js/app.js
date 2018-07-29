// Enemies our player must avoid

// Variables applied to each of our instances go here,
// we've provided one for you to get started

// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images

//added x and y coordinates
const Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  // horizontal speed of the bugs
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
Enemy.prototype.update = function (dt) {
  //check for horizontal movement and speed of enemy, multiplied by deltatime
  this.x += this.speed * dt;
  //horizontal move of enemies should be equal with canvas to give vanish effect
    if (this.x > 505) {
  //initial offset of the bugs
    this.x = -90;
// Shuffle speed declaration from http://stackoverflow.com/a/2450976
    this.speed = 180 + Math.floor(Math.random() * 340);
  }
//useful information from chapter 7 from https://sites.santarosa.k12.fl.us/nhs/teacher_pages/arringtonpages/docs/FroggerTutorial.pdf
// also useful information from https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
if (player.x < this.x + 90 &&
      player.x + 90 > this.x &&
      player.y < this.y + 60 &&
      60 + player.y > this.y) {
//if conditions are met, player is sent to bottom-middle page
          player.x = 202;
          player.y = 404;
    }
  };
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y) {
//added x and y coordinates
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(dt) {
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function (keyPress) {
// useful information about keyboard declarations https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
//keyboard does not allow player to offset canvas
  if (keyPress == 'left' && this.x > 0) {
    this.x -= 101;
    }
  if (keyPress == 'right' && this.x < 404) {
    this.x += 101;
    }
  if(keyPress == 'up' && this.y > 0) {
    this.y -= 88;
    }
  if(keyPress == 'down' && this.y < 404) {
        this.y += 88;
    }
//if player reaches top part of the canvas, a small delay is applied and user is sent back to beggining
  if(this.y < 0) {
    setTimeout(function () {
      player.x = 202;
      player.y = 404;
    }, 450);
  }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//array of enemies
const allEnemies = [];
//initial position on Y axe of the enemies
const enemyPlace = [60, 145, 225, 60];
//method to add new bugs to the array
enemyPlace.forEach(function (rowsX) {
//adds all bugs at -90px offset of screen on start and runs first creation at speed of 550
  bugs = new Enemy(-90, rowsX, 550);
//push new bugs to allEnemies array
  allEnemies.push(bugs);
});
//initial position on Y axe of the player
const player = new Player (202, 404);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
