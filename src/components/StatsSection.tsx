import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    {
      number: '50M+',
      label: 'Packages Delivered',
      description: 'Successfully shipped worldwide'
    },
    {
      number: '200+',
      label: 'Countries Served',
      description: 'Global logistics network'
    },
    {
      number: '99.9%',
      label: 'On-time Delivery',
      description: 'Reliability you can trust'
    },
    {
      number: '24/7',
      label: 'Customer Support',
      description: 'Always here to help'
    }
  ];

  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stats__card">
              <div className="stats__number">{stat.number}</div>
              <div className="stats__label">{stat.label}</div>
              <div className="stats__description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;