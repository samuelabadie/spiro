import * as React from 'react';

import { Link } from 'gatsby';

import Logo from '../images/logo.png';

const Header = () => {
  return (
    <nav className="flex justify-between items-center sm:justify-start mb-5 px-[40px] py-[22px] rounded-xl bg-primary-blue text-white font-signika-negative text-xs sm:text-base">
      <div className="mr-8">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/product">Acheter</Link>
          </li>
          <li>
            <Link to="/rules">Règles</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="my-5 flex justify-center rounded-lg py-3 bg-black text-white gap-6">
      <Link to="/">Acheter</Link>
      <Link to="/">Règles du jeu</Link>
      <Link to="/">Mentions légales</Link>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="px-5 pt-5 bg-[#F8F8F8]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
