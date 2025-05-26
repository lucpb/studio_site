import { type FC, useEffect, useState } from 'react'
import image from '../../assets/32-9.png'

const SCROLL_FACTOR = 0.1;

const HomePage: FC = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxPan = 100;
  const translateX = Math.min(scrollPosition * SCROLL_FACTOR, maxPan);

  return (

    <div className = "flex flex-col h-screen">
        <h1 className = "text-8xl font-bold pt-100 pl-75 pb-5">We Design</h1>
        <h1 className = "text-8xl font-bold pl-75 pb-5">Audio Environments</h1>
        <div className = "flex justify-center items-center h-full">
            <div className = "relative aspect-[16/9] w-11/12 mt-8 overflow-hidden rounded-4xl outline outline-red-500">
                <div className = "relative w-full max-w-[1200px] aspect-[16/9] overflow-hidden mx-auto">
                  <img 
                    src = {image} alt = "Panning"
                    className = "absolute top-0 left-0 w-[300%] h-full rounded-4xl transition-transform duration-100" 
                    style = {{ transform: `translateX(${translateX}%)` }}
                  />
                </div>
            </div>
        </div>
        <div className = "pt-100 pb-100">test</div>
    </div>
  )
}

export default HomePage