import './Services.css'
import expressImage from '../images/express.jpg'
import { FaTruck, FaPlane, FaShip, FaWarehouse, FaBoxes, FaBuilding } from 'react-icons/fa'

const serviceItems = [
  {
    title: 'Express Freight',
    description: 'Fast, dedicated transit for high-priority shipments with real-time tracking and guaranteed delivery windows.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    accentClass: 'blue',
  },
  {
    title: 'Customs Clearance',
    description: 'Preparing import/export document. Paying duties and taxes. Ensuring compiliance wiith government regulations ',
    icon: FaPlane,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    accentClass: 'orange',
  },
  {
    title: 'Sea Freight',
    description: 'Global ocean shipping with full end-to-end coordination — FCL, LCL, and breakbulk handled with precision.',
    icon: FaShip,
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80',
    accentClass: 'blue',
  },
  {
    title: 'Warehousing',
    description: 'Secure storage with temperature control, 24/7 surveillance, real-time inventory tracking, and express retrieval.',
    icon: FaWarehouse,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    accentClass: 'orange',
  },
  {
    title: 'Bulk Transportation',
    description: 'Large-scale cargo movement with specialised fleet planning, route optimisation, and oversized load permits.',
    icon: FaBoxes,
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    accentClass: 'blue',
  },
  {
    title: 'Documentation Services',
    description: "Bill of loading, Commercial invoice, Packing list, and Shipping and clearance paperwork.",
    icon: FaBuilding,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    accentClass: 'orange',
  },
]

const highlights = [
  { value: '98%', label: 'On-time delivery rate' },
  { value: '2+', label: 'Countries covered' },
  { value: '24/7', label: 'Live support' },
  { value: '50M+', label: 'Packages delivered' },
]

export default function Services() {
  return (
    <div className="sv-page">

      {/* ── HERO ── */}
      <section className="sv-hero">
        <div className="sv-hero-bg" />
        <div className="sv-hero-overlay" />
        <div className="container sv-hero-content slide-in-right">
          <span className="sv-eyebrow">Our Services</span>
          <h1>Logistics built<br />for <em>elite performance.</em></h1>
          <p>Every service crafted for the reliability, security, and premium experience expected by modern enterprises.</p>
        </div>
        <div className="sv-highlights">
          {highlights.map(h => (
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
            <h2>Six pillars of<br /><em>world-class logistics.</em></h2>
          </div>
          <div className="sv-grid">
            {serviceItems.map((svc, i) => {
              const Icon = svc.icon
              return (
                <div key={svc.title} className={`sv-card sv-card--${svc.accentClass} ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
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
                    <a href="#" className={`sv-link sv-link--${svc.accentClass}`}>
                      Learn more →
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURE STRIP ── */}
      <section className="sv-strip">
        <div className="container sv-strip-inner">
          <div className="sv-strip-text slide-in-left">
            <span className="sv-pill sv-pill--light">Why Golden Stone Logistics Limited Company</span>
            <h2>Every shipment.<br /><em>Every border.</em></h2>
            <p>
              From a single parcel to enterprise freight, we combine regional expertise with
              global infrastructure to deliver on time, every time.
            </p>
            <a href="/contact" className="sv-cta">Get a Quote →</a>
          </div>
          <div className="sv-strip-img slide-in-right">
            <img
              src={expressImage}
              alt="Logistics operations"
            />
            <div className="sv-strip-badge">
              <span>🏆</span>
              <p>Top Logistics Provider<br /><strong>West Africa 2026</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sv-process">
        <div className="container">
          <div className="sv-process-header slide-in-left">
            <span className="sv-pill">How It Works</span>
            <h2>Simple. Transparent.<br /><em>Reliable.</em></h2>
          </div>
          <div className="sv-process-steps">
            {['Book your shipment online or by phone', 'We collect and label your cargo', 'Real-time GPS tracking in transit', 'Confirmed delivery with instant notification'].map((step, i) => (
              <div key={i} className={`sv-step ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                <div className="sv-step-num">0{i + 1}</div>
                <div className="sv-step-connector" />
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}