import * as React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';

const TeamPage = () => {
  return (
    <Layout>
      <main>
        <h1>Équipe</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <Link to="/product">Acheter</Link>
      </main>
    </Layout>
  );
};

export default TeamPage;
