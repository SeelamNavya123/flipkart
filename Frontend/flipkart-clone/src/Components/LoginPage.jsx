import { useState } from 'react';
import img from "../assets/loginlogo.png";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Bottom from "./Bottom";
import Footer from "./Footer";

const LoginPage = () => {
  
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const goToSignup = () => {
    navigate("/register");
  };

  return (
    <>
      <Header/>
      <Bottom/>
      <div className="flex p-5 gap-3 justify-center">
        <div className="bg-blue-500 p-5 w-100">
          <p className="text-4xl pt-5 font-semibold">Login</p>
          <p className="text-black-300 pt-3">Get access to your Orders, <br/> Wishlist and Recommendations.</p>
          <img src={img} alt="Login" className="pt-50 pl-17 pb-2"/>
        </div>
        <div className="bg-gray-200 p-3">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input type="text" placeholder="Enter your email" 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-100 border-b-2 m-2 p-1 focus-visible:outline-none focus:ring-0 cursor-pointer"
            />
            <input type="password" placeholder="Enter your password" 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-100 border-b-2 m-2 p-1 focus-visible:outline-none focus:ring-0 cursor-pointer"
            />
            <button type="submit" className="bg-orange-400 p-2 w-75 font-semibold mt-2">Login</button>
            <button type="button" className="bg-white p-2 w-75 font-semibold mt-2 border-b-2" onClick={goToSignup}>New User ? Register</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default LoginPage;