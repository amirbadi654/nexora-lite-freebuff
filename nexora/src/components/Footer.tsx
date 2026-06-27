import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-base">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Sparkles className="h-4 w-4 text-accent" />
          <span>Nexora &copy; {new Date().getFullYear()}</span>
        </div>
        <p className="text-xs text-text-muted">
          Built with precision. Designed for the future.
        </p>
      </div>
    </footer>
  )
}
