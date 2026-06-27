import { Link } from 'react-router-dom'
import { ArrowLeft, Frown } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70dvh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 inline-flex rounded-2xl bg-accent-dim p-4">
        <Frown className="h-8 w-8 text-accent" />
      </div>
      <h1 className="text-4xl font-bold text-text-primary sm:text-5xl">404</h1>
      <p className="mt-3 text-base text-text-secondary">
        This page doesn't exist — or it moved somewhere else.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface-dark transition-all hover:bg-accent-soft"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </div>
  )
}
