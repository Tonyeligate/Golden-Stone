import type { PageKey } from '../types'

type ArticleProps = {
  onNavigate: (page: PageKey) => void
}

export default function NewsArticle3({ onNavigate }: ArticleProps) {
  return (
    <div className="news-page">
      <section className="news-article-page news-article-single">
        <div className="container">
          <button className="news-back-btn" onClick={() => onNavigate('news')}>
            ← Back to News
          </button>
          <article className="news-article-card slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"
              alt="Warehousing services in Tema"
              className="news-article-img"
            />
            <div className="news-article-body">
              <span className="news-cat">Services</span>
              <h1>Premium warehousing services now available in Tema</h1>
              <div className="news-meta news-meta--spaced">
                <span className="news-date">📅 March 15, 2026</span>
                <span className="news-read">⏱ 2 min read</span>
              </div>
              <p>
                Golden Stone Logistics launched a premium warehousing facility in Tema, serving clients with temperature-controlled storage, 24/7 surveillance, and express retrieval capabilities. This site is designed for high-value and time-sensitive cargo.
              </p>
              <p>
                Customers can now benefit from seamless inventory management, bonded storage options, and priority handling for goods that move quickly through the supply chain. The facility is supported by digital access controls and
                real-time reporting.
              </p>
              <p>
                The new warehouse strengthens the company’s end-to-end logistics services, allowing businesses to use one trusted partner for freight, storage, and distribution. Management says the expansion is aligned with demand from
                importers, retailers, and manufacturing clients in the Greater Accra region.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
