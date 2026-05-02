import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Timeline = lazy(() => import('./pages/Timeline'))
const DocumentRequirements = lazy(() => import('./pages/DocumentRequirements'))
const Eligibility = lazy(() => import('./pages/Eligibility'))
const Accessibility = lazy(() => import('./pages/Accessibility'))
const AIAssistant = lazy(() => import('./components/AIAssistant'))

function App() {
  return (
    <Suspense fallback={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--text-color)'}}><h2>Loading...</h2></div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="documents" element={<DocumentRequirements />} />
          <Route path="eligibility" element={<Eligibility />} />
          <Route path="accessibility" element={<Accessibility />} />
        </Route>
      </Routes>
      <AIAssistant />
    </Suspense>
  )
}

export default App
