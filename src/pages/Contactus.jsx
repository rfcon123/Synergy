import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import StyledButton from '../components/StyledButton'; // ✅ Import your reusable button
import { Helmet } from "react-helmet-async";


const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-10 md:px-10">
      <Helmet>
  <title>Contact Us | RF Connector - Synergy Telecom</title>
  <meta
    name="description"
    content="Get in touch with Synergy Telecom Pvt. Ltd. for RF connectors, antennas, and microwave components. Reach our offices in India and Canada or use the contact form to send a message."
  />
  <meta
    name="keywords"
    content="Contact Synergy Telecom, RF connector support, RF cable enquiries, Synergy Delhi Office, Synergy Canada Office"
  />
  <meta property="og:title" content="Contact Us | RF Connector - Synergy Telecom" />
  <meta
    property="og:description"
    content="Contact Synergy Telecom for RF and microwave solutions. Offices in India and Canada. Quick response via form, phone or email."
  />
  <meta property="og:url" content="https://panaceaticsynergy.com/contact-us" />
  <meta property="og:type" content="website" />
</Helmet>

      <div className="max-w-6xl mx-auto">

        {/* 🔷 Heading */}
         <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-10">
        Contact Us
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded-md"></div>
      </h1>


        <p className="text-center text-gray-700 mb-6 text-lg">
          Or send us your enquiry at{' '}
          <a
            href="mailto:info@rfconnector.in"
            className="text-blue-700 font-medium hover:underline"
          >
            info@rfconnector.in
          </a>
        </p>
        <p className="text-center text-gray-700 mb-12 text-lg">
          With over $2.7 million in ready stock of RF connectors, microwave components, and cables, we ensure fast and reliable dispatch for urgent telecom site needs. Managed by our FACT Software System for efficient processing and delivery.
        </p>

        {/* 📞 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <a
            href="mailto:info@rfconnector.in"
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition hover:scale-[1.03]"
          >
            <Mail className="mx-auto text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-1">Email Us</h3>
            <p className="text-gray-700 mb-1">pradeep@rfconnector.in</p>
            <p className="text-gray-700"> info@rfconnector.in</p>
          </a>

          {/* Call */}
          <a
            href="tel:+91-7217885948"
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition hover:scale-[1.03]"
          >
            <Phone className="mx-auto text-blue-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
            <p className="text-gray-700 mb-1">+91-7217885948</p>
            <p className="text-gray-700">+91-11-28533349</p>
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

        {/* 🏢 Office Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* India Office */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Head Office (India)</h3>
            <p className="text-gray-800 font-medium mb-1">Pradeep Kumar Agrawal</p>
            <p className="text-sm text-gray-600 mb-4">Director</p>
            <p className="text-gray-700 mb-1">SYNERGY TELECOM PVT LTD</p>
            <p className="text-gray-700 mb-1">WZ 47 Budella, Saini Chowk, Vikas Puri, New Delhi-110018</p>
            <p className="mb-1">
              📧 <a href="mailto:pradeep@rfconnector.in" className="text-blue-600 hover:underline">pradeep@rfconnector.in</a>
            </p>
            <p className="mb-1">📞 +91-11-28533349</p>
            <p className="mb-1">📱 +91-7217885948</p>
            <p className="mb-1">
              🌐 <a href="https://www.synergyantenna.com/online-store.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">synergyantenna.com/online-store</a>
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
              📧 <a href="mailto:pulkit@rfconnector.in" className="text-blue-600 hover:underline">pulkit@rfconnector.in</a>
            </p>
            <p className="mb-1">📱 +1 (416) 333-6594</p>
          </div>
        </div>

        {/* ✅ Contact Form */}
       {/* ✅ Contact Form */}
    <section className="bg-white rounded-xl shadow-xl p-8 mb-16">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Send Us a Message</h3>
      <form
        action="https://formsubmit.co/a324884fcd1e9c2d90a89172c4854bbb"
        method="POST"
        className="grid gap-6"
        onSubmit={(e) => alert('Thank you for your message! We will get back to you soon.')}
      >
        {/* FormSubmit hidden inputs */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_autoresponse" value="Thank you for contacting Synergy Telecom. We'll get back to you shortly." />
        <input type="hidden" name="_next" value="https://panaceaticsynergy.com/contact-us/" />

        {/* Honeypot field to prevent spam bots */}
        <input type="text" name="_honey" style={{ display: 'none' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <input
          type="number"
          name="Phone"
          placeholder="Phone Number"
          className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="text"
          name="Company"
          placeholder="Your Company"
          className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <textarea
          name="Message"
          rows="5"
          placeholder="Your Message"
          required
          className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none resize-none"
        ></textarea>

        <StyledButton
          label="Send Message"
          icon={true}
          type="submit"
        />
      </form>
    </section>


        {/* ❓ Help Section */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-12 text-center">
  <HelpCircle className="text-blue-700 mx-auto mb-4" size={42} />
  <h3 className="text-2xl font-semibold text-blue-800 mb-2">Need Help or Have Questions?</h3>
  <p className="text-gray-700 mb-4">
    Reach out via email or explore our product catalogue for more details.
  </p>

  {/* ✅ Flex wrapper for centering */}
  <div className="flex justify-center">
    <StyledButton
      label="Contact Support"
      icon={true}
      onClick={() => window.location.href = 'mailto:info@synergytpl.com'}
    />
  </div>
</div>


        {/* 🎯 Career CTA */}
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
