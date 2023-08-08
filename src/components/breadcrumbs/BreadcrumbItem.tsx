import Link from "next/link";

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
