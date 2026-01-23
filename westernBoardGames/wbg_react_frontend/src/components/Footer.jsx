import React from 'react';
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
                    <li><a href="/features">Features</a></li>
                    <li><a href="/learn-more">Learn more</a></li>
                    <li><a href="/support">Support</a></li>
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
