import { Link } from 'react-router-dom'
import {
  Sparkles,
  Wallet,
  ChevronDown,
  Globe,
  Cpu,
  Trophy,
  Shield,
  Zap,
  Flame,
  BarChart3,
  CircleDot,
  Brain,
} from 'lucide-react'
import Logo from '../components/ui/Logo'

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          SECTION 1: HERO
          ══════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center overflow-hidden">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-100" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand opacity-5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-20 h-80 w-80 rounded-full bg-interactive opacity-5 blur-3xl" />

        {/* Logo watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Logo width={480} height={480} className="opacity-[0.03] blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-24 pt-36 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-[rgba(139,92,246,0.1)] px-4 py-2">
            <Sparkles size={14} className="text-brand" />
            <span className="text-sm font-medium text-brand">
              AI-Powered Competitive Learning
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6">
            <span className="block text-5xl font-black leading-tight text-text-primary sm:text-6xl lg:text-7xl">
              Challenge Your Mind.
            </span>
            <span className="text-gradient mt-1 block text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Climb the Ranks.
            </span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
            AI generates unique challenges every time. Your wallet is your
            identity. Earn XP, level up, unlock ranks, and compete globally.
          </p>

          {/* Buttons */}
          <div className="mb-14 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 rounded-2xl bg-brand-gradient px-8 py-4 text-lg font-bold text-white shadow-brand transition hover:opacity-90">
              <Wallet size={20} />
              Connect Wallet to Start
            </button>
            <Link
              to="/leaderboard"
              className="rounded-2xl border border-brand/30 bg-[rgba(139,92,246,0.1)] px-8 py-4 font-semibold text-brand transition hover:bg-[rgba(139,92,246,0.18)]"
            >
              View Leaderboard
            </Link>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-brand-dim bg-bg-card px-4 py-2 text-sm text-text-muted">
              🧠 General Knowledge
            </span>
            <span className="rounded-full border border-brand-dim bg-bg-card px-4 py-2 text-sm text-text-muted">
              ⚽ Football
            </span>
            <span className="rounded-full border border-brand-dim bg-bg-card px-4 py-2 text-sm text-text-muted">
              🤖 AI & Technology
            </span>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 animate-bounce">
            <ChevronDown size={24} className="text-text-muted opacity-40" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2: STATS BAR
          ══════════════════════════════════════════ */}
      <section className="border-y border-brand-dim bg-bg-card py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-bg-secondary px-4">
          <div className="px-8 text-center">
            <p className="text-gradient mb-1 text-4xl font-black">3</p>
            <p className="text-sm text-text-muted">Categories</p>
          </div>
          <div className="px-8 text-center">
            <p className="text-gradient mb-1 text-4xl font-black">3</p>
            <p className="text-sm text-text-muted">Difficulty Levels</p>
          </div>
          <div className="px-8 text-center">
            <p className="text-gradient mb-1 text-4xl font-black">4</p>
            <p className="text-sm text-text-muted">Rank Tiers</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3: HOW IT WORKS
          ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-black text-text-primary sm:text-4xl">
            How Nexora Works
          </h2>
          <p className="text-text-muted">Three steps to start competing</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative rounded-2xl border border-brand-dim bg-bg-card p-7 transition-all duration-300 hover:border-brand/40 hover:shadow-glow">
            <span className="absolute right-5 top-5 text-5xl font-black text-text-muted opacity-10">
              1
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(139,92,246,0.1)]">
              <Wallet size={24} className="text-brand" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-text-primary">
              Connect Your Wallet
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Connect MetaMask to create your Web3 identity. Any network works
              for login.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl border border-brand-dim bg-bg-card p-7 transition-all duration-300 hover:border-brand/40 hover:shadow-glow">
            <span className="absolute right-5 top-5 text-5xl font-black text-text-muted opacity-10">
              2
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(56,189,248,0.1)]">
              <Brain size={24} className="text-interactive" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-text-primary">
              Take AI Challenges
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              AI generates a unique question every time from General Knowledge,
              Football, or AI &amp; Technology.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl border border-brand-dim bg-bg-card p-7 transition-all duration-300 hover:border-brand/40 hover:shadow-glow">
            <span className="absolute right-5 top-5 text-5xl font-black text-text-muted opacity-10">
              3
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(251,191,36,0.1)]">
              <Trophy size={24} className="text-gold" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-text-primary">
              Earn XP &amp; Rank Up
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Collect XP, level up, unlock achievements, maintain your daily
              streak, and climb the global leaderboard.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4: FEATURES GRID
          ══════════════════════════════════════════ */}
      <section className="bg-bg-secondary/30 px-4 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-black text-text-primary">
            Everything Built for Competition
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-brand-dim bg-bg-card p-6 shadow-card transition-colors duration-200 hover:border-brand/30">
            <Sparkles size={36} className="mb-3 text-brand" />
            <h3 className="mb-2 font-semibold text-text-primary">
              AI-Generated Questions
            </h3>
            <p className="text-sm text-text-muted">
              Every question is unique, created by AI in real time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-brand-dim bg-bg-card p-6 shadow-card transition-colors duration-200 hover:border-brand/30">
            <Shield size={36} className="mb-3 text-interactive" />
            <h3 className="mb-2 font-semibold text-text-primary">
              Web3 Identity
            </h3>
            <p className="text-sm text-text-muted">
              Your MetaMask wallet is your account. No signup needed.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-brand-dim bg-bg-card p-6 shadow-card transition-colors duration-200 hover:border-brand/30">
            <Zap size={36} className="mb-3 text-gold" />
            <h3 className="mb-2 font-semibold text-text-primary">
              XP &amp; Level System
            </h3>
            <p className="text-sm text-text-muted">
              Earn XP for every correct answer and level up your profile.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl border border-brand-dim bg-bg-card p-6 shadow-card transition-colors duration-200 hover:border-brand/30">
            <Trophy size={36} className="mb-3 text-rank-bronze" />
            <h3 className="mb-2 font-semibold text-text-primary">
              Rank System
            </h3>
            <p className="text-sm text-text-muted">
              Progress from Beginner to Bronze, Silver, and Gold.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="rounded-2xl border border-brand-dim bg-bg-card p-6 shadow-card transition-colors duration-200 hover:border-brand/30">
            <Flame size={36} className="mb-3 text-[#F97316]" />
            <h3 className="mb-2 font-semibold text-text-primary">
              Daily Streak
            </h3>
            <p className="text-sm text-text-muted">
              Return daily to build your streak and earn bonus XP.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="rounded-2xl border border-brand-dim bg-bg-card p-6 shadow-card transition-colors duration-200 hover:border-brand/30">
            <BarChart3 size={36} className="mb-3 text-success" />
            <h3 className="mb-2 font-semibold text-text-primary">
              Global Leaderboard
            </h3>
            <p className="text-sm text-text-muted">
              Weekly and all-time rankings. Compete with the world.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5: CATEGORY SHOWCASE
          ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-black text-text-primary">
            Choose Your Challenge Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 — General Knowledge */}
          <div className="rounded-2xl border border-cyan-dim bg-bg-card p-7 transition hover:border-interactive/50">
            <Globe size={48} className="mb-4 text-interactive" />
            <h3 className="mb-2 text-xl font-bold text-text-primary">
              General Knowledge
            </h3>
            <p className="mb-5 text-sm text-text-muted">
              Science, history, geography, culture and more
            </p>
            <span className="inline-block rounded-full bg-[rgba(56,189,248,0.1)] px-3 py-1 text-sm text-interactive">
              10–40 XP
            </span>
          </div>

          {/* Card 2 — Football */}
          <div className="rounded-2xl border border-success/25 bg-bg-card p-7 transition hover:border-success/50">
            <CircleDot size={48} className="mb-4 text-success" />
            <h3 className="mb-2 text-xl font-bold text-text-primary">
              Football
            </h3>
            <p className="mb-5 text-sm text-text-muted">
              World Cup, leagues, famous players, records and history
            </p>
            <span className="inline-block rounded-full bg-[rgba(16,185,129,0.1)] px-3 py-1 text-sm text-success">
              10–40 XP
            </span>
          </div>

          {/* Card 3 — AI & Technology (highest XP) */}
          <div className="relative rounded-2xl border border-brand/40 bg-[rgba(139,92,246,0.03)] p-7 transition hover:border-brand/60">
            {/* Highest XP badge */}
            <span className="absolute right-4 top-4 rounded-full bg-[rgba(251,191,36,0.15)] px-2 py-1 text-xs font-bold text-gold">
              HIGHEST XP
            </span>
            <Cpu size={48} className="mb-4 text-brand" />
            <h3 className="mb-2 text-xl font-bold text-text-primary">
              AI &amp; Technology
            </h3>
            <p className="mb-5 text-sm text-text-muted">
              AI, ML, Web3, Blockchain and emerging tech
            </p>
            <span className="inline-block rounded-full bg-[rgba(139,92,246,0.1)] px-3 py-1 text-sm text-brand">
              15–60 XP
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6: BOTTOM CTA
          ══════════════════════════════════════════ */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand-dim bg-bg-card p-12 text-center shadow-glow sm:p-16">
          <h2 className="text-gradient mb-4 text-4xl font-black">
            Ready to Compete?
          </h2>
          <p className="mb-10 text-lg text-text-muted">
            Connect your wallet and start challenging your mind today.
          </p>
          <button className="rounded-2xl bg-brand-gradient px-10 py-4 text-lg font-bold text-white shadow-brand transition hover:opacity-90">
            Connect Wallet &amp; Start
          </button>
          <p className="mt-4 text-xs text-text-muted opacity-60">
            Free · No email · Wallet is your identity
          </p>
        </div>
      </section>
    </>
  )
}
