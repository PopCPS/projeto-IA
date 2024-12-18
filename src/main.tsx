import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Prediction } from './prediction'
import { Home } from './home'

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
