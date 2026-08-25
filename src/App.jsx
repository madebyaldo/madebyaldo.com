import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Clients from './pages/contact/Clients'
import Crew from './pages/contact/Crew'
import WorkCaseStudy from './pages/work/WorkCaseStudy'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/clients" element={<Clients />} />
        <Route path="/contact/crew" element={<Crew />} />
        <Route path="/work/:slug" element={<WorkCaseStudy />} />
      </Routes>
    </div>
  )
}

export default App

