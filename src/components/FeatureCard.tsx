import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="h-8 w-8 text-[#09AE92] mb-4" />
      <h3 className="font-semibold mb-2 text-[#144E64]">{title}</h3>
      <p className="text-[#176577]">{description}</p>
    </div>
  );
}