import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {styles} from "../styles"
import {navLinks} from "../Constant"
import {logo, menu, close} from "../assets"
import Computers from './canvas/Computers'

const Navbar = () => {

  const [active,setActive] = useState("")
  return (
    <nav className={`
    ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
        to="/"
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scroll(0,0);
        }}>
          <img src={logo} alt='My Logo' className='w-9 h-9 object-containe'/>
          <p className='text-white font-bold text-[18px] cursor-pointer'>RAJ <span className='sm:block hidden'>| JAVASCRIPT MASTERY</span></p> 
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link)=> {
              // we are not getting the links over here
              <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"

              } hover:text-white text-[18px] cursur-pointer font-medium` }
              onClick={()=> {
                setActive(link.title)
              }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            })}
          </ul>
      </div>

      <div>
        {/* a navbar for small devices will come over here */}
      </div>

      <Computers />
      <div>
        <a href="#about">
          <div>
            <motion.div
            animate={{
              y:[0,24,0]
            }}
            transition = {{
              duration:1.5,
              repeat:Infinity,
              repeatType: "loop"
            }}
            />
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Navbar