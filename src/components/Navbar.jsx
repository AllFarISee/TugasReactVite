const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MyProfile</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="">Profile</a>
        </li>

        <li>
          <a href="">Fav Movies</a>
        </li>

        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;