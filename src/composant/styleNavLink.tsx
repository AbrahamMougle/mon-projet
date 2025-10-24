import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { motion } from "framer-motion"

export function StyledNavLink({
  to,
  children,
  ...props
}: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "relative inline-block rounded-md text-lg font-bold transition-colors duration-300",
          isActive ? "text-primary" : "text-foreground hover:text-accent"
        )
      }
      {...props}
    >
      {({ isActive }) => (
        <motion.span
          // Animation d’entrée (apparition douce + léger slide)
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          // Animation au survol
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-block"
        >
          {children}

          {/* Barre animée en dessous du texte */}
          <motion.span
            layoutId="nav-underline"
            className="absolute left-0 -bottom-1 h-[2px] rounded bg-current"
            animate={{
              width: isActive ? "100%" : "0%",
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.span>
      )}
    </NavLink>
  )
}
