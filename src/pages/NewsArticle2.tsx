import type { PageKey } from '../types'

type ArticleProps = {
  onNavigate: (page: PageKey) => void
}

export default function NewsArticle2({ onNavigate }: ArticleProps) {
  return (
    <div className="news-page">
      <section className="news-article-page news-article-single">
        <div className="container">
          <button className="news-back-btn" onClick={() => onNavigate('news')}>
            ← Back to News
          </button>
          <article className="news-article-card slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
              alt="International partnership"
              className="news-article-img"
            />
            <div className="news-article-body">
              <span className="news-cat">Partnerships</span>
              <h1>New international partnership launched with Maersk Line</h1>
              <div className="news-meta news-meta--spaced">
                <span className="news-date">📅 April 28, 2026</span>
                <span className="news-read">⏱ 3 min read</span>
              </div>
              <p>
                Golden Stone Logistics has entered a strategic international partnership with Maersk Line to expand its freight corridors and strengthen ocean freight capacity. The partnership provides customers with enhanced global
                reach through priority booking, improved transit reliability, and streamlined customs handling.
              </p>
              <p>
                The collaboration also brings new service options for exporters in Ghana, including direct export sailings, faster port handoffs, and simpler documentation workflows. Golden Stone will leverage Maersk’s expertise in
                vessel scheduling and global logistics to offer more predictable transit windows for key trading lanes.
              </p>
              <p>
                Executives said the move underscores a broader ambition to position the company as a premium logistics bridge between West Africa and international markets. Customers can now access integrated door-to-door solutions that
                combine local execution with global freight capacity.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
