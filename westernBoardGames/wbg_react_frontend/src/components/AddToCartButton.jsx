import React, { useState } from "react";
import "../styles/AddToCartButton.css";

const AddToCartButton = ({ gameId, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        if (!isAdded) {
            setIsAdded(true);
            if (onAddToCart) {
                onAddToCart(gameId);
            }
        }
        else {
            setIsAdded(false);
        }
    };

    return (
        <button
            className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
            onClick={handleClick}
        >
            <span className="btn-text">{isAdded ? "Added" : "Add to Cart"}</span>
            {isAdded && (
                <span className="checkmark">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
            )}
        </button>
    );
};

export default AddToCartButton;

