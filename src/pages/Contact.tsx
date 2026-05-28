import { useState } from 'react'
import './Contact.css'

const faqs = [
  {
    q: 'What regions does Golden Stone Logistics serve?',
    a: 'We currently serve six strategic regions across Ghana: Greater Accra, Ashanti, Western, Central, Volta, and Eastern. We also offer international shipping through our global partner network.',
  },
  {
    q: 'How do I track my shipment in real time?',
    a: 'Once your shipment is booked, you receive a unique tracking ID. Enter it on our Track Shipment page for live GPS updates from pickup to delivery confirmation.',
  },
  {
    q: 'What types of cargo do you handle?',
    a: 'We handle standard parcels, commercial freight, temperature-sensitive goods, high-value cargo, and bulk industrial shipments. Contact us for specialized requirements.',
  },
  {
    q: 'How quickly can I get a pickup scheduled?',
    a: 'Standard pickups are scheduled within 24 hours of booking. Express same-day pickup is available in Greater Accra and Ashanti regions for orders placed before 12 PM.',
  },
  {
    q: 'Do you offer warehousing services?',
    a: 'Yes. Our Tema facility offers secure short and long-term storage with temperature control, 24/7 surveillance, and express retrieval for time-sensitive freight.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept mobile money (MTN MoMo, Vodafone Cash, AirtelTigo), bank transfer, and major credit/debit cards. Corporate accounts can be invoiced monthly.',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i)

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="ct-hero-bg" />
        <div className="ct-hero-overlay" />
        <div className="container ct-hero-content slide-in-right">
          <span className="ct-eyebrow">Contact Us</span>
          <h1>Let's move<br /><em>something great.</em></h1>
          <p>Send a request, ask about custom services, or discuss your delivery needs with our premium operations team.</p>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section className="ct-section">
        <div className="container ct-layout">

          {/* FORM */}
          <div className="ct-form-card slide-in-left">
            <div className="ct-form-header">
              <span className="ct-pill">Send a Message</span>
              <h2>We respond within<br />24 hours.</h2>
            </div>

            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-field-row">
                <div className="ct-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="ct-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="ct-field">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Express freight quote"
                  required
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="ct-field">
                <label>Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your shipment or enquiry…"
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button className="ct-submit" type="submit">
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>

              {submitted && (
                <p className="ct-success">Thank you! Our team will be in touch shortly.</p>
              )}
            </form>
          </div>

          {/* INFO PANEL */}
          <aside className="ct-info-panel slide-in-right">
            <div className="ct-info-top">
              <span className="ct-pill">Get in Touch</span>
              <h2>Company details</h2>
            </div>

            <div className="ct-info-items">
              <div className="ct-info-item">
                <div className="ct-info-icon">📞</div>
                <div>
                  <p className="ct-info-label">Phone</p>
                  <p className="ct-info-value">+233 536 381 700</p>
                </div>
              </div>
              <div className="ct-info-item">
                <div className="ct-info-icon">✉️</div>
                <div>
                  <p className="ct-info-label">Email</p>
                  <p className="ct-info-value">goldenstonelogistics@gmail.com</p>
                </div>
              </div>
              <div className="ct-info-item">
                <div className="ct-info-icon">📍</div>
                <div>
                  <p className="ct-info-label">Address</p>
                  <p className="ct-info-value">5th Avenue, Tema Community 11</p>
                </div>
              </div>
              <div className="ct-info-item">
                <div className="ct-info-icon">🕐</div>
                <div>
                  <p className="ct-info-label">Office Hours</p>
                  <p className="ct-info-value">Mon – Sat, 8:45 AM – 5 PM GMT</p>
                </div>
              </div>
            </div>

            <div className="ct-social">
              <p className="ct-info-label">Follow us</p>
              <div className="ct-social-links">
                <a href="https://www.facebook.com/goldenstone.logistic?mibextid=rS40aB7S9Ucbxw6v" className="ct-social-btn" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/goldenstone_logisticsgh?igsh=MXgzbWRkeTV6djhxaw==" className="ct-social-btn" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.tiktok.com/@golden.stone.logistics?_r=1&_t=ZS-967kaHxUbrA" className="ct-social-btn" target="_blank" rel="noopener noreferrer">Tiktok</a>
              </div>
            </div>

            <div className="ct-badge">
              <span>🔒</span>
              <p>Your data is encrypted and never shared with third parties.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ct-faq">
        <div className="container">
          <div className="ct-faq-header slide-in-left">
            <span className="ct-pill">FAQ</span>
            <h2>Frequently asked<br />questions.</h2>
            <p>Everything you need to know about our logistics services.</p>
          </div>

          <div className="ct-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`ct-faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => toggleFaq(i)}
              >
                <div className="ct-faq-q">
                  <span>{faq.q}</span>
                  <div className="ct-faq-icon">{openFaq === i ? '−' : '+'}</div>
                </div>
                <div className="ct-faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}