import React from "react";
import "../styles/CatalogPage.css";
import BoardGameCard from "../components/BoardGameCard.jsx";
import boardGamesData from "../data/boardGamesData.js";

const CatalogPage = () => {
  const handleRequestGames = () => {
    console.log("Request more games clicked");
  };

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
        {boardGamesData.map((game) => (
          <BoardGameCard
            key={game.id}
            image={game.image}
            title={game.title}
            genre={game.genre}
            players={game.players}
            playtime={game.playtime}
            complexity={game.complexity}
            rating={game.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;