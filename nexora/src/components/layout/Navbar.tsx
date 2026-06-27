import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { Wallet, Zap, Menu, X } from 'lucide-react'
import { LogoWithText } from '../ui/Logo'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Shop', path: '/shop' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const [menuOpen, setMenuOpen] = useState(false)
  const connected = searchParams.get('connected') === 'true'

  return (
    <>
      <header className="glass fixed top-0 z-50 h-16 w-full border-b border-brand-dim">
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LEFT: Logo */}
          <Link to="/" className="flex-shrink-0">
            <LogoWithText />
          </Link>

          {/* CENTER: Nav links (hidden on mobile) */}
          <ul className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    pathname === link.path
                      ? 'text-brand'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {link.label}
                  {pathname === link.path && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded bg-brand" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {connected ? (
              <>
                {/* XP pill */}
                <div className="flex items-center gap-1.5 rounded-full border border-gold-dim bg-[rgba(251,191,36,0.1)] px-3 py-1.5">
                  <Zap size={14} className="text-gold" />
                  <span className="text-sm font-bold text-gold">320 XP</span>
                </div>

                {/* Wallet address pill */}
                <div className="hidden items-center gap-1.5 rounded-full border border-brand-dim bg-bg-secondary px-3 py-1.5 sm:flex">
                  <Wallet size={14} className="text-text-muted" />
                  <span className="font-mono text-xs text-text-muted">
                    0xA3f2...B891
                  </span>
                </div>

                {/* Avatar */}
                <Link
                  to="/profile"
                  className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-brand-gradient"
                >
                  <span className="text-xs font-bold text-white">0x</span>
                </Link>
              </>
            ) : (
              <button className="flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-brand transition-all duration-200 hover:opacity-90">
                <Wallet size={16} />
                Connect Wallet
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="rounded-lg p-2 text-text-muted transition-colors hover:text-text-primary lg:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed left-0 top-16 z-40 w-full border-b border-brand-dim bg-bg-card lg:hidden">
          <div className="space-y-2 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block w-full rounded-lg py-3 text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-brand'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
