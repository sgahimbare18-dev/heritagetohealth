import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Donate = () => {
  const [showDonationOptions, setShowDonationOptions] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonateClick = () => {
    setShowDonationOptions(true);
  };

  const handleAmountSelect = (amount) => {
    // Here you could integrate with a payment processor
    alert(`Thank you for selecting to donate $${amount}! Please use the bank transfer details below to complete your donation.`);
  };

  const handleCustomAmount = () => {
    const amount = parseFloat(customAmount);
    if (amount > 0) {
      handleAmountSelect(amount);
    } else {
      alert('Please enter a valid amount.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Donate - Heritage to Health</title>
        <meta name="description" content="Support Heritage to Health's mission to empower Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions. Make a donation today." />
        <meta name="keywords" content="donate to Heritage to Health, support Maasai women health, reproductive health donations, menstrual hygiene donations" />
        <link rel="canonical" href="https://heritagetohealth.org/donate" />
        <meta property="og:title" content="Donate - Heritage to Health" />
        <meta property="og:description" content="Support Heritage to Health's mission to empower Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions. Make a donation today." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://heritagetohealth.org/donate" />
        <meta name="twitter:title" content="Donate - Heritage to Health" />
        <meta name="twitter:description" content="Support Heritage to Health's mission to empower Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions. Make a donation today." />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Support Our Mission</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-6">
            Your donation helps us preserve cultural heritage and promote health through traditional practices.
            Every contribution makes a difference in our community.
          </p>
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Ways to Donate</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                One-time donation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Monthly recurring donation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                In-kind donations (supplies, equipment)
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            {!showDonationOptions ? (
              <button
                onClick={handleDonateClick}
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Donate Now
              </button>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-2xl font-semibold mb-6">Choose Your Donation Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <button
                    onClick={() => handleAmountSelect(25)}
                    className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    $25
                  </button>
                  <button
                    onClick={() => handleAmountSelect(50)}
                    className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    $50
                  </button>
                  <button
                    onClick={() => handleAmountSelect(100)}
                    className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    $100
                  </button>
                  <button
                    onClick={() => handleAmountSelect(30)}
                    className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    $30
                  </button>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter a custom amount:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      min="1"
                    />
                    <button
                      onClick={handleCustomAmount}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Donate
                    </button>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Bank Transfer Details</h4>
                  <div className="text-left">
                    <p className="mb-1"><strong>Account Name:</strong> NAMNYAKI DANIEL NATHANAEL</p>
                    <p className="mb-2"><strong>Account Number:</strong> 1338307126</p>
                    <p className="text-sm text-gray-600">Please include your name and "Heritage to Health donation" in the transfer description.</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDonationOptions(false)}
                  className="mt-4 text-gray-600 hover:text-gray-800 underline"
                >
                  Cancel
                </button>
              </div>
            )}
            <p className="mt-4 text-sm text-gray-600">
              Contact us at heritagetohealth@gmail.com for donation details
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
