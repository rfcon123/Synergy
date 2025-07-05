import React from 'react';

const Feedback = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 mb-10">
          Contact & Feedback Form
        </h1>

        <form
          action="https://formsubmit.co/33c86efad5e4f7feaab2530deeffed42"
          method="POST"
          className="space-y-10"
        >
          {/* FormSubmit Hidden Config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Feedback Submission" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_autoresponse" value="Thank you for your feedback. We'll get back to you soon." />
          <input type="hidden" name="_next" value="https://refec.netlify.app/" />
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Name Section */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">* First Name:</label>
              <input
                type="text"
                name="First Name"
                required
                placeholder="Write your first name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">* Last Name:</label>
              <input
                type="text"
                name="Last Name"
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
                name="Email"
                required
                placeholder="Write your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">* Mobile Phone:</label>
              <input
                type="tel"
                name="Phone"
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
              name="Contact Preference"
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
                name="Address Line 1"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Address Line 2:</label>
              <input
                type="text"
                name="Address Line 2"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">City:</label>
              <input
                type="text"
                name="City"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">State/Province:</label>
              <input
                type="text"
                name="State"
                placeholder="e.g., Alabama"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">ZIP/Postal Code:</label>
              <input
                type="text"
                name="ZIP Code"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Country:</label>
            <input
              type="text"
              name="Country"
              defaultValue="United States"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
            />
          </div>

          {/* Mailing List */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="Mailing List"
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
              name="Website"
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Comments:</label>
            <textarea
              name="Comments"
              rows="6"
              placeholder="Share your message or feedback here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-xl rounded-xl shadow-xl hover:scale-105 transition duration-300"
          >
            Submit Your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
