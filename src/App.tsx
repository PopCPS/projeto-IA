import { Graficos } from './components/graficos'
import { Header } from './components/header'
import './index.css'

function App() {

  return (
    <div className='flex flex-col gap-10 relative bg-black min-h-screen text-white'>
      <Header />
      <Graficos />  
    </div>
  )
}

export default App
