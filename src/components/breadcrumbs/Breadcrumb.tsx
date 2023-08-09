import BreadcrumbItem from "@/components/breadcrumbs/BreadcrumbItem";
import BreadcrumbsFragment from "@/components/breadcrumbs/BreadcrumbFragment";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface BreadcrumbItemInfo {
  href: string;
  label: string;
  isCurrent: boolean;
}

export const BreadcrumbContext = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemInfo[]>([]);
  const home = pathname === "/";
  useEffect(() => {
    const pathWithoutQuery = pathname.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");

      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [pathname]);
  return (
    <>
      <BreadcrumbsFragment>
        <BreadcrumbItem isCurrent={home} href="/">
          Accueil
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem
            key={breadcrumb.href}
            href={breadcrumb.href}
            isCurrent={breadcrumb.isCurrent}
          >
            {breadcrumb.label}
          </BreadcrumbItem>
        ))}
      </BreadcrumbsFragment>
    </>
  );
};
