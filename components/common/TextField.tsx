import { ChangeEventHandler } from "react"

export type TextFieldProps = {
  className?: string,
  label?: string
  placeholder?: string
  type?: string,
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const TextField: React.FC<TextFieldProps> = ({ className, label, onChange, placeholder, type, value }) => {
  className = className || ""
  placeholder = placeholder || ""

  return (
    <div className={className}>
      {!!label && <label htmlFor="input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>}
      <input type={type} id="input" value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-0" placeholder={placeholder} required />
    </div>
  )
}

export default TextField
