import React from 'react';
import { Shield, Clock, Globe, Smartphone, HeadphonesIcon, TrendingUp } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Advanced security protocols and insurance coverage for all shipments',
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: 'Live GPS tracking and instant notifications for every delivery milestone',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Worldwide coverage with local expertise in over 200 countries',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Track and manage shipments on-the-go with our mobile platform',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical assistance',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Detailed reports and analytics to optimize your shipping strategy',
    },
  ];

  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <h2 className="features__title">Why Choose GlobalShip?</h2>
          <p className="features__description">
            Experience the difference with our cutting-edge logistics solutions designed for modern businesses
          </p>
        </div>
        
        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="features__card">
              <div className="features__card-icon">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;