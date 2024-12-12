import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Education from '../pages/Education';
import Skills from '../pages/Skills';
import About from '../pages/About';

function Layout() {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <body>
        <section id="Education">
          <Education />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="About">
          <About />
        </section>
        <Footer />
      </body>
    </>
  );
}

export default Layout;