import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const Navbar = () => {
  const[active, setActive]= useState('');
  const[toggle, setToggle]= useState(false);
  return (
    <nav
    className=
    {`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black/25 shadow-lg shadow-cyan-500/20 backdrop-blur-sm `} 
    style={{ height: "70px" }} // Set a fixed height
  >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div>
            <img src={logo} alt='logo' className="w-full h-16 "/>
          </div>


          {/* <p className="text-white text-[16px] font-bold cursor-pointer flex ">&nbsp;&nbsp;&nbsp;;
            Angel J. Haro
              <span className="sm:block hidden">&nbsp;&nbsp;|&nbsp;&nbsp; aharoJ</span>
              <span className=' tracking-tighter bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text '
              > aharoJ </span>
          </p> */}



          <p className="cursor-pointer flex ">
              <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block 
              text-transparent bg-clip-text text-[48px] font-thin tracking-widest	indent-8'
              >  aharoJ </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title 
                ? "text-white" 
                : "text-secondary"
              } 
              hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>

            </li>
          ) )}
        </ul>
        {/* this one is for mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* this part allow us to expand or close the menu in mobile */}
          <img 
            src={toggle ? close : menu } alt="menu" 
            className=
            "w-[28px] h-[28px] object-contain cursoer-pointern "
            onClick={()=> setToggle(!toggle)}
          />
          


          
          {/* <div className=
            {`${!toggle ? "hidden" : "flex" }
            p-3 absolute top-20 right-0 my-2 min-w-[140px] z-10 
            rounded-full bg-black/40 justify-center outline outline-offset-1 mx-3 outline-1 hover:outline-2 outline-pink-500/40
            shadow-lg shadow-cyan-500/50 
            ` }
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title 
                    ? "text-white" 
                    : "text-secondary"
                  } 
                  font-poppings font-medium text-[16px] `}
                  onClick={()=> {
                    setToggle(!toggle)
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ) )}
            </ul>
          </div> */}



          <nav className=
            {`${!toggle ? "hidden" : "flex" }
            p-3 absolute top-20 right-0 my-2 min-w-[140px] z-10 
            rounded-full bg-black/40 justify-center outline outline-offset-1 mx-3 outline-1 hover:outline-2 outline-pink-500/40
            shadow-lg shadow-cyan-500/50 backdrop-blur-xl
            ` }
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title 
                    ? "text-white" 
                    : "text-secondary"
                  } 
                  font-poppings font-medium text-[16px] `}
                  onClick={()=> {
                    setToggle(!toggle)
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ) )}
            </ul>
          </nav>




        </div>
      </div>
    </nav>
  )
}

export default Navbar