import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#71D9C7]/10 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#144E64] mb-6">
            Excellence leads to Elegance
            </h1>
            <p className="text-xl text-[#176577] mb-8">
              We transform ideas into powerful digital solutions. Our expert team crafts custom software that drives business growth and innovation.
            </p>
            <div className="flex space-x-4 justify-center">
            <a href="#contact">
              <button className="bg-[#144E64] text-white px-8 py-3 rounded-lg hover:bg-[#176577] flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              </a>

              <a href="#services">
              <button className="border-2 border-[#144E64] text-[#144E64] px-8 py-3 rounded-lg hover:bg-[#71D9C7]/10">
                Learn More
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}