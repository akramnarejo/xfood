import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
const Navbar = () => {
  const state = useStore(state => state);
  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-8">
        <p className="text-2xl font-bold">XFOOD🍔</p>

        <div className="w-full md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row p-0 space-x-4 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li className="text-gray-700 hover:cursor-pointer hover:text-gray-950"><Link to='/'>Home</Link></li>
            <li className="text-gray-700 hover:cursor-pointer hover:text-gray-950"><Link to='/menu'>Menu</Link></li>
            <li className="text-gray-700 hover:cursor-pointer hover:text-gray-950"><Link to='/favourites'>Favourites {state.favourites.length > 0 ? <span className="p-1 bg-gray-900 text-white rounded-full text-xs">{state.favourites?.length}</span> : null}</Link></li>
            <li className="text-gray-700 hover:cursor-pointer hover:text-gray-950"><Link to='/random'>Random Meal</Link></li>
            <li className="text-gray-700 hover:cursor-pointer hover:text-gray-950"><Link to='/about'>About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
