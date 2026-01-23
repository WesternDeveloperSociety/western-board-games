import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../assets/logo.svg';

const NavBar = () => {
    const location = useLocation();
    
    // Determine navbar styling based on current page
    const getNavbarStyle = () => {
        switch(location.pathname) {
            case '/':
                return 'navbar-transparent';
            case '/team':
                return 'navbar-catalog';
            case '/profile':
                return 'navbar-catalog';
            case '/catalog':
                return 'navbar-catalog';
            case '/checkout':
                return 'navbar-catalog';
            default:
                return '';
        }
    };
    
    // Hide logo on home page
    const showLogo = location.pathname !== '/';
    
    return (
        <nav className={`navbar ${getNavbarStyle()}`}>
            <div className="navbar-container">
                {showLogo && (
                    <div className="navbar-logo">
                        <img src={logo} alt="logo" width="70" />
                    </div>
                )}
                <ul className="navbar-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/team">Our Team</a></li>
                    {/* <li><a href="/admin">Admin</a></li> */}
                    <li><a href="/checkout"><i className="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;