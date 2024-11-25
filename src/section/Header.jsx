import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

const Header = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const links = ["Home", "Sobre", "Produtos", "Testemunhos", "Contato"];

  return (
    <nav className="flex flex-wrap bg-[#1E1E41]/20 justify-between md:items-center text-white px-10 pt-6 md:px-20 fixed top-0 left-0 w-full z-50 p-5">
      <h1 className="text-4xl font-bold text-themepurple underline italic">Electro Shop</h1>
      
      {/* Menu para dispositivos móveis */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 bg-[black] px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:start mx-d:mx-0 md:flex gap-6`}
      >
        {links.map((link, index) => (
          <a key={index} href={`#${link.toLowerCase()}`}>
            <li className="text-md transition-all duration-300 p-1 md:p-0">{link}</li>
          </a>
        ))}
      </ul>

      {/* Botão de abrir/fechar menu para dispositivos móveis */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Header;
