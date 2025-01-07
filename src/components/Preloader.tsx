// Preloader.tsx
import '../preloader.css';  // Import your CSS file for animation
import Logo from '../../logo.svg'

export default function Preloader({ loading }: { loading?: boolean }) {
  return (
    loading && (
      <div className="preloader flex justify-center items-center fixed top-0 left-0 w-full h-full bg-white z-[100]">
        <div className="logo-container flex justify-center items-center">
          <img
            src={Logo}
            alt="Code Dome Logo"
            className="logo w-36 h-auto grayscale animate-colorizeLogo"
          />
        </div>
      </div>
    )
  );
};
