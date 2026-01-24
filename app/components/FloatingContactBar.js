"use client";

import React, { useState } from "react";
import { Mail, Phone, ChevronRight, ChevronLeft, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function FloatingContactBar() {
  const [contactBarOpen, setContactBarOpen] = useState(true);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isFormHovered, setIsFormHovered] = useState(false);
  const [mobileFormOpen, setMobileFormOpen] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    phone: '',
    email: '',
    hearAboutUs: '',
    message: ''
  });

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactFormData);

    emailjs.send(
      'service_b769gdc',
      'template_0hzoxjk',
      {
        from_name: contactFormData.name,
        from_email: contactFormData.email,
        phone: contactFormData.phone,
        hear_about_us: contactFormData.hearAboutUs,
        message: contactFormData.message,
      },
      'VFpd616Sj6d9RlzWA'
    ).then((result) => {
      console.log('Floating contact email sent successfully:', result.text);
      alert('Message sent successfully!');
      setContactFormData({
        name: '',
        phone: '',
        email: '',
        hearAboutUs: '',
        message: ''
      });
    }, (error) => {
      console.error('Error sending floating contact email:', error.text);
      alert('Error sending message. Please try again.');
    });
  };

  return (
    <>
      {/* Floating Contact Bar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-0">
        {/* Toggle Button */}
        <button
          onClick={() => setContactBarOpen(!contactBarOpen)}
          className={`bg-black flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] translate-x-0' : 'w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full translate-x-1/2'
          }`}
        >
          {contactBarOpen ? <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" /> : <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
        {/* Contact Us Button */}
        <div
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}
          onClick={() => setMobileFormOpen(!mobileFormOpen)}
          className={`w-[40px] h-[120px] sm:w-[50px] sm:h-[150px] bg-[#7E6BF2] flex flex-col items-center justify-start pt-12 sm:pt-15 text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <span className="text-xs sm:text-sm transform -rotate-90 whitespace-nowrap mb-6 sm:mb-8">Contact Us</span>
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8559901234"
          className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#2C2C2C] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        {/* Call Button */}
        <a
          href="tel:8559901234"
          className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#25D366] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Contact Form */}
      {contactBarOpen && ((isContactHovered || isFormHovered) || mobileFormOpen) && (
        <div
          onMouseEnter={() => setIsFormHovered(true)}
          onMouseLeave={() => setIsFormHovered(false)}
          className="fixed right-0 top-1/2 transform -translate-y-3/5 sm:-translate-y-2/4 z-20 bg-white shadow-lg p-6 rounded w-80 sm:w-96 mr-12"
          style={{ marginTop: '50px' }}
        >
          <button
            onClick={() => {
              setMobileFormOpen(false);
              setIsFormHovered(false);
              setIsContactHovered(false);
            }}
            className="absolute top-6 right-4 text-gray-500 hover:text-gray-700 sm:hidden"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-lg font-bold mb-4 text-black">Contact Form</h3>
          <form onSubmit={handleContactSubmit}>
            <div className="mb-4 text-black">
              <label className="block text-sm font-medium mb-2 text-black">Name</label>
              <input
                type="text"
                name="name"
                value={contactFormData.name}
                onChange={handleContactInputChange}
                required
                className="w-full p-2 border border-black rounded text-black"
              />
            </div>
            <div className="mb-4 text-black">
              <label className="block text-sm font-medium mb-2 text-black">Phone</label>
              <input
                type="tel"
                name="phone"
                value={contactFormData.phone}
                onChange={handleContactInputChange}
                required
                className="w-full p-2 border border-black rounded"
              />
            </div>
            <div className="mb-4 text-black">
              <label className="block text-sm font-medium mb-2 text-black">Email</label>
              <input
                type="email"
                name="email"
                value={contactFormData.email}
                onChange={handleContactInputChange}
                required
                className="w-full p-2 border border-black rounded"
              />
            </div>
            <div className="mb-4 text-black">
              <label className="block text-sm font-medium mb-2 text-black">How did you hear about us?</label>
              <input
                type="text"
                name="hearAboutUs"
                value={contactFormData.hearAboutUs}
                onChange={handleContactInputChange}
                required
                className="w-full p-2 border border-black rounded"
              />
            </div>
            <div className="mb-4 text-black">
              <label className="block text-sm font-medium mb-2 text-black">Message</label>
              <textarea
                name="message"
                value={contactFormData.message}
                onChange={handleContactInputChange}
                required
                className="w-full p-2 border border-black rounded"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="bg-[#7E6BF2] text-white px-4 py-2 rounded hover:bg-[#6a5acd] w-full">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}
