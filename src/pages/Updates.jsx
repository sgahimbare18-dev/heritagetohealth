import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import UpdateList from '../components/UpdateList';
import NewsletterForm from '../components/NewsletterForm';
import axios from 'axios';
import API_URL from '../apiConfig';

const Updates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUpdates = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/updates`);
        const items = Array.isArray(response.data) ? response.data : [];
        const mapped = items.map((item) => ({
          id: item._id,
          title: item.title,
          content: item.content,
          image: item.image,
          video: item.video,
          author: item.author,
          status: item.status || 'draft',
          date: item.createdAt || new Date().toISOString(),
        }));
        // Show only published
        setUpdates(mapped.filter(u => u.status === 'published'));
      } catch (error) {
        console.error('Error loading updates:', error);
        setUpdates([]);
      } finally {
        setLoading(false);
      }
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

            {/* Zoho Campaigns Newsletter Form */}
            <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
              <NewsletterForm />
            </div>

            {/* Display latest newsletter link */}
            <div className="text-center mt-8">
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
        </div>
      </div>
    </>
  );
};

export default Updates;
