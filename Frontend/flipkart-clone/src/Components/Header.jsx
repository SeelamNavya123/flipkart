import { useNavigate } from "react-router-dom";
import img from "../assets/flipkart logo.png";
import search from "../assets/search.png";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between bg-blue-500 p-4">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={goToHome}>
        <img src={img} alt="Flipkart Logo" className="w-16" />
        <span className="text-white text-sm font-semibold">
          Explore <span className="text-orange-400">Plus</span>
        </span>
      </div>

      {/* Search Section */}
      <div className="flex flex-1 items-center mx-6">
        <input
          type="text"
          placeholder="Search for Products, Brands and more"
          className="flex-1 p-2 rounded-l-sm border border-gray-300 focus:outline-none"
        />
        <button className="bg-white p-2 rounded-r-sm">
          <img src={search} alt="Search" className="w-5" />
        </button>
      </div>

      {/* Login Button */}
      <button
        className="bg-white text-blue-500 font-semibold py-1 px-4 rounded-sm"
        onClick={goToLogin}
      >
        Login
      </button>

      {/* Cart Section */}
      <div className="flex items-center text-white gap-2 ml-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span className="font-semibold">Cart</span>
      </div>
    </div>
  );
};

export default Header;
