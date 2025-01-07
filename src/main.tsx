import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/work/Work';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import Tos from './components/Tos';
import Cookies from './components/Cookies';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <Preloader />
                <div className="min-h-screen bg-white">
                  <Navbar />
                  <Hero />
                  <Services />
                  <Work />
                  <Team />
                  <Contact />
                  <Footer />
                </div>
              </div>
            </>
          }
        />
        <Route
          path='/about'
          element={<About />} />
        <Route
          path='/privacy'
          element={<PrivacyPolicy />} />
        <Route
          path='/tos'
          element={<Tos />} />
        <Route
          path='/cookies'
          element={<Cookies />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
