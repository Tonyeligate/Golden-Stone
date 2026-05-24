import { useEffect, useRef, useState } from 'react'
import './Home.css'
import deliveryImage from '../images/less.jpeg'
import serviceImage from '../images/front.jpeg'
import mapImage from '../images/map.jpg'
import heroImg1 from '../images/img1.png'; // woman with laptop standing
import heroImg2 from '../images/img2.png'; // woman holding packages
import heroImg3 from '../images/img3.png'; // woman at desk with screen
import heroImg4 from '../images/img4.png'; // woman with laptop alt
import aboutPersonImage from '../images/first.png' // replace with your actual image filename



type PageName = 'home' | 'services' | 'about' | 'coverage' | 'contact' | 'news'

type HeroSlide = {
  eyebrow: string
  headline: string[]
  body: string
  primaryCta: { label: string; nav: PageName }
  secondaryCta: { label: string; nav: PageName }
  personImage: string
  personAlt: string
}

type ServiceItem = {
  icon: string
  title: string
  highlight: boolean
  desc: string
}

const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Luxury Logistics',
    headline: ['Premium Logistics.', 'Delivered with', 'Precision.'],
    body: 'Golden Stone Logistics moves your cargo with unmatched care, speed, and elegance. Built for brands that demand confidence.',
    primaryCta: { label: 'Get a Quote', nav: 'contact' },
    secondaryCta: { label: 'Our Services', nav: 'services' },
    personImage: heroImg1,
    personAlt: 'Logistics professional with laptop',
  },
  {
    eyebrow: 'Global Reach',
    headline: ['Connecting Worlds.', 'Cargo Without', 'Borders.'],
    body: 'From local deliveries to international freight, our network spans every corner of the globe with flawless coordination.',
    primaryCta: { label: 'Explore Routes', nav: 'services' },
    secondaryCta: { label: 'About Us', nav: 'about' },
    personImage: heroImg2,
    personAlt: 'Logistics professional carrying packages',
  },
  {
    eyebrow: 'Trusted Partners',
    headline: ['Your Cargo.', 'Our Commitment.', 'Every Time.'],
    body: 'We treat every shipment as if it were our own â€” with the precision of professionals and the care of true partners.',
    primaryCta: { label: 'Partner With Us', nav: 'contact' },
    secondaryCta: { label: 'Case Studies', nav: 'services' },
    personImage: heroImg3,
    personAlt: 'Logistics manager at workstation',
  },
  {
    eyebrow: 'Elite Service',
    headline: ['Speed Meets', 'Elegance in', 'Every Delivery.'],
    body: 'Our white-glove logistics service ensures that premium goods arrive in perfect condition â€” on time, every time.',
    primaryCta: { label: 'Get Started', nav: 'contact' },
    secondaryCta: { label: 'Our Fleet', nav: 'services' },
    personImage: heroImg4,
    personAlt: 'Logistics professional with laptop',
  },
]

