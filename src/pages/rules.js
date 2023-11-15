import * as React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';

let rulesContent = [
  {
    title: '',
    description: `But du jeu : Les jeunes détectives doivent résoudre des énigmes écologiques amusantes et démasquer qui perturbe l'équilibre naturel de Soria ville !
      Gagnant : Celui qui trouve en premier 
      - le personnage impliqué 
      - l’objet utilisé 
      - et situe le lieu du crime écologique
      Ces précisions doivent correspondre aux 3 cartes « ÉNIGMES » placées secrètement dans l’étui au début du jeu.`,
  },
  {
    title: '1 - MATÉRIEL',
    description: `1 Plateau de jeu illustré avec les lieux phares de la ville.
    27 cartes:
    \u000A
    - 8 Cartes “personnage”
    - 11 Cartes “objet”
    - Cartes “lieu”

    24 feuilles "grille" : où les joueurs inscrivent les résultats de leurs investigations.
    1 étui où insérer les 3 cartes de l’énigme.
    2 dés`,
  },
  {
    title: '2 - PRÉPARATION',
    description: `Sélection des personnages : Les enfants choisissent un pion, peu importe les cartes qu’il aura après.
    Pions : Placez les 6 pions sur la case départ correspondantes. (Si vous êtes moins de six, les pions en trop sont cependant utilisés pour formuler des « HYPOTHÈSES »).
    Préparation de l’étui secret contenant le suspect, l’objet et le lieu :
    Mélangez séparément les trois paquets de cartes « SUSPECTS », « OBJET », « LIEUX »
    prenez, chaque fois, face cachée, la carte supérieure du paquet.
    Une main innocente insère secrètement ces trois cartes (une de chaque catégorie) dans l’étui et cachez-le dans la boite du jeu.
    Pioche : Mélangez les 24 cartes restantes ensemble et posez le paquet, face cachée, sur la table.`,
  },
  {
    title: '3 - DISTRIBUTION',
    description: `Chaque joueur lance les dés.
    Celui qui fait le plus haut résultat distribue les cartes, une à une et faces cachées. Peu importe si, en fonction du nombre de participants, certains sont légèrement avantagés par la distribution :
    A 3,4 et 6 joueurs, tous les participants reçoivent le même nombre de cartes et c’est le plus jeune qui commence l’enquète.
    A 5 joueurs, celui qui à une carte en moins joue en premier.
    Une fois les cartes distribués, chaque joueur coche ses cartes sur sa feuille grille.
    Le jeu se déroule de gauche à droite.`,
  },
  {
    title: `4 - L'ENQUÊTE`,
    description: `A) DÉPLACEMENTS
    Avancer : Celui qui joue lance les dés et avance sur les cases rondes, vers le lieu de son choix, d’autant de cases que le dés marquent de points. Il peut rester sur place aussi longtemps qu’il le désire.
    Cases occupées : Il ne peut pas s’arrêter sur une case déjà occupée ni sauter par-dessus un pion adverse.
    Entrer dans un lieu : Il n’est pas obligé de faire un nombre exact de points pour entrer dans un lieu.
    Exemple : S’il se trouve à 5 cases d’un lieu et qu’il fait 8, il peut y entrer mais n’aura le droit d’en repartir qu’à son prochain tour, avec un autre lancer de dés.
    Déplacement et Hypothèse : Le déplacement compte pour un coup mais le joueur peut, une fois arrivé dans une pièce, sans attendre son prochain tour, enquêter à partir du lieu où il est arrivé en formulant une “HYPOTHÈSE” .,
    B) HYPOTHÈSES
    L’HYPOTHÈSE se fait de la façon suivante :

    Le joueur fait venir dans le lieu où il se trouve, un suspect et un objet de son choix. Supposons que : le cactus pénètre dans le parc et qu’il soupçonne la coccinelle d’avoir pollué le lieu le chewing-gum.
    Il « appelle » son suspect dans le parc, y place le chewing-gum et dit :
    « Je suppose que le (crime écologique) a été commis par la coccinelle, dans le parc ,avec le chewing-gum! ».
    Il s’adresse ensuite aux autres joueurs.
    Il commence par le premier à gauche. Ce joueur, s’il possède l’une des 3 cartes de l’HYPOTHÈSE, doit la lui montrer sans que les autres ne la voient et c’est au tour du joueur suivant.
    S’il n’en a aucune, l’enquêteur interroge les joueurs suivants jusqu’à ce qu’il ait obtenu satisfaction. (Précisons que le joueur interrogé, même s’il possède plusieurs cartes entrant dans l’HYPOTHÈSE, il ne doit en montrer secrètement qu’UNE SEULE de son choix)

    C) NOTES

    Bien entendu, le détective coche sur son carnet de notes, les noms des personnages, objets et lieux qu’il trouve durant la partie, ceux-la ne seront donc pas accusé à la fin.
    Ainsi, par éliminations successives le joueur pourra clore son enquête.
    Il peut, tout de suite après avoir fait une HYPOTHÈSE, formuler une ACCUSATION précise, sinon son tour est terminé (qu’une seule accusation possible par joueur).

    D) ASTUCES DU DÉTECTIVE

    Remise en cause : Pour obtenir des indications précise sur le contenu de l’étui et pour égarer ses concurrents, il a le droit de mettre en cause un personnage, un objet et un lieu dont il possède la ou les cartes.
    Exemple 1 : Supposons qu’il se trouve dans le champ et qu’il possède, entre autres cartes, celles représentant le trèfle et le champ.
    Il « appelle » dans le champ le trèfle, avec le mégot par exemple. Si aucun témoin ne lui montre l’objet demandée, il est évident que le mégot se trouve dans l’Etui.

    F) L’ACCUSATION

    Le joueur qui pense connaître les trois cartes de l’énigme, en inscrit les noms au dos de sa feuille grille.
    Il compare ensuite secrètement son accusation avec le contenu de l’Etui :
    Si son accusation est juste, il le prouve en exposant les 3 cartes et son rapport. Il gagne la partie.
    Si son accusation est fausse, il remet les cartes dans l’Etui . Il reste en jeu pour démentir les « HYPOTHÈSES » éventuelles mais ne peut plus ni se déplacer, ni interroger, ni accuser.
    Chaque enquêteur ne peut faire qu’une seule ACCUSATION. Qu’il la fasse donc à bon escient !`,
  },
];

const RuleCard = () => {
  return (
    <div>
      {rulesContent.map((ruleContent) => (
        <div className="max-w-[700px] rounded-lg bg-pastel-blue my-5 p-5 md:p-14">
          <h3>{ruleContent.title}</h3>
          {ruleContent.title === '' ? (
            <p>{ruleContent.description}</p>
          ) : (
            <p className="mt-2 md:mt-4">{ruleContent.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

const RulesPage = () => {
  return (
    <Layout>
      <div>
        <h1>Règles du jeu</h1>
        <div className="flex justify-center">
          <RuleCard></RuleCard>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default RulesPage;
