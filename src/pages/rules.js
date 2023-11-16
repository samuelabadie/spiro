import * as React from 'react';

import Layout from '../components/layout';
import Favicon from '../images/favicon.svg';
import GameIcon from '../images/icons/game.svg';
import PreparationIcon from '../images/icons/preparation.svg';
import CardsIcon from '../images/icons/cards.svg';
import AloeIcon from '../images/characters/aloevera.svg';

let rulesContent = [
  {
    title: 'Le Jeu',
    description: `But du jeu :
    Les jeunes détectives doivent résoudre une énigme et démasquer qui perturbe l'équilibre naturel de Soria ville.
    Le gagnant est celui qui trouve en premier les 3 cartes :
    le personnage impliqué l’objet utilisé et le lieu du crime écologique.
    Les 3 cartes ont été placées au préalable dans l’étui au début du jeu (sans que les joueurs ne voient de quelles cartes, il s’agit).

    Âge : +8 ans
    Nombre de joueurs : 3-6 joueurs`,
  },
  {
    title: '1 - MATÉRIEL',
    description: `- 1 plateau de jeu illustré avec les lieux phares de la ville
- 27 cartes
- 8 cartes “personnage”
- 11 cartes “objet”
- 8 cartes “lieu”
- 24 feuilles “grille” : où les joueurs inscrivent les résultats de leurs investigations
- 1 étui où insérer les 3 cartes de l’énigme
- 1 dé`,
  },
  {
    title: '2 - PRÉPARATION',
    description: `Sélection des pions :
  Les joueurs choisissent chacun un pion.

Pions :
  Les joueurs placent les pions sur la case départ.

Préparation de l’étui secret :
  Rassemblez les cartes de chaque catégorie en 3 paquets différents (un paquet avec les personnages, un avec les objets et un avec les lieux).
  Une main innocente prend une carte de chaque catégorie (sans les regarder et sans que les joueurs ne les voient) et les cache dans l’étui.

Pioche :
  Mélangez les 24 cartes restantes ensemble et distribuez toutes les cartes entre les joueurs.`,
  },
  {
    title: `3 - L'ENQUÊTE`,
    description: `Avancer
  Le joueur lance le dé et avance vers le lieu de son choix. Il peut rester sur place aussi longtemps qu’il le désire.

Cases occupées
  Le joueur peut s’arrêter sur une case déjà occupée et sauter par-dessus un pion adverse.

Entrer dans un lieu
  Le joueur n’est pas obligé d’avancer du nombre exact que le dé indique après le lancer.
  Par exemple, s’il se trouve à 5 cases d’un lieu et qu’il fait 8, il peut y entrer, mais n’aura le droit d’en repartir qu’à son prochain tour, avec un autre lancer de dé.

Déplacement et hypothèse
  Une fois arrivé dans un lieu, le joueur peut enquêter sur le lieu dans lequel il se trouve en formulant une hypothèse.

Cases spéciales
  Case orange +1: avancer d’une case
  Case verte chewing-gum: vous êtes bloqué durant 1 tour

La formulation de l’hypothèse
  Dans le lieu où le joueur se trouve, il formule une hypothèse avec un personnage et un objet de son choix. Supposons qu’un joueur arrive dans le parc avec son pion. Il peut alors formuler une hypothèse. Cette dernière peut être, par exemple : “Je suppose que le crime écologique a été commis par Gary (le prénom de la coccinelle dans le jeu), dans le parc, avec le chewing-gum.”

Il s’adresse ensuite aux autres joueurs. Il commence par le premier à sa gauche. Ce joueur, s’il possède l’une des 3 cartes de l’hypothèse, doit la lui montrer sans que les autres ne la voit. C’est ensuite au tour du joueur suivant.

Dans le cas où il n’en a aucune, l’enquêteur interroge les joueurs suivants, jusqu’à ce qu’il ait obtenu satisfaction.

Attention ! Si le joueur interrogé possède plusieurs cartes entrant dans l’hypothèse, il ne doit en montrer qu’une seule.`,
  },
  {
    title: `Notes`,
    description: `La grille 
  Le détective coche sur sa grille les noms des personnages, objets et lieux qu'il trouve durant la partie, ceux-la ne seront donc pas accusés à la fin. Ainsi, par éliminations successives le joueur pourra clore son enquête. 

L'accusation 
  Le joueur qui pense connaître les 3 cartes de l'énigme, en inscrit les noms au dos de sa feuille grille. Il compare ensuite secrètement son accusation avec le contenu de l'étui 

- Si son accusation est juste, il le prouve en exposant les 3 cartes et son rapport. Il gagne alors la partie. 

- Si son accusation est fausse, il remet les cartes dans l'étui. Il reste en jeu pour démentir les« hypothèses» éventuelles formulées par les autres joueurs mais il ne peut plus ni se déplacer, ni interroger, ni accuser.
    
Les joueurs ne peuvent pas formuler une accusation précise juste après avoir formulé une hypothèse. Il doit attendre le prochain tour. Attention! Une seule accusation finale est possible par joueur.  `,
  },
  {
    title: `Astuces du détective`,
    description: `Remise en cause
  Pour obtenir des indications précises sur le contenu de l’étui et pour égarer ses concurrents, le joueur a le droit de mettre en cause un personnage, un objet et un lieu dont il possède la ou les cartes.
    
Supposons qu’il arrive dans le champ avec son pion et qu’il possède dans ses cartes le trèfle et le champ.
Il pourra faire l’hypothèse suivante par exemple : “Je suppose que Teddy (le prénom du trèfle dans le jeu) a commis le crime écologique dans le champ, en jetant un mégot.”
    
Si aucun joueur ne lui montre l’objet mégot, il est évident que cet objet se trouve alors dans l’étui.`,
  },
];

const RuleCard = () => {
  return (
    <div>
      {rulesContent.map((ruleContent) => (
        <>
          <div className="relative">
            {ruleContent.title === '1 - MATÉRIEL' ? (
              <img
                src={GameIcon}
                alt="Icône de la section Matériel"
                className="w-12 absolute top-3 right-3"
              />
            ) : ruleContent.title === '2 - PRÉPARATION' ? (
              <img
                src={PreparationIcon}
                alt="Icône de la section Préparation"
                className="w-12 absolute top-3 right-3"
              />
            ) : ruleContent.title === '3 - DISTRIBUTION' ? (
              <img
                src={CardsIcon}
                alt="Icône de la section Distribution"
                className="w-12 absolute top-3 right-3"
              />
            ) : ruleContent.title === "4 - L'ENQUÊTE" ? (
              <img
                src={AloeIcon}
                alt="Icône de la section Enquête"
                className="w-12 absolute top-3 right-3"
              />
            ) : null}
          </div>
          <div className="max-w-[700px] rounded-lg bg-pastel-blue my-5 p-5 md:p-14">
            <h3>{ruleContent.title}</h3>
            {ruleContent.title === '' ? (
              <p>{ruleContent.description}</p>
            ) : (
              <p className="mt-2 md:mt-4">{ruleContent.description}</p>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

const RulesPage = () => {
  return (
    <Layout>
      <div>
        <h1>Règles du jeu</h1>
        <div className="flex justify-center whitespace-pre-wrap">
          <RuleCard></RuleCard>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Spiro | Règles</title>
    <link rel="icon" type="image/png" href={Favicon} />
  </>
);

export default RulesPage;
