import React, { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaGem, FaClock, FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoHelpBuoyOutline, IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
const tabsData = [
    {
        title: "HISTORY AND ACHIEVEMENTS",
        icon: "1",
        details: [
            "Incorporated in January 1986",
            "Listed on the BSE Ltd. (Formerly Bombay Stock Exchange)",
            "The National Stock Exchange of India Ltd.",
            "The Calcutta Stock Exchange Association Ltd."
        ],
    },
    {
        title: "PRESENT BUSINESS",
        icon: "2",
        details: ["Business details go here..."]
    },
    {
        title: "FINANCIAL STRENGTHS",
        icon: "3",
        details: ["Financial strengths details go here..."]
    },
    {
        title: "MANAGEMENT STRENGTHS",
        icon: "4",
        details: ["Management strengths details go here..."]
    }
];

const AboutDetails = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className=" mx-auto">
            <section style={{ backgroundImage: "url('https://www.vlsfinance.com/wp-content/uploads/2020/01/vlsf-about.jpg')" }} className="bg-cover bg-center bg-no-repeat relative">
                <div className="container-fluid py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="flex items-center gap-5">
                            <h2 className="text-xl font-bold  inline-block">About Us</h2>
                            <span className="border-2 w-[50px] border-[#CE1B28]"></span>
                        </div>
                        <p className="mt-4 text-gray-700">
                            VLS Finance Ltd., the Company with a strong net worth has carved out for itself an enviable niche in the financial sector in India.
                        </p>
                        <h3 className="mt-4 text-gray-700">VLS Group presently focuses on:</h3>
                        <ul className="list-disc mt-4 list-inside text-gray-700">
                            <li>Stock Broking - Primarily Catering to Group Companies and Associates</li>
                            <li>Proprietary Investments & Equity Research</li>
                            <li>Corporate Consulting & Advisory Services</li>
                        </ul>
                    </div>
                    <div className="rounded-sm p-9 shadow-sm">
                        <div className="flex items-center gap-5">
                            <h2 className="text-xl font-bold inline-block">More About VLS Finance Ltd.</h2>

                            <span className="border-2 w-[50px] border-[#CE1B28]"></span>
                        </div>
                        <div className="mt-4">
                            {tabsData.map((tab, index) => (
                                <div key={index} className="mb-2">
                                    <button
                                        className="w-full flex justify-between items-center p-3 bg-white shadow-sm drounded-sm text-gray-800"
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    >
                                        <span className="flex items-center gap-2"><span className="bg-[#CE1B28] text-white px-2 rounded-full">{tab.icon}</span> <span className="font-semibold">{tab.title}</span></span>
                                        <span>{activeIndex === index ? "−" : "+"}</span>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-2 p-3 bg-white shadow-sm drounded-sm text-gray-700"
                                            >
                                                {tab.details.map((detail, i) => (
                                                    <li key={i}>• {detail}</li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-12 px-4 md:px-12">
                <div className="container-fluid">
                    <div className="flex md:flex-row flex-col items-center gap-[28px] justify-between">
                        <h2 className="md:text-xl font-semibold">
                            Looking for <span className="text-[#CE1B28]">Financial</span> Consulting?
                        </h2>
                        <Link to='' className="text-[#CE1B28] font-semibold uppercase hover:underline">
                            Contact Us Today →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-[700px] ">
                        <div className="p-6 bg-white h-[150px] shadow-sm rounded-sm flex flex-col items-center">
                            <FaGem className="text-[#CE1B28] text-4xl" />
                            <p className="mt-2 text-[14px] font-semibold">Corporate Consulting</p>
                        </div>
                        <div className="p-6 bg-white h-[150px] shadow-sm rounded-sm flex flex-col items-center">
                            <FaClock className="text-[#CE1B28] text-4xl" />
                            <p className="mt-2 text-[14px] font-semibold">Advisory Services</p>
                        </div>
                        <div className="p-6 bg-white h-[150px] shadow-sm rounded-sm flex flex-col items-center">
                            <FaChartBar className="text-[#CE1B28] text-4xl" />
                            <p className="mt-2 text-[14px] font-semibold text-center">
                                Stock Broking - Primarily Catering to Group Companies and Associates
                            </p>
                        </div>
                        <div className="p-6 bg-white h-[150px] shadow-sm rounded-sm flex flex-col items-center">
                            <FaClock className="text-[#CE1B28] text-4xl" />
                            <p className="mt-2 text-[14px] font-semibold text-center">
                                Proprietary Investments & Equity Research
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* History and Achievements */}
            <section className="container-fluid py-12 flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 w-full flex-shrink-0">
                    <img width={550} height={747} src="https://www.vlsfinance.com/wp-content/uploads/2017/07/sandglass.jpg" alt="Hourglass" />
                </div>
                <div className="md:w-1/2 w-full">
                    <h2 className="text-xl font-bold text-gray-700">HISTORY AND ACHIEVEMENTS</h2>
                    <p className="text-gray-700 mt-2">
                        VLS Finance is guided by a strong and professional Board of Directors comprising Bankers, Chartered Accountants, and Bureaucrats. It has an excellent blend of old-world wisdom, derived from its conservative policy makers at the board level, combined with a modern approach at the operational level, courtesy of its young and dynamic management team.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="text-gray-700">Incorporated in January 1986</p></li>
                        <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> Listed on the BSE Ltd. (Formerly Bombay Stock Exchange), The National Stock Exchange of India Ltd., and The Calcutta Stock Exchange Association Ltd.</p></li>
                    </ul>
                </div>
            </section>

            {/* Present Business and Financial Strengths */}
            <section className="py-12 bg-[#F4F4F4] mt-12">
                <div className="container-fluid grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="">
                        <h5 className="text-sm text-gray-500">VLS Finance Ltd.</h5>
                        <h3 className="text-lg font-bold text-black">PRESENT BUSINESS</h3>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> A SEBI Registered Stock Broker with Membership of BSE Limited in the Capital Market segment</p></li>
                            <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> Proprietary Investments and Equity Research</p></li>
                            <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> The subsidiary company VLS Securities Ltd. is a SEBI registered Stock Broker with Membership of National Stock Exchange of India Ltd. (NSE) both in the Capital Market & Derivatives segments</p></li>
                            <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> Merchant Banking in subsidiary company – VLS Securities Ltd. Registered as a Category I Merchant Banker with the Securities & Exchange Board of India (SEBI)</p></li>
                            <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> Corporate Consulting & Advisory Services</p></li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 shadow-sm rounded-sm">
                        <h5 className="text-sm text-gray-500">VLS Finance Ltd.</h5>
                        <h3 className="text-lg mb-6 font-bold text-black">FINANCIAL STRENGTHS</h3>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> Has a Networth of Rs.10793 million, as on 31.03.2023 </p></li>
                            <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> A debt-free company </p></li>
                            <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> The current / past Portfolio of Equity Investments both Listed and Unlisted has yielded high returns to the company </p></li>
                            <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700"> Raised over Rs. 1328 million from Secondary Offering in December, 1994. </p></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="container-fluid py-12 flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 w-full flex-shrink-0">
                    <img width={550} height={747} src="https://www.vlsfinance.com/wp-content/uploads/2017/07/sandglass.jpg" alt="Hourglass" />
                </div>
                <div className="md:w-1/2 w-full">
                    <h5 className="text-sm text-gray-500">VLS Finance Ltd.</h5>
                    <h2 className="text-xl font-bold text-gray-700">MANAGEMENT STRENGTHS</h2>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700">Proprietary investment research with over 200 qualitative and quantitative parameters for selecting securities – emphasis on finding value.</p></li>
                        <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700">The Board of Directors comprises industry leaders and former top government and finance professionals.</p></li>
                        <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700">Top level management is highly experienced and skilled in finance and accounting</p></li>
                        <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700">Legacy of highly successful investment track record – yielding high returns from early stage investments.</p></li>
                        <li className="flex items-start gap-4"><FaCheckSquare className="text-[#CE1B28] text-[30px]" /> <p className="max-w-[500px] text-gray-700">Professional and experienced pool of executives comprising of Chartered Accountants, Company Secretaries, MBAs & CFAs.</p></li>
                    </ul>
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="container-fluid flex flex-col md:flex-row justify-between items-center p-10 ">
                    {/* Left Section */}
                    <div className="w-full md:w-[600px] space-y-4">
                        <h3 className="text-gray-500 uppercase text-sm">Get in touch</h3>
                        <h2 className="text-2xl font-bold">Have questions?</h2>
                        <p className="text-gray-600">Please contact:</p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <span className="bg-red-600 text-white p-2 rounded-full">
                                    <CiMail />
                                </span>
                                <a href="mailto:vls@vlsfinances.com" className="text-red-600 hover:underline">
                                    vls@vlsfinances.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="bg-red-600 text-white p-2 rounded-full">
                                    <IoHelpBuoyOutline />
                                </span>
                                <a href="mailto:hconsul@vlsfinance.com" className="text-red-600 hover:underline">
                                    hconsul@vlsfinances.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="bg-red-600 text-white p-2 rounded-full">
                                    <IoIosCall />
                                </span>
                                <p className="text-gray-700">+91-011-46656666</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="bg-red-600 text-white p-2 rounded-full">
                                <IoLocationSharp />
                                </span>
                                <p className="text-gray-700">
                                    VLS Finance Ltd. Ground Floor, 90 Okhla Industrial Estate, Phase III,
                                    New Delhi – 110020
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="w-full md:w-[600px] bg-white p-6 shadow-sm rounded-sm">
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name: (*)" className="w-full p-3 border-b border-gray-300" required />
                            <input type="email" placeholder="Your Email: (*)" className="w-full p-3 border-b border-gray-300" required />
                            <textarea placeholder="Your Message: (*)" className="w-full p-3 border-b border-gray-300 h-32" required></textarea>
                            <div className="flex items-center space-x-3">
                                <span className="text-gray-700">5 + 66 =</span>
                                <input type="text" placeholder="?" className="w-16 p-2 border rounded" required />
                            </div>
                            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutDetails;