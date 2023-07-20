interface Headshot {
  title: string;
  job: string;
  job_2: string;
  description_1: string;
  description_2: string;
  image: string;
}

const HeadshotText: Array<Headshot> = [
  {
    title: 'Salut, Je suis Khaera',
    job: 'Développeuse React, Fullstack ou FrontEnd',
    job_2: 'le design UI/UX',
    description_1:
      ". Basée en région Parisienne. J'ai toujours été fascinée par l'intersection entre la technologie et",
    description_2:
      ". Dès mes premières expériences avec les interfaces utilisateur, j'ai réalisé l'importance de créer des expériences fluides et engageantes pour les utilisateurs.",
    image: '/images/headshot_kb.jpg',
  },
];

export default HeadshotText;
