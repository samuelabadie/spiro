import * as React from 'react';

import Favicon from '../images/favicon.svg';
import Layout from '../components/layout';
import Aloevera from '../images/characters/aloevera.svg';
import Ant from '../images/characters/ant.svg';
import Butterfly from '../images/characters/butterfly.svg';
import Cactus from '../images/characters/cactus.svg';
import Clover from '../images/characters/clover.svg';
import Dragonfly from '../images/characters/dragonfly.svg';
import Ladybug from '../images/characters/ladybug.svg';
import Scarab from '../images/characters/scarab.svg';
import Sunflower from '../images/characters/sunflower.svg';
import Tulip from '../images/characters/tulip.svg';

const TeamPage = () => {
  return (
    <Layout>
      <div>
        <h1>Équipe</h1>
        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-10">
            <div className="text-center rounded-full border-[3px] border-black p-5">
              <div className="flex justify-center">
                <img src={Aloevera} />
              </div>
              <p className="mt-3">Samuel</p>
            </div>
            <div className="text-center rounded-full border-[3px] border-orange-400 p-5">
              <div className="flex justify-center">
                <img src={Ant} />
              </div>
              <p className="mt-3">Eva</p>
            </div>
            <div className="text-center rounded-full border-[3px] border-yellow-400 p-5">
              <div className="flex justify-center">
                <img src={Butterfly} />
              </div>
              <p className="mt-3">Nino</p>
            </div>
            <div className="text-center rounded-full border-[3px] border-green-400 p-5">
              <div className="flex justify-center">
                <img src={Cactus} />
              </div>
              <p className="mt-3">Léna</p>
            </div>
            <div className="text-center rounded-full border-[3px] border-yellow-500 p-5">
              <div className="flex justify-center">
                <img src={Clover} />
              </div>
              <p className="mt-3">Adèle</p>
            </div>
            <div className="text-center rounded-full border-[3px] border-blue-600 p-5">
              <div className="flex justify-center">
                <img src={Dragonfly} />
              </div>
              <p className="mt-3">Maïlys</p>
            </div>
            <div className="text-center rounded-full border-[3px] border-pink-400 p-5">
              <div className="flex justify-center">
                <img src={Ladybug} />
              </div>
              <p className="mt-3">Bartholomé</p>
            </div>
            <div className="text-center rounded-full border-[3px] border-blue-400 p-5">
              <div className="flex justify-center">
                <img src={Scarab} />
              </div>
              <p className="mt-3">Agathe</p>
            </div>
            <div className="text-center rounded-full border-[3px] border-green-300 p-5">
              <div className="flex justify-center">
                <img src={Sunflower} />
              </div>
              <p className="mt-3">Lucas</p>
            </div>
            <div className="text-center rounded-full border-[3px] border-red-400 p-5">
              <div className="flex justify-center">
                <img src={Tulip} />
              </div>
              <p className="mt-3">Lamia</p>
            </div>
          </div>
        </div>
      </div>
      <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FVDNl7bhiqx8G2Gw61neD8C%2FReboot-2023%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DwdVFpUjXS2s1Nywj-1" allowfullscreen></iframe>
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
