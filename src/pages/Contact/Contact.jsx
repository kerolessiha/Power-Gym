import React, { useState } from "react";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add API call here
    console.log("Form Submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <><div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 text-indigo-600">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      {submitted && (
        <p className="text-green-600 text-center mb-4">
          Thanks for reaching out! We'll get back to you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Your name" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="you@example.com" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Write your message..."
            rows={4} />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div></>
  );
}
