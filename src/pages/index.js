import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Favicon from '../images/favicon.svg';
import Arrowicon from '../images/icons/arrow.svg';
import HeroImage from '../images/hero-image.png';

const IndexPage = () => {
  return (
    <Layout>
      <main className="max-w-[1300px] mx-auto flex-col justify-between md:flex md:flex-row">
        <div className="w-full lg:min-w-[500px] mr-5">
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
      <Link to="#story" className=''>
        <div class="my-20 w-full flex justify-center items-center gap-x-3 leading-none">découvre l'histoire
          <img src={Arrowicon} className="text-black animate-bounce" />
        </div>
      </Link>
      <section id="story" class="max-w-[1300px] py-10">
        <h1 class="mb-10">l'histoire</h1>
        <div class="w-full flex justify-start">
          <div class="bg-light-green md:p-[40px] p-[20px] rounded-lg md:max-w-[800px]">
            La Terre a vraiment besoin d'un coup de main, "Spiro" te propose de devenir un détective dans Soria ville ! En tant que super détective, c'est à toi de retrouver les responsables d’actes allant à l’encontre de la protection de la planète.
          </div>
        </div>
        <div class="w-full flex justify-end md:mt-10 mt-4">
        <div class="bg-light-green md:p-[40px] p-[20px] rounded-lg md:max-w-[800px]">
          Tu pourras te balader dans le parc, le port, le quartier pavillonnaire, la route, la zone industrielle ainsi que le champ pour résoudre les mystères qui planent sur la ville. Chaque fois qu'il se passe quelque chose d’inhabituel, c’est à toi de découvrir quel crime a été fait, dans quel lieu, et même quel objet est impliqué dans cette histoire.
Le défi ? Attraper les coupables ! Alors, es-tu prêt à devenir un détective de Soria ville ? Allez, l'aventure t'attend !
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Spiro | Accueil</title>
    <link rel="icon" type="image/png" href={Favicon} />
  </>
);

export default IndexPage;
