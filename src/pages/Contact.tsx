import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Customer Support' },
    { value: 'sales', label: 'Sales & Quotes' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'careers', label: 'Careers' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Available 24/7 for urgent shipments'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@globalship.com', 'sales@globalship.com'],
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Logistics Avenue', 'Global City, GC 12345'],
      description: 'Monday - Friday, 9AM - 6PM'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM'],
      description: '24/7 emergency support available'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Logistics Ave, NY 10001',
      phone: '+1 (555) 123-4567',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'London',
      address: '456 Shipping St, London EC1A 1BB',
      phone: '+44 20 1234 5678',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Singapore',
      address: '789 Cargo Blvd, Singapore 018956',
      phone: '+65 1234 5678',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 2000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact__hero">
        <div className="contact__hero-container">
          <div className="contact__hero-content">
            <h1 className="contact__hero-title">Get in Touch</h1>
            <p className="contact__hero-description">
              Have questions about our services? Need support with your shipment? 
              Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact__info">
        <div className="contact__container">
          <div className="contact__info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact__info-card">
                <div className="contact__info-icon">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="contact__info-title">{info.title}</h3>
                <div className="contact__info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <p className="contact__info-description">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact__main">
        <div className="contact__container">
          <div className="contact__main-grid">
            {/* Contact Form */}
            <div className="contact__form-section">
              <h2 className="contact__form-title">Send us a Message</h2>
              
              {submitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">
                    <MessageCircle className="w-12 h-12" />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 2 hours.</p>
                  <button 
                    className="contact__success-button"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__form-group">
                    <label>Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                      required
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact__form-row">
                    <div className="contact__form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="contact__form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact__form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="contact__form-group">
                    <label>Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact__form-submit"
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Map Section */}
            <div className="contact__map-section">
              <h2 className="contact__map-title">Our Locations</h2>
              <div className="contact__map">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Global office locations map"
                  className="contact__map-image"
                />
                <div className="contact__map-overlay">
                  <p>Global Headquarters</p>
                  <p>New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="contact__offices">
        <div className="contact__container">
          <div className="contact__offices-header">
            <h2 className="contact__offices-title">Global Offices</h2>
            <p className="contact__offices-description">
              Visit us at any of our locations worldwide
            </p>
          </div>
          
          <div className="contact__offices-grid">
            {offices.map((office, index) => (
              <div key={index} className="contact__office-card">
                <div className="contact__office-image">
                  <img src={office.image} alt={`${office.city} office`} />
                </div>
                <div className="contact__office-content">
                  <h3 className="contact__office-city">{office.city}</h3>
                  <p className="contact__office-address">{office.address}</p>
                  <p className="contact__office-phone">{office.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;