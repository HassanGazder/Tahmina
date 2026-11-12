import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
};

const pillars = [
  { number: "01", title: "Style", copy: "Considered looks, modest fashion and everyday styling with an editorial point of view." },
  { number: "02", title: "Beauty", copy: "Honest routines, product storytelling and detail-led beauty content made to feel personal." },
  { number: "03", title: "Dubai Life", copy: "Places, experiences and city moments shared through a warm, distinctly Dubai lens." },
];

const work = [
  { title: "City Notes", category: "Dubai lifestyle", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85" },
  { title: "The Edit", category: "Fashion story", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85" },
  { title: "Soft Rituals", category: "Beauty content", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85" },
  { title: "Golden Hour", category: "Travel diary", image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1400&q=85" },
];

const services = ["Sponsored reels", "UGC campaigns", "Event coverage", "Product storytelling", "Creative direction", "Ambassadorships"];

const collaborationTypes = [
  "Instagram Reels",
  "Instagram Stories",
  "Instagram Feed Posts",
  "TikTok Videos",
  "YouTube Promotions",
  "Event Coverage",
  "Brand Ambassador Partnership",
  "Monthly Marketing Campaign",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, handleFormSubmit] = useForm("xjyywlvj");

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className="header">
        <button className="wordmark" onClick={() => scrollTo("home")} aria-label="Back to top">TAHMINA<span>.</span></button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {[["about", "About"], ["work", "Work"], ["services", "Collaborate"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <button className="nav-cta" onClick={() => scrollTo("contact")}>Enquire <ArrowUpRight size={15} /></button>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav">
            {["about", "work", "services", "contact"].map((id) => <button key={id} onClick={() => scrollTo(id)}>{id}</button>)}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero">
          <img src="/images/tahmina-hero.png" alt="Dubai lifestyle creator overlooking the city" />
          <div className="hero-shade" />
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="eyebrow"><MapPin size={14} /> Dubai, UAE</p>
            <h1>TAHMINA</h1>
            <p className="hero-line">Style, beauty and the art of living well.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollTo("work")}>Explore my world <ArrowDown size={16} /></button>
              <button className="button glass" onClick={() => scrollTo("contact")}>Work with me <ArrowUpRight size={16} /></button>
            </div>
          </motion.div>
          <div className="hero-index">CONTENT CREATOR / STORYTELLER / DUBAI</div>
        </section>

        <section className="ticker" aria-label="Content specialties">
          <div>FASHION <span>+</span> BEAUTY <span>+</span> LIFESTYLE <span>+</span> TRAVEL <span>+</span> DUBAI</div>
        </section>

        <section id="about" className="about section">
          <motion.div {...fadeUp} className="section-label">01 / About</motion.div>
          <div className="about-grid">
            <motion.div {...fadeUp}>
              <h2>A point of view made to <em>connect.</em></h2>
            </motion.div>
            <motion.div {...fadeUp} className="about-copy">
              <p>Tahmina is a Dubai-based influencer creating thoughtful fashion, beauty and lifestyle stories for an audience that values style with substance.</p>
              <p>Her content pairs an editorial eye with an easy, human voice, giving brands a place in the story without losing authenticity.</p>
              <button className="text-link" onClick={() => scrollTo("contact")}>Start a conversation <ArrowUpRight size={16} /></button>
            </motion.div>
          </div>
          <div className="pillars">
            {pillars.map((pillar, index) => (
              <motion.article key={pillar.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }}>
                <span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="work" className="work section">
          <motion.div {...fadeUp} className="section-head">
            <div><p className="section-label">02 / Selected stories</p><h2>Made to stop<br /><em>the scroll.</em></h2></div>
            <p>Editorial content with a social instinct: intentional, polished and always built around a clear feeling.</p>
          </motion.div>
          <div className="work-grid">
            {work.map((item, index) => (
              <motion.article key={item.title} {...fadeUp} className={`work-item item-${index + 1}`}>
                <img src={item.image} alt="" loading="lazy" />
                <div className="work-overlay"><p>{item.category}</p><h3>{item.title}</h3><span><Play size={16} fill="currentColor" /></span></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="statement">
          <motion.div {...fadeUp}>
            <Sparkles size={28} />
            <p>Not just seen.<br /><em>Felt, saved and shared.</em></p>
          </motion.div>
        </section>

        <section id="services" className="services section">
          <motion.div {...fadeUp} className="section-head">
            <div><p className="section-label">03 / Collaborate</p><h2>Beautiful content.<br /><em>Clear purpose.</em></h2></div>
            <p>Flexible creative partnerships shaped around your campaign, audience and platform.</p>
          </motion.div>
          <div className="service-list">
            {services.map((service, index) => (
              <motion.div key={service} {...fadeUp}><span>0{index + 1}</span><h3>{service}</h3><ArrowUpRight /></motion.div>
            ))}
          </div>
          <div className="process">
            <p className="section-label">The process</p>
            <div>{["Brief", "Create", "Refine", "Publish"].map((step, index) => <p key={step}><span>{index + 1}</span>{step}</p>)}</div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <motion.div {...fadeUp} className="contact-intro">
            <p className="section-label">04 / Enquiries</p>
            <h2>Let’s make something<br /><em>worth remembering.</em></h2>
            <p>For partnerships, campaigns, events and long-term collaborations in Dubai and beyond.</p>
            <div className="contact-note"><Instagram size={18} /> Social-first creative</div>
            <div className="contact-note"><Mail size={18} /> Brand enquiries</div>
          </motion.div>
          <motion.form {...fadeUp} onSubmit={handleFormSubmit} encType="multipart/form-data">
            {formState.succeeded ? (
              <div className="success"><span><Check /></span><h3>Brief received.</h3><p>Thank you. Tahmina will be in touch soon.</p></div>
            ) : (
              <>
                <div className="form-section-title full"><span>01</span> Brand details</div>
                <label>Company / Brand Name<input name="companyBrand" required placeholder="Brand or company name" /></label>
                <label>Contact Person's Name<input name="contactName" required placeholder="Full name" /></label>
                <label>
                  Business Email Address
                  <input name="email" type="email" required placeholder="you@brand.com" />
                  <ValidationError prefix="Email" field="email" errors={formState.errors} />
                </label>
                <label>WhatsApp / Contact Number<input name="phone" type="tel" required placeholder="+971 50 000 0000" /></label>
                <label className="full">Company Website & Instagram Page<input name="websiteInstagram" type="text" placeholder="Website URL and @instagram" /></label>
                <label className="full">Industry / Business Category<input name="industry" required placeholder="Fashion, beauty, hospitality, real estate..." /></label>

                <div className="form-section-title full"><span>02</span> Collaboration</div>
                <fieldset className="collaboration-options full">
                  <legend>Type of Collaboration Required</legend>
                  <div>
                    {collaborationTypes.map((type) => (
                      <label key={type} className="check-option">
                        <input type="checkbox" name="collaborationTypes" value={type} />
                        <span><Check size={13} /></span>
                        {type}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="full">Product or Service to Be Promoted<textarea name="productService" rows="3" required placeholder="What should the campaign feature?" /></label>
                <label className="full">
                  Campaign Description & Objectives
                  <textarea name="message" rows="5" required placeholder="Describe the campaign idea, goals and key message" />
                  <ValidationError prefix="Campaign description" field="message" errors={formState.errors} />
                </label>
                <label>Target Audience<input name="targetAudience" required placeholder="Audience age, interests and market" /></label>
                <label>Campaign Location<input name="campaignLocation" required placeholder="Dubai, UAE or remote" /></label>
                <label>Preferred Promotion Date<input name="promotionDate" type="date" required /></label>
                <label>Marketing Budget<input name="budget" required placeholder="Budget or expected range" /></label>
                <label className="full">Required Deliverables<textarea name="deliverables" rows="4" required placeholder="Number of reels, stories, posts, event hours..." /></label>

                <div className="form-section-title full"><span>03</span> Supporting information</div>
                <label className="full file-field">
                  Campaign Brief / File Upload
                  <input name="campaignBrief" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png" />
                  <small>PDF, Word, PowerPoint or image files</small>
                </label>
                <label className="full">Additional Requirements<textarea name="additionalRequirements" rows="4" placeholder="Usage rights, exclusivity, deadlines or anything else we should know" /></label>

                <ValidationError errors={formState.errors} className="form-error full" />
                <button className="button submit" type="submit" disabled={formState.submitting}>
                  {formState.submitting ? "Sending enquiry..." : "Send enquiry"}
                  {!formState.submitting && <ArrowUpRight size={16} />}
                </button>
              </>
            )}
          </motion.form>
        </section>
      </main>

      <footer><button className="wordmark" onClick={() => scrollTo("home")}>TAHMINA<span>.</span></button><p>Dubai, UAE / Available worldwide</p><p>© 2026 Tahmina</p></footer>
    </div>
  );
}

export default App;
