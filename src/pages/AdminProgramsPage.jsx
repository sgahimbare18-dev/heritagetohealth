import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgramList from '../components/ProgramList';

const AdminProgramsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/admin/updates')}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Admin Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard - Programs</h1>
          <p className="mt-2 text-gray-600">Manage programs displayed on the website</p>
        </div>

        <ProgramList />
      </div>
    </div>
  );
};

export default AdminProgramsPage;
