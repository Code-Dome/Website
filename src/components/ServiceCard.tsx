import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 border border-[#71D9C7]/20 rounded-xl hover:shadow-lg transition-shadow">
      <Icon className="h-12 w-12 text-[#09AE92] mb-4" />
      <h3 className="text-xl font-semibold mb-3 text-[#144E64]">{title}</h3>
      <p className="text-[#176577]">{description}</p>
    </div>
  );
}