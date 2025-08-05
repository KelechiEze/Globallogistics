import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, Play, CheckCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const benefits = [
    'Real-time tracking',
    'Global coverage',
    'Secure handling',
    '24/7 support'
  ];

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__title-main">Global Logistics</span>
              <span className="hero__title-accent">Made Simple</span>
            </h1>
            
            <p className="hero__description">
              Experience seamless shipping and tracking with our advanced logistics platform. 
              From local deliveries to international freight, we've got you covered with 
              real-time updates and unmatched reliability.
            </p>
            
            <div className="hero__benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="hero__benefit">
                  <CheckCircle className="hero__benefit-icon" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="hero__actions">
              <Link to="/track" className="hero__cta hero__cta--primary">
                <Package className="w-5 h-5" />
                Track Shipment
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link to="/quote" className="hero__cta hero__cta--secondary">
                Get Quote
              </Link>
              
              <button className="hero__play-button">
                <Play className="w-6 h-6" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__image-container">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Global logistics and shipping operations"
                className="hero__image"
              />
              <div className="hero__image-overlay"></div>
              
              {/* Floating Cards */}
              <div className="hero__floating-card hero__floating-card--tracking">
                <div className="hero__card-header">
                  <Package className="w-4 h-4" />
                  <span>Live Tracking</span>
                </div>
                <div className="hero__card-content">
                  <div className="hero__card-status">In Transit</div>
                  <div className="hero__card-progress">
                    <div className="hero__card-progress-bar"></div>
                  </div>
                  <div className="hero__card-eta">ETA: 2 hours</div>
                </div>
              </div>
              
              <div className="hero__floating-card hero__floating-card--stats">
                <div className="hero__card-stat">
                  <span className="hero__card-stat-number">99.9%</span>
                  <span className="hero__card-stat-label">On-time Delivery</span>
                </div>
                <div className="hero__card-stat">
                  <span className="hero__card-stat-number">50M+</span>
                  <span className="hero__card-stat-label">Packages Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;