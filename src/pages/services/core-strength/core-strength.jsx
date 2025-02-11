import React from 'react'
import HeroSectionCoreStrength from './hero-section/hero-section'
const CoreStrength = () => {
  return (
    <div>
      <HeroSectionCoreStrength />
      <div className='container-fluid py-[25px]'>
      <p className="text-gray-500 text-lg">
        The present core activities of the Company are <span className="font-semibold">Stock Broking</span> and <span className="font-semibold">Proprietary Investments</span>
      </p>
      <p className="text-gray-500 mt-4">
        The Company has a team of highly qualified and experienced professionals. A team of professionals from diverse financial and
        professional backgrounds including Chartered Accountants, Chartered Financial Analysts, Management Graduates, and Company
        Secretaries with distinguished records in their respective fields.
      </p>
      
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-gray-900 font-semibold text-xl">The core areas of competencies of VLS are:</h2>
          <ul className="list-disc list-inside mt-2 text-gray-500">
            <li>Highly qualified and experienced professional staff.</li>
            <li>High-quality research support with a large and diverse corporate information database.</li>
            <li>Consistent and successful track record.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-gray-900 font-semibold text-xl">VLS strengths in the field of investments:</h2>
          <ul className="list-disc list-inside mt-2 text-gray-500">
            <li>Expertise in Investments spanning over several decades.</li>
            <li>Successful Investment track record.</li>
            <li>High-quality Research.</li>
            <li>Experienced Accountants for due diligence.</li>
            <li>Proprietary Equity Analysis Model with over 200 parameters based on international research guidelines.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CoreStrength