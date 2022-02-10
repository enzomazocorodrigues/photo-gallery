import { Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline"

export type AlertProps = {
  msg?: string
  toggleAlert: () => void
  type?: 'success' | 'error'
  show: boolean
}

const Alert: React.FC<AlertProps> = ({ msg, toggleAlert, type, show }) => {
  const typeLayout = () => {
    switch (type) {
      case 'success':
        return (
          <div id="alert-3" className="flex p-4 bg-green-100 dark:bg-green-200" role="alert">
            <CheckCircleIcon className="h-5 w-5 text-green-700" />
            <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
              {msg}
            </div>
            <button onClick={() => toggleAlert()} className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-collapse-toggle="alert-3" aria-label="Close">
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        )
      case 'error':
        return (
          <div id="alert-3" className="flex p-4 bg-pink-100 dark:bg-pink-300" role="alert">
            <XCircleIcon className="h-5 w-5 text-pink-500" />
            <div className="ml-3 text-sm font-medium text-pink-500">
              {msg}
            </div>
            <button onClick={() => toggleAlert()} className="ml-auto -mx-1.5 -my-1.5 bg-pink-100 text-pink-500 rounded-lg focus:ring-2 focus:ring-pink-400 p-1.5 hover:bg-pink-200 inline-flex h-8 w-8 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300" data-collapse-toggle="alert-3" aria-label="Close">
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        )
      default:
        return <div className="hidden"></div>
    }
  }

  let [open, setOpen] = useState(true)
  return (
    <Transition
      appear
      show={show}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {typeLayout()}
    </Transition>
  )
}

export default Alert
