import Link from "next/link"
import React from "react"

interface NavButtonProps {
  href: string
  message: string
  className?: string
}

export const NavButton: React.FC<NavButtonProps> =({
  href,
  message,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors ${className}`}
    >
      {message}
    </Link>
  );
}
