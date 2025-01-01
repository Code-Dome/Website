import { Link } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import Logo from "../../flat_logo_xl.png"

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={Logo} className="h-8 w-8" />
           <Link href="/"> <span className="font-bold text-xl text-[#144E64]">Code Dome</span></Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#176577] hover:text-[#144E64]">Services</a>
            <a href="#work" className="text-[#176577] hover:text-[#144E64]">Our Work</a>
            <a href="#team" className="text-[#176577] hover:text-[#144E64]">Team</a>
            <button className="bg-[#144E64] text-white px-4 py-2 rounded-lg hover:bg-[#176577]">
              <a href='#contact'>
              Contact Us
              </a>
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-[#144E64]" />
          </div>
        </div>
      </div>
    </nav>
  );
}