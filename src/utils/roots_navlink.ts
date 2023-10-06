export interface NavItems {
  label: string;
  page: string;
}

export const MENU_LIST: Array<NavItems> = [
  {
    label: "Accueil",
    page: "/",
  },
  {
    label: "Portfolio",
    page: "/portfolio",
  },
  {
    label: "Contactez-moi",
    page: "/contact",
  },
];

export const DASHBOARD_LIST: Array<NavItems> = [
  {
    label: "Dashboard",
    page: "/dashboard",
  },
  {
    label: "View Portfolio",
    page: "/portfolio",
  },
];
