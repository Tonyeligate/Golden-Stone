import './Services.css';
import safeImage from '../images/safe.jpg';
import officeImage from '../images/office.jpeg';
import handlingImage from '../images/handling.jpeg';
import { FaTruck, FaPlane, FaShip, FaWarehouse, FaBoxes, FaBuilding } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const serviceItems = [
  {
    title: 'Express Freight',
    description:
      'Fast, dedicated transit for high-priority shipments with real-time tracking and guaranteed delivery windows.',
    icon: FaTruck,
    image: safeImage,
    accentClass: 'blue',
  },
  {
    title: 'Customs Clearance',
    description:
      'Preparing import/export documents, handling duties and taxes, and ensuring compliance with government regulations.',
    icon: FaPlane,
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    accentClass: 'orange',
  },
  {
    title: 'Sea Freight',
    description:
      'Global ocean shipping with full end-to-end coordination — FCL, LCL, and breakbulk handled with precision.',
    icon: FaShip,
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80',
    accentClass: 'blue',
  },
  {
    title: 'Warehousing',
    description:
      'Secure storage with temperature control, 24/7 surveillance, real-time inventory tracking, and express retrieval.',
    icon: FaWarehouse,
    image: handlingImage,
    accentClass: 'orange',
  },
  {
    title: 'Bulk Transportation',
    description:
      'Large-scale cargo movement with specialised fleet planning, route optimisation, and oversized load permits.',
    icon: FaBoxes,
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    accentClass: 'blue',
  },
  {
    title: 'Documentation Services',
    description:
      'Bill of lading, commercial invoice, packing list, and shipping clearance paperwork.',
    icon: FaBuilding,
    image: officeImage,
    accentClass: 'orange',
  },
];

const highlights = [
  { value: '98%', label: 'On-time delivery rate' },
  { value: '2+', label: 'Countries covered' },
  { value: '24/7', label: 'Live support' },
  { value: '50M+', label: 'Packages delivered' },
];

export default function Services({
  onNavigate,
}: {
  onNavigate?: (page: 'home' | 'services' | 'about' | 'coverage' | 'contact' | 'news') => void;
}) {
  const stripRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
      />
      <div className="sv-page">
        {/* ── HERO ── */}
        <section className="sv-hero">
          <div className="sv-hero-bg" />
          <div className="sv-hero-overlay" />
          <div className="container sv-hero-content slide-in-right">
            <span className="sv-eyebrow">Our Services</span>
            <h1>
              Logistics built
              <br />
              for <em>elite performance.</em>
            </h1>
            <p>
              Every service crafted for the reliability, security, and premium experience expected
              by modern enterprises.
            </p>
          </div>
          <div className="sv-highlights">
            {highlights.map((h) => (
              <div key={h.label} className="sv-highlight">
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="sv-grid-section">
          <div className="container">
            <div className="sv-grid-header">
              <span className="sv-pill">What We Offer</span>
              <h2>
                Six pillars of
                <br />
                <em>world-class logistics.</em>
              </h2>
            </div>
            <div className="sv-grid">
              {serviceItems.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.title}
                    className={`sv-card sv-card--${svc.accentClass} ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                  >
                    <div className="sv-card-img">
                      <img src={svc.image} alt={svc.title} />
                      <div className="sv-card-num">0{i + 1}</div>
                    </div>
                    <div className="sv-card-body">
                      <div className={`sv-icon sv-icon--${svc.accentClass}`}>
                        <Icon size={20} />
                      </div>
                      <h3>{svc.title}</h3>
                      <p>{svc.description}</p>
                      <button
                        type="button"
                        className={`sv-link sv-link--${svc.accentClass}`}
                        onClick={() => onNavigate?.('services')}
                      >
                        Learn more →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FEATURE STRIP ── */}
        <section className="sv-strip" ref={stripRef}>
          <div className="sv-strip-bg-overlay" />
          <img src={handlingImage} alt="" className="sv-strip-bg-img" aria-hidden="true" />
          <div className="sv-strip-content">
            <h2 className="sv-strip-headline">
              Every Shipment.
              <br />
              Every Border.
            </h2>
            <p className="sv-strip-sub">
              From a single parcel to enterprise freight, we combine regional expertise with global
              infrastructure to deliver on time, every time.
            </p>
            <div className="sv-strip-swoosh" aria-hidden="true">
              <svg
                viewBox="0 0 600 60"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 40 Q 300 0 600 40"
                  stroke="#e07b2e"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <button type="button" className="sv-cta" onClick={() => onNavigate?.('contact')}>
              Get a Quote →
            </button>
            <p className="sv-strip-domain">GOLDENSTONELOGISTICS.COM</p>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="sv-process">
          <div className="container">
            <div className="sv-process-header slide-in-left">
              <span className="sv-pill">How It Works</span>
              <h2>
                Simple. Transparent.
                <br />
                <em>Reliable.</em>
              </h2>
            </div>
            <div className="sv-process-steps">
              {[
                {
                  icon: 'ti-calendar-plus',
                  title: 'Book your shipment',
                  desc: 'Schedule online or by phone in minutes',
                },
                {
                  icon: 'ti-package',
                  title: 'Collection & labelling',
                  desc: 'We collect and label your cargo securely',
                },
                {
                  icon: 'ti-map-pin',
                  title: 'Live GPS tracking',
                  desc: 'Real-time visibility throughout transit',
                },
                {
                  icon: 'ti-circle-check',
                  title: 'Confirmed delivery',
                  desc: 'Instant notification on successful delivery',
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`sv-step ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                >
                  <div className="sv-step-icon-wrap">
                    <i className={`ti ${step.icon}`} aria-hidden="true" />
                  </div>
                  <p className="sv-step-num">0{i + 1}</p>
                  <p className="sv-step-title">{step.title}</p>
                  <p className="sv-step-label">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
