import { Link } from 'react-router-dom'
import { ArrowLeft, Code2, Palette, Rocket, Users } from 'lucide-react'

const values = [
  {
    icon: Code2,
    title: 'Craftsmanship',
    description: 'Every line of code is written with intention. We sweat the details so you don\'t have to.',
  },
  {
    icon: Palette,
    title: 'Design-forward',
    description: 'Beautiful interfaces are not optional. We believe great design drives great outcomes.',
  },
  {
    icon: Rocket,
    title: 'Performance obsessed',
    description: 'Milliseconds matter. We relentlessly optimize for the fastest possible experience.',
  },
  {
    icon: Users,
    title: 'Community first',
    description: 'Built in the open, shaped by feedback. Our community makes Nexora better every day.',
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      {/* Back link */}
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          About Nexora
        </h1>
        <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
          We are a small team of builders, designers, and dreamers on a mission to
          create tools that empower the next generation of digital creators.
        </p>
      </div>

      {/* Values grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {values.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-border-subtle bg-surface-card p-6 shadow-card transition-all hover:border-border-default"
          >
            <div className="mb-4 inline-flex rounded-xl bg-accent-dim p-3">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-text-primary">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Story section */}
      <div className="mt-16 rounded-2xl border border-border-subtle bg-surface-card p-8 shadow-card sm:p-10">
        <h2 className="text-xl font-semibold text-text-primary">Our story</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-muted">
          <p>
            Nexora started with a simple observation: building on the modern web
            should feel effortless. Too many platforms force you to choose between
            power and simplicity. We decided to build one that delivers both.
          </p>
          <p>
            Today, Nexora serves thousands of projects across the globe — from
            indie makers shipping their first MVP to established teams scaling
            their infrastructure. We're just getting started.
          </p>
        </div>
      </div>
    </div>
  )
}
