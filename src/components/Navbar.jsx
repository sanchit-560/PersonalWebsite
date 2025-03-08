import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons
import { Link } from "react-router-dom";
import "../index.css"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    if(isOpen){
      document.body.classList.add("menu-open")
    }
    else{
      document.body.classList.remove("menu-open")
    }
  },[isOpen])
  const scrollToSection = (id)=>{
    const section = document.getElementById(id)
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }

  const navItems = [
    { id: "home", text: "Home" },
    { id: "about", text: "About"},
    { id: "projects", text: "Projects"},
    { id: "contact", text: "Contact"},
  ];
  return (
    <div className="flex justify-between items-center h-24 max-w-[1400px] mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a]">Sk.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            onClick={()=>scrollToSection(item.id)}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
              {item.text}
          </li>
        ))}
      </ul>
    <div className="sm:hidden cursor-pointer duration-300 " onClick={()=>(setIsOpen(!isOpen))}>
      {isOpen ? <X size={30}/> : <Menu size={30}/>}
      {/* "Mobile Menu" */}
      {isOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full bg-black h-screen flex flex-col items-center justify-center transition-transform duration-200">
          {/* Close Button */}
          <button className="absolute text-white right-5 top-5" onClick={() => setIsOpen(false)}>
            <X size={30} />
          </button>
          {/* Mobile Nav Links */}
          <ul className="flex flex-col items-center">
            {navItems.map((item) => (
              <li
                className="py-4 text-xl cursor-pointer hover:text-[#00df9a]"
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }
                }>
              {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
      </div>
   )
};
