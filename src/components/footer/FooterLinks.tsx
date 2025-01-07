import { Link } from "react-router-dom";

const links = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/tos' },
    { label: 'Cookie Policy', href: '/cookies' }
  ]
};

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {Object.entries(links).map(([category, items]) => (
        <div key={category}>
          <h3 className="font-semibold text-[#144E64] mb-4">{category}</h3>
          <ul className="space-y-2">
            {items.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  className="text-[#176577] hover:text-[#09AE92] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}