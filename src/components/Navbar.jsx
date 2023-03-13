import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className=
      {`${styles.paddingX}
        w-full flex items-center py-0 fixed top-0 z-20

        ${scrolled ? "bg-black/25 shadow-lg shadow-cyan-500/20 backdrop-blur-sm" : "bg-black/25 shadow-lg shadow-red-500/90 backdrop-blur-sm "}`
      }
    >


        {/* this right here is bar entity with about, work, contact + mobile hamburger*/}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* LOGO Stuff  */}
          <img src={logo} alt='logo' 
          className='object-contain
          md:w-20 md:h-20 
          xs:w-11 xs:h-20 
          ' />

          {/* this is the aharoJ | angel j haro */}
          <p 
          className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex text-transparent bg-clip-text cursor-pointer xs:ml-10 text-[48px] font-thin tracking-widest md:indent-6' 
          > aharoJ &nbsp;
            <span className='xl:block hidden'>&nbsp;|&nbsp; Angel J. Haro</span>
          </p>
        </Link>


        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>


        {/* hamburger icon but issues with rezing or idk if its the flex wrap */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className=
            ' object-contain w-full h-[30px] '
            onClick={() => setToggle(!toggle)}
          />

                                {/* container for hamburger */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-full
              justify-center border-2 border-rose-500/30
              shadow-lg shadow-red-500/60 backdrop-blur-sm
            `}
          >

                    {/* here is the pop up menu the string objects */}
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4 '>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
      </div>


    </nav>
  );
};

export default Navbar;
