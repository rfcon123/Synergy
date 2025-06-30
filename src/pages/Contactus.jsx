import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-10 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-800 mb-6">
          Contact Us
        </h2>

        <p className="text-center text-gray-700 mb-6 text-lg">
          
          Or send us your enquiry at{' '}
          <a
            href="mailto:info@rfconnector.in"
            className="text-blue-700 font-medium hover:underline"
          >
            info@rfconnector.in
          </a>
        </p>
        <p className="text-center text-gray-700 mb-12 text-lg">With over $2.7 million in ready stock of RF connectors, microwave components, and cables, we ensure fast and reliable dispatch for urgent telecom site needs. Managed by our FACT Software System for efficient processing and delivery.</p>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <a
            href="mailto:support@synergytelecom.com"
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition hover:scale-[1.03]"
          >
            <Mail className="mx-auto text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-1">Email Us</h3>
            <p className="text-gray-700 mb-1">pradeep@rfconnector.in</p>
            <p className="text-gray-700"> pulkit@rfconnector.in﻿</p>
          </a>

          {/* Call */}
          <a
            href="tel:+919876543210"
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition hover:scale-[1.03]"
          >
            <Phone className="mx-auto text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
            <p className="text-gray-700 mb-1">+91-7217885948</p>
            <p className="text-gray-700"> +1(416)333-6594</p>
          </a>

          {/* Visit */}
          <a
            href="https://www.google.com/maps?q=Synergy+Telecom+Pvt+Ltd,+New+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition hover:scale-[1.03]"
          >
            <MapPin className="mx-auto text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
            <p className="text-gray-700">Synergy Telecom Pvt. Ltd.</p>
            <p className="text-gray-700">New Delhi, India</p>
          </a>
        </div>

        {/* Office Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* India Office */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Head Office (India)</h3>
            <p className="text-gray-800 font-medium mb-1">Pradeep Kumar Agrawal</p>
            <p className="text-sm text-gray-600 mb-4">Director</p>
            <p className="text-gray-700 mb-1">SYNERGY TELECOM PVT LTD</p>
            <p className="text-gray-700 mb-1">
              WZ 47 Budella, Saini Chowk, Vikas Puri, New Delhi-110018
            </p>
            <p className="mb-1">
              📧{' '}
              <a
                href="mailto:pradeep@rfconnector.in"
                className="text-blue-600 hover:underline"
              >
                pradeep@rfconnector.in
              </a>
            </p>
            <p className="mb-1">📞 +91-11-28533349</p>
            <p className="mb-1">📱 +91-7217885948</p>
            <p className="mb-1">
              🌐{' '}
              <a
                href="https://www.synergyantenna.com/online-store.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                synergyantenna.com/online-store
              </a>
            </p>
          </div>

          {/* Canada Office */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Branch Office (Canada)</h3>
            <p className="text-gray-800 font-medium mb-1">Pulkit Agrawal</p>
            <p className="text-sm text-gray-600 mb-4">Country Head</p>
            <p className="text-gray-700 mb-1">SYNERGY TELECOM PVT LTD</p>
            <p className="text-gray-700 mb-1">1 Reidmount Avenue, Scarborough, Ontario</p>
            <p className="text-gray-700 mb-1">Postal Code M1S 4V3, Canada</p>
            <p className="mb-1">
              📧{' '}
              <a
                href="mailto:pulkit@rfconnector.in"
                className="text-blue-600 hover:underline"
              >
                pulkit@rfconnector.in
              </a>
            </p>
            <p className="mb-1">📱 +1 (416) 333-6594</p>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12 text-center">
          <HelpCircle className="text-blue-700 mx-auto mb-4" size={42} />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">
            Need Help or Have Questions?
          </h3>
          <p className="text-gray-700 mb-4">
            Reach out via email or explore our product catalogue for more details.
          </p>
          <a
            href="mailto:support@synergytelecom.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Contact Support
          </a>
        </div>

        {/* Career CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-800 mb-3 text-lg">Looking to grow with us?</p>
          <Link
            to="/career"
            className="inline-flex items-center text-blue-600 font-semibold hover:underline text-lg"
          >
            Visit Our Career Page
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
