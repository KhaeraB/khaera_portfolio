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

export default HeadshotText;
