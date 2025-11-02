import React from 'react';

const ProgramsSection = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 border rounded">
          <h3>Menstrual Health Education</h3>
          <p>Workshops and awareness on hygiene and infections.</p>
        </div>
        <div className="p-4 border rounded">
          <h3>Reusable Pad Training</h3>
          <p>Empowering women with sewing and entrepreneurship skills.</p>
        </div>
        <div className="p-4 border rounded">
          <h3>Community Engagement</h3>
          <p>Mentorship and conversations to end menstrual stigma.</p>
        </div>
        <div className="p-4 border rounded">
          <h3>Sustainability Projects</h3>
          <p>Creating cooperatives for pad-making.</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
