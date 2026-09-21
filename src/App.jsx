import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import './globals.css'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
