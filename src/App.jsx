import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import DocumentRequirements from './pages/DocumentRequirements'
import Eligibility from './pages/Eligibility'
import Accessibility from './pages/Accessibility'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="documents" element={<DocumentRequirements />} />
        <Route path="eligibility" element={<Eligibility />} />
        <Route path="accessibility" element={<Accessibility />} />
      </Route>
    </Routes>
  )
}

export default App
