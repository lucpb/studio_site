import { type FC } from 'react'
import { UserCircle } from 'lucide-react';
import logo from '../../assets/next_level.png'

const BUTTON_CLASSES: string = "flex justify-center items-center p-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-50 font-bold hover:scale-110 shadow-sm hover:shadow-lg shadow-black/25 transition duration-200"

const Navbar: FC = () => {
  return (
    <div className = "flex justify-between items-center h-16 fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md border-b border-b-white/10 border-t border-t-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className = "flex justify-center items-center p-4 h-8">
        <img src = {logo} alt = "logo" className = "w-10 h-10 hover:scale-105 hover:drop-shadow-md transition duration-200" />
      </div>
      <div className = "flex justify-center items-center gap-4">
        <div className = {BUTTON_CLASSES}>About</div>
        <div className = {BUTTON_CLASSES}>Services</div>
        <div className = {BUTTON_CLASSES}>Contact</div>
      </div>
        <div className = "flex justify-center items-center p-4">
          <UserCircle className = "w-8 h-8 text-white hover:scale-105 hover:drop-shadow-md transition duration-200"/>
        </div>
    </div>
  )
}

export default Navbar