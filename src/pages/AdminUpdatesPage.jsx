import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../apiConfig';
import UpdateList from '../components/UpdateList';
import UpdateForm from '../components/UpdateForm';
import TestimonialsList from '../components/TestimonialsList';
import TestimonialForm from '../components/TestimonialForm';

const AdminUpdatesPage = () => {
  const [updates, setUpdates] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [editingUpdate, setEditingUpdate] = useState(null);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('updates');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
      return;
    }

    // Load updates and testimonials from API
    loadUpdates();
    loadTestimonials();
  }, [navigate]);

  const loadUpdates = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/updates`);
      const items = Array.isArray(response.data) ? response.data : [];
      // Map backend shape to UI shape
      const mapped = items.map((item) => ({
        id: item._id,
        title: item.title,
        content: item.content,
        image: item.image,
        video: item.video,
        author: item.author,
        status: item.status || 'draft',
        date: item.createdAt || new Date().toISOString(),
      }));
      setUpdates(mapped);
    } catch (error) {
      console.error('Error loading updates:', error);
      setUpdates([]);
    }
  };

  const loadTestimonials = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/testimonials`);
      const items = Array.isArray(response.data) ? response.data : [];
      // Map backend shape to UI shape used by TestimonialsList/TestimonialForm
      const mapped = items.map((item) => ({
        id: item._id,
        name: item.author,
        location: '',
        message: item.quote,
        photo: item.image,
        status: item.published ? 'published' : 'draft',
        showOnHome: !!item.showOnHome,
      }));
      setTestimonials(mapped);
    } catch (error) {
      console.error('Error loading testimonials:', error);
      setTestimonials([]);
    }
  };

  // Save or update an Update via API
  const handleSave = async (updateData) => {
    try {
      // Build payload for backend
      const payload = {
        title: updateData.title,
        content: updateData.content,
        author: updateData.author,
        status: updateData.status || 'draft',
        image: updateData.image,
        video: updateData.video,
      };
      if (editingUpdate?.id) {
        await axios.put(`${API_URL}/api/updates/${editingUpdate.id}`, payload);
      } else {
        await axios.post(`${API_URL}/api/updates`, payload);
      }
      await loadUpdates();
      setEditingUpdate(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error saving update:', error);
      alert('Failed to save update. Please try again.');
    }
  };

  const handleEdit = (update) => {
    setEditingUpdate(update);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this update?')) {
      try {
        await axios.delete(`${API_URL}/api/updates/${id}`);
        await loadUpdates();
      } catch (error) {
        console.error('Error deleting update:', error);
        alert('Failed to delete update. Please try again.');
      }
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      const update = updates.find(u => u.id === id);
      if (!update) return;
      const payload = {
        title: update.title,
        content: update.content,
        author: update.author,
        status: update.status === 'published' ? 'draft' : 'published',
        image: update.image,
        video: update.video,
      };
      await axios.put(`${API_URL}/api/updates/${id}`, payload);
      await loadUpdates();
    } catch (error) {
      console.error('Error toggling update status:', error);
      alert('Failed to update status. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  // Save or update a Testimonial via API (map UI fields to backend)
  const handleSaveTestimonial = async (testimonialData) => {
    try {
      const payload = {
        author: testimonialData.name,
        quote: testimonialData.message,
        image: testimonialData.photo,
        published: testimonialData.status === 'published',
        showOnHome: !!testimonialData.showOnHome,
      };
      if (editingTestimonial?.id) {
        await axios.put(`${API_URL}/api/testimonials/${editingTestimonial.id}`, payload);
      } else {
        await axios.post(`${API_URL}/api/testimonials`, payload);
      }
      await loadTestimonials();
      setEditingTestimonial(null);
      setShowForm(false);
      // Notify sections listening for testimonial updates (if any)
      window.dispatchEvent(new Event('testimonialsUpdated'));
    } catch (error) {
      console.error('Error saving testimonial:', error);
      alert('Failed to save testimonial. Please try again.');
    }
  };

  const handleEditTestimonial = (testimonial) => {
    setEditingTestimonial(testimonial);
    setActiveTab('testimonials');
    setShowForm(true);
  };

  const handleDeleteTestimonial = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await axios.delete(`${API_URL}/api/testimonials/${id}`);
        await loadTestimonials();
        window.dispatchEvent(new Event('testimonialsUpdated'));
      } catch (error) {
        console.error('Error deleting testimonial:', error);
        alert('Failed to delete testimonial. Please try again.');
      }
    }
  };

  const handleToggleTestimonialStatus = async (id) => {
    try {
      const t = testimonials.find(x => x.id === id);
      if (!t) return;
      const payload = {
        author: t.name,
        quote: t.message,
        image: t.photo,
        published: t.status !== 'published',
        showOnHome: !!t.showOnHome,
      };
      await axios.put(`${API_URL}/api/testimonials/${id}`, payload);
      await loadTestimonials();
      window.dispatchEvent(new Event('testimonialsUpdated'));
    } catch (error) {
      console.error('Error toggling testimonial status:', error);
      alert('Failed to update testimonial status. Please try again.');
    }
  };

  const handleCancel = () => {
    setEditingUpdate(null);
    setEditingTestimonial(null);
    setShowForm(false);
  };

  const handleAddUpdate = () => {
    setActiveTab('updates');
    setEditingUpdate(null);
    setShowForm(true);
  };

  const handleAddTestimonial = () => {
    setActiveTab('testimonials');
    setEditingTestimonial(null);
    setShowForm(true);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Panel</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleAddUpdate}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add Update
          </button>
          <button
            onClick={handleAddTestimonial}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Testimonial
          </button>
          <button
            onClick={() => navigate('/admin/projects')}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Manage Projects
          </button>
          <button
            onClick={() => navigate('/admin/programs')}
            className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            Manage Programs
          </button>
          <button
            onClick={() => navigate('/admin/impacts')}
            className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Manage Impacts
          </button>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('updates')}
          className={`px-4 py-2 mr-2 rounded ${activeTab === 'updates' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Updates
        </button>
        <button
          onClick={() => setActiveTab('testimonials')}
          className={`px-4 py-2 rounded ${activeTab === 'testimonials' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Testimonials
        </button>
      </div>

      {showForm ? (
        activeTab === 'updates' ? (
          <UpdateForm
            update={editingUpdate}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <TestimonialForm
            testimonial={editingTestimonial}
            onSave={handleSaveTestimonial}
            onCancel={handleCancel}
          />
        )
      ) : (
        activeTab === 'updates' ? (
          <UpdateList
            updates={updates}
            isAdmin={true}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
          />
        ) : (
          <TestimonialsList
            testimonials={testimonials}
            isAdmin={true}
            onEdit={handleEditTestimonial}
            onDelete={handleDeleteTestimonial}
            onToggleStatus={handleToggleTestimonialStatus}
          />
        )
      )}
    </div>
  );
};

export default AdminUpdatesPage;
