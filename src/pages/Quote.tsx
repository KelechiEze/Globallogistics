import React, { useState } from 'react';
import { Package, MapPin, Weight, Calendar, Clock, Calculator } from 'lucide-react';
import './Quote.css';

const Quote = () => {
  const [formData, setFormData] = useState({
    serviceType: 'express',
    pickupAddress: '',
    deliveryAddress: '',
    packageType: 'package',
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: ''
    },
    declaredValue: '',
    pickupDate: '',
    deliveryDate: '',
    additionalServices: [] as string[]
  });

  const [quote, setQuote] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const serviceTypes = [
    { value: 'express', label: 'Express Delivery', description: 'Same-day and next-day delivery' },
    { value: 'standard', label: 'Standard Shipping', description: '2-5 business days' },
    { value: 'international', label: 'International', description: 'Cross-border shipping' },
    { value: 'freight', label: 'Freight', description: 'Large shipments and cargo' }
  ];

  const packageTypes = [
    { value: 'package', label: 'Package' },
    { value: 'document', label: 'Document' },
    { value: 'pallet', label: 'Pallet' },
    { value: 'container', label: 'Container' }
  ];

  const additionalServices = [
    { value: 'insurance', label: 'Additional Insurance' },
    { value: 'signature', label: 'Signature Required' },
    { value: 'tracking', label: 'Premium Tracking' },
    { value: 'packaging', label: 'Professional Packaging' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDimensionChange = (dimension: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [dimension]: value
      }
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const calculateQuote = async () => {
    setLoading(true);
    
    // Simulate quote calculation
    setTimeout(() => {
      const baseRate = {
        express: 25,
        standard: 15,
        international: 35,
        freight: 50
      }[formData.serviceType] || 15;
      
      const weight = parseFloat(formData.weight) || 1;
      const volumeWeight = (
        parseFloat(formData.dimensions.length || '0') *
        parseFloat(formData.dimensions.width || '0') *
        parseFloat(formData.dimensions.height || '0')
      ) / 5000;
      
      const chargeableWeight = Math.max(weight, volumeWeight);
      const calculatedQuote = baseRate + (chargeableWeight * 2) + (formData.additionalServices.length * 5);
      
      setQuote(Math.round(calculatedQuote * 100) / 100);
      setLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateQuote();
  };

  return (
    <div className="quote">
      <div className="quote__container">
        {/* Header */}
        <div className="quote__header">
          <h1 className="quote__title">Get Shipping Quote</h1>
          <p className="quote__description">
            Calculate your shipping costs instantly with our advanced pricing calculator
          </p>
        </div>

        <div className="quote__content">
          {/* Quote Form */}
          <form className="quote__form" onSubmit={handleSubmit}>
            {/* Service Type */}
            <div className="quote__section">
              <h3 className="quote__section-title">
                <Package className="w-5 h-5" />
                Service Type
              </h3>
              <div className="quote__service-grid">
                {serviceTypes.map((service) => (
                  <label
                    key={service.value}
                    className={`quote__service-option ${
                      formData.serviceType === service.value ? 'quote__service-option--selected' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="serviceType"
                      value={service.value}
                      checked={formData.serviceType === service.value}
                      onChange={(e) => handleInputChange('serviceType', e.target.value)}
                    />
                    <div className="quote__service-content">
                      <h4>{service.label}</h4>
                      <p>{service.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Addresses */}
            <div className="quote__section">
              <h3 className="quote__section-title">
                <MapPin className="w-5 h-5" />
                Pickup & Delivery
              </h3>
              <div className="quote__address-grid">
                <div className="quote__field">
                  <label>Pickup Address</label>
                  <input
                    type="text"
                    value={formData.pickupAddress}
                    onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
                    placeholder="Enter pickup address"
                    required
                  />
                </div>
                <div className="quote__field">
                  <label>Delivery Address</label>
                  <input
                    type="text"
                    value={formData.deliveryAddress}
                    onChange={(e) => handleInputChange('deliveryAddress', e.target.value)}
                    placeholder="Enter delivery address"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Package Details */}
            <div className="quote__section">
              <h3 className="quote__section-title">
                <Weight className="w-5 h-5" />
                Package Details
              </h3>
              
              <div className="quote__package-grid">
                <div className="quote__field">
                  <label>Package Type</label>
                  <select
                    value={formData.packageType}
                    onChange={(e) => handleInputChange('packageType', e.target.value)}
                  >
                    {packageTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="quote__field">
                  <label>Weight (kg)</label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    placeholder="0.0"
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
              </div>
              
              <div className="quote__dimensions">
                <label>Dimensions (cm)</label>
                <div className="quote__dimensions-grid">
                  <input
                    type="number"
                    value={formData.dimensions.length}
                    onChange={(e) => handleDimensionChange('length', e.target.value)}
                    placeholder="Length"
                    min="0"
                  />
                  <input
                    type="number"
                    value={formData.dimensions.width}
                    onChange={(e) => handleDimensionChange('width', e.target.value)}
                    placeholder="Width"
                    min="0"
                  />
                  <input
                    type="number"
                    value={formData.dimensions.height}
                    onChange={(e) => handleDimensionChange('height', e.target.value)}
                    placeholder="Height"
                    min="0"
                  />
                </div>
              </div>
              
              <div className="quote__field">
                <label>Declared Value ($)</label>
                <input
                  type="number"
                  value={formData.declaredValue}
                  onChange={(e) => handleInputChange('declaredValue', e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="quote__section">
              <h3 className="quote__section-title">
                <Calendar className="w-5 h-5" />
                Shipping Dates
              </h3>
              <div className="quote__date-grid">
                <div className="quote__field">
                  <label>Pickup Date</label>
                  <input
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="quote__field">
                  <label>Required Delivery Date</label>
                  <input
                    type="date"
                    value={formData.deliveryDate}
                    onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="quote__section">
              <h3 className="quote__section-title">
                <Clock className="w-5 h-5" />
                Additional Services
              </h3>
              <div className="quote__services-grid">
                {additionalServices.map((service) => (
                  <label key={service.value} className="quote__checkbox">
                    <input
                      type="checkbox"
                      checked={formData.additionalServices.includes(service.value)}
                      onChange={() => handleServiceToggle(service.value)}
                    />
                    <span>{service.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="quote__submit"
              disabled={loading}
            >
              <Calculator className="w-5 h-5" />
              {loading ? 'Calculating...' : 'Calculate Quote'}
            </button>
          </form>

          {/* Quote Result */}
          {quote !== null && (
            <div className="quote__result">
              <div className="quote__result-header">
                <h3>Your Shipping Quote</h3>
              </div>
              <div className="quote__result-content">
                <div className="quote__result-price">
                  <span className="quote__result-currency">$</span>
                  <span className="quote__result-amount">{quote}</span>
                </div>
                <p className="quote__result-description">
                  Estimated cost for {formData.serviceType} shipping
                </p>
                <div className="quote__result-actions">
                  <button className="quote__result-button quote__result-button--primary">
                    Book Shipment
                  </button>
                  <button className="quote__result-button quote__result-button--secondary">
                    Save Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;