import IconMenu from "@/assets/images/icone-menu.png";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import type { NavLink } from "../Header";
import { IoMdClose } from "react-icons/io";

interface MenuMobileProps {
  navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <img src={IconMenu} alt="Ícone menu" />
      </button>

      <div
        className={`${menuIsOpen ? "bg-black/60 visible" : "transparent invisible"} fixed top-0 bottom-0 left-0 right-0 z-30`}
        onClick={() => setMenuIsOpen(false)}
      >
        <div
          className={`${menuIsOpen ? "translate-x-0" : "-translate-x-full"} absolute top-0 bottom-0 pt-6 transition-all duration-500 ease-in-out w-full bg-white`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="bg-black py-5 px-5 text-white">
            <nav className="flex justify-between">
              <Link to="/sign-in" className="flex items-center gap-3">
                <FaRegUserCircle className="h-6 w6" />
                <p>Olá! Faça seu login</p>
              </Link>
              <IoMdClose
                className="cursor-pointer text-2xl"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              />
            </nav>
          </header>

          <ul className="p-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  preloadDelay={-1}
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/our-stores" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                Nossas Lojas
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
