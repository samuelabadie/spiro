import * as React from 'react';

import Favicon from '../images/favicon.svg';
import Layout from '../components/layout';

const TeamPage = () => {
  return (
    <Layout>
      <iframe width="1300px" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FVDNl7bhiqx8G2Gw61neD8C%2FReboot-2023%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DwdVFpUjXS2s1Nywj-1" allowfullscreen></iframe>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Spiro | Équipe</title>
    <link rel="icon" type="image/png" href={Favicon} />
  </>
);

export default TeamPage;
