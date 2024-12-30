import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: 'Coming Soon',
    href: '#' //tel:+27000000000
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'support@codedome.co.za',
    href: 'mailto:support@codedome.co.za'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Durban, South Africa',
    href: '#'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#71D9C7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#144E64] mb-4">Contact Us</h2>
          <p className="text-xl text-[#176577] max-w-2xl mx-auto">
            Get in touch with us to discuss your project or learn more about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="h-8 w-8 text-[#09AE92] mb-4" />
                <h3 className="text-lg font-semibold text-[#144E64] mb-2">{item.title}</h3>
                <p className="text-[#176577]">{item.content}</p>
              </a>
            );
          })}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}