import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'

import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App
