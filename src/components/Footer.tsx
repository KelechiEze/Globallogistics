import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin,
  Package, Truck, Ship, Plane
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Express Delivery', href: '/services#express' },
    { name: 'International Shipping', href: '/services#international' },
    { name: 'Freight Forwarding', href: '/services#freight' },
    { name: 'Warehousing', href: '/services#warehouse' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Sustainability', href: '/sustainability' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Track Package', href: '/track' },
    { name: 'Shipping Calculator', href: '/calculator' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__main">
          {/* Brand Section */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <Globe className="w-8 h-8" />
              </div>
              <div className="footer__logo-text">
                <span className="footer__logo-name">GlobalShip</span>
                <span className="footer__logo-tagline">Express Logistics</span>
              </div>
            </Link>
            
            <p className="footer__description">
              Delivering excellence across the globe with our comprehensive logistics solutions. 
              Fast, reliable, and secure shipping services you can trust.
            </p>
            
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="footer__contact-item">
                <Mail className="w-4 h-4" />
                <span>support@globalship.com</span>
              </div>
              <div className="footer__contact-item">
                <MapPin className="w-4 h-4" />
                <span>123 Logistics Ave, Global City, GC 12345</span>
              </div>
            </div>
            
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="footer__social-link">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="footer__social-link">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="footer__social-link">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="footer__links">
            <h3 className="footer__links-title">Services</h3>
            <ul className="footer__links-list">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="footer__link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer__links">
            <h3 className="footer__links-title">Company</h3>
            <ul className="footer__links-list">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="footer__link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer__links">
            <h3 className="footer__links-title">Support</h3>
            <ul className="footer__links-list">
              {support.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="footer__link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="footer__newsletter">
            <h3 className="footer__newsletter-title">Stay Updated</h3>
            <p className="footer__newsletter-description">
              Get the latest updates on shipping rates, new services, and logistics insights.
            </p>
            <form className="footer__newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__newsletter-input"
                required
              />
              <button type="submit" className="footer__newsletter-button">
                Subscribe
              </button>
            </form>
            
            <div className="footer__shipping-icons">
              <div className="footer__shipping-icon">
                <Package className="w-6 h-6" />
              </div>
              <div className="footer__shipping-icon">
                <Truck className="w-6 h-6" />
              </div>
              <div className="footer__shipping-icon">
                <Ship className="w-6 h-6" />
              </div>
              <div className="footer__shipping-icon">
                <Plane className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p>&copy; {currentYear} GlobalShip Express Logistics. All rights reserved.</p>
          </div>
          <div className="footer__bottom-right">
            <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
            <Link to="/cookies" className="footer__legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;