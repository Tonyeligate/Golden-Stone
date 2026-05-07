import { useEffect, useState } from 'react'
import './Home.css'
import deliveryImage from '../images/less.jpeg'
import serviceImage from '../images/front.jpeg'
import frontImage from '../images/front.jpeg'
import firstImage from '../images/first.jpg'
import cycleImage from '../images/cycle.jpg'
import secondImage from '../images/second.jpg'
import mapImage from '../images/map.jpg'

export default function Home({ onNavigate }: { onNavigate?: (page: 'home' | 'services' | 'about' | 'coverage' | 'contact' | 'news') => void }) {
  const heroSlides = [frontImage, firstImage, cycleImage, secondImage]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [heroSlides.length])

  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.15 })
  document.querySelectorAll('.slide-in-left, .slide-in-right')
    .forEach(el => observer.observe(el))
  return () => observer.disconnect()
}, [])

  return (
    <div className="home-page">
      <section className="hero-panel">
        <div className="hero-bg">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`slide slide-${index} ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Luxury logistics</p>
            <h1>Premium Logistics. Delivered with Precision.</h1>
            <p className="hero-text">
              Golden Stone Logistics Limited Company moves your cargo with unmatched care, speed, and elegance.
              Our premium logistics services are built for brands that demand confidence.
            </p>
            <div className="hero-actions">
              <button className="btn btn-gold" type="button" onClick={() => onNavigate?.('contact')}>Get a Quote</button>
              <button className="btn btn-outline" type="button" onClick={() => onNavigate?.('services')}>Our Services</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="logo">
              <div className="logo-top">GSL</div>
              <div className="logo-bottom">
                GOLDEN STONE LOGISTICS<br />
                LIMITED COMPANY
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="featured-rates">
  <div className="container">
    <div className="rates-heading">
      <div className="rates-eyebrow">
        <span className="rates-eyebrow-line" />
        <span className="rates-eyebrow-text">Shipping Plans</span>
        <span className="rates-eyebrow-line" />
      </div>
      <h2 className="rates-title">Featured <em>Shipping</em> Rates</h2>
    </div>

    <div className="rates-grid">
     {[
  { tier: 'Standard', name: 'Standard Shipping', time: '5 – 7 Business Days', price: '15', cents: '.99', features: ['Domestic & International', 'Package weight up to 50 kg', 'Basic insurance included'] },
  { tier: 'Express', name: 'Express Shipping', time: '2 – 3 Business Days', price: '29', cents: '.99', features: ['Priority handling guaranteed', 'Real-time GPS tracking', 'Full insurance coverage'], featured: true },
  { tier: 'Premium', name: 'Overnight Shipping', time: 'Next Business Day', price: '49', cents: '.99', features: ['VIP premium priority', 'Signature confirmation', '24/7 VIP support access'] },
].map((plan, i) => (
  <div key={plan.tier} className={`rate-card ${plan.featured ? 'featured' : ''} ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
          {plan.featured && <div className="rate-popular">Most Popular</div>}
          <div className="rate-tier"><span className="rate-tier-dot" />{plan.tier}</div>
          <div className="rate-name">{plan.name}</div>
          <div className="rate-time">{plan.time}</div>
          <div className="rate-divider" />
          <div className="rate-price-row">
            <span className="rate-quote">Contact for Quote</span>
          </div>
          <div className="rate-from">Custom pricing available</div>
          <ul className="rate-features">
            {plan.features.map((f) => <li key={f}><span className="rate-check">✓</span>{f}</li>)}
          </ul>
          <button type="button" className="rate-btn" onClick={() => onNavigate?.('contact')}>Ship Now</button>
        </div>
      ))}
    </div>
  </div>
</section>

    <section className="services-section">
  <div className="container services-grid">

    {/* LEFT IMAGE */}
    <div className="svc-image-wrap slide-in-left">
  <div className="svc-gold-bar" />

  <div className="svc-img-main">
    <img src={serviceImage} alt="Logistics warehouse" />
  </div>

  <div className="svc-years-badge">
    <div className="svc-years-num">15+</div>
    <div className="svc-years-label">Years<br/>Expertise</div>
  </div>

  <div className="svc-stat-chip">
    <div className="svc-stat-num">98%</div>
    <div className="svc-stat-label">On-time<br/>Delivery</div>
  </div>

  <div className="svc-img-accent">
    <img src={deliveryImage} alt="Courier delivery" />
  </div>

  <div className="svc-img-tag">✦ Excellence in Logistics</div>
