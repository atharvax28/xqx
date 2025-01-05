"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './mode-toggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#awards", label: "Awards" },
    { href: "#publications", label: "Publications" },
    { href: "#social-work", label: "Social Work" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="bg-background border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Dr. V.V. Tayade</Link>
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ))}
            <ModeToggle />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 hover:text-primary" onClick={toggleMenu}>
                {item.label}
              </Link>
            ))}
            <div className="py-2">
              <ModeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

