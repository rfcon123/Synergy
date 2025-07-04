import React, { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactPreference: 'Phone',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    mailingList: false,
    website: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Optionally: Reset form
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 mb-10">
          Contact & Feedback Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Name Section */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">* First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Write your first name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">* Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Write your last name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">* Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Write your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">* Mobile Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Write your mobile number"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Preference */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Contact Preference:</label>
            <select
              name="contactPreference"
              value={formData.contactPreference}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
            >
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
              <option value="Mail">Mail</option>
            </select>
          </div>

          {/* Address */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Address Line 1:</label>
              <input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Address Line 2:</label>
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">State/Province:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="e.g., Alabama"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">ZIP/Postal Code:</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
            />
          </div>

          {/* Mailing List */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="mailingList"
              checked={formData.mailingList}
              onChange={handleChange}
              className="w-5 h-5 text-red-600 border-gray-300 rounded mr-3"
            />
            <label className="text-gray-700 font-medium">
              Please add me to your mailing list.
            </label>
          </div>

          {/* Website & Comments */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Website:</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Comments:</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="6"
              placeholder="Share your message or feedback here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-xl rounded-xl shadow-xl hover:scale-105 transition duration-300"
          >
            Submit Your Message
          </button>

          {submitted && (
            <p className="text-center mt-6 text-green-600 font-semibold text-lg">
              ✅ Thank you! Your message has been submitted.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Feedback;
