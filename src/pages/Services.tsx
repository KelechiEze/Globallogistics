import React from 'react';
import { Package, Truck, Ship, Plane, Clock, Shield, Globe, Zap } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: 'Express Delivery',
      description: 'Fast and reliable same-day and next-day delivery services for urgent shipments.',
      features: [
        'Same-day delivery available',
        'Real-time GPS tracking',
        'Signature confirmation',
        'Photo proof of delivery',
        'Priority handling'
      ],
      pricing: 'Starting from $15',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Ship,
      title: 'International Shipping',
      description: 'Seamless cross-border logistics with comprehensive customs clearance support.',
      features: [
        'Customs documentation',
        'Duty and tax calculation',
        'Multi-modal transport',
        'Door-to-door service',
        'Insurance coverage'
      ],
      pricing: 'Starting from $25',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Truck,
      title: 'Freight Forwarding',
      description: 'Large-scale cargo solutions for businesses with LTL and FTL options.',
      features: [
        'LTL & FTL services',
        'Warehouse storage',
        'Route optimization',
        'Load consolidation',
        'Fleet management'
      ],
      pricing: 'Custom quotes',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast air transport for time-sensitive shipments worldwide.',
      features: [
        'Global air network',
        'Temperature controlled',
        'Express clearance',
        'Next flight out',
        'Dangerous goods certified'
      ],
      pricing: 'Starting from $50',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: 'Monitor your shipments with live GPS tracking and instant notifications.'
    },
    {
      icon: Shield,
      title: 'Secure Handling',
      description: 'Advanced security protocols and comprehensive insurance coverage.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Worldwide coverage with local expertise in over 200 countries.'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Quick pickup and processing with optimized delivery routes.'
    }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services__hero">
        <div className="services__hero-container">
          <div className="services__hero-content">
            <h1 className="services__hero-title">Our Logistics Services</h1>
            <p className="services__hero-description">
              Comprehensive shipping and logistics solutions tailored to your business needs. 
              From express delivery to international freight, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services__main">
        <div className="services__container">
          <div className="services__grid">
            {services.map((service, index) => (
              <div key={index} className="services__card">
                <div className="services__card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="services__card-overlay">
                    <service.icon className="w-12 h-12" />
                  </div>
                </div>
                
                <div className="services__card-content">
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-description">{service.description}</p>
                  
                  <ul className="services__card-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  
                  <div className="services__card-footer">
                    <span className="services__card-pricing">{service.pricing}</span>
                    <button className="services__card-button">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="services__features">
        <div className="services__container">
          <div className="services__features-header">
            <h2 className="services__features-title">Why Choose Our Services?</h2>
            <p className="services__features-description">
              Experience the difference with our advanced logistics platform and dedicated support team.
            </p>
          </div>
          
          <div className="services__features-grid">
            {features.map((feature, index) => (
              <div key={index} className="services__feature-card">
                <div className="services__feature-icon">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="services__feature-title">{feature.title}</h3>
                <p className="services__feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services__cta">
        <div className="services__container">
          <div className="services__cta-content">
            <h2 className="services__cta-title">Ready to Ship?</h2>
            <p className="services__cta-description">
              Get started with our logistics services today. Request a quote or speak with our team.
            </p>
            <div className="services__cta-buttons">
              <button className="services__cta-button services__cta-button--primary">
                Get Quote
              </button>
              <button className="services__cta-button services__cta-button--secondary">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;