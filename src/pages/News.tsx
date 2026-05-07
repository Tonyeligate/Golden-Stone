import { useState, useEffect } from 'react'
import growthImage from '../images/growth.jpg'
import './News.css'

const CATEGORIES = ['All', 'Expansion', 'Partnerships', 'Services', 'Industry']

const posts = [
  {
    title: 'Golden Stone Logistics expands regional coverage across Ghana',
    excerpt: 'We now serve six strategic regions with dedicated premium logistics teams, cutting average delivery times by 34%.',
    date: 'May 12, 2026',
    category: 'Expansion',
    featured: true,
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80',
    readTime: '4 min read',
  },
  {
    title: 'New international partnership launched with Maersk Line',
    excerpt: 'Premium global routes strengthened by an elite partner network, opening 40 new international corridors.',
    date: 'April 28, 2026',
    category: 'Partnerships',
    featured: false,
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    readTime: '3 min read',
  },
  {
    title: 'Premium warehousing services now available in Tema',
    excerpt: 'Secure storage with temperature control, 24/7 surveillance and express retrieval for high-value cargo.',
    date: 'March 15, 2026',
    category: 'Services',
    featured: false,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80',
    readTime: '2 min read',
  },
  {
    title: 'Africa logistics sector poised for record growth in 2026',
    excerpt: 'Industry analysts forecast a 28% surge in cross-border freight demand driven by AfCFTA implementation.',
    date: 'March 3, 2026',
    category: 'Industry',
    featured: false,
    image: growthImage,
    readTime: '5 min read',
  },
  {
    title: 'Real-time cargo tracking dashboard launched for enterprise clients',
    excerpt: 'Corporate clients now have full-suite dashboards with analytics, ETA predictions and automated alerts.',
    date: 'February 20, 2026',
    category: 'Services',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    readTime: '3 min read',
  },
  {
    title: 'Golden Stone joins West Africa Freight Alliance',
    excerpt: 'Membership unlocks priority port access, shared fleet resources and unified customs processing across 8 nations.',
    date: 'February 5, 2026',
    category: 'Partnerships',
    featured: false,
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=600&q=80',
    readTime: '3 min read',
  },
]

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visiblePosts, setVisiblePosts] = useState(posts)
  const [activePost, setActivePost] = useState<typeof posts[0] | null>(null)
  const [aiSummary, setAiSummary] = useState('')
  const [loadingAI, setLoadingAI] = useState(false)

  useEffect(() => {
    if (activeCategory === 'All') {
      setVisiblePosts(posts)
    } else {
      setVisiblePosts(posts.filter(p => p.category === activeCategory))
    }
  }, [activeCategory])

  const featured = posts.find(p => p.featured)!
  const grid = visiblePosts.filter(p => !p.featured || activeCategory !== 'All')

  async function openPost(post: typeof posts[0]) {
    setActivePost(post)
    setAiSummary('')
    setLoadingAI(true)
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `You are a logistics industry journalist. Write a compelling, detailed 3-paragraph news article body for this story at Golden Stone Logistics Limited Company in Ghana. Make it sound real, professional and informative. 
            
Title: ${post.title}
Summary: ${post.excerpt}
Category: ${post.category}
Date: ${post.date}

Write only the article body paragraphs, no title or byline.`
          }]
        })
      })
      const data = await res.json()
      setAiSummary(data.content[0]?.text || '')
    } catch {
      setAiSummary('Full article content could not be loaded. Please try again.')
    }
    setLoadingAI(false)
  }

  return (
    <div className="news-page">

      {/* ── HERO ── */}
      <section className="news-hero">
        <div className="news-hero-bg" />
        <div className="news-hero-overlay" />
        <div className="container news-hero-content slide-in-right">
          <span className="news-eyebrow">Newsroom</span>
          <h1>Stories that move<br /><em>the industry forward.</em></h1>
          <p>Announcements, service launches, and logistics insights from Golden Stone Logistics.</p>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="news-featured">
        <div className="container">
          <div className="featured-card slide-in-left" onClick={() => openPost(featured)}>
            <div className="featured-img-wrap">
              <img src={featured.image} alt={featured.title} />
              <span className="featured-label">Featured</span>
            </div>
            <div className="featured-body">
              <span className="news-cat">{featured.category}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="news-meta">
                <span className="news-date">📅 {featured.date}</span>
                <span className="news-read">⏱ {featured.readTime}</span>
              </div>
              <button className="news-read-btn">Read Full Story →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="news-list">
        <div className="container">
          <div className="news-filter-bar slide-in-left">
            <h3>Latest Updates</h3>
            <div className="filter-pills">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >{cat}</button>
              ))}
            </div>
          </div>

          <div className="news-grid">
            {(activeCategory === 'All' ? posts.filter(p => !p.featured) : visiblePosts).map((post, i) => (
              <article
                key={post.title}
                className={`news-card ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                onClick={() => openPost(post)}
              >
                <div className="news-card-img">
                  <img src={post.image} alt={post.title} />
                  <span className="news-cat-badge">{post.category}</span>
                </div>
                <div className="news-card-body">
                  <div className="news-meta">
                    <span className="news-date">{post.date}</span>
                    <span className="news-read">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="news-link">Read more →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {activePost && (
        <div className="news-modal-backdrop" onClick={() => setActivePost(null)}>
          <div className="news-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActivePost(null)}>✕</button>
            <img src={activePost.image} alt={activePost.title} className="modal-img" />
            <div className="modal-body">
              <span className="news-cat">{activePost.category}</span>
              <h2>{activePost.title}</h2>
              <div className="news-meta news-meta--spaced">
                <span className="news-date">📅 {activePost.date}</span>
                <span className="news-read">⏱ {activePost.readTime}</span>
              </div>
              {loadingAI ? (
                <div className="modal-loading">
                  <div className="loading-dots"><span /><span /><span /></div>
                  <p>Generating full article…</p>
                </div>
              ) : (
                <div className="modal-article">
                  {aiSummary.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}