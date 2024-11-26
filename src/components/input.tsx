import { ReactNode } from "react"

interface inputProps {
  children?: ReactNode,
  inputType?: string
  type: 'input' | 'select'
  id: string
  name: string
}

export const Input = ({
  children,
  inputType,
  type,
  id,
  name
}: inputProps) => {

  if (type === 'input' && !type) {
    inputType = 'text'
  }

  return (
    <>
      <label 
        className="flex flex-col gap-3 flex-1 w-full max-w-96 lg:min-w-96" 
        htmlFor={id}
      >{name}
        {type === 'input' && (
          <input 
            className="p-2 rounded-md w-full text-black"  
            id={id}
            type={inputType} 
          />
        )}
        {type === 'select' && (
          <select 
            className="p-2 rounded-md w-full text-black"  
            id={id} 
          >
            {children}
          </select>
        )}
      </label>
    </>
  )
}