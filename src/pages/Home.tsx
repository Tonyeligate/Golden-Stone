import { useEffect, useRef, useState } from 'react';
import './Home.css';
import deliveryImage from '../images/less.jpeg';
import serviceImage from '../images/front.jpeg';
import mapImage from '../images/map.jpg';
import heroImg1 from '../images/img1.png'; // woman with laptop standing
import heroImg2 from '../images/img2.png'; // woman holding packages
import heroImg3 from '../images/img3.png'; // woman at desk with screen
import heroImg4 from '../images/img4.png'; // woman with laptop alt
import aboutPersonImage from '../images/first.png'; // replace with your actual image filename
import aboutPersonImage2 from '../images/hr.jpeg'; // replace with your actual image filename
import {
  Rocket as RocketIcon,
  Zap as ZapIcon,
  ShieldCheck as ShieldCheckIcon,
  MapPin as MapPinIcon,
  Store as StoreIcon,
  Send as SendIcon,
  Lock as LockIcon,
} from 'lucide-react';
import { Clock as ClockIcon, Phone as PhoneIcon, Navigation as NavigationIcon, ExternalLink as ExternalLinkIcon } from 'lucide-react';

type PageName = 'home' | 'services' | 'about' | 'coverage' | 'contact' | 'news';

type HeroSlide = {
  eyebrow: string;
  headline: string[];
  body: string;
  primaryCta: { label: string; nav: PageName };
  secondaryCta: { label: string; nav: PageName };
  personImage: string;
  personAlt: string;
};

type ServiceItem = {
  icon: string;
  title: string;
  highlight: boolean;
  desc: string;
};

const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Luxury Logistics',
    headline: ['Premium Logistics.', 'Delivered with', 'Precision', 'World Wide.'],
    body: 'Golden Stone Logistics moves your cargo with unmatched care, speed, and elegance. Built for brands that demand confidence.',
    primaryCta: { label: 'Get a Quote', nav: 'contact' },
    secondaryCta: { label: 'Our Services', nav: 'services' },
    personImage: heroImg1,
    personAlt: 'Logistics professional with laptop',
  },
  {
    eyebrow: 'Global Reach',
    headline: ['Connecting Worlds.', 'Cargo Without', 'Borders.', 'Company You Can Trust'],
    body: 'From local deliveries to international freight, our network spans every corner of the globe with flawless coordination.',
    primaryCta: { label: 'Explore Routes', nav: 'services' },
    secondaryCta: { label: 'About Us', nav: 'about' },
    personImage: heroImg2,
    personAlt: 'Logistics professional carrying packages',
  },
  {
    eyebrow: 'Trusted Partners',
    headline: ['Your Cargo.', 'Our Commitment.', 'Every Time.'],
    body: 'We treat every shipment as if it were our own — with the precision of professionals and the care of true partners.',
    primaryCta: { label: 'Partner With Us', nav: 'contact' },
    secondaryCta: { label: 'Case Studies', nav: 'services' },
    personImage: heroImg3,
    personAlt: 'Logistics manager at workstation',
  },
  {
    eyebrow: 'Elite Service',
    headline: ['Speed Meets', 'Elegance in', 'Every Delivery.'],
    body: 'Our white-glove logistics service ensures that premium goods arrive in perfect condition — on time, every time.',
    primaryCta: { label: 'Get Started', nav: 'contact' },
    secondaryCta: { label: 'Our Fleet', nav: 'services' },
    personImage: heroImg4,
    personAlt: 'Logistics professional with laptop',
  },
];

