import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProgramsSection from '../components/ProgramsSection';

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs - Heritage to Health</title>
        <meta name="description" content="Explore Heritage to Health's programs focused on reproductive health education and sustainable menstrual hygiene solutions for Maasai girls and women." />
        <meta name="keywords" content="Heritage to Health programs, reproductive health education, menstrual hygiene programs, Maasai women health, sustainable solutions" />
        <link rel="canonical" href="https://heritagetohealth.org/programs" />
        <meta property="og:title" content="Programs - Heritage to Health" />
        <meta property="og:description" content="Explore Heritage to Health's programs focused on reproductive health education and sustainable menstrual hygiene solutions for Maasai girls and women." />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content="https://heritagetohealth.org/programs" />
        <meta name="twitter:title" content="Programs - Heritage to Health" />
        <meta name="twitter:description" content="Explore Heritage to Health's programs focused on reproductive health education and sustainable menstrual hygiene solutions for Maasai girls and women." />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <div>
        <ProgramsSection />
      </div>
    </>
  );
};

export default Programs;
