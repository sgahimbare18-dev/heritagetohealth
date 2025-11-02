import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Heritage to Health</title>
        <meta name="description" content="Learn about Heritage to Health's mission to empower Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions." />
        <meta name="keywords" content="about Heritage to Health, Maasai women empowerment, reproductive health education, menstrual hygiene, sustainable solutions" />
        <link rel="canonical" href="https://heritagetohealth.org/about" />
        <meta property="og:title" content="About Us - Heritage to Health" />
        <meta property="og:description" content="Learn about Heritage to Health's mission to empower Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://heritagetohealth.org/about" />
        <meta name="twitter:title" content="About Us - Heritage to Health" />
        <meta name="twitter:description" content="Learn about Heritage to Health's mission to empower Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions." />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <div>
        <AboutSection />
      </div>
    </>
  );
};

export default About;
