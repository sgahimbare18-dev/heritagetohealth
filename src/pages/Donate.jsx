import React from 'react';
import { Helmet } from 'react-helmet-async';

const Donate = () => {
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
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
              Donate Now
            </button>
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
