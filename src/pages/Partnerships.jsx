import React from 'react';
import { Helmet } from 'react-helmet-async';

const Partnerships = () => {
  return (
    <>
      <Helmet>
        <title>Partnerships - Heritage to Health</title>
        <meta name="description" content="Partner with Heritage to Health to support reproductive health education and sustainable menstrual hygiene solutions for Maasai girls and women. Explore partnership opportunities." />
        <meta name="keywords" content="partnerships Heritage to Health, Maasai women partnerships, reproductive health partnerships, menstrual hygiene collaborations" />
        <link rel="canonical" href="https://heritagetohealth.org/partnerships" />
        <meta property="og:title" content="Partnerships - Heritage to Health" />
        <meta property="og:description" content="Partner with Heritage to Health to support reproductive health education and sustainable menstrual hygiene solutions for Maasai girls and women. Explore partnership opportunities." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://heritagetohealth.org/partnerships" />
        <meta name="twitter:title" content="Partnerships - Heritage to Health" />
        <meta name="twitter:description" content="Partner with Heritage to Health to support reproductive health education and sustainable menstrual hygiene solutions for Maasai girls and women. Explore partnership opportunities." />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Partnership Opportunities</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6 text-center">
            Join us in our mission to preserve cultural heritage and promote health through traditional practices.
            We welcome partnerships with organizations, businesses, and individuals who share our vision.
          </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Corporate Partnerships</h2>
            <ul className="space-y-2">
              <li>• Sponsorship opportunities</li>
              <li>• Employee volunteer programs</li>
              <li>• Community outreach collaborations</li>
              <li>• Product donations</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">NGO & Community Partnerships</h2>
            <ul className="space-y-2">
              <li>• Joint program development</li>
              <li>• Resource sharing</li>
              <li>• Cultural exchange programs</li>
              <li>• Research collaborations</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Academic Partnerships</h2>
            <ul className="space-y-2">
              <li>• Research partnerships</li>
              <li>• Student internships</li>
              <li>• Cultural studies programs</li>
              <li>• Traditional medicine research</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Individual Supporters</h2>
            <ul className="space-y-2">
              <li>• Volunteer opportunities</li>
              <li>• Ambassador programs</li>
              <li>• Cultural preservation advocacy</li>
              <li>• Fundraising campaigns</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Partnership</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Community Impact</h3>
              <p>Make a real difference in preserving cultural heritage and promoting health</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Brand Visibility</h3>
              <p>Showcase your commitment to cultural preservation and community health</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Networking</h3>
              <p>Connect with like-minded organizations and individuals</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Partner With Us?</h2>
          <p className="mb-6">
            Fill out our Google Form to express your interest in partnering with us.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdwFfOrx_nVUy3uE1yWI4Bem4ZJh41eKrgUXc8MqlnDR__xwA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Open Partnership Form
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Partnerships;
