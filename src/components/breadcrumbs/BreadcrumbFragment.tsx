import { Children, ReactNode } from "react";
import { Fragment } from "react";

interface BreadcrumbProps {
  children: ReactNode;
}

const BreadcrumbFragment = ({ children }: BreadcrumbProps) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span className="text-gray-400 text-[16px] font-medium">{">"}</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav
      className=" mt-16 md:mt-28 mx-2 flex flex-row-reverse"
      aria-label="breadcrumb"
    >
      <ol className="flex items-center space-x-1">{childrenWtihSeperator}</ol>
    </nav>
  );
};

export default BreadcrumbFragment;
