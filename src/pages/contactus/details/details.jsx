
import { MapPin, Phone, Printer, Mail } from "lucide-react"

export default function ContactDetails() {
    return (
        <div className="overflow-hidden">
            {/* Top Grid Section */}
            <div className="container-fluid grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Registered Office */}
                <div className="border-r-[1px] border-gray-300 p-6">
                    <div className="flex items-center ">
                        <h2 className="font-bold mb-4">Registered Office</h2>
                        <span className="border-[1px] w-[200px] border-gray-100"></span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <MapPin className="w-10 h-10 text-[#C10007]" />
                            <p className="text-sm max-w-[250px]">
                                VLS Finance Ltd. Ground Floor, 90, Okhla Industrial Estate, Phase III,
                                <br />
                                New Delhi - 110020.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-10 h-10 text-[#C10007]" />
                            <p className="text-sm">+91-011-46656666</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Printer className="w-10 h-10 text-[#C10007]" />
                            <p className="text-sm">+91-011-46656699</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-10 h-10 text-[#C10007]" />
                            <p className="text-sm text-[#C10007]">vls@vlsfinances.com</p>
                        </div>
                    </div>
                </div>

                {/* Statutory Auditors */}
                <div className=" border-r-[1px] border-gray-300  p-6">
                    <div className="flex items-center ">
                        <h2 className="font-bold mb-4">Statutory Auditors</h2>
                        <span className="border-[1px] w-[200px] border-gray-100"></span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <MapPin className="w-10 h-10 text-[#C10007]" />
                            <div className="text-sm">
                                <p>M/s. M. L. Puri & Co.,</p>
                                <p>Chartered Accountants,</p>
                                <p>407, New Delhi House,</p>
                                <p>27, Barakhamba Road,</p>
                                <p>New Delhi - 110001.</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center ">
                        <h2 className="font-bold my-9">Equity Shares Listed at:</h2>
                        <span className="border-[1px] w-[150px] border-gray-100"></span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <MapPin className="w-10 h-10 text-[#C10007]" />
                            <div className="text-sm">
                                <p>M/s. M. L. Puri & Co.,</p>
                                <p>Chartered Accountants,</p>
                                <p>407, New Delhi House,</p>
                                <p>27, Barakhamba Road,</p>
                                <p>New Delhi - 110001.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Share Transfer & Investor Services */}
                <div className=" border-gray-300 p-6">
                    <h2 className="font-bold mb-4">Share Transfer & Investor Services</h2>
                    <div className="flex items-center gap-2">
                        <Mail className="w-10 h-10 text-[#C10007]" />
                        <p className="text-sm text-[#C10007]">investorservices@rcmc.delhi.in</p>
                    </div>
                </div>
            </div>

            <section className="bg-gray-100">
                {/* Equity Shares Section */}
                <div className="container-fluid border-gray-300 p-6 mb-8">
                    <h2 className="font-bold mb-4">Equity Shares Listed at:</h2>
                    <div className="flex items-start gap-2">
                        <MapPin className="w-10 h-10 text-[#C10007]" />
                        <div className="text-sm">
                            <p>BSE (Bombay Stock Exchange)</p>
                            <p>NSE (National Stock Exchange)</p>
                        </div>
                    </div>
                </div>

                {/* Grievance Section */}
                <div className="container-fluid mb-8">
                    <h2 className="font-bold mb-4">Investor Grievance Redressal Mechanism</h2>
                    <p className="text-sm mb-4">
                        CUSTOMERS MAY APPROACH THE FOLLOWING OFFICIAL FOR REDRESSAL OF ANY GRIEVANCE RELATING TO STOCK BROKING
                        OPERATIONS:
                    </p>

                    <div className=" border-gray-300 p-6 mb-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-10 h-10 text-[#C10007]" />
                                <div className="text-sm">
                                    <p className="font-bold">THE COMPLIANCE OFFICER</p>
                                    <p>VLS FINANCE LTD.</p>
                                    <p>Ground Floor, 90, OKHLA INDUSTRIAL ESTATE, PHASE III, NEW DELHI - 110020</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-10 h-10 text-[#C10007]" />
                                <p className="text-sm">+91-011-46656666</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Printer className="w-10 h-10 text-[#C10007]" />
                                <p className="text-sm">+91-011-46656699</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-10 h-10 text-[#C10007]" />
                                <p className="text-sm text-wrap">stockexchangegrievances@vlsfinance.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm space-y-4">
                        <p className="italic">
                            If the grievance is not redressed within a period of 30 days of receipt by the aforesaid, the customer may
                            approach the concerned Stock Exchange viz. BSE Limited at{" "}
                            <a href="https://scores.bseindia.com/scores/Complaint.aspx" className="text-[#C10007] ">
                                https://scores.bseindia.com/scores/Complaint.aspx
                            </a>{" "}
                            using the grievance redressal mechanism mentioned at the website of the Exchange.
                        </p>

                        <p className="italic">
                            Further, if the complaint is not redressed at Stock Broker / Stock Exchange level, it may be lodged with
                            Securities and Exchange Board of India (SEBI) on SCORES (web based centralized grievance redressal system of
                            SEBI) at{" "}
                            <a href="https://scores.sebi.gov.in" className="text-[#C10007]">
                                https://scores.sebi.gov.in
                            </a>
                        </p>
                    </div>

                    <div className="mt-6">
                        <p className="font-bold mb-2">Filing complaints on SCORES – Easy & quick</p>
                        <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                            <li>Register on SCORES portal</li>
                            <li>
                                Mandatory details for filing complaints on SCORES:
                                <ul className="list-disc list-inside ml-6 mt-1">
                                    <li>Name, PAN, Address, Mobile Number, Email ID</li>
                                </ul>
                            </li>
                            <li>
                                Benefits:
                                <ul className="list-disc list-inside ml-6 mt-1">
                                    <li>Effective communication</li>
                                    <li>Speedy redressal of the grievances</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Contact Forms Section */}
                <div className="container-fluid pb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Us Form */}
                    <div className=" bg-white p-6 rounded-sm shadow-sm">
                        <h2 className="flex items-center gap-2 font-bold mb-4">
                            <Mail className="w-10 h-10 text-[#C10007]" />
                            Contact Us
                        </h2>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name (*)" className="w-full p-2  rounded" required />
                            <input type="email" placeholder="Your Email (*)" className="w-full p-2  rounded" required />
                            <textarea placeholder="Your Message (*)" className="w-full p-2  rounded h-32" required />
                            <div className="flex items-center gap-2">
                                <input type="text" placeholder="5 + 95 =" className="w-24 p-2  rounded" />
                                <button className="bg-black text-white px-4 py-2 rounded">Send</button>
                            </div>
                        </form>
                    </div>

                    {/* Electronic mails Section */}
                    <div>
                        <h2 className="flex items-center gap-2 font-bold mb-4">
                            <Mail className="w-10 h-10 text-[#C10007]"/>
                            Electronic mails
                        </h2>
                        <div className="space-y-2 text-sm">
                            <div className="flex flex-wrap">
                                <span>General Information :</span>
                                <span className="text-[#C10007]"> info@vlsfinance.com</span>
                            </div>
                            <div className="flex flex-wrap">
                                <span>Business Information :</span>
                                <span className="text-[#C10007]"> trade@vlsfinance.com</span>
                            </div>
                            <div className="flex flex-wrap">
                                <span>Investor Services :</span>
                                <span className="text-[#C10007]"> hconsul@vlsfinance.com</span>
                            </div>
                            <div className="flex flex-wrap">
                                <span>Grievance Redressal :</span>
                                <span className="text-[#C10007]" > stockexchangegrievances@vlsfinance.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

