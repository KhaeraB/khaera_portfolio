const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Node" },
  { skill: "MongoDB" },
  { skill: "SQL" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

interface Headshot {
  title: string;
  job: string;
  job_2: string;
  description_1: string;
  description_2: string;
  image: string;
  gif: string;
  react: string;
  node: string;
  express: string;
  mongoDB: string;
}

interface TextBackground {
  title: string;
  subTitle: string;
  paragraphOne: string;
  subParagraphOne: string;
  location: string;
  paragraphTwo: string;
  paragraphThree: string;
  paragraphFour: string;
  image: string;
}
const HeadshotText: Array<Headshot> = [
  {
    title: "Moi c'est Khaera, ",
    job: "Pour moi être développeuse",
    job_2: "une véritable passion",
    description_1: " c'est pas seulement faire une série de lignes, c'est",
    description_2:
      " qui me pousse à repousser les limites et à chercher constamment des solutions innovantes. Je suis prête à faire partie de vos projets.",
    image: "/images/headshot_kb.jpg",
    gif: "/images/techno.gif",
    react: "/images/React-icon.svg",
    node: "/images/nodejs-icon.svg",
    express: "/images/expressjs.svg",
    mongoDB: "/images/mongodb.svg",
  },
];

const Background: Array<TextBackground> = [
  {
    title: "Background ",
    subTitle: "Faites connaissance avec moi",
    paragraphOne: "Mon prénom est Khaera, je suis une développeuse FullStack",
    subParagraphOne: "très ambitieuse, motivée",
    location: " basée dans la région Parisienne.",
    paragraphTwo:
      "J'ai obtenu en 2023 un diplôme de conceptrice d'application avec spécialité React, qui fait sens avec mes études de développeuse FullStack en 2019 ainsi qu'un diplome en Web design en 2012. Des certifications via des mocks en ligne, en UI/UX design et développement. Je travaille depuis dans ce domaine.",
    paragraphThree:
      " J'ai un large éventail de passe-temps et de passions qui me tiennent occupés. Qu'il s'agisse de lire, de peindre, de voyager ou de faire du sport, je suis toujours à la recherche de nouvelles expériences et j'aime m'engager et apprendre de nouvelles choses. ",
    paragraphFour:
      "Je suis passionné par la technologie et le désir de toujours repousser les limites du possible. Je suis impatient de voir où ma carrière me mènera et je suis toujours ouvert à de nouvelles opportunités. 🥰",
    image: "/images/heroMoi.png",
  },
];

const datas = { HeadshotText, Background, skills };

export default datas;
