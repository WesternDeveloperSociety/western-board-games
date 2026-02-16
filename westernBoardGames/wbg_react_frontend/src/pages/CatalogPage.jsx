import React, { useEffect } from "react";
import "../styles/CatalogPage.css";
import BoardGameCard from "../components/BoardGameCard.jsx";
import boardGamesData from "../data/boardGamesData.js";
import { useState } from "react";

const CatalogPage = () => {
  const [games, setGames] = useState(boardGamesData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/games/')

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setGames(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);


  const handleRequestGames = () => {
    console.log("Request more games clicked");
  };

  if (loading) {
    return (
      <div className="bgcatalog-main">
        <div className="bgcatalog-loading">Loading games...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bgcatalog-main">
        <div className="bgcatalog-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="bgcatalog-main">
      <div className="bgcatalog-header">
        <div className="bgcatalog-rules">
          <h2 className="bgcatalog-rules-title">Rental Guidelines</h2>
          <div className="bgcatalog-rules-grid">
            <div className="bgcatalog-rule-item">
              <span className="bgcatalog-rule-icon">📅</span>
              <div className="bgcatalog-rule-content">
                <h3>Rental Period</h3>
                <p>Games can be rented for up to 7 days with option to extend</p>
              </div>
            </div>

            <div className="bgcatalog-rule-item">
              <span className="bgcatalog-rule-icon">💰</span>
              <div className="bgcatalog-rule-content">
                <h3>Pricing</h3>
                <p>FREE! as long as you're a member</p>
              </div>
            </div>

            <div className="bgcatalog-rule-item">
              <span className="bgcatalog-rule-icon">✅</span>
              <div className="bgcatalog-rule-content">
                <h3>Game Condition</h3>
                <p>Please return games in the same condition you received them</p>
              </div>
            </div>

            <div className="bgcatalog-rule-item">
              <span className="bgcatalog-rule-icon">📦</span>
              <div className="bgcatalog-rule-content">
                <h3>Missing Pieces</h3>
                <p>Check inventory before return - fees apply for missing components</p>
              </div>
            </div>
          </div>
        </div>

        <button className="bgcatalog-request-btn" onClick={handleRequestGames}>
          Request More Games
        </button>
      </div>

      <div className="bgcatalog-grid">
        {games.length === 0 ? (
          <p>No games available at the moment.</p>
        ) : (
          games.map((game) => (
            <BoardGameCard
              key={game.id}
              id={game.id}
              image={game.image}
              title={game.title}
              genre={game.category?.name || 'Unknown'}
              players={`${game.min_players}-${game.max_players}`}
              playtime={`${game.play_time} min`}
              complexity={game.difficulty}
              rating={game.is_available ? 'Available' : 'Unavailable'}
              quantity={game.quantity_available}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CatalogPage;