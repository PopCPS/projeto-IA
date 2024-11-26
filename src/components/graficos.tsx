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
            <img src="/pie-attended-balanced.png" alt="" />            
            ) : (
            <img src="/pie-attended.png" alt="" />
          )}
        </div>

        <h2 className="text-2xl font-semibold">Histograms</h2>
        <div className="flex flex-col gap-8 items-center w-full">

          <div className="flex flex-col gap-4 items-center lg:w-2/5">
            {isBalanced ? (
              <img src="/hist-weight-balanced.png" alt="" />
            ) : (
              <img src="/hist-weight.png" alt="" />
            )}
            <p className="px-8 text-justify">
              We can see that the majority of students who sign up for classes have an average weight of around 80-90 kilos.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center lg:w-2/5">
            {isBalanced ? (
              <img src="/hist-days-before-class-balanced.png" alt="" />
            ) : (
              <img src="/hist-days-before-class.png" alt="" />
            )}
            <p className="px-8 text-justify">
              Here we see that there is no standard in class reservations.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 items-center lg:w-2/5">
            {isBalanced ? (
              <img src="/hist-month-as-member-balanced.png" alt="" />
            ) : (
              <img src="/hist-month-as-member.png" alt="" />
            )}
            <p className="px-8 text-justify">
            The vast majority of students have been enrolled at the academy for between 1 and 1.5 years.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold">Boxplots</h2>
        <div className="flex flex-col gap-8 items-center w-full">

          <div className="flex flex-col gap-4 items-center lg:w-2/5">
            {isBalanced ? (
              <img src="/box-weight-balanced.png" alt="" />
            ) : (
              <img src="/box-weight.png" alt="" />
            )}
            <p className="px-8 text-justify">
              It is noticeable that many more absences occur when students have above average weights.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center lg:w-2/5">
            {isBalanced ? (
              <img src="/box-days-before-class-balanced.png" alt="" />
            ) : (
              <img src="/box-days-before-class.png" alt="" />
            )}
            <p className="px-8 text-justify">
              We see that there is not much difference based on the day the student registers for the class and the attendance rate.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 items-center lg:w-2/5">
            {isBalanced ? (
              <img src="/box-months-as-member-balanced.png" alt="" />
            ) : (
              <img src="/box-months-as-member.png" alt="" />
            )}
            <p className="px-8 text-justify">
              It is clear that the students who attend classes the most are those who have been enrolled at the academy for an above-average period of time.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold">Heatmap</h2>
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="flex flex-col gap-4 items-center lg:w-2/5">
            <img src="//heatmap.png" alt="" />
            <p className="px-8 text-justify">
              This HeatMap demonstrates the relationship between attendance and weight and length of time enrolled at the gym, where those enrolled for a longer period of time have a higher attendance rate and those weighing above average have a lower attendance rate.
            </p>
          </div>
        </div>

      </div>
      
    </section>
  )
} 
