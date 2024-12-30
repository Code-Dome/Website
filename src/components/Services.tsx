import React from 'react';
import { Code, Database, CloudIcon, Smartphone, Shield, GitBranch } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to meet your specific business requirements.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
  },
  {
    icon: CloudIcon,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#71D9C7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#144E64] mb-4">Our Services</h2>
          <p className="text-xl text-[#176577] max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}