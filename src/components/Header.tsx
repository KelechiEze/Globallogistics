import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Package, Truck, Globe, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Track Shipment', href: '/track' },
    { name: 'Services', href: '/services' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            <Globe className="w-8 h-8" />
          </div>
          <div className="header__logo-text">
            <span className="header__logo-name">GlobalShip</span>
            <span className="header__logo-tagline">Express Logistics</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`header__nav-link ${
                location.pathname === item.href ? 'header__nav-link--active' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="header__actions">
          <Link to="/track" className="header__cta header__cta--secondary">
            <Package className="w-4 h-4" />
            Track Package
          </Link>
          <Link to="/quote" className="header__cta header__cta--primary">
            <Truck className="w-4 h-4" />
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="header__mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`header__mobile-nav-link ${
                location.pathname === item.href ? 'header__mobile-nav-link--active' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="header__mobile-actions">
          <Link 
            to="/track" 
            className="header__mobile-cta header__mobile-cta--secondary"
            onClick={() => setIsMenuOpen(false)}
          >
            <Package className="w-4 h-4" />
            Track Package
          </Link>
          <Link 
            to="/quote" 
            className="header__mobile-cta header__mobile-cta--primary"
            onClick={() => setIsMenuOpen(false)}
          >
            <Truck className="w-4 h-4" />
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;