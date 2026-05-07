import { useEffect, useState } from 'react'
import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'
import About from './pages/About.tsx'
import Coverage from './pages/Coverage.tsx'
import Contact from './pages/Contact.tsx'
import News from './pages/News.tsx'
import './App.css'
import { 
  FaWhatsapp, 
  FaTiktok, 
  FaInstagram, 
  FaFacebookF, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const pages = [
  { key: 'home', label: 'Home' },
  { key: 'services', label: 'Services' },
  { key: 'about', label: 'About' },
  { key: 'coverage', label: 'Coverage' },
  { key: 'contact', label: 'Contact' },
  { key: 'news', label: 'News' },
] as const

type PageKey = (typeof pages)[number]['key']

function App() {
  const [activePage, setActivePage] = useState<PageKey>('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.slide-in-left, .slide-in-right'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.18 })

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activePage])

  const renderPage = () => {
    switch (activePage) {
      case 'services': return <Services />
      case 'about': return <About />
      case 'coverage': return <Coverage />
      case 'contact': return <Contact />
      case 'news': return <News />
      default: return <Home />
    }
  }

  const handleNavigate = (page: PageKey) => {
    setActivePage(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <button className="brand" onClick={() => handleNavigate('home')}>
            <div className="code-logo">
              <div className="code-logo-top">GSL</div>
              <div className="code-logo-bottom">
                GOLDEN STONE LOGISTICS<br />
                LIMITED COMPANY
              </div>
            </div>
          </button>

          {/* site-nav moved outside header to avoid iOS Safari fixed/transform issues */}

          <div className="header-actions">
            <button className="btn btn-gold" onClick={() => handleNavigate('contact')}>
              Contact Us
            </button>
            <button
              className={`menu-toggle ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Nav placed outside header to avoid iOS Safari fixed/transform issues */}
      <nav className={`site-nav ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {pages.map((page) => (
            <li key={page.key}>
              <button
                className={activePage === page.key ? 'active' : ''}
                onClick={() => handleNavigate(page.key)}
              >
                {page.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="site-main">
        {renderPage()}
      </main>

   
<footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand-group">
            <div className="footer-logo">
              <div className="code-logo footer-code-logo">
                <div className="code-logo-top">GSL</div>
                <div className="code-logo-bottom">
                  GOLDEN STONE LOGISTICS<br />
                  LIMITED COMPANY
                </div>
              </div>
            </div>
            <p className="footer-description">
              Golden Stone Logistics Limited Company remains the trusted choice for secure, premium and efficient logistics solutions across Ghana and beyond.
            </p>
            <div className="footer-contact-info">
              <p>5th Avemue, Tema Community 11</p>
              <p>+233 536 381 700</p>
              <p>goldenstoneloistics@gmail.com</p>
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Our Team</a>
              <a href="#">Careers</a>
              <a href="#">Terms & Conditions</a>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <a href="#">Express Freight</a>
              <a href="#">Air Cargo</a>
              <a href="#">Sea Freight</a>
              <a href="#">Warehousing</a>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">Contact Us</a>
              <a href="#">Coverage</a>
              <a href="#">FAQs</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="container footer-social">
          <a
            href="Https://wa.me/+233502609222"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            data-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.tiktok.com/@golden.stone.logistics?_r=1&_t=ZS-967kaHxUbrA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            title="TikTok"
            data-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            href="Email: goldenstoneloistics@gmail.com"
            aria-label="Email"
            title="Email"
            data-label="Email"
          >
            <MdEmail />
          </a>

          <a
            href="https://maps.apple/p/yBcdbtggvruhq6"
            aria-label="Location"
            title="Location"
            data-label="Location"
          >
            <FaMapMarkerAlt />
          </a>

          <a
            href="https://www.instagram.com/goldenstone_logisticsgh?igsh=MXgzbWRkeTV6djhxaw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            data-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/goldenstone.logistic?mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            data-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Golden State Logistics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
