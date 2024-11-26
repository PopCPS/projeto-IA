import { ComponentProps, ReactNode } from "react"

interface BaseProps{
  children?: ReactNode,
  inputType?: string
  selectedType: 'input' | 'select'
  id: string
  name: string
}

type InputProps = BaseProps & ComponentProps<'input'>;
type SelectProps = BaseProps & ComponentProps<'select'>;


export const Input = ({
  children,
  inputType,
  selectedType,
  id,
  name,
  ...props
}: InputProps | SelectProps) => {

  if (selectedType === 'input' && !selectedType) {
    inputType = 'text'
  }

  return (
    <>
      <label 
        className="flex flex-col gap-3 flex-1 w-full max-w-96 lg:min-w-96" 
        htmlFor={id}
      >{name}
        {selectedType === 'input' && (
          <input 
            className="p-2 rounded-md w-full text-black"  
            {...(props as InputProps)}
            type={inputType} 
            id={id}
          />
        )}
        {selectedType === 'select' && (
          <select 
            className="p-2 rounded-md w-full text-black"  
            {...(props as SelectProps)}
            id={id} 
          >
            {children}
          </select>
        )}
      </label>
    </>
  )
}