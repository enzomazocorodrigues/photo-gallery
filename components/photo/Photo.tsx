import { CalendarIcon, CloudDownloadIcon, DatabaseIcon, TrashIcon } from "@heroicons/react/outline"
import Button from "../common/Button"
import Image from 'next/image'

const Upload: React.FC = () => {
  const formatDate = Intl.DateTimeFormat('pt-BR', { dateStyle: "full" }).format
  const imageLoader = ({ src }: { src: string }) => {
    return `https://flowbite.com/docs/images/blog/${src}`;
  }
  return (
    <div className="m-3 max-w-sm rounded-lg border border-gray-200 shadow-sm">
      {/* <Image src={'https://flowbite.com/docs/images/blog/image-1.jpg'} className="rounded-t-lg" alt="Photo" /> */}
      <img src="https://flowbite.com/docs/images/blog/image-1.jpg" className="rounded-t-lg" alt="Photo" />
      <div className="p-5">
        <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Photo Title</h5>
        <p className="mb-2 flex items-center font-normal text-gray-700 dark:text-gray-400">
          <CalendarIcon className="w-4 h-4" />
          <span className="ml-1">{formatDate(new Date())}</span>
        </p>
        <p className="mb-2 flex items-center font-normal text-gray-700 dark:text-gray-400">
          <DatabaseIcon className="w-4 h-4" />
          <span className="ml-1">230 KB</span>
        </p>
        <div className="flex justify-between items-baseline">
          <Button className="mt-3">
            <CloudDownloadIcon className="w-4 h-4 mr-2" />
            Download
          </Button>
          <button className="flex items-center text-red-500 bg-slate-50 border hover:bg-gray-100 border-gray-200 font-medium rounded-lg text-sm px-3 py-2 outline-none">
            <TrashIcon className="w-4 h-4 mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div >
  )
}

export default Upload
