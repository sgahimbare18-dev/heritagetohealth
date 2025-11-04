import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section className="bg-green-100 p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Heritage to Health From — Womb to World, Wellness Begin</h1>
      <p className="text-lg mb-4">Empowering Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions.</p>
      <p className="mb-4">“From Olonyosambu to the world — where culture meets health, and education brings dignity.”</p>
      <button onClick={handleLearnMore} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">Learn More</button>
    </section>
  );
};

export default HeroSection;
