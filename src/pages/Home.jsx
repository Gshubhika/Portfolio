import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Connect from '../components/Connect';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay slightly to ensure elements are mounted before scrolling
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <main style={{ flexGrow: 1 }}>
      <Hero />
      <Projects />
      <About />
      <Connect />
    </main>
  );
};

export default Home;
