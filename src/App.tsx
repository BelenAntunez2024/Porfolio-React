import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import RootLayout from './components/layout/RootLayout'
import Home from './components/page/Home'
import Skills from './components/page/Skills'
import Contacto from './components/page/Contacto'
import Projects from './components/page/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<h1>404 - No existe Pagina</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App