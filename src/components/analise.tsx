import { Input } from "./input"

export const Analise = () => {
  return (
    <div className="flex flex-col w-full p-4 items-center gap-6 mb-10 lg:flex-wrap lg:w-[900px] lg:flex-row">
      <Input
        id="weight"
        name="Weight"
        type="input"
        inputType="number"
      />
      <Input 
        id="months as gym member"
        name="Months as gym member"
        type="input"
        inputType="number"
      />
      <Input 
        id="untilClass"
        name="Days until class"
        type="input"
        inputType="number"
      />
      <Input
        id="weekday"
        name="Day of the class"
        type="select"
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
        type="select"
      >
          <option value="Cycling">Cycling</option>
          <option value="HIIT">HIIT</option>
          <option value="Strengh">Strengh</option>
          <option value="Yoga">Yoga</option>
          <option value="Aqua">Aqua</option>
      </Input>
      <Input
        id="time"
        name="Time"
        type="select"
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </Input>
    </div>
  )
}