import { type FC, useEffect, useState } from 'react'
import car from '../../assets/car.png'
import car2 from '../../assets/car2.png'
import car3 from '../../assets/car3.png'
import car4 from '../../assets/car4.png'
import car5 from '../../assets/car5.png'
import car6 from '../../assets/car6.png'
import car7 from '../../assets/car7.png'
import car8 from '../../assets/car8.png'
import car9 from '../../assets/car9.png'

const cars = [
  car2, car3, car4, car5, car6, car7, car8, car9
]

const HomePage: FC = () => {

  const [index, setIndex] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!atTop) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cars.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [atTop, cars.length]);

  return (

    <>
      {cars.map((image, i) => (
        <img 
          key={i} src={image} alt={`Slide ${i}`} className={`fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat w-full ${i === index ? "opacity-100" : "opacity-0"}`} />
      ))}
      
      <div className='flex flex-col'>
      
        <div className='h-200 bg-transparent'/>
        <h1 className='w-full text-8xl text-white pb-5 pl-10 backdrop-blur-sm'>Build Your Next Audio Dream</h1>
        <div className='w-full bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden'>
          
          <div className='h-8 w-full'/>
          <div className='flex flex-row gap-8 px-8'>
            <div className=' rounded-2xl aspect-[4/3] w-1/2'>
              <img src={car} alt="car" className='h-full object-cover rounded-2xl' />
            </div>
            <div className=' rounded-2xl aspect-[4/3] w-1/2'>
              <h1 className='w-full mx-auto text-white/90 font-light bg-black/20 p-4 rounded-lg text-6xl'>
                At Next Level Audio, we specialize in high-performance car audio systems that transform every ride 
                into an immersive sound experience. Whether you're cruising city streets or hitting the highway, our 
                expert installations, premium speakers, and custom tuning deliver studio-quality clarity, deep bass, 
                and flawless integration. Passion for sound meets precision engineering — because your car deserves 
                more than just volume. It deserves pure audio excellence.
              </h1>
            </div>
          </div>
        <div className='h-8 w-full'/>
        
        </div>
        <div className='w-full bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden'>
          <div className='h-8 w-full'/>
          <div className='flex flex-row gap-8 px-8'>
            <div className=' rounded-2xl aspect-[4/3] w-1/2'>
              <img src={car} alt="car" className='h-full object-cover rounded-2xl' />
            </div>
            <div className=' rounded-2xl aspect-[4/3] w-1/2'>
              <h1 className='w-full mx-auto text-white/90 font-light bg-black/20 p-4 rounded-lg text-6xl'>
                At Next Level Audio, we specialize in high-performance car audio systems that transform every ride 
                into an immersive sound experience. Whether you're cruising city streets or hitting the highway, our 
                expert installations, premium speakers, and custom tuning deliver studio-quality clarity, deep bass, 
                and flawless integration. Passion for sound meets precision engineering — because your car deserves 
                more than just volume. It deserves pure audio excellence.
              </h1>
            </div>
          </div>
        <div className='h-8 w-full'/>
        
        </div>
        <h1 className='size-7'>test</h1>

      </div>
    </>
  )
}

export default HomePage