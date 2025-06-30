import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-300">SYNERGY TELECOM</h2>
          <p className="text-gray-400 text-sm">
            Delivering innovative telecom infrastructure with RF, solar, and microwave solutions.
          </p>
        </div>

        {/* Portals */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Shop At</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="https://www.indiamart.com/synergy-telecom/" target="_blank" rel="noopener noreferrer">India Mart</a></li>
            <li><a href="https://rfconnector.trustpass.alibaba.com/" target="_blank" rel="noopener noreferrer">Alibaba</a></li>
            <li><a href="https://www.tradeindia.com/synergy-telecom-pvt-ltd-1070132/" target="_blank" rel="noopener noreferrer">Trade India</a></li>
            <li><a href="https://www.exportersindia.com/synergy-telecom-pvt-ltd/" target="_blank" rel="noopener noreferrer">Exporters India</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Other Websites</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="https://rfconnectorhouse.com/" target="_blank" rel="noopener noreferrer">rfconnectorhouse.com</a></li>
            <li><a href="https://www.rfconnectorncable.com/" target="_blank" rel="noopener noreferrer">rfconnectorncable.com</a></li>
            <li><a href="https://www.rfcomponent.com/" target="_blank" rel="noopener noreferrer">rfcomponent.com</a></li>
            <li><a href="https://www.synergytpl.com/" target="_blank" rel="noopener noreferrer">synergytpl.com</a></li>
            <li><a href="https://www.synergytelecom.co.in/" target="_blank" rel="noopener noreferrer">synergytelecom.co.in</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Contact</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps?q=WZ-47, SAINI CHOWK, budella village, dhani ram ji ka ghar, basment, Budella, Vikaspuri, New Delhi, Delhi 110018"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-400 transition"
              >
                New Delhi, India
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaPhone />
              <a
                href="tel:+917217885948"
                className="hover:underline hover:text-blue-400 transition"
              >
                +91-7217885948
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:info@synergytpl.com"
                className="hover:underline hover:text-blue-400 transition"
              >
                info@synergytpl.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-800 my-6"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Synergy Telecom — All rights reserved.</p>
        <div className="flex gap-4 mt-3 sm:mt-0 text-blue-300">
          <a href="https://www.facebook.com/share/1ZKWKn4Gh4/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://x.com/p_synergy?t=YntMjHUaqJ7zZeUhQvro7A&s=08" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/pradeepagrawal1145?igsh=MTVmOW5nanVmbjE2ZQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/synergy-telecom-pvt-ltd/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.youtube.com/@synergytelecompvt.ltd.9887" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
