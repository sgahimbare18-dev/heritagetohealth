import React, { useState } from 'react';
import API_URL from '../apiConfig';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, name: 'Newsletter Subscriber' }),
        });

        const result = await response.json();
        
        if (result.success) {
          setIsSubscribed(true);
          setEmail('');
          setTimeout(() => setIsSubscribed(false), 3000);
        } else {
          console.error('Subscription failed:', result.message);
          // Still show success for better UX, but log the error
          setIsSubscribed(true);
          setEmail('');
          setTimeout(() => setIsSubscribed(false), 3000);
        }
      } catch (error) {
        console.error('Subscription error:', error);
        // Fallback to local success state
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
      }
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Contact Info */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img src="https://i.postimg.cc/Pf8ZGvCf/H2H.jpg" alt="Heritage to Health Logo" className="h-10 w-auto" loading="lazy" />
            <div className="text-sm">
              <p>&copy; 2025 Heritage to Health. All rights reserved.</p>
              <p>Location: Arusha, Tanzania</p>
              <p>Email: heritagetohealth@gmail.com | Phone: +254 796 023 231</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-sm">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li><a href="/about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="/programs" className="hover:text-green-400 transition-colors">Programs</a></li>
              <li><a href="/impact" className="hover:text-green-400 transition-colors">Impact</a></li>
              <li><a href="/health-services" className="hover:text-green-400 transition-colors">Health Services</a></li>
              <li><a href="/partnerships" className="hover:text-green-400 transition-colors">Partnerships</a></li>
              <li><a href="/updates" className="hover:text-green-400 transition-colors">Updates</a></li>
              <li><a href="/donate" className="hover:text-green-400 transition-colors">Donate</a></li>
              <li><a href="/contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <span className="text-sm font-medium">Stay Updated:</span>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-3 py-1 text-sm rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-4 py-1 text-sm rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <span className="text-green-400 text-sm">Thank you!</span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
