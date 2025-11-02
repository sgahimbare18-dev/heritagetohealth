import React from 'react';
import { Helmet } from 'react-helmet-async';

const HealthServices = () => {
  return (
    <>
      <Helmet>
        <title>Health Services - Heritage to Health</title>
        <meta name="description" content="Learn about women's health services including menstrual irregularities, ovarian cysts, and hormone imbalances. Consult with our pharmacists Namnyaki Daniel and Clara Bernard Mushi." />
        <meta name="keywords" content="women's health services, menstrual irregularities, ovarian cysts, hormone imbalances, pharmacists consultation, Namnyaki Daniel, Clara Bernard Mushi" />
        <link rel="canonical" href="https://heritagetohealth.org/health-services" />
        <meta property="og:title" content="Health Services - Heritage to Health" />
        <meta property="og:description" content="Learn about women's health services including menstrual irregularities, ovarian cysts, and hormone imbalances. Consult with our pharmacists Namnyaki Daniel and Clara Bernard Mushi." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://heritagetohealth.org/health-services" />
        <meta name="twitter:title" content="Health Services - Heritage to Health" />
        <meta name="twitter:description" content="Learn about women's health services including menstrual irregularities, ovarian cysts, and hormone imbalances. Consult with our pharmacists Namnyaki Daniel and Clara Bernard Mushi." />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Women's Health Services</h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-red-600">Problems with Menstrual Irregularities</h2>
          <div className="bg-red-50 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Menstrual irregularities can include missed periods, heavy bleeding, painful periods, or irregular cycles.
              These issues can be caused by stress, hormonal imbalances, thyroid problems, polycystic ovary syndrome (PCOS),
              or other underlying health conditions.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Irregular or missed periods</li>
              <li>Heavy or prolonged bleeding</li>
              <li>Severe menstrual cramps</li>
              <li>Spotting between periods</li>
              <li>Very light periods</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-purple-600">Ovarian Cyst Diseases</h2>
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Ovarian cysts are fluid-filled sacs that develop on the ovaries. While many are harmless and resolve on their own,
              some can cause pain, irregular periods, or more serious complications. Common types include functional cysts,
              dermoid cysts, cystadenomas, and endometriomas.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Pelvic pain or pressure</li>
              <li>Bloating or swelling</li>
              <li>Pain during intercourse</li>
              <li>Irregular menstrual cycles</li>
              <li>Nausea or vomiting</li>
              <li>Difficulty emptying bladder</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Hormone Imbalances</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Hormonal imbalances occur when there is too much or too little of a hormone in the bloodstream.
              This can affect menstruation, fertility, mood, metabolism, and overall health. Common causes include
              thyroid disorders, PCOS, menopause, stress, and certain medications.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Irregular periods</li>
              <li>Weight changes</li>
              <li>Fatigue</li>
              <li>Mood swings</li>
              <li>Hair loss or excessive hair growth</li>
              <li>Hot flashes</li>
              <li>Sleep problems</li>
              <li>Infertility</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4 text-green-800">Get Professional Help</h2>
          <p className="text-xl mb-6 text-gray-700">
            If you have problems with your menstrual cycle, hormonal imbalances, or suspect you have ovarian cysts,
            talk to our leaders who are pharmacists to help you.
          </p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <img src="https://i.postimg.cc/Kjv3YJNn/Namnyaki.jpg" alt="Namnyaki Daniel" className="w-16 h-16 rounded-full object-cover" loading="lazy" />
              <div>
                <h3 className="text-xl font-semibold text-green-600">Namnyaki Daniel</h3>
                <p className="text-gray-600">Pharmacist available for consultation</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <img src="https://i.postimg.cc/YS6vfJDV/Clara.jpg" alt="Clara Bernard Mushi" className="w-16 h-16 rounded-full object-cover" loading="lazy" />
              <div>
                <h3 className="text-xl font-semibold text-green-600">Clara Bernard Mushi</h3>
                <p className="text-gray-600">Pharmacist available for consultation</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">How to Reach Us</h3>
              <p className="text-lg">Email: heritagetohealth@gmail.com</p>
              <p className="text-gray-600">Or use our contact form for inquiries</p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Contact Us for Help
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Remember: Early diagnosis and proper treatment are key to managing these conditions.
            Don't hesitate to seek professional medical advice.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default HealthServices;
