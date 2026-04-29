import { motion } from "motion/react";
import { Mail, Phone, MapPin, Shield, FileText, Users, AlertCircle, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function LegalSupport() {
  return (
    <div className="bg-white">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden px-6 py-24 bg-gradient-to-br from-[#2c4d8a]/5 via-transparent to-[#D4AF37]/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2c4d8a]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent-gold/40 bg-accent-gold/10 text-accent-gold font-semibold tracking-widest text-xs uppercase"
          >
            Legal & Support Center
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif mb-6 leading-tight tracking-tighter font-extrabold text-primary"
          >
            Your Trust, Our <span className="text-secondary">Responsibility</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed font-medium text-on-surface-variant font-sans"
          >
            Transparent policies, reliable support, and unwavering commitment to your privacy and success
          </motion.p>
        </div>
      </section>

      {/* ── Contact Support Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-200">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent-gold" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary italic">Contact Support</h2>
          </div>
          <p className="text-lg text-on-surface-variant font-sans max-w-3xl mb-12 leading-relaxed">
            We're here to help 24/7. Our dedicated support team responds to all inquiries within 24 hours and is committed to resolving your concerns with professionalism and care.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-[#F7F9FB] to-[#e1e8f2] rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 border border-slate-200">
                <Mail className="w-7 h-7 text-accent-gold" />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-3">Email Support</h3>
              <p className="text-sm text-on-surface-variant font-sans mb-4 leading-relaxed">
                Send us your queries and we'll get back to you with detailed solutions.
              </p>
              <a href="mailto:support@arambha.com" className="text-accent-gold font-semibold font-serif hover:underline flex items-center gap-2 group">
                support@arambha.com
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Phone Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-gradient-to-br from-[#F7F9FB] to-[#e1e8f2] rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 border border-slate-200">
                <Phone className="w-7 h-7 text-accent-gold" />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-3">Phone Support</h3>
              <p className="text-sm text-on-surface-variant font-sans mb-4 leading-relaxed">
                Speak directly with our support specialists for urgent matters.
              </p>
              <a href="tel:+919108032103" className="text-accent-gold font-semibold font-serif hover:underline flex items-center gap-2 group">
                +91 91080 32103
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Office Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-[#F7F9FB] to-[#e1e8f2] rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 border border-slate-200">
                <MapPin className="w-7 h-7 text-accent-gold" />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-3">Visit Us</h3>
              <p className="text-sm text-on-surface-variant font-sans leading-relaxed">
                123 Skill Street, Tech Park<br />
                Innovation Zone, India
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 bg-accent-gold/10 border border-accent-gold/30 rounded-xl"
          >
            <div className="flex gap-4 items-start">
              <Clock className="w-6 h-6 text-accent-gold mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-primary mb-2 font-serif">Support Hours</h4>
                <p className="text-sm text-on-surface-variant font-sans">
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 10:00 AM - 4:00 PM IST<br />
                  Emergency Support: Available 24/7 for critical issues
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Partner Network Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-200">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-accent-gold" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary italic">Partner Network</h2>
          </div>
          <p className="text-lg text-on-surface-variant font-sans max-w-3xl mb-12 leading-relaxed">
            We collaborate with industry leaders, educational institutions, and enterprises worldwide to create opportunities and drive mutual growth. Our partner network spans multiple sectors and geographies.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Corporate Partners",
                description: "Leading companies that trust us for talent recruitment, training solutions, and workforce development programs."
              },
              {
                title: "Educational Institutions",
                description: "Universities and colleges collaborating with us for admission support, skill development, and placement assistance."
              },
              {
                title: "Industry Associations",
                description: "Professional bodies that validate our programs and ensure industry-relevant curriculum and certifications."
              },
              {
                title: "International Partners",
                description: "Global organizations expanding our reach and enabling cross-border learning and career opportunities."
              }
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-gradient-to-br from-[#F7F9FB] to-[#e1e8f2] rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent-gold mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold font-serif text-primary mb-2">{partner.title}</h3>
                    <p className="text-sm text-on-surface-variant font-sans leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="p-8 bg-[#2c4d8a]/5 rounded-xl border border-[#2c4d8a]/20"
          >
            <h3 className="text-xl font-bold font-serif text-primary mb-4">Become Our Partner</h3>
            <p className="text-on-surface-variant font-sans mb-4 leading-relaxed">
              If you're interested in partnering with Arambha to create mutual value, expand reach, or offer joint services, we'd love to hear from you. Contact our partnerships team at partnerships@arambha.com
            </p>
            <a href="mailto:partnerships@arambha.com" className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:underline group">
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Privacy Policy Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-200">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent-gold" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary italic">Privacy Policy</h2>
          </div>
          <p className="text-lg text-on-surface-variant font-sans max-w-3xl mb-12 leading-relaxed">
            Your privacy is paramount to us. This policy outlines how we collect, use, protect, and manage your personal information.
          </p>

          <div className="space-y-8">
            {[
              {
                title: "Data Collection",
                content: "We collect personal information necessary for providing our services, including name, email, phone number, educational background, and learning preferences. This data is collected through registration forms, course enrollments, and support interactions."
              },
              {
                title: "Data Usage",
                content: "Your information is used to deliver educational services, personalize your learning experience, provide customer support, send educational updates, and improve our platforms. We never sell your personal data to third parties without explicit consent."
              },
              {
                title: "Data Security",
                content: "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your data from unauthorized access, alteration, or disclosure."
              },
              {
                title: "Cookies & Tracking",
                content: "We use cookies to enhance user experience, remember preferences, and analyze site performance. You can control cookie preferences through your browser settings. Essential cookies cannot be disabled as they are required for site functionality."
              },
              {
                title: "Third-Party Sharing",
                content: "We only share data with trusted partners when necessary for service delivery (e.g., payment processors, email service providers). All third parties are bound by confidentiality agreements and comply with data protection regulations."
              },
              {
                title: "Your Rights",
                content: "You have the right to access, correct, or delete your personal data. You can opt-out of marketing communications anytime. To exercise these rights, contact us at privacy@arambha.com with your request."
              },
              {
                title: "Policy Updates",
                content: "We may update this privacy policy periodically to reflect changes in our practices or legal requirements. We'll notify you of significant changes via email or on our website."
              },
              {
                title: "Contact Us",
                content: "For privacy-related concerns or questions, reach out to our Privacy Officer at privacy@arambha.com or call +91 91080 32103."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-gradient-to-r from-[#F7F9FB] to-[#e1e8f2] rounded-xl border border-slate-200 hover:shadow-md transition-all duration-500"
              >
                <h3 className="text-lg font-bold font-serif text-primary mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                  {item.title}
                </h3>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Terms of Service Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-accent-gold" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary italic">Terms of Service</h2>
          </div>
          <p className="text-lg text-on-surface-variant font-sans max-w-3xl mb-12 leading-relaxed">
            These terms govern your use of Arambha's services, platforms, and content. By accessing or using our services, you agree to be bound by these terms.
          </p>

          <div className="space-y-8">
            {[
              {
                title: "Acceptance of Terms",
                content: "By registering or accessing Arambha's services, you acknowledge that you have read, understood, and agree to comply with these Terms of Service. If you do not agree, please discontinue use immediately."
              },
              {
                title: "User Eligibility",
                content: "You must be at least 18 years old or have parental consent to use our services. You are responsible for ensuring that the information provided during registration is accurate and current."
              },
              {
                title: "Course Enrollment & Payment",
                content: "Course fees are non-refundable except in cases of program cancellation by Arambha or proven service failures. Refund requests must be made within 7 days of enrollment. Payment via credit card or digital wallets is secure and processed through trusted payment gateways."
              },
              {
                title: "Content & Intellectual Property",
                content: "All course materials, videos, assignments, and certifications provided by Arambha are protected intellectual property. Unauthorized reproduction, distribution, or commercial use of our content is strictly prohibited."
              },
              {
                title: "User Conduct",
                content: "You agree not to engage in harassment, hate speech, spam, or any illegal activity. You will not attempt to hack, damage, or disrupt our platforms. Violating these guidelines may result in immediate suspension."
              },
              {
                title: "Academic Integrity",
                content: "Cheating, plagiarism, or fraudulent certificate claims are serious violations. We maintain strict academic integrity standards and reserve the right to invalidate certifications and pursue legal action if necessary."
              },
              {
                title: "Limitation of Liability",
                content: "Arambha provides services on an 'as-is' basis. We are not liable for indirect damages, lost profits, or service interruptions beyond our reasonable control. Our maximum liability is limited to the fees paid in the last 3 months."
              },
              {
                title: "Termination",
                content: "We reserve the right to suspend or terminate accounts that violate these terms. Upon termination, your access to courses and certifications may be revoked."
              },
              {
                title: "Dispute Resolution",
                content: "Any disputes arising from these terms shall be governed by Indian law and resolved through arbitration in accordance with the Arbitration Act, 1996."
              },
              {
                title: "Changes to Terms",
                content: "We may update these terms periodically. Continued use of our services after changes constitutes acceptance of the new terms. We'll provide notice of significant changes."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-gradient-to-r from-[#F7F9FB] to-[#e1e8f2] rounded-xl border border-slate-200 hover:shadow-md transition-all duration-500"
              >
                <h3 className="text-lg font-bold font-serif text-primary mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                  {item.title}
                </h3>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-accent-gold/10 border border-accent-gold/30 rounded-xl"
          >
            <div className="flex gap-4 items-start">
              <AlertCircle className="w-6 h-6 text-accent-gold mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-primary mb-2 font-serif">Questions About Our Terms?</h4>
                <p className="text-sm text-on-surface-variant font-sans mb-3">
                  If you have questions or concerns about these terms, please contact our legal team at legal@arambha.com
                </p>
                <p className="text-xs text-on-surface-variant font-sans">
                  <strong>Last Updated:</strong> January 2024
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h3 className="text-4xl font-serif font-bold text-primary mb-6 italic">Still have questions?</h3>
          <p className="text-lg text-on-surface-variant font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            Our support team is ready to assist you. Reach out anytime, and we'll get back to you promptly.
          </p>
          <motion.a
            href="mailto:support@arambha.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block brand-gradient-gold text-white px-8 py-4 rounded-lg font-serif text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Contact Support Now
            <ArrowRight className="inline-block w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
