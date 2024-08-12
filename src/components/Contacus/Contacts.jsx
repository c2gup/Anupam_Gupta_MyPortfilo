

import React, { useState } from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import imageCont from "../../assets/contactus/memoji-with-imac.b6578a46.svg";
import toast, { Toaster } from 'react-hot-toast';

const ContactPageOne = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast.error('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('https://my-backend-p32a.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Email sent successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error sending email');
    }
  };

  return (
    <div   id="disc" className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="relative bg-white dark:bg-theme-white w-full flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl lg:rounded-4xl max-w-7xl">
        {/* Hero Map */}
        <div className="flex justify-center items-center mb-8">
          <p className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Contact Me
          </p>
        </div>
        <div className="w-full max-w-7xl py-12">
          <div className="flex justify-center">
            <div className="w-full px-4 sm:px-6 md:px-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="relative flex items-center bg-[#ecedee] rounded-full h-16">
                    <RxAvatar className="absolute right-4 text-black" size={34} />
                    <input
                      className="w-full h-full pl-6 pr-16 bg-[#ecedee] rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      type="text"
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative flex items-center bg-[#ecedee] rounded-full h-16">
                    <MdOutlineMarkEmailRead className="absolute right-4 text-black" size={34} />
                    <input
                      className="w-full h-full pl-6 pr-16 bg-[#ecedee] rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="relative flex items-center bg-[#ecedee] rounded-full h-16">
                    <HiOutlineDevicePhoneMobile className="absolute right-4 text-black" size={34} />
                    <input
                      className="w-full h-full pl-6 pr-16 bg-[#ecedee] rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      type="tel"
                      id="phone"
                      placeholder="Mobile No"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative flex items-center bg-[#ecedee] rounded-full h-16">
                    <FaRegQuestionCircle className="absolute right-4 text-black" size={34} />
                    <input
                      className="w-full h-full pl-6 pr-16 bg-[#ecedee] rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="bg-[#ecedee] rounded-md h-60">
                  <textarea
                    className="w-full h-full p-6 rounded-md bg-[#ecedee] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    id="message"
                    placeholder="Leave us a message"
                    cols={3}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-[#feb901] rounded-full text-2xl font-medium text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#feb901]"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="absolute right-0 bottom-0 hidden md:block">
          <img src={imageCont} alt="Contact Illustration" />
        </div>
      </div>
    </div>
  );
};

export default ContactPageOne;
