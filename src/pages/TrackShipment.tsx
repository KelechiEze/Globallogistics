// TrackShipment.tsx
import React, { useState, useEffect } from 'react';
import { Package, MapPin, Clock, CheckCircle, Truck, Ship, Plane, Grid, Search, AlertCircle } from 'lucide-react';
import { trackingDatabase, TrackingData, updateTrackingStatus } from '../data/trackingData';
import './TrackShipment.css';

const TrackingShipment = () => {
  const [tracking, setTracking] = useState<string>('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (number: string) => {
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      const data = trackingDatabase[number.toUpperCase()];
      if (data) {
        setTrackingData(data);
      } else {
        setError('Tracking number not found. Please check your tracking number and try again.');
        setTrackingData(null);
      }
      setLoading(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tracking.trim()) {
      handleTrack(tracking.trim());
    }
  };

  const getServiceIcon = (service: string) => {
    if (service.includes('Express')) return Plane;
    if (service.includes('International')) return Ship;
    return Truck;
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'status-delivered';
      case 'out for delivery': return 'status-shipped';
      case 'in transit': return 'status-processing';
      case 'shipped': return 'status-processing';
      case 'processing': return 'status-pending';
      case 'payment confirmed': return 'status-pending';
      case 'order received': return 'status-pending';
      default: return 'status-pending';
    }
  };

  const getCurrentStatusStep = (timeline: any[]) => {
    return timeline.findIndex(step => !step.completed);
  };

  return (
    <div className="tracking-interface">
      {/* Hero Section */}
      <div className="tracking-hero">
        <div className="tracking-hero-container">
          <div className="tracking-hero-content">
            <Package className="tracking-hero-icon" />
            <h1 className="tracking-hero-title">
              Track Your Shipment
            </h1>
            <p className="tracking-hero-subtitle">
              Get real-time updates on your package delivery status with our advanced tracking system
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="tracking-search-section">
        <div className="tracking-search-card">
          <form onSubmit={handleSubmit} className="tracking-form">
            <div className="tracking-form-group">
              <label htmlFor="tracking" className="tracking-form-label">
                Tracking Number
              </label>
              <div className="tracking-input-wrapper">
                <div className="tracking-input-icon">
                  <Search />
                </div>
                <input
                  type="text"
                  id="tracking"
                  value={tracking}
                  onChange={(e) => setTracking(e.target.value)}
                  placeholder="Enter tracking number (e.g., GS123456789)"
                  className="tracking-input"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading || !tracking.trim()}
              className="tracking-submit-button"
            >
              {loading ? (
                <div className="tracking-loading">
                  <div className="tracking-spinner"></div>
                  Tracking...
                </div>
              ) : (
                'Track Package'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="tracking-error">
          <div className="tracking-error-content">
            <AlertCircle className="tracking-error-icon" />
            <p className="tracking-error-text">{error}</p>
          </div>
        </div>
      )}

      {/* Tracking Results */}
      {trackingData && (
        <div className="tracking-results">
          {/* Package Overview */}
          <div className="tracking-overview">
            <div className="tracking-overview-header">
              <div className="tracking-overview-info">
                <div className="tracking-overview-icon">
                  {React.createElement(getServiceIcon(trackingData.service))}
                </div>
                <div>
                  <h2 className="tracking-overview-title">
                    {trackingData.trackingNumber}
                  </h2>
                  <p className="tracking-overview-service">{trackingData.service}</p>
                </div>
              </div>
              <div>
                <span className={`tracking-status-badge ${getStatusColor(trackingData.status)}`}>
                  {trackingData.status}
                </span>
              </div>
            </div>

            <div className="tracking-overview-grid">
              <div className="tracking-overview-item">
                <MapPin className="tracking-overview-item-icon" />
                <div>
                  <p className="tracking-overview-item-label">Current Location</p>
                  <p className="tracking-overview-item-value">{trackingData.currentLocation}</p>
                </div>
              </div>
              <div className="tracking-overview-item">
                <Clock className="tracking-overview-item-icon" />
                <div>
                  <p className="tracking-overview-item-label">Estimated Delivery</p>
                  <p className="tracking-overview-item-value">
                    {new Date(trackingData.estimatedDelivery).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="tracking-overview-item">
                <Package className="tracking-overview-item-icon" />
                <div>
                  <p className="tracking-overview-item-label">Total Items</p>
                  <p className="tracking-overview-item-value">{trackingData.items.length} items</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tracking-content-grid">
            {/* Items List */}
            <div className="tracking-items">
              <div className="tracking-items-header">
                <Grid className="tracking-items-icon" />
                <h3 className="tracking-items-title">
                  Package Contents ({trackingData.items.length} items)
                </h3>
              </div>
              <div className="tracking-items-list">
                {trackingData.items.map((item) => (
                  <div key={item.id} className="tracking-item">
                    <div className="tracking-item-image">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=300&h=300&fit=crop';
                        }}
                      />
                    </div>
                    <div className="tracking-item-details">
                      <h4 className="tracking-item-name">{item.name}</h4>
                      <p className="tracking-item-category">{item.category}</p>
                      <span className="tracking-item-weight">{item.weight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="tracking-timeline">
              <h3 className="tracking-timeline-title">Tracking Timeline</h3>
              <div className="tracking-timeline-list">
                {trackingData.timeline.map((status, index) => {
                  const isCompleted = status.completed;
                  const isActive = !isCompleted && index === getCurrentStatusStep(trackingData.timeline);
                  const isLast = index === trackingData.timeline.length - 1;
                  
                  return (
                    <div key={status.id} className="tracking-timeline-item">
                      {/* Timeline Line */}
                      {!isLast && (
                        <div className={`tracking-timeline-line ${
                          isCompleted ? 'completed' : ''
                        }`} />
                      )}
                      
                      {/* Status Dot */}
                      <div className={`tracking-timeline-dot ${
                        isCompleted ? 'completed' : 
                        isActive ? 'active' : ''
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="tracking-timeline-dot-icon" />
                        ) : (
                          <div className="tracking-timeline-dot-inner" />
                        )}
                      </div>
                      
                      {/* Status Content */}
                      <div className="tracking-timeline-content">
                        <div className="tracking-timeline-header">
                          <h4 className={`tracking-timeline-status ${
                            isCompleted ? 'completed' : 
                            isActive ? 'active' : ''
                          }`}>
                            {status.title}
                          </h4>
                          <span className="tracking-timeline-time">
                            {new Date(status.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <p className="tracking-timeline-description">{status.description}</p>
                        <div className="tracking-timeline-location">
                          <MapPin className="tracking-timeline-location-icon" />
                          {status.location}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingShipment;