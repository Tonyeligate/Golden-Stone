import type { PageKey } from '../types';

type ArticleProps = {
  onNavigate: (page: PageKey) => void;
};

export default function NewsArticle4({ onNavigate }: ArticleProps) {
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
              alt="Logistics sector growth"
              className="news-article-img"
            />
            <div className="news-article-body">
              <span className="news-cat">Industry</span>
              <h1>Africa logistics sector poised for record growth in 2026</h1>
              <div className="news-meta news-meta--spaced">
                <span className="news-date">📅 March 3, 2026</span>
                <span className="news-read">⏱ </span>
              </div>
              <p>
                Analysts predict a 28% surge in cross-border freight demand across Africa as AfCFTA
                begins to unlock new trade corridors. Golden Stone Logistics is preparing for this
                wave by scaling operations and investing in network resilience.
              </p>
              <p>
                The company reports that stronger regional integration has already increased demand
                for consolidated shipments, customs advisory services, and intra-African trucking
                routes. These shifts are driving more businesses to seek reliable logistics
                partners.
              </p>
              <p>
                Golden Stone is positioning itself as a growth partner for exporters and
                distributors, offering tailored solutions for import compliance,
                temperature-sensitive transit, and digital visibility. The firm aims to support a
                more connected and efficient logistics landscape.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
