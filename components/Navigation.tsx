'use client'

import Link from 'next/link'

const navItems = [
  { label: 'Início', href: '#sobre' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Local', href: '#local' },
  { label: 'Contato', href: '#contato' },
  { label: 'Pokédex', href: '/pokemon', external: true },
]

export default function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return // Deixa o Link lidar com navegação externa
    
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center gap-6 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href, item.external)}
                className="text-gray-700 font-medium hover:text-secondary transition-colors border-b-2 border-transparent hover:border-secondary pb-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#inscricoes"
              onClick={(e) => scrollToSection(e, '#inscricoes')}
              className="bg-accent text-white px-6 py-2 rounded-md font-bold hover:bg-green-600 transition-colors"
            >
              Inscreva-se
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

