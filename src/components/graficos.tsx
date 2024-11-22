import { useState } from "react"

export const Graficos = () => {

  const [ isBalanced, setIsBalanced ] = useState<boolean>(false)

  const handleBalance = () => {
    setIsBalanced(!isBalanced)
  }

  return (
    <section className="flex flex-col px-4 gap-10 items-center">

      <button 
        className="w-3/5 p-2 rounded-md text-xl font-semibold text-black bg-cyan"
        onClick={handleBalance}>
        {isBalanced ? 'Unbalance Graphs' : 'Balance Graphs'}
      </button>

      
      <div className="flex flex-col items-center gap-10">

        <h2>Data frame balance</h2>
        <div>
          {isBalanced ? (
            <img src="public/pie-attended-balanced.png" alt="" />            
            ) : (
            <img src="public/pie-attended.png" alt="" />
          )}
        </div>

        <h2 className="text-2xl font-semibold">Histograms</h2>
        <div className="flex flex-col gap-8">

          <div className="space-y-4">
            {isBalanced ? (
              <img src="public/hist-weight-balanced.png" alt="" />
            ) : (
              <img src="public/hist-weight.png" alt="" />
            )}
            <p className="px-8 text-justify">
              We can see that the majority of students who sign up for classes have an average weight of around 80-90 kilos.
            </p>
          </div>

          <div className="space-y-4">
            {isBalanced ? (
              <img src="public/hist-days-before-class-balanced.png" alt="" />
            ) : (
              <img src="public/hist-days-before-class.png" alt="" />
            )}
            <p className="px-8 text-justify">
              Here we see that there is no standard in class reservations.
            </p>
          </div>
          
          <div className="space-y-4">
            {isBalanced ? (
              <img src="public/hist-month-as-member-balanced.png" alt="" />
            ) : (
              <img src="public/hist-month-as-member.png" alt="" />
            )}
            <p className="px-8 text-justify">
            The vast majority of students have been enrolled at the academy for between 1 and 1.5 years.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold">Boxplots</h2>
        <div className="flex flex-col gap-8">

          <div className="space-y-4">
            {isBalanced ? (
              <img src="public/hist-weight-balanced.png" alt="" />
            ) : (
              <img src="public/hist-weight.png" alt="" />
            )}
            <p className="px-8 text-justify">
              We can see that the majority of students who sign up for classes have an average weight of around 80-90 kilos.
            </p>
          </div>

          <div className="space-y-4">
            {isBalanced ? (
              <img src="public/hist-days-before-class-balanced.png" alt="" />
            ) : (
              <img src="public/hist-days-before-class.png" alt="" />
            )}
            <p className="px-8 text-justify">
              Here we see that there is no standard in class reservations.
            </p>
          </div>
          
          <div className="space-y-4">
            {isBalanced ? (
              <img src="public/hist-month-as-member-balanced.png" alt="" />
            ) : (
              <img src="public/hist-month-as-member.png" alt="" />
            )}
            <p className="px-8 text-justify">
            The vast majority of students have been enrolled at the academy for between 1 and 1.5 years.
            </p>
          </div>

        </div>
        
      </div>
      
    </section>
  )
} 
