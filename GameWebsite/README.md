# 🎮 GameHub

A web-based game platform built with React where users can play fun games like Side-Scroller, Snake, and Mario. Users need to log in before accessing any game.

---

## 📝 Features

- 🧠 Multiple games in one place
- 🔐 Login authentication for access
- 🌙 Dark-themed UI with violet highlights
- 🎮 Canvas integration for Side-Scroller game
- Responsive design

---

## 🛠️ Built With

- React.js
- JavaScript
- Custom CSS 
- HTML5 Canvas
- React Router

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


## Usage
```bash
 Open your terminal
2. Clone the repository:
   git clone https://github.com/yourusername/gamehub.git

3. Navigate into the project folder:
   cd gamehub

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
