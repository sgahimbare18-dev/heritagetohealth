import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TestimonialsList from '../components/TestimonialsList';
import TestimonialForm from '../components/TestimonialForm';

const AdminTestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
      return;
    }

    // Load testimonials from localStorage
    loadTestimonials();
  }, [navigate]);

  const loadTestimonials = () => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    } else {
      setTestimonials([]);
    }
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
    setEditingTestimonial(null);
    setShowForm(false);
  };

  const handleAddTestimonial = () => {
    setEditingTestimonial(null);
    setShowForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Panel - Testimonials</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleAddTestimonial}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Testimonial
          </button>
          <button
            onClick={() => navigate('/admin/updates')}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Manage Updates
          </button>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {showForm ? (
        <TestimonialForm
          testimonial={editingTestimonial}
          onSave={handleSaveTestimonial}
          onCancel={handleCancel}
        />
      ) : (
        <TestimonialsList
          testimonials={testimonials}
          isAdmin={true}
          onEdit={handleEditTestimonial}
          onDelete={handleDeleteTestimonial}
          onToggleStatus={handleToggleTestimonialStatus}
        />
      )}
    </div>
  );
};

export default AdminTestimonialsPage;
