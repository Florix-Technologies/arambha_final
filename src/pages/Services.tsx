import React from "react";
import { motion } from "motion/react";
import { Check, GraduationCap, Award, TrendingUp, Layers, Star, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

import hero1 from "../assets/services/hero1.png";
import skillCertImg from "../assets/services/skill-certifications.png";
import manpowerImg from "../assets/services/manpower-solutions.png";
import admissionImg from "../assets/services/admission-support.png";
import trainingImg from "../assets/services/training-workforce.png";
import placementImg from "../assets/services/placement-assistance.png";
import liveProjectImg from "../assets/services/live-projects.png";
import yourJourneyImg from "../assets/services/your journey.png";
import "./Services.css";

const SERVICES_DATA = [
  { title: "Skill Certification", description: "We offer industry-relevant courses and upskilling programs designed to enhance knowledge and employability. Learners receive recognized certifications upon successful completion.", image: skillCertImg, link: "/services/skill-certification" },
  { title: "Manpower Solutions for Companies", description: "We provide skilled and job-ready candidates to meet the manpower requirements of various organizations across industries, ensuring the right talent for the right role.", image: manpowerImg, link: "/services/manpower-solutions" },
  { title: "Admission Support for Colleges & Learners", description: "We assist students and institutions with seamless admission processes, helping learners choose the right courses and colleges for their career growth.", image: admissionImg, link: "/services/admission-support" },
  { title: "Training for Skilled & Unskilled Workforce", description: "We deliver practical training programs for both skilled and unskilled individuals, focusing on job readiness, productivity, and career development.", image: trainingImg, link: "/services/training-workforce" },
  { title: "Placement Assistance & Career Support", description: "We support learners with placement opportunities, interview preparation, and career guidance to help them secure suitable jobs.", image: placementImg, link: "/services/placement-assistance" },
  { title: "Live Projects & Industry-Driven Learning", description: "Get hands-on experience by working on real-time projects under the guidance of industry experts. Build practical skills and become job-ready with confidence.", image: liveProjectImg, link: "/services/live-projects" },
];

const TESTIMONIALS = [
  { text: "The certification program was intense but rewarding. I secured a job within 2 months of completion.", name: "Rohan Sharma", role: "Software Developer", initials: "RS", dark: true },
  { text: "Arambha provided me the mentorship I needed to switch careers into Digital Marketing. Truly grateful!", name: "Priya Verma", role: "Marketing Specialist", initials: "PV", dark: false },
  { text: "The live projects were the highlight. Dealing with real client briefs gave me immense confidence.", name: "Ankit Kapoor", role: "UI/UX Designer", initials: "AK", dark: true },
  { text: "Flexible learning meant I could study while working my part-time job. Excellent support system!", name: "Sneha Mehta", role: "Data Analyst", initials: "SM", dark: false },
  { text: "Industry-led sessions helped me understand the latest trends in DevOps that no textbook covers.", name: "Vikram Jha", role: "Cloud Engineer", initials: "VJ", dark: true },
  { text: "The resume optimization service changed everything for me. Response rate tripled in two weeks.", name: "Rahul Das", role: "Business Analyst", initials: "RD", dark: false },
  { text: "Placement support was genuine. They don't just send you links, they prepare you for the room.", name: "Neha Singh", role: "HR Executive", initials: "NS", dark: true },
  { text: "Best investment I made for my career. The network you build here is invaluable.", name: "Arjun Gupta", role: "Full Stack Dev", initials: "AG", dark: false },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F9FB]">

      {/* ── Hero Section ── redesigned */}
      <section className="services-hero" aria-label="Our Services">
        <div className="services-hero__inner max-w-7xl mx-auto px-6 py-24">
          <motion.div className="services-hero__grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>

            {/* LEFT: visual illustration */}
            <div className="hero-left">
              <div className="hero-left__blob" />

              <div className="image-orbit" aria-hidden>
                <div className="main-card">
                  <img
                    src={hero1}
                    alt="E - learning services"
                    className="main-card__img"

                  />

                  {/* <img
                    src={hero1}
                    alt="E - learning services"
                    className="
                       border-none
                       outline-none
                       shadow-none
                       bg-transparent
                     "
                  /> */}
                </div>

                {/* svg connectors */}
                <svg className="connectors" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden>
                  <path d="M150 200 C190 70, 410 70, 450 200" stroke="#7ea7ff" strokeWidth="2" fill="none" strokeDasharray="6 6" opacity="0.18" />
                  <path d="M120 240 C180 330, 420 330, 480 240" stroke="#ffd57a" strokeWidth="2" fill="none" strokeDasharray="6 6" opacity="0.12" />
                </svg>

                {/* decorative dots */}
              </div>
            </div>

            {/* RIGHT: text content */}
            <motion.div className="hero-right" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h1 className="hero-title"><span className="our">Our</span> <span className="services-gold">Services</span></h1>
              <p className="hero-sub">We don't just teach — we help you build a career. From learning to placement, we guide you at every step with practical skills and real opportunities.</p>

              <div className="hero-ctas">
                <button className="btn btn-primary" onClick={() => navigate('/programs')}>Explore Programs</button>
                <button className="btn btn-outline" onClick={() => { /* open consult modal or link */ }}>Consult an Expert</button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Arambha ── */}
      <section className="py-16 px-6 relative overflow-hidden bg-white">
        {/* subtle decorative blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2C4D8A]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#B8860B] font-bold tracking-[0.22em] uppercase text-[11px] px-4 py-1.5 rounded-full mb-6">
                Transformation Leaders
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-[#0d2350] mb-6 leading-[1.1]">
                We don't just teach —{" "}
                <span className="text-[#D4AF37]">we help you build a career.</span>
              </h2>
              <p className="text-[#3A5785] text-lg mb-6 leading-relaxed max-w-lg">
                Our comprehensive approach bridges the gap between academic learning and real-world industrial demands through mentorship and practical exposure.
              </p>
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src={yourJourneyImg}
                alt="Your Journey"
                className="w-full max-w-lg object-contain mt-4 rounded-2xl"
              />
            </motion.div>

            {/* Right — Bento Feature Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 auto-rows-auto">

              {/* Card 1 — Wide top: Industry Experts */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-2 relative overflow-hidden rounded-3xl p-8 cursor-default group border border-[#E8ECF5] hover:shadow-lg transition-all"
                style={{ background: "linear-gradient(135deg, #EEF2FB 0%, #F5F7FF 100%)", minHeight: 160 }}
              >
                <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-[#2C4D8A]/5" />
                <div className="absolute -right-2 -bottom-2 w-20 h-20 rounded-full bg-[#2C4D8A]/5" />
                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap className="w-20 h-20 text-[#2C4D8A]" />
                </div>
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">01 — Learn</p>
                <h3 className="text-2xl font-extrabold font-serif text-[#0d2350] mb-1">
                  Industry Experts
                </h3>
                <p className="text-[#3A5785] text-sm max-w-xs">Get trained by professionals with real-world experience in top companies.</p>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#B8860B] text-xs font-bold px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
                  Live Mentorship Sessions
                </div>
              </motion.div>

              {/* Card 2 — Certified Programs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="col-span-1 relative overflow-hidden rounded-3xl p-6 cursor-default group border border-[#E8ECF5] hover:shadow-lg transition-all"
                style={{ background: "linear-gradient(145deg, #F0F4FF 0%, #F8F9FF 100%)", minHeight: 180 }}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#2C4D8A]/5" />
                <Award className="w-8 h-8 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest mb-1">02 — Certify</p>
                <h3 className="text-lg font-extrabold font-serif text-[#0d2350] leading-tight">
                  Certified<br />Programs
                </h3>
                <p className="text-[#3A5785] text-sm mt-3 leading-relaxed">Earn certifications that actually matter in the job market.</p>
              </motion.div>

              {/* Card 3 — Career Support */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="col-span-1 relative overflow-hidden rounded-3xl p-6 cursor-default group border border-[#E8ECF5] hover:shadow-lg transition-all"
                style={{ background: "linear-gradient(145deg, #F0F4FF 0%, #F8F9FF 100%)", minHeight: 180 }}
              >
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#2C4D8A]/5" />
                <TrendingUp className="w-8 h-8 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest mb-1">03 — Launch</p>
                <h3 className="text-lg font-extrabold font-serif text-[#0d2350] leading-tight">
                  Career<br />Support
                </h3>
                <p className="text-[#3A5785] text-sm mt-3 leading-relaxed">Resume building, interview prep, and placement guidance.</p>
              </motion.div>

              {/* Card 4 — Wide bottom: Live Projects */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-2 relative overflow-hidden rounded-3xl p-7 cursor-default group border border-[#E8ECF5] hover:shadow-lg transition-all"
                style={{ background: "linear-gradient(135deg, #EEF2FB 0%, #F5F7FF 100%)", minHeight: 130 }}
              >
                <div className="absolute -left-8 -top-8 w-36 h-36 rounded-full bg-[#2C4D8A]/5" />
                <div className="absolute top-5 right-7 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Layers className="w-16 h-16 text-[#2C4D8A]" />
                </div>
                <div>
                  <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest mb-1">04 — Build</p>
                  <h3 className="text-xl font-extrabold font-serif text-[#0d2350]">Live Projects</h3>
                  <p className="text-[#3A5785] text-sm mt-1 max-w-sm">Work on real client briefs and build a portfolio that gets you hired.</p>
                </div>
              </motion.div>


            </div>


          </div>
        </div>
      </section>


      {/* ── Expert Solutions / Service Cards ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            CORE OFFERINGS
          </span>
          <h2 className="text-4xl font-extrabold font-serif text-[#2C4D8A] mb-16">
            Expert Solutions for Growth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#E0E3E5] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col text-left"
              >
                <div className="h-auto overflow-hidden relative bg-gradient-to-b from-[#f0f4ff] to-[#f8faff]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-image transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-[#3A5785] text-sm leading-relaxed flex-grow font-sans">{service.description}</p>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-white bg-[#2C4D8A] hover:bg-[#D4AF37] transition-all duration-300 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 px-6 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold font-serif text-[#2C4D8A] mb-4">
              What Our Learners Say
            </h2>
            <p className="text-[#3A5785] max-w-2xl mx-auto">
              Join thousands of successful professionals who started their journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border border-[#E0E3E5] hover:border-[#D4AF37] transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-[#191C1E] mb-6 italic text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: t.dark ? '#041632' : '#D4AF37' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C4D8A] text-sm">{t.name}</h4>
                    <p className="text-xs text-[#3A5785]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-[#041632] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-serif text-white mb-8"
          >
            Start Your Confidence Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#8393B5] mb-12 leading-relaxed font-sans"
          >
            Don't wait for opportunities, create them. Join Arambha Skill Solutions and unlock your professional potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="bg-white text-[#041632] px-12 py-5 rounded-xl font-extrabold text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all">
              View Programs
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-xl font-extrabold text-lg hover:bg-white hover:text-[#041632] transition-all flex items-center justify-center gap-2">
              Book Free Demo <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
