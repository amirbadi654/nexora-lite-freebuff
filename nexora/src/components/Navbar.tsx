import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface-base/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-text-primary transition-colors hover:text-accent"
        >
          <Sparkles className="h-5 w-5 text-accent" />
          Nexora
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  pathname === link.to
                    ? 'bg-accent-dim text-accent'
                    : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border-subtle bg-surface-base px-6 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                    pathname === link.to
                      ? 'bg-accent-dim text-accent'
                      : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
