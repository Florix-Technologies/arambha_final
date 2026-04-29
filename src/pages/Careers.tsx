/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  Search, ShoppingCart, Globe, Bell, Heart, Menu,
  MapPin, Briefcase, GraduationCap, Banknote, ArrowRight,
  ChevronLeft, ChevronRight, MessageSquare, BookOpen,
  Target, Linkedin, Instagram, Mail, Phone, Star
} from 'lucide-react';
import { motion } from 'motion/react';
import heroStudentsImg from "../assets/careers/hero-careers.png";
import designExcellenceImg from "../assets/careers/design-excellence.png";
import impactfulCollabImg from "../assets/careers/impactful-collaboration.png";
import growthMindsetImg from "../assets/careers/growth-mindset.png";
import radicalIntegrityImg from "../assets/careers/radical-integrity.png";
import businessDevImg from "../assets/jobs/business-development-associate.png";
import digitalMarketingAssocImg from "../assets/jobs/digital-marketing-associate.png";
import brandGrowthImg from "../assets/jobs/brand-growth-executive.png";
import salesLeadImg from "../assets/jobs/sales-lead-manager.png";
import marketingStrategyImg from "../assets/jobs/marketing-strategy-manager.png";
import campusGrowthImg from "../assets/jobs/campus-growth-partner.png";
import corporateSalesImg from "../assets/jobs/corporate-sales-executive.png";
import hrManagerImg from "../assets/jobs/human-resource-manager.png";
import leadGenImg from "../assets/jobs/lead-generation-specialist.png";

// Color Palette
const COLORS = {
  primary: '#1F2F4F',
  secondary: '#2E446B',
  gold: '#D4AF37',
};

// --- Types ---
export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  image: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  link: string;
}

// --- Data ---
const CATEGORIES: Category[] = [
  { id: 'home', name: 'Home', link: '#' },
  { id: 'about', name: 'About', link: '#' },
  { id: 'programs', name: 'Programs', link: '#' },
  { id: 'services', name: 'Services', link: '#' },
  { id: 'careers', name: 'Careers', link: '#' },
];

const JOB_LISTINGS: Job[] = [
  {
    id: '1',
    title: 'Business Development Associate – Inside Sales',
    department: 'Sales',
    location: 'Bangalore',
    experience: '0–2 Years',
    salary: '₹3–5 LPA',
    description: 'Drive revenue growth through lead conversion and relationship building. Engage with prospective clients, understand their requirements, and close deals effectively.',
    image: businessDevImg,
    badge: 'Urgent Hire'
  },
  {
    id: '2',
    title: 'Digital Marketing Associate',
    department: 'Marketing',
    location: 'Bangalore',
    experience: '0–2 Years',
    salary: '₹3–5 LPA',
    description: 'Assist in executing digital marketing campaigns across platforms. Manage SEO/SEM activities, track performance metrics, and optimize campaigns to improve engagement and conversions.',
    image: digitalMarketingAssocImg,
    badge: 'New'
  },
  {
    id: '3',
    title: 'Brand Growth Executive',
    department: 'Marketing',
    location: 'Work from Home',
    experience: '0–2 Years',
    salary: '₹3–6 LPA',
    description: 'Support brand visibility and online engagement initiatives. Coordinate promotional campaigns and ensure consistent brand communication across all digital platforms.',
    image: brandGrowthImg,
  },
  {
    id: '4',
    title: 'Sales Lead / Manager',
    department: 'Sales',
    location: 'Bangalore',
    experience: '0–2 Years',
    salary: '₹3–8 LPA',
    description: 'Lead and motivate the sales team to achieve regional revenue targets. Mandatory experience in the EdTech industry required. Develop sales strategies and monitor KPIs.',
    image: salesLeadImg,
  },
  {
    id: '5',
    title: 'Marketing Strategy Manager',
    department: 'Marketing',
    location: 'Bangalore',
    experience: '0–2 Years',
    salary: '₹3–8 LPA',
    description: 'Design and execute data-driven marketing strategies aligned with business objectives. Analyze market trends and oversee campaign performance to drive sustainable growth.',
    image: marketingStrategyImg,
  }
];

