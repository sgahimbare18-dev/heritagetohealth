import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImpactForm from './ImpactForm';

const ImpactList = () => {
  const [impacts, setImpacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingImpact, setEditingImpact] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchImpacts();
  }, []);

  const fetchImpacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/impacts');
      setImpacts(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching impacts:', error);
      setError('Failed to load impacts');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (impactData) => {
    try {
      if (editingImpact) {
        await axios.put(`http://localhost:5000/api/impacts/${editingImpact._id}`, impactData);
      } else {
        await axios.post('http://localhost:5000/api/impacts', impactData);
      }
      fetchImpacts();
      setShowForm(false);
      setEditingImpact(null);
    } catch (error) {
      console.error('Error saving impact:', error);
      alert('Failed to save impact');
    }
  };

  const handleEdit = (impact) => {
    setEditingImpact(impact);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this impact?')) {
      try {
        await axios.delete(`http://localhost:5000/api/impacts/${id}`);
        fetchImpacts();
      } catch (error) {
        console.error('Error deleting impact:', error);
        alert('Failed to delete impact');
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingImpact(null);
  };

  if (loading) {
    return <div className="text-center py-8">Loading impacts...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Impacts Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Impact
        </button>
      </div>

      {showForm && (
        <ImpactForm
          impact={editingImpact}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <div className="grid gap-4">
        {impacts.map((impact) => (
          <div key={impact._id} className="bg-white p-4 rounded-lg shadow-md border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-lg font-semibold">{impact.title}</h3>
                    <p className="text-2xl font-bold text-green-600">{impact.value}</p>
                    <p className="text-gray-600 text-sm">{impact.description}</p>
                    <div className="flex items-center mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        impact.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {impact.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(impact)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(impact._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {impacts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No impacts found. Click "Add New Impact" to create your first impact.
        </div>
      )}
    </div>
  );
};

export default ImpactList;