function HeroSection({ onNavigate }: { onNavigate?: (page: PageName) => void }) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const goTo = (index: number) => {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 450)
  }

  const next = () => goTo((current + 1) % heroSlides.length)
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length)

  useEffect(() => {
    intervalRef.current = window.setInterval(next, 6000)
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [current])

  const slide = heroSlides[current]

  return (
    <section className="hero-panel">
      <div className="hero-texture-bg">
        <div className="hero-noise" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-grid">
        <div className={`hero-copy ${animating ? 'copy-exit' : 'copy-enter'}`}>
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1 className="hero-headline">
            {slide.headline.map((line, i) => (
              <span
                key={`${current}-${i}`}
                className="headline-line"
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-text">{slide.body}</p>
          <div className="hero-actions">
            <button className="btn btn-gold" type="button" onClick={() => onNavigate?.(slide.primaryCta.nav)}>
              {slide.primaryCta.label}
            </button>
            <button className="btn btn-outline" type="button" onClick={() => onNavigate?.(slide.secondaryCta.nav)}>
              {slide.secondaryCta.label}
            </button>
          </div>
          <div className="hero-dots">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className={`person-frame ${animating ? 'img-exit' : 'img-enter'}`}>
            <div className="person-glow" />
            <img key={current} src={slide.personImage} alt={slide.personAlt} className="person-img" />
          </div>

          <button className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Previous slide">
            &#8592;
          </button>
          <button className="hero-arrow hero-arrow-next" onClick={next} aria-label="Next slide">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}

export default function Home({ onNavigate }: { onNavigate?: (page: PageName) => void }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.slide-in-left, .slide-in-right').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    }, [])

  const services: ServiceItem[] = [
    { icon: 'ti-truck-delivery', title: 'Fast Delivery',            highlight: false, desc: 'We are committed to moving goods quickly, safely and efficiently while ensuring every shipment arrives on time — delivery solutions businesses and individuals can trust.' },
    { icon: 'ti-lock-check',     title: 'Secure Handling',          highlight: true,  desc: 'We implement rigorous safety protocols, advanced tracking systems, and secure packaging to ensure your goods are protected throughout the entire shipping process.' },
    { icon: 'ti-map-2',          title: 'Nationwide Coverage',      highlight: false, desc: 'Our extensive network of service hubs across the country ensures we can deliver your shipments quickly and efficiently, no matter where you are located.' },
    { icon: 'ti-headset',        title: '24/7 Support',             highlight: true,  desc: 'Our dedicated support team is available around the clock to assist you with any questions or concerns, ensuring you always have expert help when you need it.' },
    { icon: 'ti-refresh',        title: 'Consistent & Dependable',  highlight: false, desc: 'Our commitment to excellence ensures that every shipment is handled with care and delivered on time, every time — meeting the highest standards of quality.' },
    { icon: 'ti-bulb',           title: 'Strategic Solutions',      highlight: false, desc: 'Our experts work closely with you to develop customized logistics strategies that optimize your supply chain and drive real business success.' },
  ]

  return (
    <div className="home-page">
      <HeroSection onNavigate={onNavigate} />

      <section className="featured-rates">
        <div className="container">
          <div className="rates-heading">
            <div className="rates-eyebrow">
              <span className="rates-eyebrow-line" />
              <span className="rates-eyebrow-text">Shipping Plans</span>
              <span className="rates-eyebrow-line" />
            </div>
            <h2 className="rates-title">
              Featured <em>Shipping</em> Rates
            </h2>
          </div>

          <div className="rates-grid">
            {[
              {
                tier: 'Standard',
                name: 'Standard Shipping',
                time: '5 â€“ 7 Business Days',
                price: '15',
                cents: '.99',
                features: ['Domestic & International', 'Package weight up to 50 kg', 'Basic insurance included'],
              },
              {
                tier: 'Express',
                name: 'Express Shipping',
                time: '2 â€“ 3 Business Days',
                price: '29',
                cents: '.99',
                features: ['Priority handling guaranteed', 'Real-time GPS tracking', 'Full insurance coverage'],
                featured: true,
              },
              {
                tier: 'Premium',
                name: 'Overnight Shipping',
                time: 'Next Business Day',
                price: '49',
                cents: '.99',
                features: ['VIP premium priority', 'Signature confirmation', '24/7 VIP support access'],
              },
            ].map((plan, i) => (
              <div key={plan.tier} className={`rate-card ${plan.featured ? 'featured' : ''} ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                {plan.featured && <div className="rate-popular">Most Popular</div>}
                <div className="rate-tier">
                  <span className="rate-tier-dot" />
                  {plan.tier}
                </div>
                <div className="rate-name">{plan.name}</div>
                <div className="rate-time">{plan.time}</div>
                <div className="rate-divider" />
                <div className="rate-price-row">
                  <span className="rate-quote">Contact for Quote</span>
                </div>
                <div className="rate-from">Custom pricing available</div>
                <ul className="rate-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="rate-check">âœ“</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button type="button" className="rate-btn" onClick={() => onNavigate?.('contact')}>
                  Ship Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-preview-section">
  <div className="container about-preview-grid">
    <div className="about-preview-image slide-in-left">
      <img src={aboutPersonImage} alt="L'AINE HR professional at desk" />
    </div>
    <div className="about-preview-content slide-in-right">
      <h2 className="about-preview-title">Need reliable shipping solution for your business?</h2>
      <p className="about-preview-text">
        Business today need logistics partner they can rely on to keep operations moving smoothly and 
        efficiently. At Golden Stone Logistics Limited Company, we provide reliable shipping solution designed
        to supoort business of all size with fast secure and dependable delivery services. W understand that 
        timely transportation plays a critical role in business success, which is why we are committed to ensuring
        every shippment arrives safely and on schedule.
      </p>
      <p className="about-preview-text">
        By choosing Golden Stone Logistics Limited Company, business gain a trusted logistic partner dedicated 
        to simplifying transportation challenges while maintaining the highest standards of safety, communication,
        and customer satisfaction.
         </p>
      <button
        className="about-preview-btn"
        type="button"
        onClick={() => onNavigate?.('about')}
      >
        About Us
      </button>
    </div>
  </div>
</section>

      <section className="services-section">
        <div className="container services-grid">
          <div className="svc-image-wrap slide-in-left">
            <div className="svc-gold-bar" />
            <div className="svc-img-main">
              <img src={serviceImage} alt="Logistics warehouse" />
            </div>
            <div className="svc-years-badge">
              <div className="svc-years-num">15+</div>
              <div className="svc-years-label">Years<br />Expertise</div>
            </div>
            <div className="svc-stat-chip">
              <div className="svc-stat-num">98%</div>
              <div className="svc-stat-label">On-time<br />Delivery</div>
            </div>
            <div className="svc-img-accent">
              <img src={deliveryImage} alt="Courier delivery" />
            </div>
            <div className="svc-img-tag">âœ¦ Excellence in Logistics</div>
          </div>

          <div className="svc-content slide-in-right">
            <div className="svc-eyebrow">
              <div className="svc-eyebrow-line" />
              <div className="svc-eyebrow-text">What we offer</div>
            </div>
            <h2 className="svc-title">
              Our <em>Services</em>
            </h2>
            <p className="svc-desc">
              We provide an extensive range of postal, courier, and financial solutions â€” precision-engineered for individuals and enterprises that demand reliability.
            </p>

            <div className="svc-list">
              {[
                { icon: 'ðŸ“©', name: 'Custom Clearance', sub: 'Ensuring compliance with government regulations' },
                { icon: 'ðŸšš', name: 'Freight Transportation', sub: 'Sea freight and Air freight' },
                { icon: 'ðŸ’³', name: 'Documentation Services', sub: 'Shipping and clearance paperwork' },
                { icon: 'ðŸ›’', name: 'eCommerce / eServices', sub: 'Fulfillment, last-mile, and returns management' },
              ].map((service) => (
                <button className="svc-item" type="button" onClick={() => onNavigate?.('services')} key={service.name}>
                  <div className="svc-item-icon">{service.icon}</div>
                  <div className="svc-item-body">
                    <span className="svc-item-name">{service.name}</span>
                    <span className="svc-item-sub">{service.sub}</span>
                  </div>
                  <span className="svc-item-arrow">â†’</span>
                </button>
              ))}
            </div>

            <button className="svc-cta" type="button" onClick={() => onNavigate?.('services')}>
              Explore all services <span className="svc-cta-arrow">â†’</span>
            </button>
          </div>
        </div>
      </section>

<section className="why-choose">
  <div className="container">
    <div className="why-header">
      <h2>Why <em>Golden Stone</em></h2>
      <p className="why-subtitle">
        Golden Stone Logistics Limited Company is committed to providing reliable, efficient and professional
        logistics services that meet the growing demands of businesses and individuals. The company stands
        out through its dedication to customer satisfaction, timely delivery, and safe handling of goods.
        With a strong focus on operational excellence, Golden Stone Logistics ensures that every shipment
        is managed with care, precision and attention to detail from start to finish.
      </p>
    </div>
    <div className="reason-grid">
      {services.map((service) => (
        <div key={service.title} className={`reason-card ${service.highlight ? 'card-highlight' : ''}`}>
          <div className="reason-icon">
            <i className={`ti ${service.icon}`} aria-hidden="true"></i>
          </div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      <section className="cta-modern">
        <div className="cta-wrapper">
          <div className="cta-left">
            <div className="cta-badge">ðŸš€ START SHIPPING</div>
            <h3>Ship Smarter with Golden Stone Logistics Limited Company</h3>
            <p>Fast. Secure. Reliable logistics built for businesses and individuals.</p>
          </div>

          <div className="cta-right">
            <h2>Ready to Ship With Golden Stone Logistics Limited Company?</h2>
            <div className="cta-underline" />
            <p>
              Join thousands of businesses and individuals who trust us with their shipments nationwide and globally.
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
          <div className="location-text slide-in-left">
            <p className="eyebrow">Location</p>
            <h2>Find a Service Hub</h2>
            <div className="underline" />
            <p>
              Easily locate your nearest service hub, access essential contact information, and get step-by-step directions for a seamless experience. Whether you're shipping, tracking, or making inquiries, we help you find the best route.
            </p>
            <a className="btn-primary" href="https://maps.apple/p/yBcdbtggvruhq6" target="_blank" rel="noopener noreferrer">
              Find Location â†’
            </a>
          </div>
          <div className="location-image slide-in-right">
            <img src={mapImage} alt="Map location" />
          </div>
        </div>
      </section>
    </div>
  )
}

