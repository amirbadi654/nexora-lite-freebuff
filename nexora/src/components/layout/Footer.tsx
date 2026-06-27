import { ExternalLink } from 'lucide-react'
import { LogoWithText } from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="border-t border-brand-dim bg-bg-primary px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left */}
        <div>
          <LogoWithText />
          <p className="mt-2 text-sm text-text-muted">
            Challenge Your Mind. Climb the Ranks.
          </p>
        </div>

        {/* Center */}
        <div className="text-center">
          <p className="text-sm text-text-muted">
            &copy; 2025 Nexora. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex justify-end gap-4">
          <a
            href="https://x.com/Metipax"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-brand"
          >
            <ExternalLink size={14} />
            X
          </a>
          <a
            href="https://discord.gg/yfdVK6dU"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-brand"
          >
            <ExternalLink size={14} />
            Discord
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-bg-secondary pt-6 text-center">
        <span className="cursor-default text-xs text-text-muted opacity-50 transition hover:opacity-100">
          Built by Meti pax
        </span>
      </div>
    </footer>
  )
}
