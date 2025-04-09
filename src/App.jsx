import { useState, useEffect } from 'react';
import { Loading } from "./components/Loading.jsx";
import { Navbar } from './components/Navbar.jsx';
import { About } from './components/sections/About.jsx';
import { Contact } from './components/sections/Contact.jsx'; 
import { Home } from './components/sections/Home.jsx';
import {Projects} from './components/sections/Projects.jsx'
import './App.css';
import './index.css';
import { initGA } from './analytics.js';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Simulate loading time
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="content">
            <section id="home" className="section">
              <Home />
            </section>
            <section id="about" className="section">
              <About />
            </section>
            <section id="projects" className="section">
              <Projects/>
            </section>
            <section id="contact" className="section">
              <Contact />
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default App;