function HeroSection({ onNavigate }: { onNavigate?: (page: PageName) => void }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 450);
  };

  const next = () => goTo((current + 1) % heroSlides.length);
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    intervalRef.current = window.setInterval(next, 6000);
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [current]);

  const slide = heroSlides[current];

  return (
    <section className="hero-panel">
      {/* Background */}
      <div className="hero-texture-bg">
        <div className="hero-noise" />
        <div className="hero-overlay" />
      </div>

      {/* Outer arrows */}
      <button className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Previous slide">
        &#8250;
      </button>
      <button className="hero-arrow hero-arrow-next" onClick={next} aria-label="Next slide">
        &#8250;
      </button>

      <div className="container hero-grid">
        <div className={`hero-copy ${animating ? 'copy-exit' : 'copy-enter'}`}>
          <h1 className="hero-headline">
            {slide.headline.map((line, i) => (
              <span key={`${current}-${i}`} className="headline-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-text">
            <mark className="hero-highlight">Level up</mark> {slide.body}
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={() => onNavigate?.(slide.primaryCta.nav)}
            >
              {slide.primaryCta.label}
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className={`person-frame ${animating ? 'img-exit' : 'img-enter'}`}>
            <img
              key={current}
              src={slide.personImage}
              alt={slide.personAlt}
              className="person-img"
            />
          </div>
        </div>
      </div>

      {/* Dots */}
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
    </section>
  );
}

export default function Home({ onNavigate }: { onNavigate?: (page: PageName) => void }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll('.slide-in-left, .slide-in-right')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services: ServiceItem[] = [
    {
      icon: 'ti-truck-delivery',
      title: 'Fast Delivery',
      highlight: false,
      desc: 'We are committed to moving goods quickly, safely and efficiently while ensuring every shipment arrives on time — delivery solutions businesses and individuals can trust.',
    },
    {
      icon: 'ti-lock-check',
      title: 'Secure Handling',
      highlight: true,
      desc: 'We implement rigorous safety protocols, advanced tracking systems, and secure packaging to ensure your goods are protected throughout the entire shipping process.',
    },
    {
      icon: 'ti-map-2',
      title: 'Nationwide Coverage',
      highlight: false,
      desc: 'Our extensive network of service hubs across the country ensures we can deliver your shipments quickly and efficiently, no matter where you are located.',
    },
    {
      icon: 'ti-headset',
      title: '24/7 Support',
      highlight: true,
      desc: 'Our dedicated support team is available around the clock to assist you with any questions or concerns, ensuring you always have expert help when you need it.',
    },
    {
      icon: 'ti-refresh',
      title: 'Consistent & Dependable',
      highlight: false,
      desc: 'Our commitment to excellence ensures that every shipment is handled with care and delivered on time, every time — meeting the highest standards of quality.',
    },
    {
      icon: 'ti-bulb',
      title: 'Strategic Solutions',
      highlight: false,
      desc: 'Our experts work closely with you to develop customized logistics strategies that optimize your supply chain and drive real business success.',
    },
  ];

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
                time: '5 – 7 Business Days',
                price: '15',
                cents: '.99',
                features: [
                  'Domestic & International',
                  'Package weight up to 50 kg',
                  'Basic insurance included',
                ],
              },
              {
                tier: 'Express',
                name: 'Express Shipping',
                time: '2 – 3 Business Days',
                price: '29',
                cents: '.99',
                features: [
                  'Priority handling guaranteed',
                  'Real-time GPS tracking',
                  'Full insurance coverage',
                ],
                featured: true,
              },
              {
                tier: 'Premium',
                name: 'Overnight Shipping',
                time: 'Next Business Day',
                price: '49',
                cents: '.99',
                features: [
                  'VIP premium priority',
                  'Signature confirmation',
                  '24/7 VIP support access',
                ],
              },
            ].map((plan, i) => (
              <div
                key={plan.tier}
                className={`rate-card ${plan.featured ? 'featured' : ''} ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              >
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
                      <span className="rate-check">✓</span>
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
            <h2 className="about-preview-title">
              Need reliable shipping solution for your business?
            </h2>
            <p className="about-preview-text">
              Business today need logistics partner they can rely on to keep operations moving
              smoothly and efficiently. At Golden Stone Logistics Limited Company, we provide
              reliable shipping solution designed to supoort business of all size with fast secure
              and dependable delivery services. W understand that timely transportation plays a
              critical role in business success, which is why we are committed to ensuring every
              shippment arrives safely and on schedule.
            </p>
            <p className="about-preview-text">
              By choosing Golden Stone Logistics Limited Company, business gain a trusted logistic
              partner dedicated to simplifying transportation challenges while maintaining the
              highest standards of safety, communication, and customer satisfaction.
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
              <div className="svc-years-label">
                Years
                <br />
                Expertise
              </div>
            </div>
            <div className="svc-stat-chip">
              <div className="svc-stat-num">98%</div>
              <div className="svc-stat-label">
                On-time
                <br />
                Delivery
              </div>
            </div>
            <div className="svc-img-accent">
              <img src={deliveryImage} alt="Courier delivery" />
            </div>
            <div className="svc-img-tag">• Excellence in Logistics</div>
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
              We provide an extensive range of postal, courier, and financial solutions —
              precision-engineered for individuals and enterprises that demand reliability.
            </p>

            <div className="svc-list">
              {[
                {
                  icon: '📩',
                  name: 'Custom Clearance',
                  sub: 'Ensuring compliance with government regulations',
                },
                { icon: '🚚', name: 'Freight Transportation', sub: 'Sea freight and Air freight' },
                {
                  icon: '📄',
                  name: 'Documentation Services',
                  sub: 'Shipping and clearance paperwork',
                },
                {
                  icon: '🛒',
                  name: 'eCommerce / eServices',
                  sub: 'Fulfillment, last-mile, and returns management',
                },
              ].map((service) => (
                <button
                  className="svc-item"
                  type="button"
                  onClick={() => onNavigate?.('services')}
                  key={service.name}
                >
                  <div className="svc-item-icon">{service.icon}</div>
                  <div className="svc-item-body">
                    <span className="svc-item-name">{service.name}</span>
                    <span className="svc-item-sub">{service.sub}</span>
                  </div>
                  <span className="svc-item-arrow">→</span>
                </button>
              ))}
            </div>

            <button className="svc-cta" type="button" onClick={() => onNavigate?.('services')}>
              Explore all services <span className="svc-cta-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <div className="why-header">
            <h2>
              Why <em>Golden Stone</em>
            </h2>
            <p className="why-subtitle">
              Golden Stone Logistics Limited Company is committed to providing reliable, efficient
              and professional logistics services that meet the growing demands of businesses and
              individuals. The company stands out through its dedication to customer satisfaction,
              timely delivery, and safe handling of goods. With a strong focus on operational
              excellence, Golden Stone Logistics ensures that every shipment is managed with care,
              precision and attention to detail from start to finish.
            </p>
          </div>
          <div className="reason-grid">
            {services.map((service) => (
              <div
                key={service.title}
                className={`reason-card ${service.highlight ? 'card-highlight' : ''}`}
              >
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

<section className="biz-solutions-section">
  <div className="container biz-solutions-grid">
    <div className="biz-solutions-image slide-in-left">
      <img src={aboutPersonImage2} alt="Business professional at desk" />
    </div>
    <div className="biz-solutions-content slide-in-right">
      <span className="biz-solutions-eyebrow">The HR</span>
      <h2 className="biz-solutions-title">Business Solutions</h2>
      <div className="biz-solutions-divider" />
      <p className="biz-solutions-text">
        Our range of services to help your business includes reliable dedicated delivery to ensure
        your products reach their destination on time, customized Contract EMS for tailored
        emergency management solutions that meet your unique needs, and fast-tracked Priority
        Services designed to keep your critical operations running smoothly. We're committed to
        supporting your business with efficient and dependable solutions.
      </p>
      <button
        className="biz-solutions-btn"
        type="button"
        onClick={() => onNavigate?.('services')}
      >
        Learn More <span className="biz-solutions-arrow">→</span>
      </button>
    </div>
  </div>
</section>

      <section className="cta-modern">
        <div className="cta-wrapper">
          <div className="cta-left">
            <div className="cta-badge">
              <RocketIcon size={14} />
              Start shipping
            </div>
            <h3>Ship Smarter with Golden Stone Logistics</h3>
            <p>
              Fast. Secure. Reliable logistics built for businesses and individuals — nationwide and
              globally.
            </p>
            <div className="cta-features">
              <div className="feat-item">
                <div className="feat-icon">
                  <ZapIcon size={15} />
                </div>
                Express &amp; standard delivery options
              </div>
              <div className="feat-item">
                <div className="feat-icon">
                  <ShieldCheckIcon size={15} />
                </div>
                Fully insured shipments
              </div>
              <div className="feat-item">
                <div className="feat-icon">
                  <MapPinIcon size={15} />
                </div>
                Real-time tracking worldwide
              </div>
            </div>
          </div>

          <div className="cta-right">
            <span className="cta-eyebrow">
              <StoreIcon size={13} />
              Trusted logistics partner
            </span>
            <h2>Ready to Ship with Golden Stone?</h2>
            <div className="cta-accent" />
            <p>
              Join thousands of businesses and individuals who trust us with their shipments
              nationwide and globally. Premium logistics, zero compromises.
            </p>
            <button className="cta-btn" type="button" onClick={() => onNavigate?.('contact')}>
              <SendIcon size={16} />
              Get Started Today
            </button>
            <div className="cta-trust">
              <div className="cta-trust-dot" />
              <LockIcon size={13} />
              No hidden fees · Fast onboarding · Cancel anytime
            </div>
          </div>
        </div>
      </section>

     <section className="location-section">
  <div className="location-container">

    <div className="location-text slide-in-left">
      <span className="loc-eyebrow">
        <MapPinIcon size={13} />
        Our Location
      </span>
      <h2>Find Our <span className="loc-highlight">Service Hub</span></h2>
      <div className="loc-accent" />
      <p>
        Locate our nearest service hub, access essential contact information,
        and get step-by-step directions for a seamless experience. Whether
        you're shipping, tracking, or making inquiries — we're easy to find.
      </p>

      <div className="loc-details">
        <div className="loc-detail-item">
          <div className="loc-detail-icon"><MapPinIcon size={15} /></div>
          <div>
            <span className="loc-detail-label">Address</span>
            <span className="loc-detail-value">5th Avenue, Tema Community 11, Ghana</span>
          </div>
        </div>
        <div className="loc-detail-item">
          <div className="loc-detail-icon"><ClockIcon size={15} /></div>
          <div>
            <span className="loc-detail-label">Working Hours</span>
            <span className="loc-detail-value">Mon – Fri, 8:40am – 5:00pm<p>Sat, 8:40am – 2:00pm</p></span>
          </div>
        </div>
        <div className="loc-detail-item">
          <div className="loc-detail-icon"><PhoneIcon size={15} /></div>
          <div>
            <span className="loc-detail-label">Phone</span>
            <span className="loc-detail-value">+233 536 381 700 / +233 502 609 222 </span>
          </div>
        </div>
      </div>

      
      <a
        className="loc-btn"
        href="https://www.google.com/maps/dir/?api=1&destination=5th+Avenue+Tema+Community+11+Tema+Ghana"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NavigationIcon size={15} />
        Get Directions
      </a>
    </div>

    <div className="location-map-card slide-in-right">
      <div className="map-header">
        <div className="map-header-dot" />
        <span>Golden Stone Logistics — 5th Avenue, Tema Community 11, Ghana</span>
        <a
          href="https://www.google.com/maps/search/?api=1&query=5th+Avenue+Tema+Community+11+Tema+Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="map-open-link"
        >
          <ExternalLinkIcon size={13} />
          Open in Maps
        </a>
      </div>
      <div className="map-frame-wrap">
        <iframe
          title="Golden Stone Logistics Location"
          src="https://www.google.com/maps?q=5th+Avenue+Tema+Community+11+Tema+Ghana&output=embed"
          width="100%"
          height="100%"
          className="map-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

  </div>
</section>
  </div>
  );
}
