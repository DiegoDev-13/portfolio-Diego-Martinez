import { Hero } from './components/Hero';
import { MobileNavbar } from './components/MobileNavbar';
import { Navbar } from './components/Navbar'
import { useMobile } from './context/globalStore';



function App() {


  const { isActiveMobile, toggleActiveMobile } = useMobile();


  return (
    <>
      {
        isActiveMobile && <MobileNavbar/>
      }
      <Navbar />


      <main className='bg-stone-900 w-full h-200'>
        <Hero />
      </main>
    </>
  )
}

export default App
