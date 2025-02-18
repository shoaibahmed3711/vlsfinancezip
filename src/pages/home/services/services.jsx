import { SlDiamond } from "react-icons/sl";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { title: "Investment Banking", link: "/contact" },
  { title: "Corporate Consulting", link: "/contact" },
  { title: "Stock Broking - Primarily Catering to Group Companies and Associates", link: "/contact" },
  { title: "Advisory Services", link: "/contact" },
  { title: "PPP - Private Placement Program/Trade Profit Fund (TPF)", link: "/PPP" },
  { title: "Proprietary Investments & Equity Research", link: "/contact" },
];

const scrollingText = "Prevent unauthorized transactions in your account -> Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly.";

const Services = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-x-0 top-0 h-[300px] sm:h-[400px] bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/services-bg.png')" }}
      />

      {/* Content */}
      <div className="relative container-fluid mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-center text-xl mb-3 text-gray-400">
          MEET OUR PROS AND GROW YOUR BUSINESS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="bg-white p-6 sm:p-8 shadow-sm flex flex-col items-center justify-center text-center transition-transform h-full"
            >
              <SlDiamond className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 mb-4" />
              <h2 className="text-base sm:text-lg font-semibold">{service.title}</h2>
            </Link>
          ))}
        </div>
      </div>

      {/* Scrolling Text */}
      <div className="w-full container-fluid py-2 overflow-hidden whitespace-nowrap mt-8">
        <motion.div
          className="text-black text-sm sm:text-base font-medium flex space-x-8"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={i}>{scrollingText}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
