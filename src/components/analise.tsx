import { useState } from "react"
import { Input } from "./input"
import { Loader2, X } from "lucide-react"

interface PredictionResponse {
  prediction: number,
  probabilities: [
    number[]
  ]
}

export const Analise = () => {

  const [ predictionResponse, setPredictionResponse ] = useState<PredictionResponse | null>(null)
  const [ dayOfClass, setDayOfClass ] = useState<string>("Sun")
  const [ timeOfClass, setTimeOfClass ] = useState<string>("AM")
  const [ category, setCategory ] = useState<string>("Cycling")
  const [ monthsAsMember, setMonthsAsMember ] = useState<number | null>(null)
  const [ weight, setWeight ] = useState<number | null>(null)
  const [ daysBeforeClass, setDaysBeforeClass ] = useState<number | null>(null)
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<string | null>(null)

  const fetchPrediction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!monthsAsMember || !weight || !daysBeforeClass) {
      setError('Complete todos os campos')
      return
    }
    setLoading(true)
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            day_of_class: dayOfClass,
            time_of_class: timeOfClass,
            category: category,
            months_as_member: monthsAsMember,
            weight: weight,
            days_before_class: daysBeforeClass,
          }),
        }
      );
    
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
    
      const data = await response.json();
      setPredictionResponse(data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unknown error occurred')
      }
      setLoading(false)
    }
    setLoading(false)
  }

  return (
    <>
      <form onSubmit={e => fetchPrediction(e)} className="flex flex-col w-full p-4 items-center justify-center gap-6 mb-10 lg:flex-wrap lg:w-[900px] lg:flex-row">
        <Input
          id="weight"
          name="Weight"
          selectedType="input"
          inputType="number"
          step=".01"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(Number(e.currentTarget.value))}
        />
        <Input 
          id="months as gym member"
          name="Months as gym member"
          selectedType="input"
          inputType="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonthsAsMember(Number(e.currentTarget.value))}
        />
        <Input 
          id="untilClass"
          name="Days until class"
          selectedType="input"
          inputType="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDaysBeforeClass(Number(e.currentTarget.value))}
        />
        <Input
          id="weekday"
          name="Day of the class"
          selectedType="select"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDayOfClass(e.currentTarget.value)}
        >
            <option value="Sun">Sunday</option>
            <option value="Mon">Monday</option>
            <option value="Thu">Thursday</option>
            <option value="Fri">Friday</option>
            <option value="Sat">Saturday</option>
        </Input>
        <Input
          id="classType"
          name="Class type"
          selectedType="select"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.currentTarget.value)}
        >
            <option value="Cycling">Cycling</option>
            <option value="HIIT">HIIT</option>
            <option value="Strenght">Strenght</option>
            <option value="Yoga">Yoga</option>
            <option value="Aqua">Aqua</option>
        </Input>
        <Input
          id="time"
          name="Time"
          selectedType="select"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTimeOfClass(e.currentTarget.value)}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </Input>
        <button type="submit" className="w-full max-w-96 h-10 rounded-md mt-6 font-semibold text-black bg-cyan">PREDICT</button>
      </form>

      {error && (
        <>
          <div className="flex items-center justify-center p-4 absolute inset-0 text-black bg-black/60">
            <div className="flex flex-col p-4 gap-3 rounded-md max-w-96 bg-white">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl">Erro</span>
                <button onClick={() => setError(null)}>  
                  <X />
                </button>
              </div>
              <p className="text-center">
                {error}
              </p>
            </div>
          </div>
        </>
      )}


      {loading && (
        <>
          <div className="flex items-center justify-center p-4 gap-3 absolute inset-0 text-black bg-black/60">
            <div className="flex flex-col p-4 rounded-md max-w-96 bg-white">
              <Loader2 className="animate-spin" />
            </div>
          </div>
        </>
      )}

      {predictionResponse && (
          <>
            <div className="flex items-center justify-center p-4 gap-3 absolute inset-0 text-black bg-black/60">
              <div className="flex flex-col p-4 rounded-md max-w-96 bg-white">
                <button className="self-end" onClick={() => setPredictionResponse(null)}>
                  <X />
                </button>
                <p className="text-center">
                  Based on the data, that student is
                  <strong> {predictionResponse.prediction == 1 ? 'going to attend' : 'not going to attend'} </strong> 
                  the class with a certainty of 
                  <strong> {`${Number(predictionResponse.probabilities[0][predictionResponse.prediction].toFixed(2)) * 100}%`}</strong>. 
                </p>
              </div>
            </div>
          </>
        )}
    </>
  )
}