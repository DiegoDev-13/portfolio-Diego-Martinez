import { GridProjects } from './components/GridProjects';
import { Hero } from './components/Hero';
import { MobileNavbar } from './components/MobileNavbar';
import { Navbar } from './components/Navbar'
import { useMobile } from './context/globalStore';



function App() {


  const { isActiveMobile, toggleActiveMobile } = useMobile();


  return (
    <div className='bg-stone-900'>
      {
        isActiveMobile && <MobileNavbar/>
      }
      <Navbar />


      <Hero />
      <main className='container mx-auto  flex-1'>

        <GridProjects />
      </main>
    </div>
  )
}

export default App
