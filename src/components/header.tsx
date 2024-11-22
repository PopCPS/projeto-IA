import { Menu } from "lucide-react"

export const Header = () => {
  return (
    <header 
      id="header" 
      className="bg-cover bg-right"
      style={{ backgroundImage: 'url("public/bike-background.png")' }}
    >
      <div className="flex items-center justify-between p-8">
        <img 
          className="w-1/2 max-w-40"
          src="GOALZONE@3x.png" 
        />
        <button>
          <Menu size={32} />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-2xl p-4 rounded-md bg-black/40">Exploratory Analysis</h2>
        <p className="block p-4 m-4 rounded-md text-justify bg-black/40">
          GoalZone is a Canadian gym chain that runs yoga, cycling, HIIT classes, among others. However, these classes, which have a capacity of 18 to 25 students, have an average attendance of 30%. The objective is to predict whether or not a student who reserved a place in the class will show up to make more places available.
        </p>
      </div>
    </header> 
  )
}
