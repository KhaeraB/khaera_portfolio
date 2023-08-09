import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItemProps {
  href: string;
  isCurrent: boolean;
  children: React.ReactNode;
}

const BreadcrumbItem = ({
  children,
  href,
  isCurrent,
  ...props
}: BreadcrumbItemProps) => {
  const pathname = usePathname();
  const home = pathname === "/";
  if (isCurrent === home) {
    return (
      <li {...props}>
        <Link
          href={href}
          passHref
          className={isCurrent ? "hidden" : ""}
          aria-current={isCurrent ? "page" : "false"}
        >
          {children}
        </Link>
      </li>
    );
  }
  return (
    <li {...props}>
      <Link
        href={href}
        passHref
        className={isCurrent ? "text-blue-500" : ""}
        aria-current={isCurrent ? "page" : "false"}
      >
        {children}
      </Link>
    </li>
  );
};

export default BreadcrumbItem;
