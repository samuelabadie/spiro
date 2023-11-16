import * as React from 'react';

import { Link } from 'gatsby';

import Logo from '../images/logo.svg';

const Header = () => {
  return (
    <nav className="sticky top-5 max-w-[1300px] mx-auto flex justify-between items-center mb-5 px-[40px] py-[22px] rounded-xl bg-primary-blue text-white font-signika-negative text-xs sm:text-base">
      <div className="mr-8">
        <Link to="/">
          <img className="text-white" src={Logo} alt="Logo" />
        </Link>
      </div>
      {/* Desktop Menu */}
      <div>
        <ul className="hidden md:flex md:gap-5">
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
      {/* Mobile Menu */}
      <div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul id="mobileList" className="flex flex-col md:hidden">
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
    <footer className="items-center flex justify-between max-w-[1300px] mx-auto font-signika-negative m-5 rounded-lg md:px-[40px] md:py-[80px] px-[20px] py-[40px] bg-primary-blue text-white gap-6">
      <div class="flex flex-col">
        <Link to="/product">Acheter</Link>
        <Link to="/rules">Règles du jeu</Link>
        <Link to="/team">Équipe</Link>
      </div>

      <div className="w-2/6">
        <Link to="/">
          <img className="text-white w-full" src={Logo} alt="Logo" />
        </Link>
      </div>
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
