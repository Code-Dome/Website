import React from 'react';
import { TeamMember } from '../../data/team';

export default function TeamMemberCard({ name, role, image, bio }: TeamMember) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-72 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#144E64]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-xl font-semibold text-[#144E64] mb-1">{name}</h3>
      <p className="text-[#09AE92] font-medium mb-2">{role}</p>
      <p className="text-[#176577]">{bio}</p>
    </div>
  );
}