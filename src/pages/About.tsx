import React from 'react';
import { Award, Users, Globe, TrendingUp, Shield, Clock, Package } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { number: '50M+', label: 'Packages Delivered', icon: Package },
    { number: '200+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'On-time Delivery', icon: Clock },
    { number: '25+', label: 'Years Experience', icon: Award }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We ensure your packages arrive safely and on time, every time.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our worldwide network connects businesses across all continents.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Cutting-edge technology drives our logistics solutions forward.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your success is our priority, with 24/7 dedicated support.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'With over 20 years in logistics, Sarah founded GlobalShip to revolutionize global shipping.'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Michael leads our technology initiatives, driving innovation in tracking and automation.'
    },
    {
      name: 'Emma Rodriguez',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Emma oversees our global operations, ensuring seamless logistics across all regions.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about__hero">
        <div className="about__hero-container">
          <div className="about__hero-content">
            <h1 className="about__hero-title">About GlobalShip</h1>
            <p className="about__hero-description">
              Connecting the world through innovative logistics solutions. We've been at the forefront 
              of global shipping for over 25 years, delivering excellence in every package.
            </p>
          </div>
          <div className="about__hero-image">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Global logistics operations"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about__stats">
        <div className="about__container">
          <div className="about__stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about__stat-card">
                <div className="about__stat-icon">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="about__stat-number">{stat.number}</div>
                <div className="about__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about__story">
        <div className="about__container">
          <div className="about__story-content">
            <div className="about__story-text">
              <h2 className="about__story-title">Our Story</h2>
              <p className="about__story-description">
                Founded in 1999, GlobalShip began as a small regional courier service with a big vision: 
                to make global shipping as simple as sending a local package. Today, we're proud to be 
                one of the world's leading logistics providers, serving businesses and individuals across 
                200+ countries.
              </p>
              <p className="about__story-description">
                Our journey has been driven by continuous innovation, from pioneering real-time tracking 
                technology to developing sustainable shipping practices. We've grown from a team of 5 to 
                over 50,000 employees worldwide, but our commitment to excellence remains unchanged.
              </p>
            </div>
            <div className="about__story-image">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Our journey and growth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about__values">
        <div className="about__container">
          <div className="about__values-header">
            <h2 className="about__values-title">Our Values</h2>
            <p className="about__values-description">
              The principles that guide everything we do
            </p>
          </div>
          <div className="about__values-grid">
            {values.map((value, index) => (
              <div key={index} className="about__value-card">
                <div className="about__value-icon">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="about__value-title">{value.title}</h3>
                <p className="about__value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about__team">
        <div className="about__container">
          <div className="about__team-header">
            <h2 className="about__team-title">Leadership Team</h2>
            <p className="about__team-description">
              Meet the experienced professionals leading GlobalShip into the future
            </p>
          </div>
          <div className="about__team-grid">
            {team.map((member, index) => (
              <div key={index} className="about__team-card">
                <div className="about__team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="about__team-content">
                  <h3 className="about__team-name">{member.name}</h3>
                  <p className="about__team-position">{member.position}</p>
                  <p className="about__team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about__mission">
        <div className="about__container">
          <div className="about__mission-content">
            <h2 className="about__mission-title">Our Mission</h2>
            <p className="about__mission-description">
              To connect businesses and people worldwide through innovative, reliable, and sustainable 
              logistics solutions that exceed expectations and drive global commerce forward.
            </p>
            <div className="about__mission-cta">
              <button className="about__mission-button">Join Our Team</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;