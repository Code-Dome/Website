import { Facebook, Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/code-dome', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Code-Dome', label: 'GitHub' },
  { icon: Facebook, href: 'https://www.facebook.com/codedome', label: 'Facebook' },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#71D9C7] hover:text-[#09AE92] transition-colors"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}