import * as React from 'react';

import { Link } from 'gatsby';

import Logo from '../images/logo.svg';

const Header = () => {
  return (
    <nav className="max-w-[1300px] mx-auto flex justify-between items-center sm:justify-start mb-5 px-[40px] py-[22px] rounded-xl bg-primary-blue text-white font-signika-negative text-xs sm:text-base">
      <div className="mr-8">
        <Link to="/">
          <img className="text-white" src={Logo} alt="Logo" />
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
          <li>
            <Link to="/team">Équipe</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto font-signika-negative mt-5 flex justify-center rounded-t-lg py-3 bg-black text-white gap-6">
      <Link to="/">Acheter</Link>
      <Link to="/rules">Règles</Link>
      <Link to="/rules">Équipe</Link>
      <Link to="/">Mentions légales</Link>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <html lang="fr">
      <div className="max-w-[1300px] mx-auto px-5 pt-5 bg-light-white">
        <Header />
        <body>{children}</body>
        <Footer />
      </div>
    </html>
  );
};

export default Layout;
