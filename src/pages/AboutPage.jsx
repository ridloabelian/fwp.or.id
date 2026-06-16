import { motion } from 'framer-motion';
import { aboutData, milestones, members, programs, regionStats } from '../data/about';
import { MapPin, Users, Award, BookOpen, Phone, Mail, Globe } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="hero-content"
          >
            <h1>{aboutData.hero.title}</h1>
            <p className="hero-subtitle">{aboutData.hero.subtitle}</p>
            <p className="hero-description">{aboutData.hero.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="vision-card"
            >
              <h2>{aboutData.vision.title}</h2>
              <p>{aboutData.vision.content}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mission-card"
            >
              <h2>{aboutData.mission.title}</h2>
              <ul>
                {aboutData.mission.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="history-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">{aboutData.history.title}</h2>
            <div className="history-content">
              {aboutData.history.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal */}
      <section className="legal-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="legal-card"
          >
            <Award className="legal-icon" />
            <h2>{aboutData.legal.title}</h2>
            <div className="legal-details">
              <p className="sk-number">{aboutData.legal.skNumber}</p>
              <p className="legal-desc">{aboutData.legal.description}</p>
              <p className="legal-issuer">Diterbitkan oleh: {aboutData.legal.issuedBy}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="section-title">{aboutData.leadership.title}</h2>
            <p className="section-note">{aboutData.leadership.note}</p>
            
            <div className="leadership-grid">
              {aboutData.leadership.members.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="leader-card"
                >
                  <div className="leader-image">
                    <div className="leader-placeholder">
                      <Users size={48} />
                    </div>
                  </div>
                  <h3>{member.name}</h3>
                  <p className="leader-position">{member.position}</p>
                </motion.div>
              ))}
            </div>

            <div className="divisions-grid">
              {aboutData.leadership.divisions.map((division, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="division-card"
                >
                  <h4>{division.name}</h4>
                  <p>{division.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      <section className="milestones-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="section-title">Milestone FWP</h2>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                  <div className="timeline-content">
                    <span className="timeline-year">{milestone.year}</span>
                    <h4>{milestone.title}</h4>
                    <p>{milestone.description}</p>
                    <span className={`timeline-category ${milestone.category}`}>
                      {milestone.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Members */}
      <section className="members-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="section-title">Anggota Forum Wakaf Produktif</h2>
            <p className="members-count">Total: {members.length} Anggota</p>
            
            <div className="region-stats">
              {Object.entries(regionStats).map(([region, count]) => (
                <div key={region} className="region-stat">
                  <MapPin size={16} />
                  <span>{region}</span>
                  <span className="count">{count}</span>
                </div>
              ))}
            </div>

            <div className="members-table-container">
              <table className="members-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Lembaga</th>
                    <th>Nama Yayasan</th>
                    <th>No. STBPN</th>
                    <th>Wilayah</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.no}>
                      <td>{member.no}</td>
                      <td>{member.name}</td>
                      <td>{member.yayasan}</td>
                      <td>{member.stbpn}</td>
                      <td>{member.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="programs-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="section-title">Katalog Program Nazhir</h2>
            <div className="programs-grid">
              {programs.map((program) => (
                <motion.div
                  key={program.id}
                  variants={fadeInUp}
                  className="program-card"
                >
                  <h3>{program.name}</h3>
                  <p className="program-pic">PIC: {program.pic}</p>
                  <p className="program-desc">{program.description}</p>
                  <div className="program-highlight">
                    <strong>Program Unggulan:</strong> {program.program}
                  </div>
                  <p className="program-detail">{program.programDetail}</p>
                  <div className="program-contact">
                    {program.contact && (
                      <p><Phone size={14} /> {program.contact}</p>
                    )}
                    {program.account && (
                      <p><BookOpen size={14} /> {program.account}</p>
                    )}
                    {program.socialMedia && (
                      <p><Globe size={14} /> {program.socialMedia}</p>
                    )}
                    {program.website && (
                      <p><Globe size={14} /> {program.website}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="section-title">{aboutData.partners.title}</h2>
            <div className="partners-grid">
              {aboutData.partners.categories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="partner-category"
                >
                  <h4>{category.name}</h4>
                  <ul>
                    {category.partners.map((partner, pIndex) => (
                      <li key={pIndex}>{partner}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="contact-card"
          >
            <h2>Hubungi Kami</h2>
            <div className="contact-details">
              <p><Phone size={18} /> {aboutData.contact.phone}</p>
              <p><Mail size={18} /> {aboutData.contact.email}</p>
              <p><Instagram size={18} /> @{aboutData.contact.instagram}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
