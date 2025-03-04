import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/cart">🛒 Cart</Link>  {/* ✅ Corrected navigation */}
    </nav>
  );
};

export default Header;


