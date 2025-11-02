import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  const loadTestimonials = () => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      const allTestimonials = JSON.parse(storedTestimonials);
      // Filter to show only published testimonials that are marked to show on home
      const homeTestimonials = allTestimonials.filter(testimonial =>
        testimonial.status === 'published' && testimonial.showOnHome === true
      );
      setTestimonials(homeTestimonials);
    } else {
      setTestimonials([]);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'testimonials') {
        loadTestimonials();
      }
    };

    const handleCustomEvent = () => {
      loadTestimonials();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('testimonialsUpdated', handleCustomEvent);

    // Initial load
    loadTestimonials();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('testimonialsUpdated', handleCustomEvent);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        {testimonials.length === 0 ? (
          <p className="text-center text-gray-600">No testimonials yet.</p>
        ) : (
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md border">
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
                      <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                      <p className="text-gray-700">{testimonial.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
