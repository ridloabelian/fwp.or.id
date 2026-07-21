import { motion } from 'framer-motion';
import { aboutData, milestones } from '../data/about';
import SEO from '../components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SejarahPage() {
  return (
    <div className="about-page">
      <SEO
        title="Sejarah FWP"
        description="Sejarah berdirinya Forum Wakaf Produktif sejak 2016 dan perjalanan kontribusinya bagi perwakafan nasional."
      />

      <section className="about-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="hero-content">
            <h1>{aboutData.history?.title || 'Sejarah'}</h1>
            <p className="hero-subtitle">Perjalanan Forum Wakaf Produktif</p>
          </motion.div>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="history-content">
              {(aboutData.history?.content || '').split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="milestones-section">
        <div className="container">
          <h2 className="section-title">Milestone FWP</h2>
          <div className="timeline">
            {(milestones || []).map((milestone, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{milestone?.year || ''}</span>
                  <h4>{milestone?.title || ''}</h4>
                  <p>{milestone?.description || ''}</p>
                  <span className={`timeline-category ${milestone?.category || ''}`}>
                    {milestone?.category || ''}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
