import React from 'react';

const TestimonialsList = ({ testimonials, isAdmin, onEdit, onDelete, onToggleStatus }) => {
  return (
    <div className="space-y-4">
      {testimonials.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No testimonials found.</p>
      ) : (
        testimonials.map((testimonial) => (
          <div key={testimonial._id || testimonial.id} className="bg-white p-6 rounded-lg shadow-md border">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                {testimonial.photo && (
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                  <p className="text-gray-700">{testimonial.message}</p>
                </div>
              </div>
              {isAdmin && (
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    testimonial.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {testimonial.status}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    testimonial.showOnHome
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    Home: {testimonial.showOnHome ? 'Yes' : 'No'}
                  </span>
                  <button
                    onClick={() => onToggleStatus(testimonial._id || testimonial.id)}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Toggle Status
                  </button>
                  <button
                    onClick={() => onEdit(testimonial)}
                    className="px-3 py-1 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(testimonial._id || testimonial.id)}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
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

export default TestimonialsList;
