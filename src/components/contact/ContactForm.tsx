import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#144E64]">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-lg border border-[#71D9C7] focus:border-[#09AE92] focus:ring focus:ring-[#09AE92]/20"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#144E64]">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full rounded-lg border border-[#71D9C7] focus:border-[#09AE92] focus:ring focus:ring-[#09AE92]/20"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#144E64]">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="mt-1 block w-full rounded-lg border border-[#71D9C7] focus:border-[#09AE92] focus:ring focus:ring-[#09AE92]/20"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#144E64]">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 block w-full rounded-lg border border-[#71D9C7] focus:border-[#09AE92] focus:ring focus:ring-[#09AE92]/20"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-[#144E64] text-white rounded-lg hover:bg-[#176577] transition-colors flex items-center justify-center space-x-2"
      >
        <span>Send Message</span>
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}