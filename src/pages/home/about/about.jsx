import { Link } from "react-router-dom";
import { FaShareSquare } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-black text-white py-14">
            <div className="container-fluid mx-auto text-center">
                <p className="text-lg leading-relaxed mb-5">
                    VLS Finance Ltd., the Company with a strong net worth has carved out for itself an enviable niche in the
                    financial sector in India.
                </p>
                <button className="bg-white text-gray-600 px-5 py-2 rounded-md shadow-md hover:bg-gray-300">
                    <Link className="flex items-center space-x-2" to="/">
                        <span>More About VLS</span> <FaShareSquare />
                    </Link>
                </button>
                
                <div className="text-white  mt-5 rounded-md shadow-md">
                    <div className="bg-gray-200 text-black p-2 rounded-md text-center font-mono font-bold mb-5">
                        <p>Attention Investors</p>
                        <p>Revised Guidelines On Margin Collection</p>
                    </div>
                    <ol className="list-decimal pl-5 text-left space-y-3">
                        <li>
                            Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system
                            w.e.f. September 1, 2020.
                        </li>
                        <li>
                            Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly
                            from depository on your email id and/or mobile number to create pledge.
                        </li>
                        <li>
                            Check your Securities /MF/ Bonds in the consolidated account statement issued by NSDL/CDSL every month.
                        </li>
                    </ol>
                    <p className="mt-5 text-start font-bold">.......... Issued in the interest of Investors.</p>
                </div>
                <div className="p-4 bg-white rounded-sm"></div>
                <div className=" text-white  mt-5 rounded-md shadow-md">
                    <h2 className="font-bold text-xl mb-5 text-start">Advisory for Investors</h2>
                    <p className="leading-relaxed text-start mb-5">
                        Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock
                        brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of
                        the day. Issued in the interest of investors.
                    </p>
                    <p className="leading-relaxed text-start">
                        KYC is one time exercise while dealing in securities markets – once KYC is done through a SEBI registered
                        intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach
                        another intermediary. Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque.
                        Please write the Bank account number and sign the IPO application form to authorize your bank to make payment
                        in case of allotment. In case of non-allotment, the funds will remain in your bank account. As a business, we
                        don't give stock tips and have not authorized anyone to trade on behalf of others.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;