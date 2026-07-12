import React, { useState } from 'react';
import { BiSupport, BiCheckCircle, BiEnvelope, BiMap, BiTimeFive } from 'react-icons/bi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Simulate message sending delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className=" mx-auto">
        
        {/* Restaurant Header Section */}
        <div className="border-b border-slate-200 pb-8 mb-12">
          <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            <span>Get In Touch</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Contact <span className="text-blue-600">Food Corner</span>
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-3xl">
            Have questions about our menu, private events, hosting a party, or want to share your dining experience? We value your feedback and look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Panel: Restaurant Location & Details */}
          <div className="lg:col-span-1 space-y-6 sticky top-24">
            
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 pb-3 border-b border-slate-100">
                Our Restaurant
              </h3>
              
              {/* Location */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-0.5">
                  <BiMap size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Address</span>
                  <p className="text-sm font-semibold text-slate-800">Sukedhara, Kathmandu</p>
                  <p className="text-xs text-slate-500">Opposite Main Highway, Nepal</p>
                </div>
              </div>

              {/* Contact Number */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-0.5">
                  <BiSupport size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Phone Line</span>
                  <p className="text-sm font-semibold text-slate-800 tracking-wide">+977 9867453467</p>
                  <p className="text-xs text-slate-400">Call for immediate table reservations</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-0.5">
                  <BiEnvelope size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Email Address</span>
                  <a href="mailto:foodcorner@gmail.com" className="text-sm font-semibold text-blue-600 hover:underline">
                    foodcorner@gmail.com
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-3 pt-2 border-t border-slate-100">
                <div className="p-2 bg-slate-50 text-slate-600 rounded-lg mt-0.5">
                  <BiTimeFive size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Opening Hours</span>
                  <p className="text-sm font-semibold text-slate-800">10:00 AM - 10:00 PM</p>
                  <p className="text-xs text-slate-500">Every day of the week</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Panel: Interactive Message Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="mx-auto w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <BiCheckCircle size={26} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Message Sent Successfully</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Thank you for contacting Food Corner. Our hospitality representative will reply to your email shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email & Purpose Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all"
                      placeholder="yourname@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Purpose of Contact</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Table Booking">Table Reservations</option>
                      <option value="Event Catering">Catering & Parties</option>
                      <option value="Feedback">Compliments / Complaints</option>
                    </select>
                  </div>
                </div>

                {/* Message Context */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Message</label>
                  <textarea 
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all resize-none"
                    placeholder="Write your details, reservation requirements, or general menu inquiries here..."
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-150 shadow-sm text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;