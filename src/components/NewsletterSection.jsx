import React from "react";

export default function NewsletterSection() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Heritage to Health Newsletter
      </h1>

      {/* Mailchimp Signup Form */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
          Subscribe for Updates
        </h2>
        <p className="text-gray-600 text-center mb-5">
          Join our community to receive monthly insights on mental wellness,
          leadership, and holistic health.
        </p>

        {/* Paste the Mailchimp embed code here */}
        <div dangerouslySetInnerHTML={{
          __html: `
            <!-- Begin Mailchimp Signup Form -->
            <form action="https://YOUR_MAILCHIMP_LIST_URL" method="post" target="_blank" noValidate>
              <div class="flex flex-col space-y-3">
                <input type="email" name="EMAIL" placeholder="Your email address" required class="p-3 border border-gray-300 rounded-md w-full" />
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
                  Subscribe
                </button>
              </div>
            </form>
            <!-- End Mailchimp Signup Form -->
          `
        }} />
      </div>

      {/* Display latest newsletter link */}
      <div className="text-center mt-10">
        <a
          href="https://mailchi.mp/yourcampaignlink"
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
