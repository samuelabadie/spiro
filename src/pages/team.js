import * as React from 'react';

import { Link } from 'gatsby';

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
        <div className="flex justify-center">
          <div className="grid grid-cols-5 grid-rows-5 gap-10">
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Aloevera} />
              </div>
              <p className="mt-3">Samuel</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Ant} />
              </div>
              <p className="mt-3">Eva</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Butterfly} />
              </div>
              <p className="mt-3">Nino</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Cactus} />
              </div>
              <p className="mt-3">Léna</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Clover} />
              </div>
              <p className="mt-3">Adèle</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Dragonfly} />
              </div>
              <p className="mt-3">Maïlys</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Ladybug} />
              </div>
              <p className="mt-3">Bartholomé</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Scarab} />
              </div>
              <p className="mt-3">Agathe</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Sunflower} />
              </div>
              <p className="mt-3">Lucas</p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30">
                <img src={Tulip} />
              </div>
              <p className="mt-3">Lamia</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
