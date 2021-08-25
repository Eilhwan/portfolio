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
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])  
  return (
    <div className="bg-black" style={{margin: "auto"}}>
      <Header />
      <About data-aos="fade-up"/>
      <Skills />
      <Project data-aos="fade-up"/>
      <Contact data-aos="fade-up"/>
    </div>
  );
}

export default App;
