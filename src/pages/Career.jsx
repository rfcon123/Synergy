import React from 'react';
import StyledButton from '../components/StyledButton';
import team from '../assets/team.jpg'; 

const Career = () => {
  const handleApplyClick = () => {
    window.open('https://forms.gle/YourGoogleFormLinkHere', '_blank');
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 md:p-10 space-y-10">

        {/* Header */}
        <div className="text-center space-y-3">
           <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Join Our Team
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>
          <p className="text-lg text-gray-700">
            Help shape the future of RF Technology and Telecom Solutions with Synergy Telecom Pvt. Ltd.
          </p>
        </div>
 
        {/* Image */}
        <div className="w-full">
          <img
            src={team}
            alt="Team at Work"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* About Us */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-blue-800">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">SYNERGY TELECOM PRIVATE LIMITED</span> is a leading manufacturer of
            <span className="font-semibold"> Antennas, Cable Assemblies, Microwave Components, IBS, and BTS Installation Materials</span>.
            We are also one of India’s largest stockists of <span className="font-semibold">RF connectors, cables, and microwave components</span>.
          </p>
        </div>

        {/* Current Opening */}
        <div className="border border-blue-300 rounded-xl p-5 space-y-2 bg-blue-50">
          <h2 className="text-xl font-bold text-blue-800">Current Opening: Online Marketing / Sales Executive</h2>
          <p><span className="font-semibold">Location:</span> West Delhi preferred.</p>
          <p><span className="font-semibold">Eligibility:</span> Fresh graduates passionate about telecom and online marketing.</p>
          <p><span className="font-semibold">Role:</span> Engage with clients, handle online inquiries, manage digital promotions.</p>
        </div>

        {/* Perks */}
        <div className="grid md:grid-cols-3 gap-4 text-center">
          {[
            'Learning Opportunities',
            'Dynamic Work Environment',
            'Career Growth Path'
          ].map((perk, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-900 rounded-md p-4 text-sm font-medium"
            >
              {perk}
            </div>
          ))}
        </div>

        {/* Application Button - Fully Centered */}
        <div className="flex justify-center">
         <StyledButton
  label="📝 Apply Now"
  onClick={() =>
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSccTSfbsX73owONf0rg4Undqx_JGHBcQTROy5Wg6gxifeipnQ/viewform',
      '_blank'
    )
  }
/>

        </div>

        {/* Testimonials Placeholder */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-blue-800">Our Company is...</h2>
          <p className="text-gray-600 italic">Driven by innovation, powered by teamwork.</p>
        </div>

        {/* Contact Info */}
        <div className="border-t pt-4 space-y-2 text-sm text-gray-700">
          <p><span className="font-semibold">Website:</span> <a href="http://www.rfconnector.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">www.rfconnector.in</a></p>
          <p><span className="font-semibold">Email:</span> <a href="mailto:info@synergytpl.com" className="text-blue-700 hover:underline">info@synergytpl.com</a></p>
          <p><span className="font-semibold">Director:</span> Pradeep Kumar Agrawal</p>
          <p><span className="font-semibold">Phone:</span> <a href="tel:+919810138894" className="text-blue-700 hover:underline">+91-9810138894</a> / <a href="tel:+917217885948" className="text-blue-700 hover:underline">7217885948</a></p>
        </div>

      </div>
    </section>
  );
};

export default Career;
