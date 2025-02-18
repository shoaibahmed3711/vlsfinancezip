import { IoMdHome } from "react-icons/io";

const HeroSectionContact = () => {
    return (
      <div className="bg-red-700 text-white p-6 md:p-12 relative">
        <div className="container-fluid mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Page Title */}
          <h1 className="text-2xl font-bold">Contact us</h1>
  
          {/* Breadcrumb Navigation */}
          <nav className="text-sm mt-4 md:mt-0">
            <ul className="flex items-center space-x-2">
              <li className="flex items-center">
                <span className="text-white"><IoMdHome /></span>
                <a href="/" className="ml-1 text-white hover:underline">
                  Home
                </a>
              </li>
              <li className="text-white">›</li>
              <a href="/" className="ml-1 text-white hover:underline">
                  Services
                </a>
              <li className="text-white">›</li>

              <li className="text-white font-semibold">Contact us</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };
  
  export default HeroSectionContact;
  