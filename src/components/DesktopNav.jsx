import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaChevronDown } from "react-icons/fa"
import { div } from "framer-motion/m"

const DesktopNav = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const dropdownContent = {
    investor: [
      "NSDL eVoting System",
      "Annual Reports",
      "Annual Return",
      "Buyback 2023",
      "Buyback 2024",
      "Financial Results",
      "Corporate Details",
      "Shareholding Pattern",
      "Unclaimed Dividends",
      "Stock Exchange Compliance",
      "Share Capital Audit Reports",
      "Investor Complaints",
      "Investor Awareness",
      "Corporate Governance",
      "Corporate Announcements",
      "Corporate Communication",
      "Compliance Certificate",
      "PCS Certificate",
      "DP Regulations",
      "Policy",
      "Notice",
      "AGM",
      "AGM Inspection Documents 2023-24",
      "EGM",
      "KYC",
      "Code of Conduct",
      "Fair Practices Code",
      "Subsidiary Companies",
      "Grievance Redressal Mechanism",
      "Intimation of Loss of share certificates",
      "Secretarial-Compliance-Report",
      "Corporate Social Responsibility (CSR)",
    ],
    compliance: [
      "Compliance Certificate",
      "PCS Certificate",
      "DP Regulations",
      "Policy",
      "Notice",
      "AGM",
      "AGM Inspection Documents 2022-23",
    ],
  }

  return (
    <nav className="hidden md:block text-[24px] font-bold ml-[200px]">
      <ul className="flex flex-wrap items-center gap-5">
        <li>
          <Link to="/" className="text-white font-bold text-sm hover:text-gray-200 py-5 inline-block whitespace-nowrap">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white text-sm hover:text-gray-200 py-5 inline-block whitespace-nowrap">
            About Us
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setHoveredItem("services")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button className="text-white text-sm hover:text-gray-200 py-5 inline-flex items-center gap-1 whitespace-nowrap">
            Services <FaChevronDown className="text-[10px] ml-1" />
          </button>
          {hoveredItem === "services" && (
            <div className="absolute top-full z-50 left-0 w-[200px] bg-white shadow-md">
              <div className="p-2 gap-3">
                <Link
                  to="/core-strengths"
                  className="block p-2 text-gray-500 hover:text-[#99141E] text-sm"
                >
                 <span> core Strength</span>
                </Link>
                <Link
                  to="/PPP"
                  className="block p-2 text-gray-500 hover:text-[#99141E] text-sm"
                >
                 <span>PPP - Private Placement Program/Trade Profit Fund (TPF)</span>
                </Link>
              </div>
            </div>
          )}
        </li>
        <li>
          <Link to="/management" className="text-white text-sm hover:text-gray-200 py-5 inline-block whitespace-nowrap">
            Management
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setHoveredItem("investor")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button className="text-white text-sm hover:text-gray-200 py-5 inline-flex items-center gap-1 whitespace-nowrap">
            Investor Relation <FaChevronDown className="text-[10px] ml-1" />
          </button>
          {hoveredItem === "investor" && (
            <div className="absolute grid grid-cols-2 p-9  top-full z-50 left-0 w-[500px] bg-white shadow-md">
              {dropdownContent.investor.map((item, index) => (
                <div className="flex items-center">
                  <span className=" text-red-700">›</span>
                  <a
                    key={index}
                    href="#"
                    className="block p-2 text-gray-700 hover:text-red-700 text-sm"
                  >
                    <span>{item}</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </li>
        <li>
          <Link
            to="/proprietary"
            className="text-white text-sm hover:text-gray-200 py-5 inline-block whitespace-nowrap"
          >
            Proprietary Investment
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setHoveredItem("compliance")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button className="text-white text-sm hover:text-gray-200 py-5 inline-flex items-center gap-1 whitespace-nowrap">
            Stock Broker Compliance <FaChevronDown className="text-[10px] ml-1" />
          </button>
          {hoveredItem === "compliance" && (
            <div className="absolute p-6 top-full z-50 left-0 w-[250px] bg-white shadow-md">
              {dropdownContent.compliance.map((item, index) => (
                <div className="flex items-center">
                  <span className=" text-red-700">›</span>
                  <a
                    key={index}
                    href="#"
                    className="block p-2 text-gray-700 hover:text-red-700 text-sm"
                  >
                    <span>{item}</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </li>
        <li>
          <Link to="/contact" className="text-white text-sm hover:text-gray-200 py-5 inline-block whitespace-nowrap">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav

