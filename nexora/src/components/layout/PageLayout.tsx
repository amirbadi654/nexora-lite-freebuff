import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import BuiltByCredit from '../ui/BuiltByCredit'

export function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BuiltByCredit />
    </>
  )
}

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="min-h-screen pb-20 pt-16 lg:pb-8 lg:pl-60">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:py-8">
          {children}
        </div>
      </main>
      <BuiltByCredit />
    </>
  )
}
