import { type FC } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
const App: FC = () => {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}

export default App