import type { PageKey } from '../types'

type ArticleProps = {
  onNavigate: (page: PageKey) => void
}

export default function NewsArticle6({ onNavigate }: ArticleProps) {
  return (
    <div className="news-page">
      <section className="news-article-page news-article-single">
        <div className="container">
          <button className="news-back-btn" onClick={() => onNavigate('news')}>
            ← Back to News
          </button>
          <article className="news-article-card slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80"
              alt="Freight alliance membership"
              className="news-article-img"
            />
            <div className="news-article-body">
              <span className="news-cat">Partnerships</span>
              <h1>Golden Stone joins West Africa Freight Alliance</h1>
              <div className="news-meta news-meta--spaced">
                <span className="news-date">📅 February 5, 2026</span>
                <span className="news-read">⏱ 3 min read</span>
              </div>
              <p>
                Golden Stone Logistics became a member of the West Africa Freight Alliance to provide customers with priority port access, shared fleet resources, and unified customs processing across eight countries. This alliance aims to speed
                up regional cargo flow for traders and manufacturers.
              </p>
              <p>
                The partnership gives the company access to collaborative route planning and shared warehousing capacity, enabling faster cross-border movement for bulk shipments and express deliveries alike. Members can now leverage
                a more reliable network for transnational logistics.
              </p>
              <p>
                Company leaders say the alliance strengthens their regional service promise, especially for clients moving goods between Ghana and neighboring markets. The agreement is expected to improve transit predictability and lower
                paperwork friction for importing and exporting businesses.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
