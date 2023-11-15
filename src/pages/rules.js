// Step 1: Import React
import * as React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';

// Step 2: Define your component
const RulesPage = () => {
  return (
    <Layout>
      <main>
        <h1>Rules</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <Link to="/product">Acheter</Link>
      </main>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default RulesPage;
