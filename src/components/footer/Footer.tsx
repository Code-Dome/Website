import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';
import Logo from "../../../flat_logo_xl.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#71D9C7]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} className="h-8 w-8" />
              <span className="font-bold text-xl text-[#144E64]">Code Dome</span>
            </div>
            <p className="text-[#176577] mb-6 max-w-md">
              Building innovative digital solutions that empower businesses to thrive in the modern world.
            </p>
            <SocialLinks />
          </div>
          <FooterLinks />
        </div>
        
        <div className="border-t border-[#71D9C7]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#176577]">
              © {currentYear} Code Dome. All rights reserved.
            </p>
            <p className="text-[#176577]">
              Made with 💚 in Durban, South Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}