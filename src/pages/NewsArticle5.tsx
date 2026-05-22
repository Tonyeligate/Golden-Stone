import type { PageKey } from '../types'

type ArticleProps = {
  onNavigate: (page: PageKey) => void
}

export default function NewsArticle5({ onNavigate }: ArticleProps) {
  return (
    <div className="news-page">
      <section className="news-article-page news-article-single">
        <div className="container">
          <button className="news-back-btn" onClick={() => onNavigate('news')}>
            ← Back to News
          </button>
          <article className="news-article-card slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Cargo tracking dashboard"
              className="news-article-img"
            />
            <div className="news-article-body">
              <span className="news-cat">Services</span>
              <h1>Real-time cargo tracking dashboard launched for enterprise clients</h1>
              <div className="news-meta news-meta--spaced">
                <span className="news-date">📅 February 20, 2026</span>
                <span className="news-read">⏱ 3 min read</span>
              </div>
              <p>
                Golden Stone launched a new real-time tracking dashboard for enterprise customers that delivers live visibility into cargo positions, estimated arrival times, and automated alerts. This digital platform empowers logistics managers
                with actionable shipment intelligence.
              </p>
              <p>
                The dashboard integrates with the company’s internal operations and external carrier feeds, delivering consolidated status updates for rail, air, and ocean freight. Clients can now quickly identify delays, route changes,
                and customs milestones through a single interface.
              </p>
              <p>
                The new service is aimed at large manufacturers and retailers who need consistent, transparent freight performance. Golden Stone says the technology will reduce manual tracking work and support faster responses to
                inbound logistics challenges.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
