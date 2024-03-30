import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
          to="/"
          >
            <img src="https://th.bing.com/th/id/OIP.BdzbGy658d-czH14eO-BfgHaEK?rs=1&pid=ImgDetMain" alt=""  className='bg-contain h-[70px]'/>
          </Link>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
              <NavLink
                to="/business-solution"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 text-xl ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`}>
                Business Solution
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/press"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 text-xl ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`}>
                Press
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/Carrers"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 text-xl ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`}>
                Carrers
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/About-Us"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 text-xl ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`}>
                About Us
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/Blog"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 text-xl ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`}>
                Blog
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/Contact Us"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 text-xl ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`}>
                Contact Us
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/TrustAndSafety"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 text-xl ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0`}>
                Trust&Safety
              </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar