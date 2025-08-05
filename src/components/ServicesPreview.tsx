import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, Ship, Plane, ArrowRight } from 'lucide-react';
import './ServicesPreview.css';

const ServicesPreview = () => {
  const services = [
    {
      icon: Package,
      title: 'Express Delivery',
      description: 'Same-day and next-day delivery options for urgent shipments',
      features: ['Door-to-door service', 'Real-time tracking', 'Signature confirmation'],
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Ship,
      title: 'International Shipping',
      description: 'Seamless cross-border logistics with customs clearance',
      features: ['Customs documentation', 'Duty calculation', 'Multi-modal transport'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Truck,
      title: 'Freight Forwarding',
      description: 'Large-scale cargo solutions for businesses of all sizes',
      features: ['LTL & FTL options', 'Warehouse storage', 'Route optimization'],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="services-preview">
      <div className="services-preview__container">
        <div className="services-preview__header">
          <h2 className="services-preview__title">Our Core Services</h2>
          <p className="services-preview__description">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </div>
        
        <div className="services-preview__grid">
          {services.map((service, index) => (
            <div key={index} className="services-preview__card">
              <div className="services-preview__card-image">
                <img src={service.image} alt={service.title} />
                <div className="services-preview__card-overlay">
                  <service.icon className="w-12 h-12" />
                </div>
              </div>
              
              <div className="services-preview__card-content">
                <h3 className="services-preview__card-title">{service.title}</h3>
                <p className="services-preview__card-description">{service.description}</p>
                
                <ul className="services-preview__card-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <Link to="/services" className="services-preview__card-link">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-preview__cta">
          <Link to="/services" className="services-preview__cta-button">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;