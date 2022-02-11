import { CloudUploadIcon, PhotographIcon } from "@heroicons/react/outline"
import { DragEventHandler, useState } from "react"
import Button from "../common/Button"

type UploadProps = {
  photo: File | null
  loading: boolean
  onCancel: () => void
  onLoad: (photo: File) => void
  onUpload: () => Promise<void>
}

const Upload: React.FC<UploadProps> = ({ photo, loading, onCancel, onLoad, onUpload }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [dragOn, setDragOn] = useState<boolean>(false);

  const selectImage = () => {
    const input: HTMLInputElement = document.createElement('input')
    input.type = 'file'
    input.onchange = (_) => {
      if (input.files) {
        const [file] = Array.from(input.files);
        onLoad(file);
      }
    }
    input.click();
  }

  const dropImage: DragEventHandler = (event) => {
    event.preventDefault();
    const file: File = event.dataTransfer.files[0];
    const url: string = URL.createObjectURL(file);
    onLoad(file);
    setPhotoUrl(url);
    console.log(file.name, file.size);
  }
  return (
    <>
      <div className="flex justify-center px-6">
        {!photo
          ? <div onDrop={dropImage} onDragOver={(e) => e.preventDefault()} onDragEnter={() => setDragOn(true)} onDragLeave={() => setDragOn(false)} className={`flex flex-col justify-center items-center border-4 border-dashed rounded-lg h-72 sm:h-96 w-96 transition duration-200 ${dragOn ? "opacity-50" : "opacity-100"}`}>
            <CloudUploadIcon className="h-28 w-28 text-gray-400 mb-8" />
            <Button onClick={selectImage}>
              Upload file
            </Button>
            <span className="pt-4 text-gray-500 text-sm font-medium w-28 text-center">Or drag and drop your file here</span>
          </div>
          : <div className=" flex flex-col justify-center items-center border-4 border-dashed rounded-lg h-72 sm:h-96 w-96">
            <PhotographIcon className="w-28 h-28 text-gray-400 -rotate-12 mb-6" />
            <span className="text-gray-500 text-sm font-medium">{photo.name}</span>
            <span className="text-gray-500 text-sm font-normal">{photo.size} KB</span>
            <div className="mt-4 w-full flex justify-around">
              <Button loading={loading} onClick={() => loading || onUpload()}>
                <CloudUploadIcon className="h-5 w-5 mr-2" />
                Upload file
              </Button>

              <Button className={`text-red-500 bg-slate-50 border hover:bg-gray-100 border-gray-200 ${loading ? "opacity-50" : "hover:opacity-90"}`} onClick={() => loading || onCancel()}>
                Cancel
              </Button>
            </div>
          </div>}
      </div>
    </>
  )
}

export default Upload
