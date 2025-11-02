import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

    // Load updates and testimonials from localStorage
    loadUpdates();
    loadTestimonials();
  }, [navigate]);

  const loadUpdates = () => {
    const storedUpdates = localStorage.getItem('updates');
    if (storedUpdates) {
      setUpdates(JSON.parse(storedUpdates));
    } else {
      // Load from JSON file if no localStorage data
      fetch('/data/updates.json')
        .then(response => response.json())
        .then(data => {
          setUpdates(data);
          localStorage.setItem('updates', JSON.stringify(data));
        })
        .catch(error => {
          console.error('Error loading updates:', error);
          setUpdates([]);
        });
    }
  };

  const loadTestimonials = () => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    } else {
      setTestimonials([]);
    }
  };

  const saveUpdates = (newUpdates) => {
    setUpdates(newUpdates);
    try {
      localStorage.setItem('updates', JSON.stringify(newUpdates));
    } catch (error) {
      console.error('Failed to save updates to localStorage:', error);
      // Try to clear old data and retry
      try {
        localStorage.removeItem('updateDraft');
        localStorage.setItem('updates', JSON.stringify(newUpdates));
      } catch (retryError) {
        console.error('Retry failed:', retryError);
        alert('Failed to save updates. Storage quota exceeded. Please reduce image/video sizes or use URLs instead of uploads.');
      }
    }
  };

  const handleSave = (updateData) => {
    let newUpdates;
    if (editingUpdate) {
      newUpdates = updates.map(update =>
        update.id === editingUpdate.id ? updateData : update
      );
    } else {
      newUpdates = [...updates, updateData];
    }
    saveUpdates(newUpdates);
    setEditingUpdate(null);
    setShowForm(false);
  };

  const handleEdit = (update) => {
    setEditingUpdate(update);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this update?')) {
      const newUpdates = updates.filter(update => update.id !== id);
      saveUpdates(newUpdates);
    }
  };

  const handleToggleStatus = (id) => {
    const newUpdates = updates.map(update =>
      update.id === id
        ? { ...update, status: update.status === 'published' ? 'draft' : 'published' }
        : update
    );
    saveUpdates(newUpdates);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  const saveTestimonials = (newTestimonials) => {
    setTestimonials(newTestimonials);
    try {
      localStorage.setItem('testimonials', JSON.stringify(newTestimonials));
      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event('testimonialsUpdated'));
    } catch (error) {
      console.error('Failed to save testimonials to localStorage:', error);
      alert('Failed to save testimonials. Storage quota exceeded. Please reduce photo sizes or use URLs instead of uploads.');
    }
  };

  const handleSaveTestimonial = (testimonialData) => {
    let newTestimonials;
    if (editingTestimonial) {
      newTestimonials = testimonials.map(testimonial =>
        testimonial.id === editingTestimonial.id ? testimonialData : testimonial
      );
    } else {
      newTestimonials = [...testimonials, testimonialData];
    }
    saveTestimonials(newTestimonials);
    setEditingTestimonial(null);
    setShowForm(false);
  };

  const handleEditTestimonial = (testimonial) => {
    setEditingTestimonial(testimonial);
    setActiveTab('testimonials');
    setShowForm(true);
  };

  const handleDeleteTestimonial = (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      const newTestimonials = testimonials.filter(testimonial => testimonial.id !== id);
      saveTestimonials(newTestimonials);
    }
  };

  const handleToggleTestimonialStatus = (id) => {
    const newTestimonials = testimonials.map(testimonial =>
      testimonial.id === id
        ? { ...testimonial, status: testimonial.status === 'published' ? 'draft' : 'published' }
        : testimonial
    );
    saveTestimonials(newTestimonials);
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
