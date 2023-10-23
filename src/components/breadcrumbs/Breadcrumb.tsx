import BreadcrumbItem from "@/components/breadcrumbs/BreadcrumbItem";
import BreadcrumbsFragment from "@/components/breadcrumbs/BreadcrumbFragment";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getData } from "@/utils/data/api";
import { Project } from "../portfolioPage/portfolioPage";

interface BreadcrumbItemInfo {
  href: string;
  label: string;
  isCurrent: boolean;
}

export const BreadcrumbContext = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemInfo[]>([]);
  const home = pathname === "/";
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const pathWithoutQuery = pathname.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const newBreadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(newBreadcrumbs); // Réinitialise les miettes de pain à chaque rendu

    const fetchData = async () => {
      try {
        const projectsData = await getData();
        setData(projectsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pathname]);
  return (
    <>
      <BreadcrumbsFragment>
        <BreadcrumbItem isCurrent={home} href="/">
          Accueil
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb) => {
          const project = data.find((item) => item._id === breadcrumb.label);
          const label = project ? project.title : breadcrumb.label;
          return (
            <BreadcrumbItem
              key={breadcrumb.href}
              href={breadcrumb.href}
              isCurrent={breadcrumb.isCurrent}
            >
              {label}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbsFragment>
    </>
  );
};
