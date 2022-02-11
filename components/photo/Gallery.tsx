import { Photo } from "../../types/photo/Photo"
import NoPhotos from "./NoPhotos"
import PhotoCard from "./PhotoCard"

type GalleryProps = {
  gallery: Photo[]
  onDelete: (photo: Photo) => Promise<void>
}

const Gallery: React.FC<GalleryProps> = ({ gallery, onDelete }) => {
  return (
    <div className="py-6 px-4 bg-slate-50 border-t border-t-gray-300">
      <h5 className="text-2xl tracking-tigh font-bold">Your photos</h5>
      <div className="mt-8 flex flex-wrap justify-center">
        {gallery.map((photo, i) => <PhotoCard onDelete={onDelete} photo={photo} key={i} />)}
      </div>
    </div>
  )
}

export default Gallery