const MORE_JOBS: Job[] = [
  {
    id: '6',
    title: 'Campus Growth Partner',
    department: 'Marketing',
    location: 'Work from Home',
    experience: '0–2 Years',
    salary: '₹3–5 LPA',
    description: 'Act as the company representative across college campuses. Build student networks, generate leads, and organize engagement activities to increase brand awareness.',
    image: campusGrowthImg,
  },
  {
    id: '7',
    title: 'Corporate Sales Executive (B2B)',
    department: 'Sales',
    location: 'Bangalore',
    experience: '0–2 Years',
    salary: '₹4–8 LPA',
    description: 'Identify and develop corporate partnerships to expand business opportunities. Pitch tailored solutions, close deals, and maintain long-term client relationships.',
    image: corporateSalesImg,
  },
  {
    id: '8',
    title: 'Human Resource Manager',
    department: 'Human Resources',
    location: 'Bangalore, India',
    experience: '1–4 Years',
    salary: '₹3–6 LPA',
    description: 'We are looking for an experienced Human Resource Manager with mandatory experience in the EdTech industry. Lead recruitment, employee engagement, performance management, and HR operations.',
    image: hrManagerImg,
  },
  {
    id: '9',
    title: 'Lead Generation Specialist',
    department: 'Marketing / Sales',
    location: 'Bangalore, India',
    experience: '1–2 Years',
    salary: '₹3–5 LPA',
    description: 'We are seeking a results-driven Lead Generation Specialist with mandatory experience in the EdTech industry. Generate high-quality leads through digital campaigns, outbound strategies, and data-driven marketing initiatives.',
    image: leadGenImg,
  },
  {
    id: '10',
    title: 'Marketing Graduate Intern',
    department: 'Marketing',
    location: 'Remote',
    experience: 'Fresher',
    salary: '₹15,000 / Month',
    description: 'Learn the ropes of digital marketing in a fast-paced environment.',
    image: digitalMarketingAssocImg,
  },
  {
    id: '11',
    title: 'Talent Acquisition Intern',
    department: 'HR',
    location: 'Bangalore / Hybrid',
    experience: 'Academic Credit / Fresher',
    salary: '₹10,000 / Month',
    description: 'Help us grow the Arambha family by identifying great talent.',
    image: hrManagerImg,
  }
];

// --- Helper Components ---

