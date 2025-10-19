import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ReactNode } from "react";

export function StyledNavLink({ to, children, ...props }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          " rounded-md text-sm font-medium hover:text-accent",
          isActive
            ? " text-primary shadow-md"
            : "text-foreground"
        )
      }
    >
      {children}
    </NavLink>
  )
}
