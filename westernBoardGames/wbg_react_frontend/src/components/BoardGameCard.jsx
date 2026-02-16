import React, { useEffect, useRef, useState } from "react";
import "../styles/BoardGameCard.css";
import AddToCartButton from "./AddToCartButton.jsx";

const BoardGameCard = ({ id, image, title, genre, players, playtime, complexity, quantity }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bgcard-wrapper bgcard-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="bgcard-image-container">
        <img
          src={imageUrl}
          alt={title}
          className="bgcard-img"
          onError={(e) => {
            e.target.src = '/images/placeholder-game.jpg';
          }}
        />
        {quantity !== undefined && (
          <div className="bgcard-quantity-badge">
            {quantity > 0 ? `${quantity} available` : 'Out of stock'}
          </div>
        )}
      </div>

      <div className="bgcard-content">
        <h3 className="bgcard-title">{title}</h3>

        <div className="bgcard-info-grid">
          <div className="bgcard-info-item">
            <span className="bgcard-info-label">Genre</span>
            <span className="bgcard-info-value">{genre}</span>
          </div>

          <div className="bgcard-info-item">
            <span className="bgcard-info-label">Players</span>
            <span className="bgcard-info-value">{players}</span>
          </div>

          <div className="bgcard-info-item">
            <span className="bgcard-info-label">Playtime</span>
            <span className="bgcard-info-value">{playtime}</span>
          </div>

          <div className="bgcard-info-item">
            <span className="bgcard-info-label">Complexity</span>
            <span className="bgcard-info-value">{complexity}</span>
          </div>
        </div>
      </div>

      <div className="bgcard-action">
        <AddToCartButton
          gameId={id}
          disabled={quantity === 0}
        />
      </div>

    </div>
  );
};

export default BoardGameCard;