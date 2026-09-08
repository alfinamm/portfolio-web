import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#eef2f6] text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      
      {/* Ambient Background Blurred Shapes for Glass Contrast (Not pure white, subtle cool slate & soft blue blobs) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft blue blurred circle - top right near hero */}
        <div className="absolute -top-24 -right-24 w-[580px] h-[580px] rounded-full bg-blue-200/50 blur-[130px]" />
        
        {/* Soft cool-slate blurred blob - upper mid left */}
        <div className="absolute top-[26%] -left-32 w-[640px] h-[640px] rounded-full bg-slate-300/40 blur-[150px]" />
        
        {/* Soft blue blurred shape - lower right near projects */}
        <div className="absolute top-[56%] -right-28 w-[560px] h-[560px] rounded-full bg-blue-200/45 blur-[140px]" />

        {/* Soft slate/indigo circle - bottom left near contact/footer */}
        <div className="absolute -bottom-24 left-[8%] w-[520px] h-[520px] rounded-full bg-slate-300/50 blur-[130px]" />
      </div>

      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Experience */}
        <Experience />

        {/* 5. Skills */}
        <Skills />

        {/* 6. Projects */}
        <Projects />

        {/* 7. Certification */}
        <Certifications />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
