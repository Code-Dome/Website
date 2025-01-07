import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Work from "./work/Work";
import Team from "./team/Team";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import About from "./About";
import PrivacyPolicy from "./PrivacyPolicy";
import Tos from "./Tos";
import Cookies from "./Cookies";
import { useEffect, useState } from "react";

export default function App() {

const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800); // Simulate loading
    return () => clearTimeout(timer);
  }, []);
  
    return (<BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <div>
                            <Preloader loading={isLoading} />
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
    </BrowserRouter>)
}