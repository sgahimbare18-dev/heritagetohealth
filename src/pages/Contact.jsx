import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Heritage to Health</title>
        <meta name="description" content="Get in touch with Heritage to Health. Contact us for inquiries about our reproductive health education and menstrual hygiene programs for Maasai girls and women." />
        <meta name="keywords" content="contact Heritage to Health, Maasai women health contact, reproductive health inquiries, menstrual hygiene contact" />
        <link rel="canonical" href="https://heritagetohealth.org/contact" />
        <meta property="og:title" content="Contact Us - Heritage to Health" />
        <meta property="og:description" content="Get in touch with Heritage to Health. Contact us for inquiries about our reproductive health education and menstrual hygiene programs for Maasai girls and women." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://heritagetohealth.org/contact" />
        <meta name="twitter:title" content="Contact Us - Heritage to Health" />
        <meta name="twitter:description" content="Get in touch with Heritage to Health. Contact us for inquiries about our reproductive health education and menstrual hygiene programs for Maasai girls and women." />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us with any questions, feedback, or partnership opportunities.
            </p>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="container mx-auto px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get in touch via email for detailed inquiries</p>
              <a href="mailto:heritagetohealth@gmail.com" className="text-green-600 hover:text-green-800 font-medium">
                heritagetohealth@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Based in Arusha, serving Maasai communities</p>
              <p className="text-gray-700 font-medium">Arusha, Tanzania</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
              <a href="tel:+254796023231" className="text-green-600 hover:text-green-800 font-medium">
                +254 796 023 231
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h2 className="text-2xl font-bold">Send us a Message</h2>
                <p className="mt-2">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <div className="p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
