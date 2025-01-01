import { LucideIcon, Smartphone, Globe, ShoppingCart, Briefcase, Building2, Laptop } from 'lucide-react';
import Digiceipt1 from '../../digiceipt-1.png'
import Digiceipt2 from '../../digiceipt-2.png'
import Digiceipt3 from '../../digiceipt-3.png'
import DigiceiptLogo from '../../digiceipt-logo.png'

export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  icon: LucideIcon;
  details: {
    challenge: string;
    solution: string;
    impact: string;
    technologies: string[];
    gallery: string[];
  };
}

export const projects: Project[] = [
  {
    title: "Digiceipt",
    description: "A digital receipt management software.",
    image: DigiceiptLogo,
    category: "Web Application",
    icon: Globe,
    details: {
      challenge: "Create a digital receipt management platform, that allows a range of different industries the ability to customize their receipts and store them digitally.",
      solution: "Design a generic digital receipt management platform, add the customizability for receipts to the user based on their industry.",
      impact: "Reduce the amount of physical paper receipts needed for industries like truck washes.",
      technologies: ["React", "Typescript", "MongoDB", "Netlify", "Supabase"],
      gallery: [
        Digiceipt1,
        Digiceipt2,
        Digiceipt3,
      ]
    }
  },
  
];

// {
//   title: "TechFin Mobile App",
//   description: "A comprehensive fintech solution with advanced security features",
//   image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
//   category: "Mobile Development",
//   icon: Smartphone,
//   details: {
//     challenge: "Create a secure and user-friendly mobile banking platform that handles sensitive financial data while maintaining high performance.",
//     solution: "Implemented biometric authentication, end-to-end encryption, and real-time transaction processing using React Native and Node.js.",
//     impact: "Achieved 100,000+ downloads in the first month with a 4.8/5 rating on app stores.",
//     technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Firebase"],
//     gallery: [
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
//       "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=1000",
//       "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000"
//     ]
//   }
// },