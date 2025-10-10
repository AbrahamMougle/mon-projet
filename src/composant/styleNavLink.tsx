import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils" 
import { ReactNode } from "react";

export function StyledNavLink({ to, children }: { to: string; children:ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          " rounded-md text-sm font-medium",
         
          isActive
            ? " text-primary  text-lg shadow-md"
            : "text-black"
        )
      }
    >
      {children}
    </NavLink>
  )
}
