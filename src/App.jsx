import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          <motion.form {...fadeUp} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            {submitted ? (
              <div className="success"><span><Check /></span><h3>Brief received.</h3><p>Thank you. Tahmina will be in touch soon.</p></div>
            ) : (
              <>
                <label>Name<input name="name" required placeholder="Your name" /></label>
                <label>Email<input name="email" type="email" required placeholder="you@brand.com" /></label>
                <label>Brand / company<input name="brand" placeholder="Brand name" /></label>
                <label>Campaign type<select name="campaign" defaultValue=""><option value="" disabled>Select one</option><option>Sponsored content</option><option>UGC campaign</option><option>Event coverage</option><option>Ambassadorship</option></select></label>
                <label className="full">Tell me about the idea<textarea name="message" rows="5" required placeholder="Campaign, deliverables, timing and budget" /></label>
                <button className="button submit" type="submit">Send enquiry <ArrowUpRight size={16} /></button>
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
