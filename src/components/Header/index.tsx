import Logo from "@/assets/images/logo.png";
import IconUser from "@/assets/images/icon-user.png";
import IconAbout from "@/assets/images/icon-about.png";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "../ShoppingCart";

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed top-5 left-0 right-0 z-10 mx-10 text-black">
        <div className="bg-white max-w-330 mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5">
          <Link to="/">
            <img src={Logo} alt="Logo SyntaxWear" className="w-32 md:w-36" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-10">
              <li>
                <Link to="/products">Masculino</Link>
              </li>
              <li>
                <Link to="/products">Feminino</Link>
              </li>
              <li>
                <a href="#">Outlet</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-4 md:gap-10">
              <li className="hidden md:block">
                <Link to="/our-stores">Nossas Lojas</Link>
              </li>
              <li className="hidden md:block">
                <a href="#">Sobre</a>
              </li>
              <li>
                <Link to="/sign-in">
                  <img src={IconUser} alt="Ícone de usuário" />
                </Link>
              </li>
              <li>
                <a href="#">
                  <img src={IconAbout} alt="Ícone de sobre" />
                </a>
              </li>
              <li>
                <ShoppingCart />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
