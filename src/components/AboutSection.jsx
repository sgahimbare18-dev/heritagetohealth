import React from 'react';

const AboutSection = () => {
  const teamMembers = [
    {
      name: 'Namnyaki Daniel',
      position: 'Founder and CEO',
      image: 'https://i.postimg.cc/Kjv3YJNn/Namnyaki.jpg'
    },
    {
      name: 'Clara Bernard Mushi',
      position: 'Program Coordinator',
      image: 'https://i.postimg.cc/YS6vfJDV/Clara.jpg'
    },
    {
      name: 'Emily Lasoi Kinanta',
      position: 'Community Outreach Manager',
      image: 'https://i.postimg.cc/BnDb4r3f/Emily.jpg'
    },
    {
      name: 'Ruth Gachie',
      position: 'Marketing Coordinator',
      image: 'https://i.postimg.cc/XqpNhhxW/Gachie.jpg'
    }
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p>To empower girls and women through reproductive health education and hands-on training in making reusable sanitary pads.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Vision</h3>
          <p>A community where every girl and woman manages her reproductive health with dignity and confidence.</p>
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Values</h3>
        <p>Faith, empowerment, sustainability, and respect for culture.</p>
      </div>
      <div className="mt-8">
        <p><strong>Founded:</strong> December 31, 2023</p>
        <p><strong>Background:</strong> In the heart of Tanzania, Maasai women and girls face significant challenges in managing their menstrual health. Limited access to sanitary products, coupled with cultural stigma and inadequate education, often leads to infections, school absenteeism, and diminished opportunities. Heritage to Health was born from this reality, bridging ancient wisdom with modern health solutions to empower our community.</p>
      </div>

      {/* Meet Our Team Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.src = '/placeholder-avatar.png'; // Fallback image
                  }}
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
