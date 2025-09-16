import React, { useEffect, useState } from 'react';
import '../styles/Game.css';
import background from '../assets/background.jpg';
import player from '../assets/player.png';
import enemy from '../assets/enemy.png';

const SideScroller = () => {
  const [highScore, setHighScore] = useState(0);

  // Fetch high score from database
  const fetchHighScore = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    try {
      const res = await fetch(`http://localhost:5000/api/highscore/${userId}`);
      const data = await res.json();
      setHighScore(data.highScore || 0);
    } catch (err) {
      console.error('Error fetching high score:', err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('loggedIn') !== 'true') {
      window.location.href = '/login';
      return;
    }

    fetchHighScore(); // Fetch high score immediately after login

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    let enemies = [];
    let score = 0;
    let gameOver = false;
    let scoreSaved = false;
    let gameStarted = false;

    function drawStartMessage(ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = 'center';
      ctx.font = '35px Courier New';
      ctx.fillStyle = 'black';
      ctx.fillText('To start the game Press "Enter"...', canvas.width / 2, canvas.height / 2 + 25);
      ctx.fillStyle = 'white';
      ctx.fillText('To start the game Press "Enter"...', canvas.width / 2 + 2, canvas.height / 2 + 2 + 25);
    }

    drawStartMessage(ctx);

    class InputHandler {
      constructor() {
        this.keys = new Set();
        this.touchY = '';
        this.touchX = '';
        this.touchThresholdY = 30;
        this.touchThresholdX = 15;

        window.addEventListener('keydown', (e) => {
          if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            this.keys.add(e.key);
          } else if (e.key === 'Enter') {
            if (!gameStarted) {
              gameStarted = true;
              animate(0);
            } else if (gameOver) {
              restartGame();
            }
          }
        });

        window.addEventListener('keyup', (e) => {
          this.keys.delete(e.key);
        });

        window.addEventListener('touchstart', (e) => {
          this.touchY = e.changedTouches[0].pageY;
          this.touchX = e.changedTouches[0].pageX;
        });

        window.addEventListener('touchmove', (e) => {
          const swipeY = e.changedTouches[0].pageY - this.touchY;
          const swipeX = e.changedTouches[0].pageX - this.touchX;

          if (swipeX < -this.touchThresholdX) this.keys.add('swipe left');
          else if (swipeX > this.touchThresholdX) this.keys.add('swipe right');
          else if (swipeY < -this.touchThresholdY) this.keys.add('swipe up');
          else if (swipeY > this.touchThresholdY) {
            this.keys.add('swipe down');
            if (gameOver) restartGame();
          }
        });

        window.addEventListener('touchend', () => {
          this.keys.clear();
        });
      }
    }

    class Player {
      constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = document.getElementById('playerImage');
        this.width = 117;
        this.height = 122;
        this.x = 20;
        this.y = gameHeight - this.height;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 9;
        this.fps = 20;
        this.frameTimer = 0;
        this.frameInterval = 1000 / this.fps;
        this.speed = 0;
        this.vy = 0;
        this.weight = 1;
      }

      restart() {
        this.x = 20;
        this.y = this.gameHeight - this.height;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 8;
      }

      draw(context) {
        context.drawImage(
          this.image,
          this.frameX * this.width,
          this.frameY * this.height,
          this.width,
          this.height,
          this.x,
          this.y,
          this.width,
          this.height
        );
      }

      update(input, deltaTime, enemies) {
        enemies.forEach((enemy) => {
          const dx = enemy.x + enemy.width / 2 - (this.x + this.width / 2);
          const dy = enemy.y + enemy.height / 2 - (this.y + this.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < enemy.width / 2 + this.width / 2) gameOver = true;
        });

        if (this.frameTimer > this.frameInterval) {
          this.frameX = (this.frameX + 1) % this.maxFrame;
          this.frameTimer = 0;
        } else this.frameTimer += deltaTime;

        if (input.keys.has('ArrowRight') || input.keys.has('swipe right')) this.speed = 5;
        else if (input.keys.has('ArrowLeft') || input.keys.has('swipe left')) this.speed = -5;
        else if ((input.keys.has('ArrowUp') || input.keys.has('swipe up')) && this.onGround()) this.vy -= 32;
        else this.speed = 0;

        this.x += this.speed;
        this.x = Math.max(0, Math.min(this.x, this.gameWidth - this.width));
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;

        if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
      }

      onGround() {
        return this.y >= this.gameHeight - this.height;
      }
    }

    class Background {
      constructor() {
        this.image = document.getElementById('backgroundImage');
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 720;
        this.speed = 1;
      }

      draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width - this.speed, this.y, this.width, this.height);
      }

      update() {
        this.x -= this.speed;
        if (this.x < -this.width) this.x = 0;
      }

      restart() {
        this.x = 0;
      }
    }

    class Enemy {
      constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = document.getElementById('enemyImage');
        this.width = 160;
        this.height = 119;
        this.x = this.gameWidth;
        this.y = this.gameHeight - this.height;
        this.frameX = 0;
        this.maxFrameX = 5;
        this.fps = 20;
        this.frameTimer = 0;
        this.frameInterval = 1000 / this.fps;
        this.speed = 8;
        this.toBeDeleted = false;
      }

      draw(context) {
        context.drawImage(
          this.image,
          this.frameX * this.width,
          0,
          this.width,
          this.height,
          this.x,
          this.y,
          this.width,
          this.height
        );
      }

      update(deltaTime) {
        if (this.frameTimer > this.frameInterval) {
          this.frameX = (this.frameX + 1) % this.maxFrameX;
          this.frameTimer = 0;
        } else this.frameTimer += deltaTime;

        this.x -= this.speed;
        if (this.x < -this.width) {
          this.toBeDeleted = true;
          if (gameStarted && !gameOver) score++;
        }
      }
    }

    function handleEnemies(deltaTime) {
      if (enemyTimer > enemyInterval + randomEnemyInterval) {
        if (gameStarted && !gameOver) {
          enemies.push(new Enemy(canvas.width, canvas.height));
        }
        enemyTimer = 0;
      } else enemyTimer += deltaTime;

      enemies.forEach((enemy) => {
        if (gameStarted && !gameOver) {
          enemy.draw(ctx);
          enemy.update(deltaTime);
        }
      });

      enemies = enemies.filter((enemy) => !enemy.toBeDeleted);
    }

    function displayStatusText(context) {
      context.textAlign = 'left';
      context.fillStyle = 'white';
      context.font = '40px Courier New';
      context.fillText(`Score ${score}`, 20, 40);

      if (gameOver) {
        context.textAlign = 'center';
        context.fillStyle = 'black';
        context.font = '50px Courier New';
        context.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2 - 25);
        context.fillStyle = 'white';
        context.fillText('GAME OVER!', canvas.width / 2 + 2, canvas.height / 2 + 2 - 25);
        context.fillStyle = 'black';
        context.font = '40px Courier New';
        context.fillText('Press enter or swipe down...', canvas.width / 2, canvas.height / 2 + 25);
        context.fillStyle = 'white';
        context.fillText('Press enter or swipe down...', canvas.width / 2 + 2, canvas.height / 2 + 2 + 25);
      }
    }

    function restartGame() {
      player.restart();
      background.restart();
      enemies = [];
      score = 0;
      gameOver = false;
      scoreSaved = false;
      animate(0);
    }

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background();
    let lastTime = 0;
    let enemyTimer = 0;
    const enemyInterval = 1000;
    const randomEnemyInterval = Math.random() * 1000 + 500;

    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      background.draw(ctx);
      background.update();
      player.draw(ctx);
      player.update(input, deltaTime, enemies);
      handleEnemies(deltaTime);
      displayStatusText(ctx);

     if (gameOver && !scoreSaved) {
  scoreSaved = true;

  const userId = localStorage.getItem('userId');
  if (userId) {
    fetch('http://localhost:5000/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, score })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Score saved:', data);
        fetchHighScore(); // Re-fetch high score after saving
      })
      .catch(err => console.error('Error saving score:', err));
  } else {
    console.warn('No userId found in localStorage');
  }
}


      if (!gameOver) requestAnimationFrame(animate);
    }
  }, []);

  return (
    <div>
      <canvas id="canvas1"></canvas>
      <div className="sidebar-info">
  <h3>👤 {localStorage.getItem('username')}</h3>
  <p>🏆 High Score: {highScore}</p>
  <button onClick={() => window.location.href = '/scoreboard'}>
    View Scoreboard
  </button>
</div>

      <img src={background} id="backgroundImage" alt="bg" style={{ display: 'none' }} />
      <img src={player} id="playerImage" alt="player" style={{ display: 'none' }} />
      <img src={enemy} id="enemyImage" alt="enemy" style={{ display: 'none' }} />
    </div>
  );
};

export default SideScroller;
