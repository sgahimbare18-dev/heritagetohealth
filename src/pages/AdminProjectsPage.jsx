import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';
import axios from 'axios';
import API_URL from '../apiConfig';

const AdminProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
      return;
    }

    loadProjects();
  }, [navigate]);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error loading projects:', error);
      alert('Failed to load projects. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProject = async (projectData) => {
    try {
      if (editingProject) {
        // Update existing project
        await axios.put(`${API_URL}/api/projects/${editingProject._id}`, projectData);
      } else {
        // Create new project
        await axios.post(`${API_URL}/api/projects`, projectData);
      }
      await loadProjects(); // Reload projects
      setEditingProject(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Failed to save project. Please try again.');
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await axios.delete(`${API_URL}/api/projects/${id}`);
        await loadProjects(); // Reload projects
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Failed to delete project. Please try again.');
      }
    }
  };

  const handleToggleProjectStatus = async (id) => {
    try {
      const project = projects.find(p => (p._id || p.id) === id);
      if (project) {
        await axios.put(`${API_URL}/api/projects/${id}`, {
          ...project,
          published: !project.published
        });
        await loadProjects(); // Reload projects
      }
    } catch (error) {
      console.error('Error toggling project status:', error);
      alert('Failed to update project status. Please try again.');
    }
  };

  const handleCancel = () => {
    setEditingProject(null);
    setShowForm(false);
  };

  const handleAddProject = () => {
    setEditingProject(null);
    setShowForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="text-center">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <button
            onClick={() => navigate('/admin/updates')}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Admin Dashboard
          </button>
          <h1 className="text-4xl font-bold">Admin Panel - Projects</h1>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleAddProject}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Project
          </button>
          <button
            onClick={() => navigate('/admin/updates')}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Manage Updates
          </button>
          <button
            onClick={() => navigate('/admin/programs')}
            className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            Manage Programs
          </button>
          <button
            onClick={() => navigate('/admin/testimonials')}
            className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Manage Testimonials
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
        <ProjectForm
          project={editingProject}
          onSave={handleSaveProject}
          onCancel={handleCancel}
        />
      ) : (
        <ProjectList
          projects={projects}
          isAdmin={true}
          onEdit={handleEditProject}
          onDelete={handleDeleteProject}
          onToggleStatus={handleToggleProjectStatus}
        />
      )}
    </div>
  );
};

export default AdminProjectsPage;
