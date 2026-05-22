import './Coverage.css'
import scheduleImage from '../images/schedule.jpg'
import pickupImage from '../images/pickup.jpeg'
import monitorImage from '../images/monitor.jpg'
import safeImage from '../images/safe.jpg'
import oneLogo from '../images/one.jpeg'
import upsLogo from '../images/ups.jpeg'
import lineLogo from '../images/line.jpg'
import googleLogo from '../images/google.jpg'
import { 
  HiOutlineLocationMarker, 
  HiOutlineTruck, 
  HiOutlineOfficeBuilding 
} from "react-icons/hi";

const regions = [
  {
    name: "Greater Accra",
    desc: "Central logistics hub with rapid dispatch and urban coverage.",
    icon: <HiOutlineLocationMarker />
  },
  {
    name: "Ashanti Region",
    desc: "Strategic inland operations ensuring nationwide connectivity.",
    icon: <HiOutlineOfficeBuilding />
  },
  {
    name: "Northern Corridor",
    desc: "Reliable long-haul transport with real-time tracking.",
    icon: <HiOutlineTruck />
  }
];

const steps = [
  {
    num: "01",
    title: "Book & Confirm",
    desc: "Schedule your shipment with instant confirmation and tracking.",
    image: scheduleImage
  },
  {
    num: "02",
    title: "Pickup & Secure",
    desc: "We collect and secure your cargo with care.",
    image: pickupImage
  },
  {
    num: "03",
    title: "Transit & Monitor",
    desc: "Real-time tracking across our global network.",
    image: monitorImage
  },
  {
    num: "04",
    title: "Delivered Safely",
    desc: "On-time delivery with proof of receipt.",
    image: safeImage
  }
];

const partners = [
  { name: 'Ocean Network Express', img: oneLogo },
  { name: 'UPS',                   img: upsLogo },
  { name: 'Maersk Line',           img: lineLogo },
  { name: 'Ethiopian Air',         img: googleLogo },
]

export default function Coverage() {
  return (
    <div className="coverage-page">

      {/* ── HERO ── */}
      <section className="cov-hero">
        <div className="cov-hero-bg" />
        <div className="cov-hero-overlay" />
        <div className="container cov-hero-content slide-in-left">
          <span className="cov-eyebrow">Coverage</span>
          <h1>Ghana's regions.<br /><em>The world's routes.</em></h1>
          <p>
            Golden Stone Logistics combines regional expertise and international
            partnerships to move cargo reliably across borders and coastlines.
          </p>
          <a href="#regions" className="cov-cta">Explore Our Reach ↓</a>
        </div>
      </section>

      {/* ── REGIONS ── */}
      <section className="cov-regions" id="regions">
  <div className="container">
    <div className="cov-section-label">
      <span className="cov-pill">Regions Served</span>
      <h2>Precision coverage<br />across Ghana.</h2>
      <p>
        Premium operations spanning strategic regions — ensuring fast pickup,
        reliable transit and on-time delivery.
      </p>
    </div>

    <div className="regions-grid">
      {regions.map((r) => (
        <div key={r.name} className="region-card">
          <div className="region-icon-wrapper">
            <div className="region-icon">{r.icon}</div>
          </div>
          <h3>{r.name}</h3>
          <p>{r.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── PARTNERS ── */}
   <section className="cov-partners">
  <div className="container slide-in-right">
    <p className="cov-partners-label">
      Global alliances that extend our reach
    </p>

    <div className="ticker">
      <div className="ticker-track">
        {[...partners, ...partners].map((p, index) => (
          <div key={index} className="partner-card">
            <img src={p.img} alt={p.name} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ── PROCESS ── */}
    <section className="cov-process">
  <div className="container">
    <div className="cov-section-label centered">
      <span className="cov-pill">Our Process</span>
      <h2>Delivery designed for<br />clarity and confidence.</h2>
    </div>

    <div className="process-track slide-in-right">
      {steps.map((s) => (
        <div
          key={s.num}
          className={`process-step step-${s.num}`}
        >
          <div className="process-overlay" />

          <div className="process-content">
            <div className="process-num">{s.num}</div>
            <div className="process-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}