import type { ReactNode } from "react";
import { NavLink as LibNavLink } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
  className?: string
};

export function NavLink(props: Props) {
  return (
    <LibNavLink
      {...props}
      className={({ isActive }) => `link ${props.className} ${isActive && "text-accent"}`}
    ></LibNavLink>
  );
}
