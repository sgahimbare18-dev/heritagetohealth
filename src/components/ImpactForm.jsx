import React, { useState, useEffect } from 'react';

const ImpactForm = ({ impact, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    value: '',
    description: '',
    milestones: [],
    published: true
  });

  useEffect(() => {
    if (impact) {
      setFormData(impact);
    }
  }, [impact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const impactData = {
      ...formData,
      id: impact ? impact.id : Date.now().toString()
    };
    onSave(impactData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-2xl font-bold mb-6">
        {impact ? 'Edit Impact' : 'Add New Impact'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Pad-up a Girl Seasons Completed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Value *
          </label>
          <input
            type="text"
            name="value"
            value={formData.value}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Pad-up a Girl Seasons Completed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Milestones
          </label>
          <textarea
            name="milestones"
            value={formData.milestones ? formData.milestones.join('\n') : ''}
            onChange={(e) => {
              const milestones = e.target.value.split('\n').filter(m => m.trim());
              setFormData(prev => ({
                ...prev,
                milestones
              }));
            }}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter each milestone on a new line"
          />
          <p className="text-xs text-gray-500 mt-1">Enter each milestone on a separate line</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Published
          </label>
          <input
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">Check to publish this impact on the website</span>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {impact ? 'Update Impact' : 'Add Impact'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImpactForm;
