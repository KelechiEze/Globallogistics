import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Package, ArrowRight, MapPin, Clock, CheckCircle } from 'lucide-react';
import './TrackingPreview.css';

const TrackingPreview = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      window.location.href = `/track/${trackingNumber.trim()}`;
    }
  };

  return (
    <section className="tracking-preview">
      <div className="tracking-preview__container">
        <div className="tracking-preview__content">
          <div className="tracking-preview__text">
            <div className="tracking-preview__badge">
              <Package className="w-4 h-4" />
              <span>Live Tracking</span>
            </div>
            <h2 className="tracking-preview__title">
              Track Your Shipment 
              <span className="tracking-preview__title-accent">in Real-Time</span>
            </h2>
            <p className="tracking-preview__description">
              Get instant updates on your package location with our advanced tracking system. 
              Monitor every step of your delivery journey with precision and transparency.
            </p>
          </div>
          
          <form className="tracking-preview__form" onSubmit={handleTrackSubmit}>
            <div className="tracking-preview__input-group">
              <div className="tracking-preview__input-icon">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (e.g., GS123456789)"
                className="tracking-preview__input"
                required
              />
              <button type="submit" className="tracking-preview__button">
                <Package className="w-5 h-5" />
                <span>Track Package</span>
                <ArrowRight className="w-4 h-4 tracking-preview__button-arrow" />
              </button>
            </div>
          </form>
          
          <div className="tracking-preview__demo">
            <span>Try our demo: </span>
            <Link 
              to="/track/GS001234567" 
              className="tracking-preview__demo-link"
            >
              GS001234567
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
        
        <div className="tracking-preview__visual">
          <div className="tracking-preview__mockup">
            <div className="tracking-preview__mockup-header">
              <div className="tracking-preview__mockup-controls">
                <div className="tracking-preview__mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="tracking-preview__mockup-title">
                  <Package className="w-4 h-4" />
                  <span>Live Tracking Dashboard</span>
                </div>
              </div>
            </div>
            
            <div className="tracking-preview__mockup-content">
              <div className="tracking-preview__tracking-header">
                <div className="tracking-preview__tracking-id">
                  <span className="tracking-preview__tracking-label">Tracking ID</span>
                  <span className="tracking-preview__tracking-number">GS001234567</span>
                </div>
                <div className="tracking-preview__tracking-status">
                  <div className="tracking-preview__status-badge">
                    <Clock className="w-3 h-3" />
                    In Transit
                  </div>
                </div>
              </div>

              <div className="tracking-preview__timeline">
                <div className="tracking-preview__timeline-item tracking-preview__timeline-item--completed">
                  <div className="tracking-preview__timeline-icon">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="tracking-preview__timeline-content">
                    <h4>Package Dispatched</h4>
                    <p>Your package has left our facility</p>
                    <span className="tracking-preview__timeline-time">
                      <Clock className="w-3 h-3" />
                      2 hours ago
                    </span>
                  </div>
                </div>
                
                <div className="tracking-preview__timeline-item tracking-preview__timeline-item--active">
                  <div className="tracking-preview__timeline-icon">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="tracking-preview__timeline-content">
                    <h4>In Transit</h4>
                    <p>Package is moving to destination</p>
                    <span className="tracking-preview__timeline-location">
                      <MapPin className="w-3 h-3" />
                      Distribution Center, NY
                    </span>
                  </div>
                </div>
                
                <div className="tracking-preview__timeline-item">
                  <div className="tracking-preview__timeline-icon">
                    <Package className="w-4 h-4" />
                  </div>
                  <div className="tracking-preview__timeline-content">
                    <h4>Out for Delivery</h4>
                    <p>Package will be delivered today</p>
                    <span className="tracking-preview__timeline-eta">
                      <Clock className="w-3 h-3" />
                      ETA: 2:30 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingPreview;