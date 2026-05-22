import { useEffect, useState } from 'react'
import type { PageKey as AppPageKey } from './types'
import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'
import About from './pages/About.tsx'
import Coverage from './pages/Coverage.tsx'
import Contact from './pages/Contact.tsx'
import News from './pages/News.tsx'
import NewsArticle1 from './pages/NewsArticle1.tsx'
import NewsArticle2 from './pages/NewsArticle2.tsx'
import NewsArticle3 from './pages/NewsArticle3.tsx'
import NewsArticle4 from './pages/NewsArticle4.tsx'
import NewsArticle5 from './pages/NewsArticle5.tsx'
import NewsArticle6 from './pages/NewsArticle6.tsx'
import headerLogo from './images/header.png'
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

function App() {
  const [activePage, setActivePage] = useState<AppPageKey>('home')
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
      case 'services': return <Services onNavigate={handleNavigate} />
      case 'about': return <About />
      case 'coverage': return <Coverage />
      case 'contact': return <Contact />
      case 'news': return <News onNavigate={handleNavigate} />
      case 'news-article-1': return <NewsArticle1 onNavigate={handleNavigate} />
      case 'news-article-2': return <NewsArticle2 onNavigate={handleNavigate} />
      case 'news-article-3': return <NewsArticle3 onNavigate={handleNavigate} />
      case 'news-article-4': return <NewsArticle4 onNavigate={handleNavigate} />
      case 'news-article-5': return <NewsArticle5 onNavigate={handleNavigate} />
      case 'news-article-6': return <NewsArticle6 onNavigate={handleNavigate} />
      default: return <Home onNavigate={handleNavigate} />
    }
  }

  const handleNavigate = (page: AppPageKey) => {
    setActivePage(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <button className="brand" onClick={() => handleNavigate('home')}>
            <img src={headerLogo} alt="Golden Stone Logistics logo" className="site-logo" />
          </button>

          <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
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

      

      <main className="site-main">
        {renderPage()}
      </main>

   
<footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand-group">
            <div className="footer-logo">
              <img
                src={headerLogo}
                alt="Golden Stone Logistics logo"
                className="footer-logo-img"
              />
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
              <button type="button" onClick={() => handleNavigate('about')}>About Us</button>
              <button type="button">Our Team</button>
              <button type="button">Careers</button>
              <button type="button">Terms & Conditions</button>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <button type="button" onClick={() => handleNavigate('services')}>Express Freight</button>
              <button type="button" onClick={() => handleNavigate('services')}>Air Cargo</button>
              <button type="button" onClick={() => handleNavigate('services')}>Sea Freight</button>
              <button type="button" onClick={() => handleNavigate('services')}>Warehousing</button>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <button type="button" onClick={() => handleNavigate('contact')}>Contact Us</button>
              <button type="button" onClick={() => handleNavigate('coverage')}>Coverage</button>
              <button type="button">FAQs</button>
              <button type="button">Privacy Policy</button>
            </div>
          </div>
        </div>

        <div className="container footer-social">
          <a
            href="https://wa.me/+233502609222"
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
            href="mailto:goldenstoneloistics@gmail.com"
            aria-label="Email"
            title="Email"
            data-label="Email"
          >
            <MdEmail />
          </a>

          <a
            href="https://maps.apple/p/yBcdbtggvruhq6"
            target="_blank"
            rel="noopener noreferrer"
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
