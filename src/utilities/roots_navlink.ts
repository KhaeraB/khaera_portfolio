interface NavItems {
  label: string;
  page: string;
}

export const MENU_LIST: Array<NavItems> = [
  {
    label: "Accueil",
    page: "/",
  },
  {
    label: "Projets",
    page: "/projects",
  },
  {
    label: "Contactez-moi",
    page: "/contact",
  },
];
