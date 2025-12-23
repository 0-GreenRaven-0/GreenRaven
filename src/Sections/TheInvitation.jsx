import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {FaInstagram} from 'react-icons/fa';
import BackButton from '../Utility/BackButton';
import { useMediaQuery } from 'react-responsive';

const TheInvitation = ({ onBack }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async () => {
  setIsSubmitting(true);

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: `${formData.message}\n\nfrom ${formData.email} by ${formData.name}`, // ← Added here
        to_email: 'greenraven1000@gmail.com'
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);

    setFadeOut(true);
    setTimeout(() => {
      setShowVideo(true);
      setIsSubmitting(false);
    }, 500);

  } catch (error) {
    console.error('Failed to send email:', error);
    alert('Failed to send message. Please try again.');
    setIsSubmitting(false);
    setFadeOut(false);
  }
};

  const handleVideoEnd = () => {
    setShowVideo(false);
    setShowThankYou(true);
  };

  const handleClose = () => {
    window.close();
  };

  if (showThankYou) {
    return (
      <div className="section flex items-center justify-center">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl font-bold text-white mb-8 text-shadow-drop-center">
            Our Raven will carry the message to Matthew! unless he drops it somewhere...
          </h1>
          <button
            onClick={handleClose}
            className="text-2xl text-white font-bold border-2 rounded px-6 py-3 bg-green-700 hover:bg-green-800 cursor-pointer transition-colors"
          >
            NOW GET OUT
          </button>
        </div>
      </div>
    );
  }

  if (showVideo) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          onEnded={handleVideoEnd}
          src="https://ik.imagekit.io/greenraven/Green%20Raven/Icons/sendMessageByRaven"
        />
      </div>
    );
  }

  return (
    <div className="section relative overflow-hidden the-invitation min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <div className="absolute top-4 left-4 ">
        <BackButton onBack={onBack}/>
      </div>


      <div className={`w-full max-w-2xl transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Send me an email and let's work together!
        </h1>
<a 
  href="https://www.instagram.com/matthew_hamdesh?utm_source=qr&igsh=bTRzb29oaTN2aXNw" 
  target="_blank" 
  rel="noopener noreferrer"
  className='flex gap-2 justify-center cursor-pointer hover:text-white transition-all duration-200 items-center text-2xl text-black font-bold'
>
  <FaInstagram size={35} color='green'/>
  Or DM me on Instagram
</a>
      

        <div className="space-y-6">
          <div>
            <label className="block text-gray-900 font-semibold mb-2 text-lg">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-800 text-gray-900 text-lg focus:outline-none focus:border-green-800 placeholder-gray-600"
              placeholder="Enter your name"
              style={{ fontFamily: 'Georgia, serif' }}
            />
          </div>

          <div>
            <label className="block text-gray-900 font-semibold  mb-2 text-lg">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-0 py-2 bg-transparent font-semibold  border-b-2 border-gray-800 text-gray-900 text-lg focus:outline-none focus:border-green-800 placeholder-gray-600"
              placeholder="your@email.com"
              style={{ fontFamily: 'Georgia, serif' }}
            />
          </div>

          <div>
            <label className="block text-gray-900 font-semibold  mb-2 text-lg">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={isMobile ? 2 : 6}
              className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-800 text-gray-900 text-lg focus:outline-none focus:border-green-800 font-semibold  resize-none placeholder-gray-600"
              placeholder="Write your message here..."
              style={{ fontFamily: 'Georgia, serif' }}
            />
          </div>

     

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold text-xl rounded border-2 border-green-900 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default TheInvitation;