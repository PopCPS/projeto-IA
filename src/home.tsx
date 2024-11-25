import { Graficos } from './components/graficos'
import { Header } from './components/header'
import './index.css'

export const Home = () => {
  return (
    <div className='flex flex-col gap-10 relative bg-black min-h-screen text-white'>
      <Header />
      <Graficos />  
    </div>
  )
}
