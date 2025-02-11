


import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

// Image URLs (replace with actual URLs)
const images = [
  'https://www.vlsfinance.com/wp-content/uploads/2017/06/slider3-1.jpg',
  'https://www.vlsfinance.com/wp-content/uploads/2017/06/slider3-2.jpg',
  'https://www.vlsfinance.com/wp-content/uploads/2017/06/slider3-3.jpg',
  'https://www.vlsfinance.com/wp-content/uploads/2017/06/slider3-4.jpg',
];

const slides = [
  {
    title: 'High Quality Research Support',
    subtitle: 'For Proprietary Investments',
    number: '01',
    tabTitle: 'Research Support',
    description: 'Comprehensive research analysis and insights',
  },
  {
    title: 'Expert Financial Solutions',
    subtitle: 'For Your Business Growth',
    number: '02',
    tabTitle: 'Investments',
    description: 'Strategic investment solutions',
  },
  {
    title: 'Experienced Professionals',
    subtitle: 'Guiding Your Success',
    number: '03',
    tabTitle: 'Experienced Professional',
    description: 'Expert team with a proven track record',
  },
  {
    title: 'Years of Experience',
    subtitle: 'Industry Leading Expertise',
    number: '04',
    tabTitle: 'Experience',
    description: 'Decades of industry expertise',
  },
];

const HeroSectionPPP = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateBackground, setAnimateBackground] = useState(false);

  const nextSlide = () => {
    setAnimateBackground(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimateBackground(false);
    }, 500);
  };

  const prevSlide = () => {
    setAnimateBackground(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimateBackground(false);
    }, 500);
  };

  return (
    <div className="relative text-white overflow-hidden">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(183, 28, 28, 0.1), rgba(183, 28, 28, 0.1)), url(${images[currentSlide]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='container-fluid h-[250px] md:h-[600px] flex flex-col md:py-[100px] px-6'>
          {animateBackground && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-white z-30"
            />
          )}
          <section className='flex md:flex-row flex-col items-center justify-between '>
            <motion.div
              className="relative md:block hidden z-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={currentSlide}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-5">{slides[currentSlide].title}</h1>
              <p className="text-lg md:text-2xl mb-8">{slides[currentSlide].subtitle}</p>
              <motion.button className="bg-black rounded-full text-white px-4 py-2 flex items-center gap-2">
                <motion.p
                  className='flex items-center gap-2'
                  whileHover={{ scale: [1, 1.1, 1], transition: { repeat: 2, duration: 0.2 } }}
                >
                  <span className='text-sm font-bold'>CONTACT US</span>
                  <FaArrowRight />
                </motion.p>
              </motion.button>
            </motion.div>
            <div className="max-w-md md:block hidden mx-auto p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name (*)"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Your Name (*)"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email (*)"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Mobile Number (Optional)"
                  className="w-full p-2 border rounded"
                  maxLength="10"
                  pattern="[0-9]*"
                />
                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      {/* Mobile: Updated View */}
      <div className="md:hidden bg-white text-black flex flex-col items-center text-center py-10 px-5">
        <h1 className="text-xl font-bold mb-3">{slides[currentSlide].title}</h1>
        <p className="text-sm mb-5 text-gray-600">{slides[currentSlide].subtitle}</p>
        <motion.button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
          <motion.p
            className="flex items-center gap-2"
            whileHover={{ scale: [1, 1.1, 1], transition: { repeat: 2, duration: 0.2 } }}
          >
            <span className="text-sm font-bold">CONTACT US</span>
            <FaArrowRight />
          </motion.p>
        </motion.button>

        <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Company Name (*)"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Your Name (*)"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email (*)"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Mobile Number (Optional)"
              className="w-full p-2 border rounded"
              maxLength="10"
              pattern="[0-9]*"
            />
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
              Submit
            </button>
          </form>
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-between w-full mt-8 px-5">
          <button className="text-black text-xl" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button className="text-black text-xl" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>


      {/* Desktop: Bottom Navigation */}
      <div className="hidden md:flex bottom-0 z-50 left-0 right-0 container-fluid bg-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-1 p-5 text-center border border-gray-200 cursor-pointer relative ${currentSlide === index ? 'bg-white body-text-color' : 'text-gray-400 hover:bg-gray-100'}`}
            onClick={() => setCurrentSlide(index)}
          >
            {currentSlide === index && (
              <div className="absolute top-[-15px] -translate-x-1/3 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[30px] border-l-transparent border-r-transparent border-b-white z-40"></div>
            )}
            <div className="text-start text-2xl font-bold mb-2">{slide.number}</div>
            <div className="text-start text-sm">{slide.tabTitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSectionPPP;
