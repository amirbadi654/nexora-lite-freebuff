interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width = 36, height = 36, className = '' }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="nexoraGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      {/* Hexagonal outline */}
      <polygon
        points="18,2 32,10 32,26 18,34 4,26 4,10"
        stroke="url(#nexoraGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Stylized N — left diagonal */}
      <line
        x1="12"
        y1="24"
        x2="12"
        y2="12"
        stroke="url(#nexoraGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Stylized N — diagonal cross */}
      <line
        x1="12"
        y1="12"
        x2="22"
        y2="24"
        stroke="url(#nexoraGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Stylized N — right vertical */}
      <line
        x1="22"
        y1="24"
        x2="22"
        y2="12"
        stroke="url(#nexoraGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Circuit node center */}
      <circle cx="18" cy="18" r="3" fill="url(#nexoraGrad)" />
    </svg>
  )
}

export function LogoWithText() {
  return (
    <div className="flex items-center gap-2">
      <Logo width={32} height={32} />
      <span className="font-black text-xl text-gradient">Nexora</span>
    </div>
  )
}
