import React from 'react';

const ProjectList = ({ projects, isAdmin, onEdit, onDelete, onToggleStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      case 'future': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="space-y-4">
      {projects.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No projects found. {isAdmin && 'Click "Add Project" to create your first project.'}
        </div>
      ) : (
        projects.map((project) => (
          <div key={project._id || project.id} className="bg-white p-6 rounded-lg shadow-md border">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center space-x-4 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusLabel(project.status)}
                  </span>
                  <span className="text-sm text-gray-600">{project.timeline}</span>
                  {isAdmin && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.published ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {project.published ? 'Published' : 'Draft'}
                    </span>
                  )}
                </div>
                <p className="text-gray-700">{project.description}</p>
              </div>
              {isAdmin && (
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => onEdit(project)}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onToggleStatus(project._id || project.id)}
                    className={`px-3 py-1 text-sm rounded ${project.published ? 'bg-yellow-600 text-white hover:bg-yellow-700' : 'bg-green-600 text-white hover:bg-green-700'}`}
                  >
                    {project.published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button
                    onClick={() => onDelete(project._id || project.id)}
                    className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectList;
