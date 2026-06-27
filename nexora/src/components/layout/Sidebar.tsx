import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Zap, Trophy, ShoppingBag, User, Settings } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Zap, label: 'Challenge', path: '/challenge' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  { icon: ShoppingBag, label: 'Shop', path: '/shop' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
]

const mobileItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Zap, label: 'Challenge', path: '/challenge' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  { icon: ShoppingBag, label: 'Shop', path: '/shop' },
  { icon: User, label: 'Profile', path: '/profile' },
]

export default function Sidebar() {
  const { pathname } = useLocation()

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-16 z-30 hidden h-[calc(100vh-64px)] w-60 flex-col overflow-y-auto border-r border-brand-dim bg-bg-secondary lg:flex">
        {/* Top nav items */}
        <nav className="flex-1 space-y-1 p-3">
          {navItems.map(({ icon: Icon, label, path }) => {
            const active = pathname === path
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 ${
                  active
                    ? 'border-l-[3px] border-brand bg-[rgba(139,92,246,0.1)] pl-[9px] font-semibold text-brand'
                    : 'text-text-muted hover:bg-bg-card hover:text-text-primary'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm">{label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom wallet section */}
        <div className="mt-auto border-t border-brand-dim p-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-success" />
            <span className="text-xs text-success">Connected</span>
          </div>
          <p className="mt-1 truncate font-mono text-xs text-text-muted">
            0xA3f2...B891
          </p>
          <button className="mt-2 cursor-pointer text-xs text-danger transition-colors hover:underline">
            Disconnect
          </button>
        </div>
      </aside>

      {/* Mobile bottom tab bar */}
      <nav className="glass fixed bottom-0 left-0 z-40 flex h-16 w-full items-center justify-around border-t border-brand-dim px-2 lg:hidden">
        {mobileItems.map(({ icon: Icon, label, path }) => {
          const active = pathname === path
          return (
            <Link
              key={path}
              to={path}
              aria-label={label}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                active ? 'text-brand' : 'text-text-muted'
              }`}
            >
              <Icon size={22} />
            </Link>
          )
        })}
      </nav>
    </>
  )
}
