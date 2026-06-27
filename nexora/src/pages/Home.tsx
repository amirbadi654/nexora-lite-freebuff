import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Layers, Globe } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with instant page loads and smooth transitions.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security baked into every layer of the platform.',
  },
  {
    icon: Layers,
    title: 'Modular Architecture',
    description: 'Composable building blocks that adapt to your growing needs.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deployed across the edge for low latency everywhere on the planet.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:pt-32 lg:pt-40">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-96 w-96 rounded-full bg-accent-glow blur-[64px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-default bg-surface-card px-4 py-1.5 text-xs font-medium text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Now in public beta
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Build the future.
            <br />
            <span className="bg-gradient-to-r from-accent via-accent to-accent-soft bg-clip-text text-transparent">
              Ship with Nexora.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-text-secondary sm:text-lg">
            A modern platform designed for creators who demand speed, elegance, and
            control. Everything you need to launch your next big idea.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface-dark shadow-glow transition-all hover:bg-accent-soft hover:shadow-elevated"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-border-default bg-surface-card px-6 py-3 text-sm font-medium text-text-secondary transition-all hover:border-border-strong hover:text-text-primary"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
              Everything you need
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              Powerful features to accelerate your workflow
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border-subtle bg-surface-card p-6 shadow-card transition-all hover:border-border-default hover:shadow-elevated"
              >
                <div className="mb-4 inline-flex rounded-xl bg-accent-dim p-3">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border-default bg-surface-card p-10 text-center shadow-card sm:p-16">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-3 text-sm text-text-muted">
            Join thousands of builders already creating with Nexora.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface-dark transition-all hover:bg-accent-soft"
          >
            Start building
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
