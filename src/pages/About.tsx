import { useState, useEffect } from 'react';
import headerLogo from '../images/header.png';
import './About.css';

const milestones = [
  {
    icon: 'ti-building-skyscraper',
    period: 'Founded',
    label: 'Local roots, national reach',
    description: 'Founded with local operations across 5 Ghanaian cities.',
    badge: '5 cities',
  },
  {
    icon: 'ti-world',
    period: 'International',
    label: 'Going global',
    description: 'Expanded internationally, serving 50+ countries worldwide.',
    badge: '50+ countries',
  },
  {
    icon: 'ti-device-mobile',
    period: 'Technology',
    label: 'Tracking goes live',
    description: 'Launched real-time GPS tracking system and mobile application.',
    badge: 'GPS + App',
  },
  {
    icon: 'ti-chart-bar',
    period: 'Growth',
    label: 'A million shipments monthly',
    description: 'Reached 1 million monthly shipments milestone.',
    badge: '1M / month',
  },
  {
    icon: 'ti-globe',
    period: 'Expansion',
    label: 'Truly worldwide',
    description: 'Expanded to 190+ countries and delivered 50M+ packages.',
    badge: '190+ countries · 50M packages',
  },
  {
    icon: 'ti-award',
    period: 'Recognition',
    label: 'Industry leader',
    description: 'Recognized as a leading provider of sustainable shipping solutions.',
    badge: 'Award-winning',
  },
];

const testimonials = [
  {
    name: 'Miss Nana Akua Gyimah Dankwah',
    role: 'HR Manager',
    quote:
      'Golden Stone Logistics Limited Company has transformed how deliveries are handled. Fast, reliable and their tracking system is excellent.',
  },
  {
    name: 'Ama Owusu',
    role: 'E-commerce Vendor',
    quote:
      'Rely on Golden Stone Logistics Limited Company for all YOUR business shipments. We are quick, efficient and have never let me down.',
  },
  {
    name: 'Michael Tetteh',
    role: 'Customer Support',
    quote:
      'Outstanding service! My packages always arrive on time and the support team is always ready to help.',
  },
  {
    name: 'Abena Asante',
    role: 'Online Retailer',
    quote:
      'As an online seller, Golden Stone Logistics Limited Company has been invaluable in reaching my customers nationwide. Very dependable.',
  },
  {
    name: 'James Boateng',
    role: 'Logistics Manager',
    quote:
      'The real-time GPS tracking gives me peace of mind. Golden Stone Logistics Limited Company is the best in the business.',
  },
  {
    name: 'Sandra Darko',
    role: 'Corporate Client',
    quote:
      'We switched our entire company logistics to Golden Stone Logistics Limited Company and have not looked back. Professional and punctual.',
  },
];

const stats = [
  { value: '5M+', label: 'Customers Worldwide' },
  { value: '2+', label: 'Countries Served' },
  { value: '50M+', label: 'Packages Delivered' },
  { value: '98%', label: 'On-Time Delivery' },
];

