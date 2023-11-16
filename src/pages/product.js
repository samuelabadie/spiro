import * as React from 'react';

import { Link } from 'gatsby';

import Favicon from '../images/favicon.svg';
import Layout from '../components/layout';
import ProductImage from '../images/product-image.jpg';

const ProductPage = () => {
  return (
    <Layout>
      <section class="md:flex-row flex flex-col-reverse justify-between gap-x-10 gap-y-10 items-center ">
        <div class="md:w-2/3 w-mr-5">
          <img src={ProductImage} className="w-full rounded-xl" />
        </div>
        <div class="flex flex-col gap-y-6 md:w-[600px] w-auto">
          <h1>spiro</h1>
          <text class="uppercase">mmi gaming Référence- Ref 06024479</text>
          <div>
            <h2 class="text-[50px] font-signika-negative font-black leading-none">
              14,99€
            </h2>
            <div class="mb-8">ou 3x 9,99 avec paypal</div>
            <button className="inline-block py-1 px-5 rounded-lg uppercase font-semibold bg-secondary-yellow">
              <Link to="/product">Acheter</Link>
            </button>
          </div>
          <div class="px-2 py-1 bg-red-500 rounded-full justify-center items-center gap-2.5 w-fit inline-block">
            <div class="text-center text-sm text-white">
              40% de réduction pout l’achat d’un deuxième spiro
            </div>
          </div>
          <p class="md:max-w-[500px]">
            Jeu de société de fou qui viendra éduquer vos enfants et vous
            permettra de prendre un maximum de plaisir avec eux. Découvrez qui à
            été le coupable à travers des parties aussi amusantes qu’originales
          </p>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Spiro | Acheter</title>
    <link rel="icon" type="image/png" href={Favicon} />
  </>
);

export default ProductPage;
