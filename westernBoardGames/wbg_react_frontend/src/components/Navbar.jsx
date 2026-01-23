import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Western Board Games</h2>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#catalog">Catalog</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#admin">Admin</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;