const WelcomeHero = () => (
  <div className="relative pt-6 pb-20 overflow-hidden font-sans">
    <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
      <div className="flex-1 z-10 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-serif italic" style={{ color: COLORS.primary }}>
          From Learning <br />
          to <span style={{ color: COLORS.gold }}>Earning</span> – <br />
          Start Your <br />
          Journey Today.
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed font-medium font-sans">
          Speak confidently, gain skills, and step into your career. We bridge the gap between where you are and where you want to be with academic excellence.
        </p>
        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start mb-12">
          <button className="text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all font-serif italic" style={{ backgroundColor: COLORS.gold }}>
            Book a Class <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white border border-gray-200 px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm font-serif italic" style={{ color: COLORS.primary }}>
            <MessageSquare className="w-4 h-4 text-green-500" />
            WhatsApp Now
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-8 justify-center md:justify-start font-sans">
          {[
            { icon: BookOpen, title: 'Daily Practice', sub: 'Native language tailored' },
            { icon: Briefcase, title: 'Live Projects', sub: 'Real career opportunities' },
            { icon: Target, title: 'Outcome-Driven', sub: 'Measurable results' }
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${COLORS.gold}1A`, color: COLORS.gold }}>
                <feature.icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold font-serif italic" style={{ color: COLORS.primary }}>{feature.title}</div>
                <div className="text-[10px] text-gray-400 font-medium font-sans">{feature.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative flex items-center justify-center">
        <img
          src={heroStudentsImg}
          alt="Arambha Team"
          className="w-[140%] h-auto object-contain max-w-none -mt-20"
        />
      </div>
    </div>
  </div>
);

const JobFilter = ({ onSearch }: { onSearch: (filters: { search: string; location: string; department: string; experience: string }) => void }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('All Locations');
  const [department, setDepartment] = useState('Department');
  const [experience, setExperience] = useState('Experience');

  const handleSearch = () => {
    onSearch({
      search: searchTerm,
      location: location === 'All Locations' ? '' : location,
      department: department === 'Department' ? '' : department,
      experience: experience === 'Experience' ? '' : experience
    });
  };

  return (
    <div className="relative -mt-10 mb-16 z-20 px-4 font-sans">
      <div className={`bg-white p-2 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row items-stretch transition-all duration-300`} style={isFocused ? { boxShadow: `0 0 0 4px ${COLORS.gold}33, 0 10px 40px rgba(0,0,0,0.08)`, transform: 'translateY(-2px)' } : {}}>
        <div className="flex-grow flex items-center px-4 border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[60px]">
          <Search className="w-5 h-5 mr-3 transition-colors" style={{ color: isFocused ? COLORS.gold : '#9ca3af' }} />
          <input
            type="text"
            placeholder="Search for your dream role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-gray-400 font-sans"
            style={{ color: COLORS.primary }}
          />
        </div>
        <div className="flex flex-col sm:flex-row flex-shrink-0">
          <div className="flex-1 lg:w-[160px] flex items-center px-4 border-b sm:border-b-0 sm:border-r border-gray-100 min-h-[60px] relative">
            <MapPin className="w-4 h-4 mr-2" style={{ color: COLORS.gold }} />
            <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-transparent text-xs font-bold text-gray-700 outline-none appearance-none cursor-pointer pr-6 font-sans">
              <option>All Locations</option>
              <option>Bangalore</option>
              <option>Remote</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Hyderabad</option>
              <option>Pune</option>
            </select>
            <div className="absolute right-4 pointer-events-none">
              <div className="w-3 h-3 border-r-2 border-b-2 border-gray-400 rotate-45 mb-1"></div>
            </div>
          </div>
          <div className="flex-1 lg:w-[160px] flex items-center px-4 border-b sm:border-b-0 sm:border-r border-gray-100 min-h-[60px] relative">
            <Briefcase className="w-4 h-4 mr-2" style={{ color: COLORS.gold }} />
            <select value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full bg-transparent text-xs font-bold text-gray-700 outline-none appearance-none cursor-pointer pr-6 font-sans">
              <option>Department</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>HR</option>
              <option>Strategy</option>
              <option>Partnerships</option>
            </select>
            <div className="absolute right-4 pointer-events-none">
              <div className="w-3 h-3 border-r-2 border-b-2 border-gray-400 rotate-45 mb-1"></div>
            </div>
          </div>
          <div className="flex-1 lg:w-[160px] flex items-center px-4 border-b sm:border-b-0 sm:border-r border-gray-100 min-h-[60px] relative">
            <GraduationCap className="w-4 h-4 mr-2" style={{ color: COLORS.gold }} />
            <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full bg-transparent text-xs font-bold text-gray-700 outline-none appearance-none cursor-pointer pr-6 font-sans">
              <option>Experience</option>
              <option>Fresher</option>
              <option>0-2 Years</option>
              <option>1-3 Years</option>
              <option>2-4 Years</option>
              <option>2-5 Years</option>
              <option>3-5 Years</option>
              <option>4-6 Years</option>
              <option>5+ Years</option>
            </select>
            <div className="absolute right-4 pointer-events-none">
              <div className="w-3 h-3 border-r-2 border-b-2 border-gray-400 rotate-45 mb-1"></div>
            </div>
          </div>
        </div>
        <button onClick={handleSearch} className="text-white lg:px-10 px-4 min-h-[60px] lg:min-h-0 rounded-xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 m-1 font-serif italic" style={{ backgroundColor: COLORS.primary }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.gold} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.primary}>
          Search
        </button>
      </div>
    </div>
  );
};

const CourseCard = ({ course }: { course: Job }) => (
  <motion.div
    className="flex-shrink-0 w-full flex flex-col gap-3 p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 font-sans"
    whileHover={{ y: -8 }}
    style={{ backgroundColor: '#F3F6FF' }}
  >
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gray-50">
      <motion.img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
        referrerPolicy="no-referrer"
      />
      {course.badge && (
        <div className="absolute top-2 right-2 z-10">
          <span className="text-[10px] text-white font-black px-2 py-1 rounded shadow-sm uppercase tracking-widest font-sans" style={{ backgroundColor: COLORS.gold }}>
            {course.badge}
          </span>
        </div>
      )}
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-[15px] font-extrabold line-clamp-2 leading-snug min-h-[2.5rem] font-serif italic" style={{ color: COLORS.primary }}>
        {course.title}
      </h3>
      <div className="flex flex-col gap-1.5 border-t border-gray-50 pt-2 font-sans">
        {[
          { icon: MapPin, text: course.location },
          { icon: Briefcase, text: course.department },
          { icon: GraduationCap, text: course.experience },
          { icon: Banknote, text: course.salary, bold: true }
        ].map((info, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px]" style={{ color: info.bold ? COLORS.primary : '#4b5563', fontWeight: info.bold ? 'bold' : 'normal' }}>
            <info.icon className="w-3.5 h-3.5" style={{ color: COLORS.gold }} />
            <span>{info.text}</span>
          </div>
        ))}
      </div>
      <button className="mt-2 w-full text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm group font-serif italic" style={{ backgroundColor: COLORS.primary }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.secondary} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.primary}>
        Apply Now
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const CourseCarousel = ({ title, subtitle, courses, id }: { title?: string, subtitle?: string, courses: Job[], id: string }) => {
  return (
    <section className="py-8 font-sans">
      {title && (
        <div className="mb-4">
          <h2 className="text-2xl font-extrabold tracking-tight font-serif italic" style={{ color: COLORS.primary }}>{title}</h2>
          {subtitle && (
            <p className="text-sm text-gray-500 font-medium mt-1">
              {subtitle.includes('"') ? (
                <>
                  {subtitle.split('"')[0]}
                  <span className="font-bold italic" style={{ color: COLORS.gold }}>"{subtitle.split('"')[1]}"</span>
                  {subtitle.split('"')[2]}
                </>
              ) : subtitle}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 pt-2">
        {courses.map(c => (
          /* @ts-ignore - key is reserved */
          <CourseCard key={c.id} course={c} />
        ))}
        {courses.length === 0 && (
           <>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-[320px] rounded-2xl border border-gray-100 flex flex-col p-4 animate-pulse" style={{ backgroundColor: '#F3F6FF' }}>
                  <div className="w-full aspect-[16/10] bg-gray-50 rounded-lg mb-4" />
                  <div className="h-4 bg-gray-50 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-50 rounded w-1/2" />
                </div>
              ))}
           </>
        )}
      </div>
    </section>
  );
};

const FeaturedCourse = () => (
  <section className="py-12 font-sans">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold font-serif italic" style={{ color: COLORS.primary }}>Opportunity Spotlight</h2>
      <button className="text-sm font-bold hover:underline font-sans" style={{ color: COLORS.gold }}>View all roles</button>
    </div>
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row gap-0 transition-all cursor-pointer group" onMouseEnter={(e) => e.currentTarget.style.borderColor = `${COLORS.gold}4D`} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}>
      <div className="relative w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden flex-shrink-0" style={{ backgroundColor: COLORS.primary }}>
        <img src={leadGenImg} alt="Lead" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${COLORS.primary}CC, transparent)` }} />
        <div className="absolute bottom-6 left-6">
          <span className="text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-2 block w-fit font-sans" style={{ backgroundColor: COLORS.gold }}>Featured Role</span>
          <div className="text-white font-bold text-xl font-serif italic">Lead Generation Specialist</div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 lg:p-12 gap-4 flex-grow">
        <h3 className="text-3xl font-extrabold leading-tight mb-2 font-serif italic" style={{ color: COLORS.primary }}>Strategic Lead Generation Lead (SaaS)</h3>
        <p className="text-base text-gray-600 font-medium max-w-xl font-sans">We're looking for a high-impact individual to lead market expansion efforts. Focus on identifying business opportunities and pipelines.</p>
        <div className="grid grid-cols-2 gap-4 max-w-sm font-sans">
           {[{l:'Salary',v:'₹15 - ₹22 LPA'},{l:'Experience',v:'4+ Years'},{l:'Location',v:'Bangalore'},{l:'Type',v:'Full-time'}].map(item => (
             <div key={item.l} className="flex flex-col">
               <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">{item.l}</span>
               <span className="text-sm font-bold" style={{ color: COLORS.primary }}>{item.v}</span>
             </div>
           ))}
        </div>
        <div className="flex items-center gap-4 mt-2 font-serif italic">
          <button className="text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all" style={{ backgroundColor: COLORS.primary }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.secondary} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.primary}>Apply Now</button>
          <button className="font-bold transition-colors" style={{ color: COLORS.primary }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.gold} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.primary}>Role Overview</button>
        </div>
      </div>
    </div>
  </section>
);

