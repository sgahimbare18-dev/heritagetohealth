import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../apiConfig';

const UpdateForm = ({ update, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    video: '',
    author: '',
    status: 'draft'
  });
  const [preview, setPreview] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (update) {
      setFormData({
        title: update.title || '',
        content: update.content || '',
        image: update.image || '',
        video: update.video || '',
        author: update.author || '',
        status: update.status || 'draft'
      });
    } else {
      setFormData({
        title: '',
        content: '',
        image: '',
        video: '',
        author: '',
        status: 'draft'
      });
    }
  }, [update]);

  // Auto-save functionality - disabled to prevent localStorage quota issues
  // const autoSave = useCallback(() => {
  //   const draftData = {
  //     ...formData,
  //     date: update ? update.date : new Date().toISOString().split('T')[0],
  //     id: update ? update.id : 'draft'
  //   };
  //   localStorage.setItem('updateDraft', JSON.stringify(draftData));
  // }, [formData, update]);

  // useEffect(() => {
  //   const interval = setInterval(autoSave, 2000); // Auto-save every 2 seconds
  //   return () => clearInterval(interval);
  // }, [autoSave]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const url = await uploadFile(file);
      if (url) {
        setFormData(prev => ({ ...prev, image: url }));
      }
      setUploading(false);
    }
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const url = await uploadFile(file);
      if (url) {
        setFormData(prev => ({ ...prev, video: url }));
      }
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      ...formData,
      date: update ? update.date : new Date().toISOString().split('T')[0],
      id: update ? update.id : Date.now()
    };
    onSave(updateData);
  };

  const togglePreview = () => {
    setPreview(!preview);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          {update ? 'Edit Update' : 'Create New Update'}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={togglePreview}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            {preview ? 'Edit' : 'Preview'}
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>

      {preview ? (
        <div className="border p-4 rounded">
          <h3 className="text-xl font-semibold mb-2">{formData.title || 'Untitled'}</h3>
          <p className="text-gray-500 mb-2">{new Date().toLocaleDateString()}</p>
          <p className="text-gray-600 text-sm mb-4">By {formData.author || 'Author'}</p>
          {formData.image && (
            <img
              src={formData.image}
              alt={formData.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          {formData.video && (
            <div className="mb-4">
              {formData.video.includes('youtube.com') || formData.video.includes('youtu.be') ? (
                <iframe
                  src={formData.video}
                  title={formData.title}
                  className="w-full h-64 rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls className="w-full h-64 rounded-lg">
                  <source src={formData.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
          <p className="whitespace-pre-wrap">{formData.content}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={6}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <div className="space-y-2">
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL or upload below"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Video</label>
            <div className="space-y-2">
              <input
                type="text"
                name="video"
                value={formData.video}
                onChange={handleChange}
                placeholder="YouTube URL or upload video below"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                style={{ height: 'auto', padding: '8px' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={uploading}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : (update ? 'Update' : 'Create') + ' Update'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateForm;
