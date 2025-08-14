import React from 'react';
import { Package, Truck, Ship, Plane, Clock, Shield, Globe, Zap } from 'lucide-react';
import './Services.css';

const LogisticsServices = () => {
  const serviceList = [
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
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const featureHighlights = [
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
    <div className="logistics-wrapper">
      {/* Hero Section */}
      <section className="logistics-hero">
        <div className="logistics-hero-container">
          <h1 className="logistics-hero-title">Our Logistics Services</h1>
          <p className="logistics-hero-text">
            Comprehensive shipping and logistics solutions tailored to your business needs.
            From express delivery to international freight, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="logistics-services">
        <div className="logistics-inner">
          <div className="logistics-grid">
            {serviceList.map((service, index) => (
              <div key={index} className="logistics-card">
                <div className="logistics-card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="logistics-card-icon">
                    <service.icon className="w-12 h-12" />
                  </div>
                </div>
                <div className="logistics-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                  <div className="logistics-card-footer">
                    <span>{service.pricing}</span>
                    <button>Get Quote</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="logistics-highlights">
        <div className="logistics-inner">
          <h2>Why Choose Our Services?</h2>
          <p>Experience the difference with our advanced logistics platform and dedicated support team.</p>
          <div className="highlight-grid">
            {featureHighlights.map((feat, idx) => (
              <div key={idx} className="highlight-card">
                <feat.icon className="w-8 h-8" />
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="logistics-cta">
        <div className="logistics-inner">
          <h2>Ready to Ship?</h2>
          <p>Get started with our logistics services today. Request a quote or speak with our team.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Quote</button>
            <button className="btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsServices;
