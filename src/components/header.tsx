import { Menu } from "lucide-react"
import { useState } from "react"

export const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header 
      id="header" 
      className="bg-cover bg-right"
      style={{ backgroundImage: 'url("/bike-background.png")' }}
    >
      <div className="flex items-center justify-between p-8">
        <img 
          className="w-1/2 max-w-40"
          src="GOALZONE@3x.png" 
        />
        <nav>
        <section className="flex md:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <Menu size={32} className="text-white" />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <Menu size={32} className="text-white" />
            </div>
            <ul className="flex flex-col items-center gap-6">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/analise">Analysis</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://www.kaggle.com/datasets/ddosad/datacamps-data-science-associate-certification" target="_blank">Data Frame</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 md:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/analise">Analysis</a>
          </li>
          <li>
            <a href="https://www.kaggle.com/datasets/ddosad/datacamps-data-science-associate-certification" target="_blank">Data Frame</a>
          </li>
        </ul>
      </nav>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-2xl p-4 rounded-md bg-black/40">Exploratory Analysis</h2>
        <p className="block p-4 m-4 rounded-md text-justify bg-black/40 md:w-3/5">
          GoalZone is a Canadian gym chain that runs yoga, cycling, HIIT classes, among others. However, these classes, which have a capacity of 18 to 25 students, have an average attendance of 30%. The objective is to predict whether or not a student who reserved a place in the class will show up to make more places available.
        </p>
      </div>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: black;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </header> 
  )
}
