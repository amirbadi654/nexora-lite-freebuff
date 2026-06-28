import { useState } from 'react'
import { Star, Zap, Flame, ChevronRight, ArrowLeft, XCircle, Check, X } from 'lucide-react'
import Logo from '../components/ui/Logo'

type State = 'category' | 'difficulty' | 'loading' | 'question' | 'correct' | 'wrong'

interface Category {
  id: string
  name: string
  icon: string
  xp: string
  color: string
  bg: string
  border: string
  best?: boolean
}

interface Difficulty {
  id: string
  label: string
  icon: typeof Star
  color: string
  bg: string
  border: string
  desc: string
  xp: string
}

const CATEGORIES: Category[] = [
  { id: 'general', name: 'General Knowledge', icon: '🧠', xp: '10–40', color: '#38BDF8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.3)' },
  { id: 'football', name: 'Football', icon: '⚽', xp: '10–40', color: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.3)' },
  { id: 'ai', name: 'AI & Technology', icon: '🤖', xp: '15–60', color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.4)', best: true },
]

const DIFFICULTIES: Difficulty[] = [
  { id: 'easy',   label: 'Easy',   icon: Star,  color: '#10B981', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.4)',  desc: 'Accessible to everyone',    xp: '+10–15 XP' },
  { id: 'medium', label: 'Medium', icon: Zap,   color: '#38BDF8', bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.4)',  desc: 'Requires some knowledge',   xp: '+20–30 XP' },
  { id: 'hard',   label: 'Hard',   icon: Flame, color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.4)', desc: 'Experts only',              xp: '+40–60 XP' },
]

const MOCK_QUESTION = {
  text: 'Which company developed the GPT series of large language models?',
  options: { A: 'Google DeepMind', B: 'Meta AI', C: 'OpenAI', D: 'Anthropic' },
  correct: 'C',
  explanation: 'OpenAI developed the GPT (Generative Pre-trained Transformer) series, including GPT-3 and GPT-4, which became widely used language models.',
}

const STATE_BTNS: State[] = ['category', 'difficulty', 'loading', 'question', 'correct', 'wrong']

function getTimerColor(timeLeft: number): string {
  if (timeLeft > 15) return '#38BDF8'
  if (timeLeft > 8) return '#FBBF24'
  return '#EF4444'
}

function LoadingDots() {
  return (
    <div className="mt-8 flex justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-2 w-2 rounded-full bg-brand"
          style={{ animation: `bounceXP 0.8s ${i * 0.2}s infinite alternate` }}
        />
      ))}
    </div>
  )
}

