'use client'
import React, { useState } from 'react';
import Modal from "@/components/Modal";

const ContactUs = () => {
  // Function to handle form submission
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalBody = {
    title: "Thank you!",
    content:"We have recieved your message request!"
  }
  const handleSubmit = (event: React.FormEvent) => {
    setIsModalOpen(true)
    event.preventDefault(); // Prevent the default form submission
    // You can add your form submission logic here
  };

  return (
    <>
    
    <div>
      <main className="container mx-auto flex justify-center items-center py-8 ">
        {/* Contact Form */}
        <div className='w-1/2'>
          <h2 className="text-lg font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Your Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Your Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </main>
    </div>
    <Modal   isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalBody={modalBody} />
    </>
  );
};

export default ContactUs;
