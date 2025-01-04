import { Link } from '@tanstack/react-router';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed inset-0 z-50">
        <div className="absolute inset-y-0 right-0 w-full bg-white">
          <div className="p-6">
            <div className="flex justify-end">
              <button onClick={onClose} className="text-[#144E64]">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-8 items-center">
              <a href="#services" onClick={onClose} className="text-lg text-[#176577] hover:text-[#144E64]">
                Services
              </a>
              <a href="#work" onClick={onClose} className="text-lg text-[#176577] hover:text-[#144E64]">
                Our Work
              </a>
              <a href="#team" onClick={onClose} className="text-lg text-[#176577] hover:text-[#144E64]">
                Team
              </a>
              <a href="#contact" onClick={onClose} className="text-lg bg-[#144E64] text-white px-6 py-2 rounded-lg hover:bg-[#176577]">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}