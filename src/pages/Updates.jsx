import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import UpdateList from '../components/UpdateList';

const Updates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUpdates = () => {
      const storedUpdates = localStorage.getItem('updates');
      if (storedUpdates) {
        setUpdates(JSON.parse(storedUpdates));
      } else {
        // Load from JSON file if no localStorage data
        fetch('/data/updates.json')
          .then(response => response.json())
          .then(data => {
            setUpdates(data);
            localStorage.setItem('updates', JSON.stringify(data));
          })
          .catch(error => {
            console.error('Error loading updates:', error);
            setUpdates([]);
          });
      }
      setLoading(false);
    };

    loadUpdates();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-300 rounded"></div>
              <div className="h-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Updates & Newsletter - Heritage to Health</title>
        <meta name="description" content="Stay updated with the latest news, program developments, and impact stories from Heritage to Health. Subscribe to our newsletter for monthly insights on mental wellness, leadership, and holistic health." />
        <meta name="keywords" content="Heritage to Health updates, Maasai health news, reproductive health programs, menstrual hygiene workshops, community health survey, newsletter subscription" />
        <link rel="canonical" href="https://heritagetohealth.org/updates" />
        <meta property="og:title" content="Updates & Newsletter - Heritage to Health" />
        <meta property="og:description" content="Stay updated with the latest news, program developments, and impact stories from Heritage to Health. Subscribe to our newsletter for monthly insights on mental wellness, leadership, and holistic health." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://heritagetohealth.org/updates" />
        <meta name="twitter:title" content="Updates & Newsletter - Heritage to Health" />
        <meta name="twitter:description" content="Stay updated with the latest news, program developments, and impact stories from Heritage to Health. Subscribe to our newsletter for monthly insights on mental wellness, leadership, and holistic health." />
        <meta property="og:image" content="/logo512.png" />
      </Helmet>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Updates & Newsletter</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8 text-center">
            Stay informed about our latest programs, partnerships, and impact in the community.
          </p>

          <UpdateList updates={updates} />

          {/* Newsletter Section */}
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 text-center mb-6">
              Join our community to receive monthly insights on mental wellness, leadership, and holistic health.
            </p>

            {/* Mailchimp Signup Form */}
            <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
              <div dangerouslySetInnerHTML={{
                __html: `
                  <!-- Begin Mailchimp Signup Form -->
                  <form action="https://heritagetohealth@gmail.com" method="post" target="_blank" noValidate>
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
            <div className="text-center mt-8">
              <a
                href="https://heritagetohealth@246769254.mailchimpapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                Read our latest newsletter →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
