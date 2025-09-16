# 🎮 GameHub

A web-based game platform built with React ,Expressjs and Mysql where users can play fun games like Side-Scroller, Snake, and Mario. Users need to log in before accessing any game.

---

## 📝 Features

- 🧠 Multiple games in one place
- 🔐 Login authentication for access
- 🌙 Dark-themed UI with violet highlights
- 🎮 Canvas integration for Side-Scroller game
- Responsive design
- 📦Database connectivity for storing the user scores and data

---

## 🛠️ Built With

### Frontend
- React.js
- JavaScript
- Custom CSS 
- HTML5 Canvas
- React Router

### Backend
- Express js
- Mysql

---

## 📥 Installation

Clone the repo and run the following:

```bash
git clone https://github.com/yourusername/gamehub.git
cd gamehub
npm install
npm install react-router-dom
npm start
```


## Usage Frontend
```bash
 Open your terminal
2. Clone the repository:
   git clone https://github.com/yourusername/gamehub.git

3. Navigate into the project folder:
   cd Majed - copy  

4. Install dependencies:
   npm install
   npm install react-router-dom

5. Start the development server:
   npm start

6. Open your browser and go to:
   http://localhost:3000

7. Click “Play Now” on any game → Login → Enjoy playing!
 ```

 ----
## Structure of files

 gamehub/
├── public/
│   ├── background.jpg
│   ├── mario.jpg
│   └── snake.webp
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── GamesSection.jsx
│   │
│   ├── assets/
│   │   ├── background.jpg
│   │   ├── player.png
│   │   └── enemy.png
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Side-Scroller.jsx
│   │   ├── Snake.jsx
│   │   └── Mario.jsx
│   │
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── GamesSection.css
│   │   ├── Game.css
│   │   └── Login.css
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.js
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js / webpack.config.js (depending on bundler)



# Backend

## Database structure

CREATE DATABASE game_app;
CREATE DATABASE IF NOT EXISTS game_app;

USE game_app;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100),
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    score INT,
    date DATE,
    time TIME,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


## Usage Frontend
```bash
 Open your terminal
2. Clone the repository:
   git clone https://github.com/yourusername/gamehub.git

3. Navigate into the project folder:
   cd Backend  

4. Install dependencies:
   npm init -y
   npm install express cors mysql2 bcryptjs body-parser

5. Start the development server:
   node server.js

6. Open your browser and go to:
   http://localhost:5000

7. Click “Play Now” on any game → Login → Enjoy playing!
 ```


## Structure of files

 gamehub/
├── Backend/
│   ├── server.js
│   ├── .env


# Softwares needed

- Any IDE(VS code)
- nodejs
- react
- Mysql