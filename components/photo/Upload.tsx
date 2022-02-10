import { CloudUploadIcon, PhotographIcon } from "@heroicons/react/outline"
import { DragEventHandler, useState } from "react"
import Button from "../common/Button"

const Upload: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [dragOn, setDragOn] = useState<boolean>(false);

  const selectImage = () => {
    const input: HTMLInputElement = document.createElement('input')
    input.type = 'file'
    input.onchange = (_) => {
      if (input.files) {
        const [file] = Array.from(input.files);
        setPhoto(file);
      }
    }
    input.click();
  }

  const dropImage: DragEventHandler = (event) => {
    event.preventDefault();
    const file: File = event.dataTransfer.files[0];
    const url: string = URL.createObjectURL(file);
    setPhoto(file);
    setPhotoUrl(url);
    console.log(file.name, file.size);
  }
  return (
    <>
      <div className="flex justify-center px-6">
        {!photo
          ? <div onDrop={dropImage} onDragOver={(e) => e.preventDefault()} onDragEnter={() => setDragOn(true)} onDragLeave={() => setDragOn(false)} className={`flex flex-col justify-center items-center border-4 border-dashed rounded-lg h-72 sm:h-96 w-96 transition duration-200 ${dragOn ? "opacity-50" : "opacity-100"}`}>
            <CloudUploadIcon className="h-28 w-28 mb-8" />
            <Button onClick={selectImage}>
              Upload file
            </Button>
            <span className="pt-2 text-gray-500 text-sm font-medium w-28 text-center">Or drag and drop your file here</span>
          </div>
          : <div className={`flex flex-col justify-center items-center border-4 border-dashed rounded-lg h-72 sm:h-96 w-96`}>
            <PhotographIcon className="w-28 h-28 text-gray-400 -rotate-12 mb-6" />
            <span className="text-gray-500 text-sm font-medium">{photo.name}</span>
            <span className="text-gray-500 text-sm font-normal">{photo.size} KB</span>
            <div className="mt-4 w-full flex justify-around">
              <Button onClick={selectImage}>
                Upload file
              </Button>
              <button onClick={() => setPhoto(null)} className="flex items-center text-red-500 bg-slate-50 border hover:bg-gray-100 border-gray-200 font-medium rounded-lg text-sm px-3 py-2 outline-none">
                Cancel
              </button>
            </div>
          </div>}
      </div>
    </>
  )
}

export default Upload
