import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgramForm from './ProgramForm';

const ProgramList = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProgram, setEditingProgram] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/programs');
      setPrograms(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching programs:', error);
      setError('Failed to load programs');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (programData) => {
    try {
      if (editingProgram) {
        await axios.put(`http://localhost:5000/api/programs/${editingProgram._id}`, programData);
      } else {
        await axios.post('http://localhost:5000/api/programs', programData);
      }
      fetchPrograms();
      setShowForm(false);
      setEditingProgram(null);
    } catch (error) {
      console.error('Error saving program:', error);
      alert('Failed to save program');
    }
  };

  const handleEdit = (program) => {
    setEditingProgram(program);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      try {
        await axios.delete(`http://localhost:5000/api/programs/${id}`);
        fetchPrograms();
      } catch (error) {
        console.error('Error deleting program:', error);
        alert('Failed to delete program');
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProgram(null);
  };

  if (loading) {
    return <div className="text-center py-8">Loading programs...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Programs Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Program
        </button>
      </div>

      {showForm && (
        <ProgramForm
          program={editingProgram}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <div className="grid gap-4">
        {programs.map((program) => (
          <div key={program._id} className="bg-white p-4 rounded-lg shadow-md border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  {program.image && (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{program.title}</h3>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                    <div className="flex items-center mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        program.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {program.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(program)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(program._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {programs.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No programs found. Click "Add New Program" to create your first program.
        </div>
      )}
    </div>
  );
};

export default ProgramList;
