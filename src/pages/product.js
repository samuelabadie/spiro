// Step 1: Import React
import * as React from 'react';

import Layout from '../components/layout';

// Step 2: Define your component
const ProductPage = () => {
  return (
    <Layout>
      <main>
        <h1>Welcome to my product page !</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Product Page</title>;

// Step 3: Export your component
export default ProductPage;
