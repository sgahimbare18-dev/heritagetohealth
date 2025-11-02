import React from 'react';

const ImpactSection = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Impact & Milestones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-600">2</h3>
          <p className="text-lg">Pad-up a Girl Seasons Completed</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-600">500+</h3>
          <p className="text-lg">Girls Trained in Outreach Sessions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-600">75%</h3>
          <p className="text-lg">Progress Toward Cooperative Setup</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-600">30%</h3>
          <p className="text-lg">Reduction in School Absenteeism</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
