import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-primary">
        <Routes>
          <Route path="/" element={
            <div className="flex items-center justify-center min-h-screen">
              <h1 className="text-4xl font-black text-gradient">
                Nexora — Setup Complete ✓
              </h1>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
