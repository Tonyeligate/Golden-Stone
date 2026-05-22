import type { PageKey } from '../types'

type ArticleProps = {
  onNavigate: (page: PageKey) => void
}

export default function NewsArticle1({ onNavigate }: ArticleProps) {
  return (
    <div className="news-page">
      <section className="news-article-page news-article-single">
        <div className="container">
          <button className="news-back-btn" onClick={() => onNavigate('news')}>
            ← Back to News
          </button>
          <article className="news-article-card slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80"
              alt="Regional coverage expansion"
              className="news-article-img"
            />
            <div className="news-article-body">
              <span className="news-cat">Expansion</span>
              <h1>Golden Stone Logistics expands regional coverage across Ghana</h1>
              <div className="news-meta news-meta--spaced">
                <span className="news-date">📅 May 12, 2026</span>
                <span className="news-read">⏱ 4 min read</span>
              </div>
              <p>
                Golden Stone Logistics has broadened its delivery network across six new regions in Ghana, bringing premium logistics services closer to more communities. The expansion includes dedicated local teams,
                faster pick-up windows, and new cross-regional routes designed for both corporate shipments and retail customers.
              </p>
              <p>
                The company now offers expedited warehousing and distribution support in key regional hubs, with advanced tracking systems that let customers follow goods in real time. Local operators were trained on the brand’s
                customs clearance and high-value handling standards, ensuring smoother movement for importers and exporters.
              </p>
              <p>
                Leadership says this move answers growing demand from small businesses and manufacturers that need reliable delivery across major economic corridors. By focusing on efficient route planning and stronger regional
                partnerships, Golden Stone expects to reduce average transit times while maintaining premium service levels.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
