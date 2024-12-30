import React from 'react';
import { team } from '../../data/team';
import TeamMemberCard from './TeamMemberCard';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-[#71D9C7]/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#144E64] mb-4">Our Team</h2>
          <p className="text-xl text-[#176577] max-w-2xl mx-auto">
            Meet our talented team of experts dedicated to delivering exceptional software solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}