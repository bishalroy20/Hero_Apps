import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../../assets/logo.png'

const Navbar = () => {
    const links = <>
        <Link to='/'><li className="m-2">Home</li></Link>
      <Link to='/AppList'><li className="m-2">Apps</li></Link>
      <Link to='/Installation'><li className="m-2">Installation</li></Link>
    </>


  return (
    <div className="navbar bg-white text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/'>
        <div className="flex justify-around items-center">
            <img className="w-[40px]" src={logo} alt="" />
            <a className="text-xl">Hero.Io</a>
        </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;