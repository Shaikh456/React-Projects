import React from 'react';
import '../styles/GamesSection.css'; // Import styles specific to the Games section
import { useNavigate } from 'react-router-dom'; // Hook for navigation between routes

const GamesSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Function to handle "Play Now" button click for Side-Scroller (protected route)
  const handlePlayNow = () => {
    navigate('/login'); // Redirect user to login before accessing the game
  };

  return (
    <section className="games-section"> {/* Section wrapper for all games */}

      {/* Welcome Header */}
      <header className="header">
        <h1>Welcome to <span>GameHub</span></h1>
        <p>Choose from our collection of classic browser games and start playing instantly.</p>
      </header>

      {/* Game Cards Section */}
      <div className="cards">

        {/* Side-Scroller Card */}
        <div className="game-card snake">
          <img src="./background.jpg" alt="Snake Game" /> {/* Image preview */}
          <div className="card-content">
            <h3>Side-Scroller</h3>
            <p>Dodge enemies, jump and run across the landscape in this vanilla JS game!</p>
            <button onClick={handlePlayNow}>Play Now</button> {/* Triggers login redirect */}
          </div>
        </div>

        {/* Snake Game Card */}
        <div className="game-card snake">
          <img src="./snake.webp" alt="Snake Game" /> {/* Image preview */}
          <div className="card-content">
            <h3>Snake-game</h3>
            <p>A classic Snake game where you eat food to grow and avoid hitting yourself.</p>
            <a href="/snake"><button>Play Now</button></a> {/* Direct link to snake game */}
          </div>
        </div>

        {/* Super Mario Card */}
        <div className="game-card snake">
          <img src="./mario.jpg" alt="Snake Game" /> {/* Image preview */}
          <div className="card-content">
            <h3>Super Mario</h3>
            <p>Classic Mario game with running, jumping, and enemy dodging.</p>
            <a href="/mario"><button>Play Now</button></a> {/* Direct link to Mario game */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GamesSection; // Exporting the component for use in App
