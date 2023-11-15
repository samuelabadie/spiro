import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import HeroImage from '../images/hero-image.png';

const IndexPage = () => {
  return (
    <Layout>
      <main className="max-w-[1300px] mx-auto flex-col justify-between md:flex md:flex-row">
        <div className="lg:min-w-[500px] mr-5">
          <img src={HeroImage} className="w-full rounded-xl" />
        </div>
        <div className="flex flex-col md:justify-center md:px-12 md:gap-5 w-auto max-w-[600px]">
          <h1>SPIRO, le jeu de la New Gen</h1>
          <h3>
            Apprenez à déjouer les plus grands crimes de la ville de Soria Ville
            en étant le meilleur inspecteur de la contrée !
          </h3>
          <div className="flex gap-3">
            <button className="inline-block py-1 px-5 rounded-lg uppercase font-semibold bg-secondary-yellow">
              <Link to="/product">Acheter</Link>
            </button>
            <button className="inline-block py-1 px-5 rounded-lg uppercase font-semibold bg-primary-blue text-white">
              <Link to="/rules">Règles</Link>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
