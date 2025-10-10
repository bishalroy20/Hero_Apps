import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import Loading from '../Loading/Loading';

const Navbar = () => {

  
    const links = (
        <>
          <NavLink
            to="/"
            className={({ isActive }) => `m-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-black'}`}
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/AppList"
            className={({ isActive }) => `m-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-black'}`}
          >
            <li>Apps</li>
          </NavLink>

          <NavLink
            to="/Installation"
            className={({ isActive }) => `m-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-black'}`}
          >
            <li>Installation</li>
          </NavLink>
        </>
      );



  return (
    <div className="navbar bg-[#ffffff] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-primary mr-4 lg:hidden">
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
        <div className="flex justify-around items-center text-[#632ee3] font-semibold">
            <img className="w-[40px]" src={logo} alt="" />
            <h1 className="text-xl">Hero.Io</h1>
        </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-black">
        {links}
        </ul>
      </div>
      <div className="navbar-end " >
        <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white" href="https://github.com/bishalroy20" target="_blank" >
          <FaGithub />Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;