import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../assets/logo.svg';

const NavBar = () => {
    const location = useLocation();

    // Determine navbar styling based on current page
    const getNavbarStyle = () => {
        switch (location.pathname) {
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
            case '/admin':
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                    {/* <li><Link to="/admin">Admin</Link></li> */}
                    <li><Link to="/checkout"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;