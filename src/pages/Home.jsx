import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import ProgramsSection from '../components/ProgramsSection';
import ImpactSection from '../components/ImpactSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Heritage to Health - Empowering Maasai Girls and Women</title>
        <meta name="description" content="Empowering Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions." />
        <meta name="keywords" content="reproductive health, menstrual hygiene, Maasai women, health education, sustainable solutions, women's empowerment" />
        <link rel="canonical" href="https://heritagetohealth.org/" />
        <meta property="og:title" content="Heritage to Health - Empowering Maasai Girls and Women" />
        <meta property="og:description" content="Empowering Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://heritagetohealth.org/" />
        <meta name="twitter:title" content="Heritage to Health - Empowering Maasai Girls and Women" />
        <meta name="twitter:description" content="Empowering Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions." />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <div>
        <HeroSection />
        <ProgramsSection />
        <ImpactSection />
        <TestimonialsSection />
      </div>
    </>
  );
};

export default Home;
