import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './Home'
import { Prediction } from './prediction'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/analise' element={<Prediction />} />
        </Routes>
      </Router>
  </StrictMode>,
)