export default function Challenge() {
  const [uiState, setUiState] = useState<State>('category')
  const [selectedCat, setSelectedCat] = useState<Category | null>(null)
  const [selectedDiff, setSelectedDiff] = useState<Difficulty | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [timeLeft] = useState(30)

  const CIR = 30
  const DASH = 2 * Math.PI * CIR
  const OFFSET = DASH * (1 - timeLeft / 30)
  const timerColor = getTimerColor(timeLeft)

  return (
    <>
      {/* Dev toggle buttons — remove later */}
      <div className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-brand-dim bg-bg-card p-3">
        <p className="w-full text-xs font-medium text-text-muted">Dev: Preview State</p>
        {STATE_BTNS.map((s) => (
          <button
            key={s}
            onClick={() => setUiState(s)}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
              uiState === s
                ? 'bg-brand text-white'
                : 'bg-bg-secondary text-text-muted hover:text-text-primary'
            }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          STATE 1: CATEGORY SELECTION
          ══════════════════════════════════════════ */}
      {uiState === 'category' && (
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h1 className="mb-2 text-3xl font-bold text-text-primary">Choose Your Challenge</h1>
            <p className="text-text-muted">Select a category to begin</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCat(cat); setUiState('difficulty') }}
                className="group cursor-pointer rounded-2xl p-7 text-left transition-all duration-250 hover:scale-[1.02] hover:shadow-brand"
                style={{ background: cat.bg, border: `1px solid ${cat.border}` }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{cat.icon}</span>
                  {cat.best && (
                    <span className="rounded-full bg-[rgba(251,191,36,0.15)] px-2 py-1 text-xs text-gold">
                      HIGHEST XP
                    </span>
                  )}
                </div>
                <h3 className="mb-2 mt-4 text-xl font-bold text-text-primary">{cat.name}</h3>
                <p className="mb-5 text-sm leading-relaxed text-text-muted">
                  {cat.id === 'general'
                    ? 'Science, history, geography, culture and more to test your knowledge.'
                    : cat.id === 'football'
                      ? 'World Cup, leagues, famous players, records and history of the beautiful game.'
                      : 'AI, ML, Web3, Blockchain and emerging technologies.'}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-full px-2 py-0.5 text-sm"
                    style={{ background: `${cat.color}1a`, color: cat.color }}
                  >
                    {cat.xp} XP
                  </span>
                  <ChevronRight size={16} className="text-text-muted transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          STATE 2: DIFFICULTY SELECTION
          ══════════════════════════════════════════ */}
      {uiState === 'difficulty' && selectedCat && (
        <div className="mx-auto max-w-lg">
          <button
            onClick={() => { setUiState('category'); setSelectedDiff(null) }}
            className="mb-8 flex cursor-pointer items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={16} />
            Back to categories
          </button>

          <h2 className="mb-2 text-2xl font-bold text-text-primary">
            {selectedCat.icon} {selectedCat.name}
          </h2>
          <p className="mb-8 text-text-muted">Choose your difficulty level</p>

          <div className="space-y-3">
            {DIFFICULTIES.map((diff) => {
              const Icon = diff.icon
              return (
                <button
                  key={diff.id}
                  onClick={() => { setSelectedDiff(diff); setUiState('loading') }}
                  className="flex w-full cursor-pointer items-center rounded-2xl p-5 text-left transition-all duration-200 hover:scale-[1.01]"
                  style={{ background: diff.bg, border: `1px solid ${diff.border}` }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ border: `1px solid ${diff.border}`, background: `${diff.color}0d` }}
                  >
                    <Icon size={20} style={{ color: diff.color }} />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-bold text-text-primary">{diff.label}</p>
                    <p className="text-sm text-text-muted">{diff.desc}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold" style={{ color: diff.color }}>
                      {diff.xp}
                    </span>
                    <ChevronRight size={16} className="text-text-muted" />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          STATE 3: LOADING
          ══════════════════════════════════════════ */}
      {uiState === 'loading' && (
        <div className="mx-auto mt-20 max-w-sm text-center">
          <div className="rounded-3xl border border-brand-dim bg-bg-card p-12">
            <div className="mx-auto w-fit">
              <Logo width={56} height={56} className="animate-spin-slow" />
            </div>
            <LoadingDots />
            <p className="mt-6 text-sm text-text-muted">AI is generating your question...</p>
            <p className="mt-2 text-xs text-text-muted opacity-40">Powered by Gemini AI</p>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          STATE 4: QUESTION
          ══════════════════════════════════════════ */}
      {uiState === 'question' && selectedCat && selectedDiff && (
        <div className="mx-auto max-w-2xl">
          {/* Top row */}
          <div className="mb-6 flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full bg-bg-secondary px-3 py-1.5 text-sm">
              {selectedCat.icon} {selectedCat.name}
            </span>
            <span
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{
                background: selectedDiff.bg,
                border: `1px solid ${selectedDiff.border}`,
                color: selectedDiff.color,
              }}
            >
              {selectedDiff.label}
            </span>
            <span className="text-sm font-bold text-gold">⚡ +40 XP</span>
          </div>

          {/* Timer */}
          <div className="mb-6 flex justify-center">
            <div className="relative h-[72px] w-[72px]">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r={CIR} fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="4" />
                <circle
                  cx="36" cy="36" r={CIR}
                  fill="none"
                  stroke={timerColor}
                  strokeWidth="4"
                  strokeDasharray={DASH}
                  strokeDashoffset={OFFSET}
                  strokeLinecap="round"
                  transform="rotate(-90 36 36)"
                />
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center text-xl font-black"
                style={{ color: timerColor }}
              >
                {timeLeft}
              </span>
            </div>
          </div>

          {/* Question card */}
          <div className="mb-5 rounded-2xl border border-brand-dim bg-bg-card p-7">
            <p className="text-lg font-semibold leading-relaxed text-text-primary sm:text-xl">
              {MOCK_QUESTION.text}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {(Object.entries(MOCK_QUESTION.options) as [string, string][]).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className="flex w-full cursor-pointer items-center gap-3 rounded-xl p-4 text-left transition-all duration-150"
                style={{
                  background: selected === key ? 'rgba(56,189,248,0.08)' : undefined,
                  border: selected === key
                    ? '1px solid #38BDF8'
                    : '1px solid rgba(139,92,246,0.1)',
                }}
                onMouseEnter={(e) => {
                  if (selected !== key) {
                    const el = e.currentTarget
                    el.style.borderColor = 'rgba(139,92,246,0.4)'
                    el.style.background = 'rgba(139,92,246,0.04)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selected !== key) {
                    const el = e.currentTarget
                    el.style.borderColor = 'rgba(139,92,246,0.1)'
                    el.style.background = ''
                  }
                }}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    selected === key
                      ? 'bg-interactive text-white'
                      : 'border border-brand/20 bg-bg-card text-text-muted'
                  }`}
                >
                  {key}
                </div>
                <span className="text-sm text-text-primary sm:text-base">{value}</span>
              </button>
            ))}
          </div>

          {/* Submit button */}
          <button
            disabled={!selected}
            className={`mt-5 w-full rounded-xl py-4 text-lg font-bold text-white transition ${
              selected
                ? 'bg-brand-gradient shadow-brand hover:opacity-90'
                : 'cursor-not-allowed opacity-40'
            }`}
            onClick={() => setUiState('correct')}
          >
            Submit Answer
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════════
          STATE 5: CORRECT
          ══════════════════════════════════════════ */}
      {uiState === 'correct' && (
        <div className="mx-auto max-w-lg text-center">
          <div className="rounded-3xl border border-brand-dim bg-bg-card p-10">
            {/* Animated check circle */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-success bg-[rgba(16,185,129,0.1)]">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-success">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="100"
                  strokeDashoffset="0"
                  style={{ animation: 'checkDraw 0.5s ease-out' }}
                />
              </svg>
            </div>

            <h2 className="mt-6 text-3xl font-black text-success">Correct!</h2>
            <p className="mb-1 mt-2 animate-bounce-xp text-4xl font-black text-gold">+40 XP Earned</p>
            <p className="text-sm text-text-muted">⚡ added to your total</p>

            {/* Explanation */}
            <div className="mt-6 rounded-xl bg-bg-secondary p-4 text-left">
              <p className="mb-2 text-xs font-medium text-text-muted">💡 Explanation</p>
              <p className="text-sm leading-relaxed text-text-primary">{MOCK_QUESTION.explanation}</p>
            </div>

            {/* Options review */}
            <div className="mt-4 space-y-2">
              {(Object.entries(MOCK_QUESTION.options) as [string, string][]).map(([key, value]) => {
                const isCorrect = key === MOCK_QUESTION.correct
                return (
                  <div
                    key={key}
                    className="flex items-center gap-2 rounded-xl p-3"
                    style={{
                      background: isCorrect ? 'rgba(16,185,129,0.1)' : undefined,
                      border: isCorrect ? '1px solid #10B981' : undefined,
                    }}
                  >
                    {isCorrect && <Check size={16} className="text-success" />}
                    <span className="text-sm text-text-primary">
                      {key}. {value}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-3">
              <button
                className="flex-1 rounded-xl bg-brand-gradient px-8 py-3 font-bold text-white shadow-brand transition hover:opacity-90"
                onClick={() => { setUiState('loading'); setSelected(null) }}
              >
                Next Challenge
              </button>
              <button
                className="flex-1 rounded-xl border border-brand-dim bg-bg-secondary px-8 py-3 font-bold text-text-primary transition hover:bg-bg-card"
                onClick={() => { setUiState('category'); setSelectedCat(null); setSelectedDiff(null); setSelected(null) }}
              >
                Change Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          STATE 6: WRONG
          ══════════════════════════════════════════ */}
      {uiState === 'wrong' && (
        <div className="mx-auto max-w-lg text-center">
          <div className="rounded-3xl border border-brand-dim bg-bg-card p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-danger bg-[rgba(239,68,68,0.1)]">
              <XCircle size={36} className="text-danger" />
            </div>

            <h2 className="mt-6 text-3xl font-black text-danger">Not Quite Right</h2>
            <p className="mt-2 text-text-muted">No XP earned this time.</p>

            {/* Explanation */}
            <div className="mt-6 rounded-xl bg-bg-secondary p-4 text-left">
              <p className="mb-2 text-xs font-medium text-text-muted">💡 Explanation</p>
              <p className="text-sm leading-relaxed text-text-primary">{MOCK_QUESTION.explanation}</p>
            </div>

            {/* Options review */}
            <div className="mt-4 space-y-2">
              {(Object.entries(MOCK_QUESTION.options) as [string, string][]).map(([key, value]) => {
                const isCorrect = key === MOCK_QUESTION.correct
                const isUserWrong = selected === key && !isCorrect
                return (
                  <div
                    key={key}
                    className="flex items-center gap-2 rounded-xl p-3"
                    style={{
                      background: isCorrect
                        ? 'rgba(16,185,129,0.1)'
                        : isUserWrong
                          ? 'rgba(239,68,68,0.1)'
                          : undefined,
                      border: isCorrect
                        ? '1px solid #10B981'
                        : isUserWrong
                          ? '1px solid #EF4444'
                          : undefined,
                    }}
                  >
                    {isCorrect && <Check size={16} className="text-success" />}
                    {isUserWrong && <X size={16} className="text-danger" />}
                    <span className="text-sm text-text-primary">
                      {key}. {value}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-3">
              <button
                className="flex-1 rounded-xl bg-brand-gradient px-8 py-3 font-bold text-white shadow-brand transition hover:opacity-90"
                onClick={() => { setUiState('loading'); setSelected(null) }}
              >
                Try Again
              </button>
              <button
                className="flex-1 rounded-xl border border-brand-dim bg-bg-secondary px-8 py-3 font-bold text-text-primary transition hover:bg-bg-card"
                onClick={() => { setUiState('category'); setSelectedCat(null); setSelectedDiff(null); setSelected(null) }}
              >
                Change Category
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
