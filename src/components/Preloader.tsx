// Preloader.tsx
import { useEffect, useState } from 'react';
import '../preloader.css';  // Import your CSS file for animation
import Logo from '../../logo.svg'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);  // Set loading to false after 3 seconds (adjust as needed)
    }, 800);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    isLoading && (
        <div className="preloader flex justify-center items-center fixed top-0 left-0 w-full h-full bg-white z-[100]">
        <div className="logo-container flex justify-center items-center">
          <img
            src={Logo} 
            alt="Code Dome Logo"
            className="logo w-36 h-auto grayscale animate-colorizeLogo"  // Tailwind classes for styling and animation
          />
        </div>
      </div>
    )
  );
};

