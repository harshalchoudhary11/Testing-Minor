import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { NavLink,useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { logout } from "../actions/user";
import logo from "../assets/Logo.jpeg";
import {BsPerson, BsSearch} from 'react-icons/bs'
import {GoPerson} from 'react-icons/go'
import {MdLibraryMusic,MdOutlineLogout,MdDashboardCustomize} from 'react-icons/md'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const {isAuthenticated}=useSelector((state)=> state.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const logoutHandler=()=> {
    dispatch(logout())
    setMenu(false);
    navigate('/login')
  }
  const navNavLinkStyle = ({isActive}) => {
    return{
    textDecoration: isActive ? "none" :"",
    backgroundColor: isActive ? "Green" : "white",
    // fontSize :"30px"
   };
  };
  return (
    <div>
      <nav className="p-3 border-gray-200  bg-black">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <NavLink  to={"/"} className="flex items-center rounde">
            <img
              src={logo}
              className="h-6 mr-3 sm:h-10 rounded-full"
              alt="logo"
            />
            <span className="self-center text-xl font-bold whitespace-nowrap text-white">
              Rhythm
            </span>
          </NavLink>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white-500 rounded-lg bg-indigo-500 hover:bg-yellow-400"
          >
            {menu ? (
              <RxCross1 className="w-6 h-6" onClick={() => setMenu(false)} />
            ) : (
              <GiHamburgerMenu
                className="w-6 h-6"
                onClick={() => setMenu(true)}
              />
            )}
          </button>
        </div>
      </nav>

      {menu && (
        <aside className="absolute w-64" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2">
              <li>
                <NavLink style={navNavLinkStyle}
                  to={'/dashboard'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                  <MdDashboardCustomize/>
                </NavLink>
              </li>

              <li>
                <NavLink style={navNavLinkStyle}
                  to={'/about'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                  <BsPerson/>
                </NavLink>
              </li>

              <li>
                <NavLink style={navNavLinkStyle}
                  to={'/search'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
                  <BsSearch/>
                </NavLink>
              </li>

              <li>
                <NavLink style={navNavLinkStyle}
                  to={'/library'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Library</span>
                  <MdLibraryMusic/>
                </NavLink>
              </li>

              {
                isAuthenticated?(
                  <li>
                    <NavLink style={navNavLinkStyle}
                      to={'/login'}
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={logoutHandler}
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                      <MdOutlineLogout/>
                    </NavLink>
                  </li>
                ):
                (
                  <>
                    <li>
                      <NavLink style={navNavLinkStyle}
                        to={'/login'}
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={()=> setMenu(false)}
                      >
                        <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={navNavLinkStyle}
                        to={'/signup'}
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={()=> setMenu(false)}
                      >
                        <span className="flex-1 ml-3 whitespace-nowrap">Signup</span>
                      </NavLink>
                    </li>
                </>
                )
              }
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
