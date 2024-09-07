import React, { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function TopNavbar({ mode, handleChangeMode }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const theme = {
    light: {
      bg: "bg-white",
      text: "text-[#4F4F4F]",
      logo: "/assets/lion_dark.svg",
      active: "active_light",
    },
    dark: {
      bg: "bg-[#0B0B0B]",
      text: "text-[#7B7B7B]",
      logo: "/assets/lion_light.svg",
      active: "active_dark",
    },
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className={`p-1 font-normal ${theme[mode].active}`}>
        <a href="#" className="flex items-center">Home</a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center">Our Courses</a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center">About Us</a>
      </li>
    </ul>
  );

  return (
    <nav className={`fixed top-0 z-40 w-full font-inherit border-none shadow-none ${theme[mode].bg} ${theme[mode].text} transition-all ease-in-out px-4 py-2 lg:px-8`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={theme[mode].logo} alt="Logo" />
          <div className="hidden lg:block">{navList}</div>
        </div>
        <div className="flex items-center gap-4">
          <button className={`hidden lg:block bg-${mode === "light" ? "black" : "white"} text-${mode === "light" ? "white" : "black"} rounded-full px-6 py-1.5 font-semibold`}>
            Login
          </button>
          <button onClick={handleChangeMode} className="hidden lg:block border-none outline-none">
            {mode === "light" ? <FiMoon /> : <FiSun className="text-white" />}
          </button>
          <button onClick={() => setOpenNav(!openNav)} className="lg:hidden">
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {openNav && (
        <div className="lg:hidden">
          {navList}
          <button className={`w-full bg-${mode === "light" ? "black" : "white"} text-${mode === "light" ? "white" : "black"} rounded-full px-4 py-2 font-bold`}>
            Login
          </button>
          <button onClick={handleChangeMode} className="block lg:hidden border-none outline-none">
            {mode === "light" ? <FiMoon /> : <FiSun  className="text-white"/>}
          </button>
        </div>
      )}
    </nav>
  );
}
