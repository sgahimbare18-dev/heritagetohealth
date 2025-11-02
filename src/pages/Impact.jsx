import React from 'react';
import { Helmet } from 'react-helmet-async';
import ImpactSection from '../components/ImpactSection';

const Impact = () => {
  return (
    <>
      <Helmet>
        <title>Impact - Heritage to Health</title>
        <meta name="description" content="Discover the impact of Heritage to Health's initiatives on Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions." />
        <meta name="keywords" content="Heritage to Health impact, Maasai women health impact, reproductive health education results, menstrual hygiene solutions impact" />
        <link rel="canonical" href="https://heritagetohealth.org/impact" />
        <meta property="og:title" content="Impact - Heritage to Health" />
        <meta property="og:description" content="Discover the impact of Heritage to Health's initiatives on Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://heritagetohealth.org/impact" />
        <meta name="twitter:title" content="Impact - Heritage to Health" />
        <meta name="twitter:description" content="Discover the impact of Heritage to Health's initiatives on Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions." />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <div>
        <ImpactSection />
      </div>
    </>
  );
};

export default Impact;
