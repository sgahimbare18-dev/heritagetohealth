import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../apiConfig';

const TestimonialForm = ({ testimonial, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    message: '',
    photo: '',
    status: 'draft',
    showOnHome: false
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (testimonial) {
      setFormData(testimonial);
    }
  }, [testimonial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const uploadFile = async (file) => {
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const response = await axios.post(`${API_URL}/api/upload`, formDataUpload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.file.url;
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload file. Please try again.');
      return null;
    }
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const url = await uploadFile(file);
      if (url) {
        setFormData(prev => ({
          ...prev,
          photo: url
        }));
      }
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const testimonialData = {
      ...formData,
      id: testimonial ? testimonial.id : Date.now().toString()
    };
    onSave(testimonialData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-2xl font-bold mb-6">
        {testimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formData.photo && (
            <img
              src={formData.photo}
              alt="Preview"
              className="mt-2 w-16 h-16 rounded-full object-cover"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Show on Home Page
          </label>
          <input
            type="checkbox"
            name="showOnHome"
            checked={formData.showOnHome}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              showOnHome: e.target.checked
            }))}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">Check to display this testimonial on the home page</span>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={uploading}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {uploading ? 'Uploading...' : (testimonial ? 'Update Testimonial' : 'Add Testimonial')}
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

export default TestimonialForm;
