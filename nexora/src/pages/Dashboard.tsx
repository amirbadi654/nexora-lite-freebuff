import { Link } from 'react-router-dom'
import {
  Star,
  TrendingUp,
  Shield,
  Flame,
  Zap,
  CheckCircle,
  XCircle,
  Trophy,
  ChevronRight,
  Check,
} from 'lucide-react'

const MOCK = {
  address: '0xA3f2...B891',
  fullAddress: '0xA3f2B891C2D3E4F5A6B7C8D9E0F1A2B3C4D5E6F7',
  xp: 320,
  level: 3,
  levelProgress: 20,
  xpToNext: 80,
  rank: 'Bronze' as const,
  rankScore: 245,
  streak: 3,
  premium: false,
  correct: 18,
  total: 24,
}

const RANK_CONFIG = {
  Beginner: { color: '#64748B', label: 'Beginner' },
  Bronze: { color: '#B87333', label: 'Bronze' },
  Silver: { color: '#C0C0C0', label: 'Silver' },
  Gold: { color: '#FBBF24', label: 'Gold' },
} as const

type RankName = keyof typeof RANK_CONFIG

const activity = [
  { icon: 'correct', text: 'Correct Answer', sub: 'AI & Technology · Hard', xp: '+60 XP', time: '2h ago' },
  { icon: 'streak', text: 'Streak Bonus', sub: 'Day 3 complete', xp: '+30 XP', time: '2h ago' },
  { icon: 'correct', text: 'Correct Answer', sub: 'Football · Medium', xp: '+20 XP', time: '5h ago' },
  { icon: 'wrong', text: 'Wrong Answer', sub: 'General Knowledge · Hard', xp: '—', time: '1d ago' },
  { icon: 'rank', text: 'Bronze Rank', sub: 'Rank achieved!', xp: '—', time: '2d ago' },
]

