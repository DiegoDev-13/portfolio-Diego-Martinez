import { About } from './components/About';
import { Banner } from './components/Banner';
import { FormContact } from './components/FormContact';
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


      <main className='flex-1 max-w-400 mx-auto'>
        <Hero />

        <GridProjects />

        <About />

        <FormContact />

        <Banner />
      </main>
    </div>
  )
}

export default App
