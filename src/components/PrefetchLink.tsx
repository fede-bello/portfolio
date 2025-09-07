import { ComponentPropsWithoutRef, forwardRef } from "react";
import { NavLink } from "react-router-dom";

type NavLinkProps = ComponentPropsWithoutRef<typeof NavLink> & {
  hitArea?: "default" | "comfortable";
};

export const PrefetchNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function PrefetchNavLink(
    { hitArea = "default", className, ...props },
    ref
  ): JSX.Element {
    const padding =
      hitArea === "comfortable" ? "px-2 py-1 -mx-2 -my-1" : undefined;
    return (
      <NavLink
        ref={ref}
        className={(renderProps) => {
          const base = [
            padding,
            typeof className === "function"
              ? className(renderProps)
              : className,
          ]
            .filter(Boolean)
            .join(" ");
          return base;
        }}
        {...props}
      />
    );
  }
);
