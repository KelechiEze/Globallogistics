import React from 'react';
import { Star, Quote } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Operations Manager',
      company: 'TechFlow Inc.',
      content: 'GlobalShip has transformed our logistics operations. The real-time tracking and exceptional customer service have made them our go-to shipping partner.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Chen',
      position: 'E-commerce Director',
      company: 'Global Marketplace',
      content: 'The international shipping capabilities are outstanding. Our customers love the transparency and reliability of the tracking system.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emma Rodriguez',
      position: 'Supply Chain Manager',
      company: 'Manufacturing Plus',
      content: 'From small packages to large freight, GlobalShip handles everything with professionalism. Their analytics tools help us optimize our shipping strategy.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">What Our Customers Say</h2>
          <p className="testimonials__description">
            Trusted by thousands of businesses worldwide for reliable shipping solutions
          </p>
        </div>
        
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonials__card">
              <div className="testimonials__card-header">
                <Quote className="testimonials__quote-icon" />
                <div className="testimonials__rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="testimonials__star" />
                  ))}
                </div>
              </div>
              
              <p className="testimonials__content">{testimonial.content}</p>
              
              <div className="testimonials__author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonials__avatar"
                />
                <div className="testimonials__author-info">
                  <h4 className="testimonials__author-name">{testimonial.name}</h4>
                  <p className="testimonials__author-position">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;