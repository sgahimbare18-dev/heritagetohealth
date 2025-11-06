import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../apiConfig';

const ProgramsSection = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/programs/published`);
      setPrograms(response.data);
    } catch (error) {
      console.error('Error loading programs:', error);
      // Fallback to empty array if API fails
      setPrograms([]);
    }
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Our Programs</h2>

      {programs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program._id} className="p-6 border rounded-lg shadow-md">
              {program.image && (
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">
                {program.title}
              </h3>
              <div className="flex items-center mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  program.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                } mr-2`}>
                  {program.published ? 'Published' : 'Draft'}
                </span>
              </div>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No programs available at the moment. Please check back later.
        </div>
      )}
    </section>
  );
};

export default ProgramsSection;
