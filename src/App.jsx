import { About } from './components/About';
import { Banner } from './components/Banner';
import { Experience } from './components/Experience';
import { FormContact } from './components/FormContact';
import { GridProjects } from './components/GridProjects';
import { Hero } from './components/Hero';
import { MobileNavbar } from './components/MobileNavbar';
import { Navbar } from './components/Navbar'
import { useMobile } from './context/globalStore';
import { ToastContainer } from 'react-toastify';

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

        <Experience />

        <About />

        <FormContact />

        <Banner />
      </main>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>


  )
}

export default App