export default function Dashboard() {
  const rank = RANK_CONFIG[MOCK.rank as RankName]

  return (
    <>
      {/* ══════════════════════════════════════════
          BLOCK 1: PREMIUM BANNER (hidden when premium=false)
          ══════════════════════════════════════════ */}
      {MOCK.premium && (
        <div
          className="mb-6 flex items-center gap-3 rounded-2xl border border-gold-dim p-4"
          style={{
            background:
              'linear-gradient(135deg, rgba(251,191,36,0.1), rgba(139,92,246,0.1))',
          }}
        >
          <Star size={20} className="text-gold" />
          <span className="text-sm font-semibold text-gold">
            ⭐ Premium Member — Enhanced profile &amp; leaderboard status
          </span>
        </div>
      )}

      {/* ══════════════════════════════════════════
          BLOCK 2: WELCOME BANNER
          ══════════════════════════════════════════ */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand-dim bg-bg-card p-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-text-muted">Welcome back,</p>
          <p className="mt-1 text-xl font-bold text-text-primary">
            {MOCK.address}
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Keep your streak alive. New challenges await.
          </p>
        </div>
        <Link
          to="/challenge"
          className="flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-bold text-white shadow-brand transition hover:opacity-90"
        >
          <Zap size={16} />
          Start Challenge
        </Link>
      </div>

      {/* ══════════════════════════════════════════
          BLOCK 3: STATS ROW (4 cards)
          ══════════════════════════════════════════ */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {/* Card A — Level */}
        <div className="rounded-2xl border border-brand-dim bg-bg-card p-5">
          <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-text-muted">
            Current Level
            <TrendingUp size={14} />
          </div>
          <p className="text-4xl font-black text-brand">{MOCK.level}</p>
          <div className="mt-3 h-2 rounded-full bg-bg-secondary">
            <div
              className="h-full rounded-full bg-brand-gradient"
              style={{ width: `${MOCK.levelProgress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-text-muted">
            320 / 400 XP
          </p>
          <p className="text-[11px] text-text-muted opacity-70">
            {MOCK.xpToNext} XP to Level {MOCK.level + 1}
          </p>
        </div>

        {/* Card B — Rank */}
        <div className="rounded-2xl border border-brand-dim bg-bg-card p-5">
          <p className="mb-3 text-xs font-medium text-text-muted">Current Rank</p>
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border-2"
            style={{
              borderColor: rank.color,
              background: `${rank.color}1a`,
            }}
          >
            <Shield size={24} style={{ color: rank.color }} />
          </div>
          <p className="mt-2 text-xl font-bold" style={{ color: rank.color }}>
            {rank.label}
          </p>
        </div>

        {/* Card C — Streak */}
        <div className="rounded-2xl border border-brand-dim bg-bg-card p-5">
          <p className="mb-3 text-xs font-medium text-text-muted">Day Streak</p>
          <div className="flex items-center gap-2">
            <Flame size={28} className="text-[#F97316]" />
            <span className="text-4xl font-black text-[#F97316]">
              {MOCK.streak}
            </span>
          </div>
          <p className="mt-2 text-xs text-text-muted">
            Day {MOCK.streak + 1} → +40 XP
          </p>
          <p className="text-[11px] text-text-muted opacity-70">Keep going!</p>
        </div>

        {/* Card D — Total XP */}
        <div className="rounded-2xl border border-gold-dim bg-[rgba(251,191,36,0.02)] p-5">
          <p className="mb-3 text-xs font-medium text-text-muted">Total XP</p>
          <p className="text-4xl font-black text-gold">⚡ {MOCK.xp}</p>
          <p className="mt-2 text-xs text-text-muted">XP Earned Total</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BLOCK 4: QUICK CHALLENGE + STREAK TRACKER
          ══════════════════════════════════════════ */}
      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* LEFT — Quick Challenge Card */}
        <div className="rounded-2xl border border-brand-dim bg-bg-card p-6">
          <h3 className="mb-4 text-lg font-bold text-text-primary">
            Start a Challenge
          </h3>
          <div className="space-y-3">
            {/* Row 1 */}
            <Link
              to="/challenge"
              className="flex cursor-pointer items-center justify-between rounded-xl bg-bg-secondary p-4 transition hover:border hover:border-brand/20 hover:bg-[rgba(30,41,59,0.9)]"
            >
              <span className="text-sm font-semibold text-text-primary">
                🧠 General Knowledge
              </span>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[rgba(56,189,248,0.1)] px-2 py-0.5 text-xs text-interactive">
                  10–40 XP
                </span>
                <ChevronRight size={16} className="text-text-muted" />
              </div>
            </Link>
            {/* Row 2 */}
            <Link
              to="/challenge"
              className="flex cursor-pointer items-center justify-between rounded-xl bg-bg-secondary p-4 transition hover:border hover:border-brand/20 hover:bg-[rgba(30,41,59,0.9)]"
            >
              <span className="text-sm font-semibold text-text-primary">
                ⚽ Football
              </span>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[rgba(16,185,129,0.1)] px-2 py-0.5 text-xs text-success">
                  10–40 XP
                </span>
                <ChevronRight size={16} className="text-text-muted" />
              </div>
            </Link>
            {/* Row 3 */}
            <Link
              to="/challenge"
              className="flex cursor-pointer items-center justify-between rounded-xl bg-bg-secondary p-4 transition hover:border hover:border-brand/20 hover:bg-[rgba(30,41,59,0.9)]"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                🤖 AI &amp; Technology
                <span className="rounded-full bg-gold/15 px-1.5 py-0.5 text-[10px] text-gold">
                  Best XP
                </span>
              </span>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[rgba(139,92,246,0.1)] px-2 py-0.5 text-xs text-brand">
                  15–60 XP
                </span>
                <ChevronRight size={16} className="text-text-muted" />
              </div>
            </Link>
          </div>
        </div>

        {/* RIGHT — Streak Tracker */}
        <div className="rounded-2xl border border-brand-dim bg-bg-card p-6">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="font-bold text-text-primary">
              Daily Streak 🔥
            </h3>
            <span className="text-xs text-gold">150 XP available</span>
          </div>
          <p className="mt-1 text-xs text-text-muted">
            Complete a challenge each day
          </p>

          {/* Streak days */}
          <div className="mb-4 mt-6 flex justify-between">
            {[1, 2, 3].map((day) => (
              <div key={day} className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand bg-[rgba(139,92,246,0.15)]">
                  <Check size={18} className="text-brand" />
                </div>
                <span className="text-[11px] text-text-muted">
                  +{day * 10}
                </span>
              </div>
            ))}
            {/* Day 4 — Current */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 animate-pulse-ring items-center justify-center rounded-full border-2 border-interactive bg-[rgba(56,189,248,0.1)]">
                <span className="text-sm font-bold text-interactive">4</span>
              </div>
              <span className="text-[11px] text-text-muted">+40</span>
            </div>
            {/* Day 5 — Future */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/10 bg-bg-secondary">
                <span className="text-sm text-text-muted opacity-40">5</span>
              </div>
              <span className="text-[11px] text-text-muted">+50</span>
            </div>
          </div>

          <p className="text-center text-xs text-text-muted">
            Complete 5 days →{' '}
            <span className="font-bold text-gold">150 XP</span> Bonus
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BLOCK 5: RECENT ACTIVITY
          ══════════════════════════════════════════ */}
      <div className="rounded-2xl border border-brand-dim bg-bg-card p-6">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-bold text-text-primary">Recent Activity</h3>
          <span className="cursor-pointer text-sm text-brand transition hover:underline">
            View All
          </span>
        </div>

        <div className="divide-y divide-bg-secondary">
          {activity.map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              {/* Icon */}
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  item.icon === 'correct'
                    ? 'bg-[rgba(16,185,129,0.1)]'
                    : item.icon === 'wrong'
                      ? 'bg-[rgba(239,68,68,0.1)]'
                      : item.icon === 'streak'
                        ? 'bg-[rgba(249,115,22,0.1)]'
                        : 'bg-[rgba(251,191,36,0.1)]'
                }`}
              >
                {item.icon === 'correct' && (
                  <CheckCircle size={16} className="text-success" />
                )}
                {item.icon === 'wrong' && (
                  <XCircle size={16} className="text-danger" />
                )}
                {item.icon === 'streak' && (
                  <Flame size={16} className="text-[#F97316]" />
                )}
                {item.icon === 'rank' && (
                  <Trophy size={16} className="text-gold" />
                )}
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-sm font-medium text-text-primary">
                  {item.text}
                </p>
                <p className="mt-0.5 text-xs text-text-muted">{item.sub}</p>
              </div>

              {/* XP & Time */}
              <div className="text-right">
                <p
                  className={`text-sm font-bold ${
                    item.xp.startsWith('+') ? 'text-gold' : 'text-text-muted'
                  }`}
                >
                  {item.xp}
                </p>
                <p className="mt-0.5 text-[11px] text-text-muted">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
