import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Western Board Games Logo" />
                </div>

                <ul className="footer-links">
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/learn-more">Learn more</Link></li>
                    <li><Link to="/support">Support</Link></li>
                </ul>

                <div className="footer-social">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                        <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
