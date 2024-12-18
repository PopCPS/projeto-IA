import { Analise } from "./components/analise"
import { Header } from "./components/header"

export const Prediction = () => {
  return (
    <div className='flex flex-col items-center gap-10 relative bg-black min-h-screen text-white'>
      <Header />
      <Analise />
    </div>
  )
}