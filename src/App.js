import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <About data-aos="fade-up" />
        <Skills />
        <Project data-aos="fade-up" />
        <Contact data-aos="fade-up" />
      </main>
    </div>
  );
}

export default App;
