import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { logout } from "../actions/user";
import logo from "../assets/Logo.jpeg";

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
  return (
    <div>
      <nav className="p-3 border-gray-200  bg-indigo-500  hover:bg-black">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"} className="flex items-center rounde">
            <img
              src={logo}
              className="h-6 mr-3 sm:h-10 rounded-full"
              alt="logo"
            />
            <span className="self-center text-xl font-bold whitespace-nowrap text-white border-y-4">
              Rhythm
            </span>
          </Link>
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
                <Link
                  to={'/dashboard'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  to={'/about'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">About</span>
                </Link>
              </li>

              <li>
                <Link
                  to={'/search'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
                </Link>
              </li>

              <li>
                <Link
                  to={'/library'}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={()=> setMenu(false)}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Library</span>
                </Link>
              </li>

              {
                isAuthenticated?(
                  <li>
                    <Link
                      to={'/login'}
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={logoutHandler}
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                    </Link>
                  </li>
                ):
                (
                  <>
                    <li>
                      <Link
                        to={'/login'}
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={()=> setMenu(false)}
                      >
                        <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/signup'}
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={()=> setMenu(false)}
                      >
                        <span className="flex-1 ml-3 whitespace-nowrap">Signup</span>
                      </Link>
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
