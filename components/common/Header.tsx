import { PhotographIcon } from "@heroicons/react/outline";

const Header: React.FC = () => {
  return (
    <div className="fixed flex justify-between items-center w-full p-4 bg-slate-50 opacity-95 border-b border-b-gray-200">
      <span className="text-xl text-gray-900 tracking-tigh font-bold">Photo Gallery</span>
    </div>
  )
}

export default Header
