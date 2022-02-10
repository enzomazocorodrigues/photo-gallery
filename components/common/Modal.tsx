import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import TextField from './TextField'

type ModalProps = {
  title?: string
  open: boolean
  toggleModal: () => void
}

const Modal: React.FC<ModalProps> = ({ children, open, title, toggleModal }) => {
  // let [isOpen, setIsOpen] = useState(true)

  // function toggleModal() {
  //   setIsOpen(!isOpen)
  // }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={toggleModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {!!title && <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-gray-900"
              >
                {title}
              </Dialog.Title>}

              {children}

            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
