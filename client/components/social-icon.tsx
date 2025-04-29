"use client"

import type React from "react"
import { motion } from "framer-motion"

interface SocialIconProps {
  href: string
  "aria-label": string
  icon: React.ReactNode
  target?: string
  rel?: string
}

export function SocialIcon({ href, "aria-label": ariaLabel, icon, target, rel }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      className="text-gray-500 hover:text-cyan-400 transition-all duration-300 ease-in-out"
      whileHover={{
        scale: 1.2,
        rotate: [0, -10, 10, -5, 0],
        transition: { duration: 0.5 },
      }}
    >
      {icon}
    </motion.a>
  )
}
