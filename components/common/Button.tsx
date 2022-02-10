import { MouseEventHandler } from "react"
import Spinner from "./Spinner"

type ButtonProps = {
  className?: string
  loading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}



const Button: React.FC<ButtonProps> = ({ children, className, loading, onClick }) => {
  className = className || ""
  // loading = true

  return (
    <button type="button" onClick={(e) => loading || !onClick || onClick(e)} className={`flex items-center text-white bg-black focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 outline-none ${loading ? "opacity-50" : "hover:opacity-90"} ${className}`}>
      {loading ? <Spinner label /> : children}
      {/* {children} */}
    </button>
  )
}

export default Button
