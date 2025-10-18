import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Objectives from './pages/Objectives'
import Team from './pages/Team'
import GetInvolved from './pages/GetInvolved'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/team" element={<Team />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App