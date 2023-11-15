import * as React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';

let rulesContent = [
  {
    title: 'Règle 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc...',
  },
  {
    title: 'Règle 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const RuleCard = () => {
  return (
    <div>
      {rulesContent.map((ruleContent, index) => (
        <div key={index} className="w-auto bg-pastel-blue">
          <h3>{ruleContent.title}</h3>
          <p>{ruleContent.description}</p>
        </div>
      ))}
    </div>
  );
};

const RulesPage = () => {
  return (
    <Layout>
      <div>
        <h1>Rules</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <RuleCard></RuleCard>
        <Link to="/product">Acheter</Link>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default RulesPage;