const awards = [
  {
    title: 'Certificate of Incorporation 2023',
    issuer: 'Registrar of Companies',
  },
  {
    title: 'VAT Registration Certificate 2024',
    issuer: 'Ghana Revenue Authority (GRA)',
  },
  {
    title: 'Certificate of Membership',
    issuer: 'Association of Ghana Industries 2025',
  },
  {
    title: 'Most Reliable and Fastest Courier Company in West Africa 2019',
    issuer: 'Pillars Modern Ghana Awards',
  },
  {
    title: 'Outstanding Contribution to the Shipping Industry 2019',
    issuer: 'Ghana Shippers Awards',
  },
];

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % total), 3500);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);
  const visible = [0, 1, 2].map((offset) => testimonials[(current + offset) % total]);

  return (
    <section className="ab-testimonials">
      <div className="container">
        <div className="ab-section-tag">
          <span className="ab-pill">Testimonials</span>
          <h2>
            Voices of our
            <br />
            <em>customers.</em>
          </h2>
        </div>

        <div className="ab-tslider">
          <button
            className="ab-slider-btn"
            onClick={prev}
            title="Previous testimonial"
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>
          <div className="ab-tgrid">
            {visible.map((t, i) => (
              <div key={i} className="ab-tcard">
                <div className="ab-tcard-top">
                  <div className="ab-tavatar">{t.name.charAt(0)}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                  <div className="ab-tquote-icon">❝</div>
                </div>
                <p>"{t.quote}"</p>
                <div className="ab-tstars">★★★★★</div>
              </div>
            ))}
          </div>
          <button
            className="ab-slider-btn"
            onClick={next}
            title="Next testimonial"
            aria-label="Next testimonial"
          >
            &#8250;
          </button>
        </div>

        <div className="ab-dots">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              title={`Show testimonial ${i + 1}`}
              className={`ab-dot ${i === current ? 'ab-dot--on' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <p className="ab-trust">Trusted by thousands across the globe</p>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="about-page">
      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-bg" />
        <div className="ab-hero-overlay" />
        <div className="container ab-hero-content slide-in-right">
          <span className="ab-eyebrow">About Golden Stone</span>
          <h1>
            Precision.
            <br />
            Reach.
            <br />
            <em>Excellence.</em>
          </h1>
          <p>
            Golden Stone Logistics combines regional expertise and global partnerships to move cargo
            reliably across borders and coastlines — with elegance.
          </p>
        </div>
        {/* Floating stats bar */}
        <div className="ab-stats-bar">
          {stats.map((s) => (
            <div key={s.label} className="ab-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="ab-story">
        <div className="container ab-story-grid">
          <div className="ab-story-left slide-in-left">
            <span className="ab-pill">Our Story</span>
            <h2>
              Year Of Estalishment
              <br />
              <em>since October 2023.</em>
            </h2>
            <p>
              Golden Stone Logistics Limited Company was founded with a single mission: to
              revolutionize freight acrossfrom China to Ghana and beyond. What began as a lean
              courier operation in Accra has grown into an international logistics powerhouse
              serving over 5 million customers worldwide.
            </p>
            <p>
              We believe logistics shouldn't be complicated. Our technology-driven approach combines
              real-time tracking, transparent pricing, and exceptional service to make shipping easy
              for everyone.
            </p>
            <div className="ab-pull-quote">
              <div className="ab-pq-line" />
              <p>"Shipping that feels as good as arrival."</p>
            </div>
          </div>

          <div className="ab-story-right slide-in-right">
            <div className="ab-img-stack">
              <img src={headerLogo} alt="Golden Stone header logo" className="ab-img-main" />
              <div className="ab-img-badge">
                <strong>Est.</strong>
                <span>2023</span>
              </div>
            </div>

            <div className="ab-info-cards">
              <div className="ab-info-card ab-info-blue">
                <p>
                  Our advanced infrastructure scales efficiently while maintaining elite service
                  quality across every route.
                </p>
              </div>
              <div className="ab-info-card ab-info-orange">
                <p>
                  Track shipments, manage logistics, and get real-time updates — from anywhere in
                  the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IDENTITY ── */}
      <section className="ab-identity">
        <div className="container">
          <div className="ab-identity-header slide-in-left">
            <span className="ab-pill ab-pill--light">Who We Are</span>
            <h2>Core Identity</h2>
            <p>The principles driving our commitment to reliable logistics across the globe.</p>
          </div>
          <div className="ab-identity-grid">
            <div className="ab-id-card ab-id-mission slide-in-left">
              <div className="ab-id-icon">
                <i className="ti ti-crosshair" aria-hidden="true"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide fast, reliable, and affordable shipping solutions that connect people and
                businesses worldwide.
              </p>
            </div>

            <div className="ab-id-card ab-id-vision slide-in-right">
              <div className="ab-id-icon">
                <i className="ti ti-telescope" aria-hidden="true"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the world's most trusted logistics company, setting industry standards for
                innovation and excellence.
              </p>
            </div>

            <div className="ab-id-card ab-id-values slide-in-left">
              <div className="ab-id-icon">
                <i className="ti ti-shield-check" aria-hidden="true"></i>
              </div>
              <h3>Core Values</h3>
              <div className="ab-value-tags">
                <span>Integrity</span>
                <span>Teamwork</span>
                <span>Innovation</span>
                <span>Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS & RECOGNITION ── */}
      <section className="ab-awards">
        <div className="container">
          <div className="ab-awards-header slide-in-left">
            <div className="ab-awards-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <h2 className="ab-awards-title">Certifications &amp; Compliance</h2>
            <p className="ab-awards-desc">
              Built on trust, compliance, and professionalism ,our certifications reflect our
              dedication to delivering reliable, efficient, and world-class logistics solutions. As
              a legally recognized and fully compliant company, we uphold the highest standards of
              operational excellence, transparency, and customer satisfaction in every service we
              provide.
            </p>
          </div>

          <div className="ab-awards-grid">
            {awards.map((award) => (
              <div key={award.title} className="ab-award-card slide-in-left">
                <div className="ab-award-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div className="ab-award-text">
                  <h3 className="ab-award-title">{award.title}</h3>
                  {award.issuer && <span className="ab-award-issuer">{award.issuer}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="ab-milestones">
        <div className="container">
          <div className="ab-section-tag centered slide-in-left">
            <span className="ab-pill">Our Journey</span>
            <h2>Key Achievements</h2>
            <div className="ab-underline" />
          </div>
          <div className="ab-milestones-grid">
            {milestones.map((m, i) => {
              const isActive = i === milestones.length - 1;
              return (
                <div
                  key={i}
                  className={`ab-mcard ${isActive ? 'ab-mcard--active' : ''} ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                >
                  <div className="ab-mcard-top">
                    <div className="ab-micon">
                      <i className={`ti ${m.icon}`} aria-hidden="true" />
                    </div>
                    <span className="ab-myear">{m.period}</span>
                  </div>
                  <p className="ab-mcard-label">{m.label}</p>
                  <p className="ab-mcard-body">{m.description}</p>
                  <span className="ab-badge">{m.badge}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsSlider />
    </div>
  );
}
