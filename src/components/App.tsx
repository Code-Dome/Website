import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import Team from "./team/Team";
import Work from "./work/Work";
import Footer from "./footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./contact/Contact";
import About from "./About";
import PrivacyPolicy from "./PrivacyPolicy";
import Tos from "./Tos";
import Cookies from "./Cookies";
import Preloader from "./Preloader";

export default function App() {
    return (
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
    )
}