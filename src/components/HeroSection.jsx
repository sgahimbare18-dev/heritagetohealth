import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleChatWithClara = () => {
    // Scroll to the chatbot at the bottom of the page
    const chatbotElement = document.querySelector('.fixed.bottom-4.right-4');
    if (chatbotElement) {
      chatbotElement.scrollIntoView({ behavior: 'smooth' });
      // Trigger the chatbot to open
      const chatButton = chatbotElement.querySelector('button');
      if (chatButton) {
        chatButton.click();
      }
    }
  };

  return (
    <section className="bg-green-100 p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Heritage to Health From — Womb to World, Wellness Begin</h1>
      <p className="text-lg mb-4">Empowering Maasai girls and women through reproductive health education and sustainable menstrual hygiene solutions.</p>
      <p className="mb-4">“From Olonyosambu to the world — where culture meets health, and education brings dignity.”</p>
      <button onClick={handleLearnMore} className="bg-green-600 text-white px-4 py-2 rounded mr-4 hover:bg-green-700 transition-colors">Learn More</button>
      <button onClick={handleChatWithClara} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Chat with Clara</button>
    </section>
  );
};

export default HeroSection;