</div>

    {/* RIGHT CONTENT */}
    <div className="svc-content slide-in-right">
      <div className="svc-eyebrow">
        <div className="svc-eyebrow-line" />
        <div className="svc-eyebrow-text">What we offer</div>
      </div>
      <h2 className="svc-title">Our <em>Services</em></h2>
      <p className="svc-desc">
        We provide an extensive range of postal, courier, and financial solutions —
        precision-engineered for individuals and enterprises that demand reliability.
      </p>

      <div className="svc-list">
        {[
          { icon: '📩', name: 'Custom Clearance',      sub: 'Ensuring compiliance with government regulations' },
          { icon: '🚚', name: 'Freight Transportation',     sub: 'Sea freight and Air freight' },
          { icon: '💳', name: 'Documentation Services',   sub: 'Shipping and clearence paperwork' },
          { icon: '🛒', name: 'eCommerce / eServices',sub: 'Fulfillment, last-mile, and returns management' },
        ].map((s) => (
          <button className="svc-item" type="button" onClick={() => onNavigate?.('services')} key={s.name}>
            <div className="svc-item-icon">{s.icon}</div>
            <div className="svc-item-body">
              <span className="svc-item-name">{s.name}</span>
              <span className="svc-item-sub">{s.sub}</span>
            </div>
            <span className="svc-item-arrow">→</span>
          </button>
        ))}
      </div>

      <button className="svc-cta" type="button" onClick={() => onNavigate?.('services')}>Explore all services <span className="svc-cta-arrow">→</span></button>
    </div>

  </div>
</section>

<section className="why-choose">
  <div className="container">
    <div className="why-header">
      <p className="eyebrow dark">Why choose Golden Stone Logistics Limited Company</p>
      <h2>Luxury service built around your operation.</h2>
    </div>

    <div className="reason-grid">
      <div className="reason-card card-1 slide-in-left">
        <div className="overlay">
          <h3>Fast Delivery</h3>
          <p>Speed and consistency delivered with premium quality.</p>
        </div>
      </div>

      <div className="reason-card card-2 slide-in-right">
        <div className="overlay">
          <h3>Secure Handling</h3>
          <p>Your critical freight receives elite attention every step.</p>
        </div>
      </div>

      <div className="reason-card card-3 slide-in-left">
        <div className="overlay">
          <h3>Nationwide Coverage</h3>
          <p>Strategic reach across key regions and major metro hubs.</p>
        </div>
      </div>

      <div className="reason-card card-4 slide-in-right">
        <div className="overlay">
          <h3>24/7 Support</h3>
          <p>Dedicated support access for premium customers anytime.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-modern">
  <div className="cta-wrapper">

    
    <div className="cta-left">
      <div className="cta-badge">🚀 START SHIPPING</div>
      <h3>Ship Smarter with Golden Stone Logistics Limited Company</h3>
      <p>Fast. Secure. Reliable logistics built for businesses and individuals.</p>
    </div>

    
    <div className="cta-right">
      <h2>Ready to Ship With Golden Stone Logistics Limited Company?</h2>
      <div className="cta-underline"></div>
      <p>
        Join thousands of businesses and individuals who trust us 
        with their shipments nationwide and globally.
      </p>

      
      <button className="btn btn-primary" type="button" onClick={() => onNavigate?.('contact')}>
        Get Started Today
      </button>

      <span className="cta-small-text">No hidden fees. Fast onboarding.</span>
    </div>
</div>

      </section>

<section className="location-section">
  <div className="container location-grid">
    
    {/* LEFT CONTENT */}
    <div className="location-text slide-in-left">
      <p className="eyebrow">Location</p>
      <h2>Find a Service Hub</h2>
      <div className="underline"></div>

      <p>
        Easily locate your nearest service hub, access essential contact
        information, and get step-by-step directions for a seamless experience.
        Whether you're shipping, tracking, or making inquiries, we help you
        find the best route.
      </p>

      <a className="btn-primary" href="https://maps.apple/p/yBcdbtggvruhq6" target="_blank" rel="noopener noreferrer">
        Find Location →
      </a>
    </div>

    {/* RIGHT IMAGE CARD */}
    <div className="location-image slide-in-right">
      <img src={mapImage} alt="Map location" />
    </div>

  </div>
</section>

    </div>

  )
}