const GoogleSection = () => (
  <section className="pt-24 pb-0 font-sans">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="font-black tracking-widest text-xs uppercase mb-4 font-sans" style={{ color: COLORS.gold }}>Inside Arambha</h2>
      <h3 className="text-4xl font-black mb-6 font-serif italic" style={{ color: COLORS.primary }}>Our Culture & Values</h3>
      <p className="text-gray-500 font-medium text-lg leading-relaxed font-sans">At Arambha, we values bold thinkers who aren't afraid to redefine the possible.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "Design Excellence", desc: "Pushing boundaries.", img: designExcellenceImg },
        { title: "Impactful Collaboration", desc: "Working as one team.", img: impactfulCollabImg },
        { title: "Growth Mindset", desc: "invest in evolution.", img: growthMindsetImg },
        { title: "Radical Integrity", desc: "Transparency & trust.", img: radicalIntegrityImg }
      ].map((v, i) => (
        <motion.div key={i} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group" whileHover={{ y: -10 }}>
          <div className="h-48 overflow-hidden relative">
             <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="p-6">
            <h4 className="text-lg font-black mb-1 font-serif italic" style={{ color: COLORS.primary }}>{v.title}</h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed font-sans">{v.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const allJobs = [...JOB_LISTINGS, ...MORE_JOBS];

  const handleSearch = (filters: { search: string; location: string; department: string; experience: string }) => {
    let results = allJobs;

    // Filter by search term
    if (filters.search) {
      results = results.filter(job =>
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.department.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Filter by location
    if (filters.location) {
      results = results.filter(job =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by department
    if (filters.department) {
      results = results.filter(job =>
        job.department.toLowerCase() === filters.department.toLowerCase()
      );
    }

    // Filter by experience
    if (filters.experience) {
      results = results.filter(job =>
        job.experience.toLowerCase().includes(filters.experience.toLowerCase())
      );
    }

    setFilteredJobs(results);
    setIsSearchActive(filters.search !== '' || filters.location !== '' || filters.department !== '' || filters.experience !== '');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fb] font-sans" id="app-root" style={{ color: COLORS.primary }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Lora:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');

        :root {
          --font-sans: "Manrope", ui-sans-serif, system-ui, sans-serif;
          --font-serif: "Lora", serif;
        }

        .font-serif {
          font-family: var(--font-serif), serif;
        }

        .font-sans {
          font-family: var(--font-sans), sans-serif;
        }
      `}} />
      <main className="flex-grow max-w-[1340px] mx-auto px-4 lg:px-6 w-full overflow-x-hidden pb-0 pt-4">
        <WelcomeHero />
        <JobFilter onSearch={handleSearch} />

        {isSearchActive ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold tracking-tight font-serif italic" style={{ color: COLORS.primary }}>
                Search Results ({filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found)
              </h2>
              <button
                onClick={() => { setIsSearchActive(false); setFilteredJobs([]); }}
                className="text-sm font-bold hover:underline font-sans"
                style={{ color: COLORS.gold }}
              >
                Clear filters
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 pt-2">
              {filteredJobs.map(job => (
                <CourseCard key={job.id} course={job} />
              ))}
              {filteredJobs.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg font-medium font-sans">No jobs found matching your criteria. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <CourseCarousel id="active-hires" title="Active Hiring" subtitle="Top roles based on your profile" courses={JOB_LISTINGS} />
            <CourseCarousel id="sales-roles" title="Business Development & Sales" subtitle='Join our high-performance growth engine' courses={MORE_JOBS.filter(j => j.department === 'Sales' || j.department === 'Marketing / Sales')} />
            <CourseCarousel id="internships" title="Campus Partnerships & Internships" subtitle="Start your career journey with us" courses={MORE_JOBS.filter(j => j.experience.toLowerCase().includes('fresher') || j.experience.toLowerCase().includes('student'))} />
          </>
        )}

        <GoogleSection />
      </main>
    </div>
  );
}
