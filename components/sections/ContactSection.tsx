
import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-12 uppercase">Reach Out</h2>
            <form className="bg-[#1C1C1E] p-8 md:p-12 lg:p-16 rounded-3xl space-y-8">
              <div>
                <label 
                  htmlFor="firstName" 
                  className="block text-[1.5rem] font-semibold text-yellow-300 mb-2 font-raleway"
                >
                  First name
                </label>
                <input type="text" id="firstName" name="firstName" placeholder="John" className="w-full bg-white text-black placeholder-gray-500 px-6 h-[66px] rounded-full border-none focus:ring-2 focus:ring-yellow-300 outline-none" />
              </div>
              <div>
                <label 
                  htmlFor="lastName" 
                  className="block text-[1.5rem] font-semibold text-yellow-300 mb-2 font-raleway"
                >
                  Last name
                </label>
                <input type="text" id="lastName" name="lastName" placeholder="Doe" className="w-full bg-white text-black placeholder-gray-500 px-6 h-[66px] rounded-full border-none focus:ring-2 focus:ring-yellow-300 outline-none" />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[1.5rem] font-semibold text-yellow-300 mb-2 font-raleway"
                >
                  Email
                </label>
                <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" className="w-full bg-white text-black placeholder-gray-500 px-6 h-[66px] rounded-full border-none focus:ring-2 focus:ring-yellow-300 outline-none" />
              </div>
              <div>
                <label 
                  htmlFor="company" 
                  className="block text-[1.5rem] font-semibold text-yellow-300 mb-2 font-raleway"
                >
                  Company
                </label>
                <input type="text" id="company" name="company" placeholder="John Doe AI" className="w-full bg-white text-black placeholder-gray-500 px-6 h-[66px] rounded-full border-none focus:ring-2 focus:ring-yellow-300 outline-none" />
              </div>
              <div>
                <label 
                  htmlFor="jobTitle" 
                  className="block text-[1.5rem] font-semibold text-yellow-300 mb-2 font-raleway"
                >
                  Job Title
                </label>
                <input type="text" id="jobTitle" name="jobTitle" placeholder="CEO" className="w-full bg-white text-black placeholder-gray-500 px-6 h-[66px] rounded-full border-none focus:ring-2 focus:ring-yellow-300 outline-none" />
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[1.5rem] font-semibold text-yellow-300 mb-2 font-raleway"
                >
                  How Can We Help?
                </label>
                <textarea id="message" name="message" rows={4} placeholder="Let us know your design needs..." className="w-full bg-white text-black placeholder-gray-500 p-6 rounded-[33px] border-none focus:ring-2 focus:ring-yellow-300 outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-300 text-black text-[1.2rem] font-bold h-[66px] rounded-full hover:bg-yellow-400 transition-colors duration-300">Submit</button>
            </form>
          </div>
        </section>
    );
};

export default ContactSection;