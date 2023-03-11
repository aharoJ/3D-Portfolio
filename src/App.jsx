import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-tl from-red-800/30 via-indigo-900/30 to-orange-800/30'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div> */}

        <div className="relative z-10
        bg-gradient-to-r from-black/90 to-indigo-500/5 
        ">
          <Navbar/>
          <Hero/>
        </div>
        
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
