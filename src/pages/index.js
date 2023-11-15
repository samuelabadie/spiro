import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import HeroImage from '../images/hero-image.png';

const IndexPage = () => {
  return (
    <Layout>
      <main className="">
        <img src={HeroImage} className="rounded-xl" />
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <Link to="/product">Acheter</Link>
        <Link to="/rules">Règles</Link>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
