import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeLayout, DashboardLayout } from './components/layout/PageLayout'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-primary">
        <Routes>
          {/* Home routes */}
          <Route
            path="/"
            element={
              <HomeLayout>
                <div className="flex min-h-screen items-center justify-center pt-16">
                  <h1 className="text-4xl font-black text-gradient">
                    Nexora — Setup Complete ✓
                  </h1>
                </div>
              </HomeLayout>
            }
          />

          {/* Dashboard routes */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <h1 className="text-2xl font-bold text-text-primary">
                  Dashboard
                </h1>
              </DashboardLayout>
            }
          />
          <Route
            path="/challenge"
            element={
              <DashboardLayout>
                <h1 className="text-2xl font-bold text-text-primary">
                  Challenge
                </h1>
              </DashboardLayout>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <DashboardLayout>
                <h1 className="text-2xl font-bold text-text-primary">
                  Leaderboard
                </h1>
              </DashboardLayout>
            }
          />
          <Route
            path="/shop"
            element={
              <DashboardLayout>
                <h1 className="text-2xl font-bold text-text-primary">
                  Shop
                </h1>
              </DashboardLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <DashboardLayout>
                <h1 className="text-2xl font-bold text-text-primary">
                  Profile
                </h1>
              </DashboardLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <DashboardLayout>
                <h1 className="text-2xl font-bold text-text-primary">
                  Settings
                </h1>
              </DashboardLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
