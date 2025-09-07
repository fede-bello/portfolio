import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";

type LinkProps = ComponentPropsWithoutRef<typeof Link> & {
  hitArea?: "default" | "comfortable";
};

export const PrefetchLink = forwardRef<HTMLAnchorElement, LinkProps>(
  function PrefetchLink({ hitArea = "default", className, ...props }, ref) {
    const padding =
      hitArea === "comfortable" ? "px-2 py-1 -mx-2 -my-1" : undefined;
    return (
      <Link
        ref={ref}
        className={[padding, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

type NavLinkProps = ComponentPropsWithoutRef<typeof NavLink> & {
  hitArea?: "default" | "comfortable";
};

export const PrefetchNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function PrefetchNavLink({ hitArea = "default", className, ...props }, ref) {
    const padding =
      hitArea === "comfortable" ? "px-2 py-1 -mx-2 -my-1" : undefined;
    return (
      <NavLink
        ref={ref}
        className={({ isActive }) => {
          const base = [
            padding,
            typeof className === "function"
              ? className({ isActive, isPending: false })
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
