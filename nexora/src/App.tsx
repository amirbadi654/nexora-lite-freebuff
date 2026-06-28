import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeLayout, DashboardLayout } from './components/layout/PageLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-primary">
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <HomeLayout>
                <Home />
              </HomeLayout>
            }
          />

          {/* Dashboard route */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
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
