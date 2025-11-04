import React from "react";
import NewsletterForm from './NewsletterForm';

export default function NewsletterSection() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Heritage to Health Newsletter
      </h1>

      {/* Zoho Campaigns Newsletter Form */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
          Subscribe for Updates
        </h2>
        <p className="text-gray-600 text-center mb-5">
          Join our community to receive monthly insights on mental wellness,
          leadership, and holistic health.
        </p>

        <NewsletterForm />
      </div>

      {/* Display latest newsletter link */}
      <div className="text-center mt-10">
        <a
          href="https://zoho.com/campaigns"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-lg font-medium"
        >
          Read our latest newsletter →
        </a>
      </div>
    </div>
  );
}
