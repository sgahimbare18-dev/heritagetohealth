import React, { useState } from 'react';

const UpdateList = ({ updates, isAdmin = false, onEdit, onDelete, onToggleStatus }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const displayUpdates = updates;

  if (displayUpdates.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">
          {isAdmin ? 'No updates available. Create your first update!' : 'No updates available at the moment. Check back soon!'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {displayUpdates.map((update) => (
        <article key={update._id || update.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-green-600">{update.title}</h2>
              <p className="text-gray-500 mb-2">{new Date(update.createdAt || update.date).toLocaleDateString()}</p>
              <p className="text-gray-600 text-sm">By {update.author}</p>
            </div>
            {isAdmin && (
              <div className="flex space-x-2">
                <button
                  onClick={() => onToggleStatus(update._id || update.id)}
                  className={`px-3 py-1 rounded text-sm ${
                    update.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {update.status}
                </button>
                <button
                  onClick={() => onEdit(update)}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(update._id || update.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          {update.image && (
            <img
              src={update.image}
              alt={update.title}
              className="w-full aspect-[16/9] object-contain rounded-lg mb-4"
              loading="lazy"
            />
          )}

          {update.video && (
            <div className="mb-4">
              {update.video.includes('youtube.com') || update.video.includes('youtu.be') ? (
                <iframe
                  src={update.video}
                  title={update.title}
                  className="w-full aspect-[16/9] rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls className="w-full aspect-[16/9] rounded-lg">
                  <source src={update.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          <div className="text-gray-700">
            {expandedId === update.id ? (
              <div>
                <p className="whitespace-pre-wrap">{update.content}</p>
                <button
                  onClick={() => toggleExpand(update.id)}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Show Less
                </button>
              </div>
            ) : (
              <div>
                <p className="line-clamp-3">{update.content}</p>
                {update.content.length > 200 && (
                  <button
                    onClick={() => toggleExpand(update.id)}
                    className="mt-2 text-blue-600 hover:underline"
                  >
                    Read More
                  </button>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default UpdateList;
