import { CalendarIcon, CloudDownloadIcon, DatabaseIcon, TrashIcon } from "@heroicons/react/outline"
import Button from "../common/Button"
import Image from 'next/image'
import { Photo } from "../../types/photo/Photo"
import { useState } from "react"

type PhotoCardProps = {
  photo: Photo
  onDelete: (photo: Photo) => Promise<void>
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onDelete }) => {
  const formatDate = Intl.DateTimeFormat('pt-BR', { dateStyle: "full" }).format
  const formatSize = Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 }).format
  const [deleting, setDeleting] = useState<boolean>(false);

  const downloadPhoto = () => { }

  const deletePhoto = async () => {
    try {
      setDeleting(true)
      await onDelete(photo);
    } catch (err) {
      setDeleting(false)
      console.error(err)
    }
  }

  return (
    <div className="m-3 max-w-sm rounded-lg border border-gray-200 shadow-sm">
      {/* <Image src={'https://flowbite.com/docs/images/blog/image-1.jpg'} className="rounded-t-lg" alt="Photo" /> */}
      <img src={photo.url} className="rounded-t-lg" alt="Photo" />
      <div className="p-5">
        <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{photo.name}</h5>
        <p className="mb-2 flex items-center font-normal text-gray-700 dark:text-gray-400">
          <CalendarIcon className="w-4 h-4" />
          <span className="ml-1">{formatDate(photo.date)}</span>
        </p>
        <p className="mb-2 flex items-center font-normal text-gray-700 dark:text-gray-400">
          <DatabaseIcon className="w-4 h-4" />
          <span className="ml-1">{formatSize(photo.size / 1000)} KB</span>
        </p>
        <div className="flex justify-between items-baseline">
          <Button onClick={downloadPhoto} className="mt-3">
            <CloudDownloadIcon className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button onClick={deletePhoto} loading={deleting} className="mt-3 text-red-500 bg-slate-50 border hover:bg-gray-100 border-gray-200" spinnerClass="text-red-500" >
            <TrashIcon className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div >
  )
}

export default PhotoCard;
