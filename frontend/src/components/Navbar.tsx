import { type FC } from 'react'
import { UserCircle } from 'lucide-react';
import logo from '../../assets/next_level.png'

const Navbar: FC = () => {
  return (
    <div className = "flex justify-between items-center h-16">
      <div className = "flex justify-center items-center p-4 h-8">
        <img src = {logo} alt = "logo" className = "w-10 h-10" />
      </div>
      <div className = "flex justify-center items-center gap-4">
        <div className = "flex justify-center items-center p-2 text-white outline outline-red-500 bg-red-500 rounded-full w-24 font-bold hover:scale-110 transition-all duration-300 shadow-lg shadow-black/25">About</div>
        <div className = "flex justify-center items-center p-2 text-white outline outline-red-500 bg-red-500 rounded-full w-24 font-bold hover:scale-110 transition-all duration-300 shadow-lg shadow-black/25">Services</div>
        <div className = "flex justify-center items-center p-2 text-white outline outline-red-500 bg-red-500 rounded-full w-24 font-bold hover:scale-110 transition-all duration-300 shadow-lg shadow-black/25">Contact</div>
      </div>
        <div className = "flex justify-center items-center p-4">
          <UserCircle className = "w-8 h-8 text-gray-700"/>
        </div>
    </div>
  )
}

export default Navbar