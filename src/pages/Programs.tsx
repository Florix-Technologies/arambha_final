import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, BookOpen, GraduationCap, Users, CheckCircle2, Loader2 } from "lucide-react";
import { getCourses, Course } from "../services/courseService";
import { useAuth } from "../context/AuthContext";
import { isUserAdmin } from "../services/adminService";

// Import program images
import spokenEnglishImg from "../assets/programs/spoken-english-mastery.png";
import foundation60Img from "../assets/programs/foundation-60.png";
import digitalMarketingImg from "../assets/programs/digital-marketing-expert.png";
import campusToCorporateImg from "../assets/programs/campus-to-corporate.png";
import hrManagementImg from "../assets/programs/hr-management.png";
import bankingFinanceImg from "../assets/programs/banking-finance.png";
import fullStackJavaImg from "../assets/programs/full-stack-java.png";
import dataScienceImg from "../assets/programs/data-science-ai.png";
import autocadImg from "../assets/programs/autocad-design.png";
import heroStudentsImg from "../assets/careers/hero-students.png";

const CATEGORIES = ["All", "Spoken English", "Schooling", "BTech", "Graduate", "Job Ready"];

const IMAGE_MAP: Record<string, any> = {
  "Spoken English Mastery": spokenEnglishImg,
  "Foundation 60": foundation60Img,
  "Digital Marketing Expert": digitalMarketingImg,
  "Campus to Corporate Program": campusToCorporateImg,
  "Human Resource Management": hrManagementImg,
  "Banking & Finance Masterclass": bankingFinanceImg,
  "Full Stack Java Developer": fullStackJavaImg,
  "Data Science & AI": dataScienceImg,
  "AutoCAD Design": autocadImg,
};

const WHY_CHOOSE_US = [
  {
    title: "Industry-aligned curriculum",
    desc: "Course content updated weekly to reflect current market demands and technology shifts.",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    title: "Practical training",
    desc: "70% project-based learning with real-world case studies and hands-on workshops.",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    title: "Placement support",
    desc: "Dedicated career desk helping you with mocks, portfolio building, and job referrals.",
    icon: <CheckCircle2 className="w-8 h-8" />
  },
  {
    title: "Experienced mentors",
    desc: "Learn directly from practitioners who have spent decades in the corporate world.",
    icon: <Users className="w-8 h-8" />
  }
];

export default function ProgramsScreen() {
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [enrolledProgramIds, setEnrolledProgramIds] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dynamicPrograms, setDynamicPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser) {
      isUserAdmin(currentUser.uid).then(setIsAdmin);
    } else {
      setIsAdmin(false);
    }
  }, [currentUser]);

  const handleEnroll = (programId: string) => {
    if (!currentUser) {
      alert("Please log in to enroll in programs.");
      return;
    }
    if (!enrolledProgramIds.includes(programId)) {
      setEnrolledProgramIds([...enrolledProgramIds, programId]);
    }
  };

  useEffect(() => {
    const fetchDynamicPrograms = async () => {
      try {
        const courses = await getCourses();
        if (!Array.isArray(courses)) {
          setDynamicPrograms([]);
          return;
        }
        const mapped = courses.map((c, idx) => ({
          id: c.id || `dynamic-${idx}`,
          title: c.title || "Untitled Course",
          category: c.category || "Job Ready",
          duration: c.duration || "Self-Paced",
          description: c.description || "Premium course content uploaded by Arambha Experts.",
          image: IMAGE_MAP[c.title] || fullStackJavaImg,
          videoUrl: c.videoId ? `https://drive.google.com/uc?export=download&id=${c.videoId}` : "https://www.w3schools.com/html/mov_bbb.mp4",
          isDynamic: true
        }));
        setDynamicPrograms(mapped);
      } catch (err) {
        console.error("Failed to load dynamic programs:", err);
        setDynamicPrograms([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDynamicPrograms();
  }, []);

  const allPrograms = dynamicPrograms.map(p => ({
    ...p,
    videoUrl: p.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"
  }));

  const filteredPrograms = selectedCategory === "All"
    ? allPrograms
    : allPrograms.filter(program => program.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-left"
            >
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-[1.1] mb-6">
                Choose the Right Program to<br />
                <span className="text-accent-gold italic">Start Your Career Journey</span>
              </h1>
              <p className="text-lg text-text-muted mb-10 max-w-xl font-lora">
                Explore skill-based, career-focused programs designed to take you from learning to earning with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-accent-gold hover:bg-accent-gold-dark text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-accent-gold/20 transition-all"
                  onClick={() => document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Programs
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all">
                  Book a Free Class
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 relative"
            >
              {/* <img
                src={heroStudentsImg}
                alt="Students learning"
                className="w-full lg:w-[140%] h-auto mt-20 lg:-ml-5 -ml-5 border-none shadow-none [mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)]"
              /> */}


              <img
  src={heroStudentsImg}
  alt="Students learning"
  className="
    w-[130%] lg:w-[150%]
    max-w-none
    h-auto
    mt-10 lg:mt-0
    -ml-10 lg:-ml-10
    -mr-10
    border-none shadow-none
    object-contain
  "
/>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="programs-section" className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-center text-4xl font-serif text-primary font-bold mb-10">Explore Our Programs</h2>
        <div className="bg-white border-2 border-accent-gold p-2 rounded-2xl flex flex-wrap justify-between md:justify-center gap-2 shadow-lg max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                selectedCategory === cat ? "bg-primary text-white" : "bg-transparent text-text-muted hover:bg-accent-gold/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Program Sections */}
      <div className="max-w-7xl mx-auto px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-accent-gold animate-spin mb-4" />
            <p className="text-primary font-serif text-xl">Loading premium programs...</p>
          </div>
        ) : filteredPrograms.length > 0 ? (
          selectedCategory === "All" ? (
            <>
              <ProgramSection
                title="Foundational & Communication Skills"
                programs={filteredPrograms.slice(0, 3)}
                onPreview={setPreviewVideo}
                isAdmin={isAdmin}
                enrolledProgramIds={enrolledProgramIds}
                onEnroll={handleEnroll}
              />
              <ProgramSection
                title="Career & Job-Ready Programs"
                programs={filteredPrograms.slice(3, 6)}
                onPreview={setPreviewVideo}
                isAdmin={isAdmin}
                enrolledProgramIds={enrolledProgramIds}
                onEnroll={handleEnroll}
              />
              <ProgramSection
                title="Technical & Professional Programs"
                programs={filteredPrograms.slice(6)}
                onPreview={setPreviewVideo}
                isAdmin={isAdmin}
                enrolledProgramIds={enrolledProgramIds}
                onEnroll={handleEnroll}
              />
            </>
          ) : (
            <ProgramSection
              title={`${selectedCategory} Programs`}
              programs={filteredPrograms}
              onPreview={setPreviewVideo}
              isAdmin={isAdmin}
              enrolledProgramIds={enrolledProgramIds}
              onEnroll={handleEnroll}
            />
          )
        ) : (
          <div className="text-center py-20">
            <p className="text-on-surface-variant text-lg">No programs found in this category.</p>
          </div>
        )}
      </div>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: '#D4AF37' }} className="py-24 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white">Why Choose Arambha Programs?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 text-center"
              >
                <div className="w-16 h-16 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3" style={{ backgroundColor: '#006CA5' }}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3 leading-tight">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed font-lora">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-accent-gold to-accent-gold-dark rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-serif text-primary font-bold mb-3">Start Your Career Journey Today</h2>
            <p className="text-sm text-primary/80 font-medium mb-7 font-lora">
              Unlock your potential with premium learning experiences designed for the modern workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                className="bg-primary text-white px-7 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                View Programs
              </button>
              <button className="bg-white text-primary px-7 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all border border-primary/10 shadow-lg text-sm">
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Video Modal */}
      {previewVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setPreviewVideo(null)}
          />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <button 
              onClick={() => setPreviewVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
            <video 
              src={previewVideo} 
              controls 
              autoPlay 
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

function ProgramSection({ 
  title, 
  programs, 
  onPreview,
  isAdmin,
  enrolledProgramIds,
  onEnroll
}: { 
  title: string, 
  programs: any[], 
  onPreview: (url: string) => void,
  isAdmin: boolean,
  enrolledProgramIds: string[],
  onEnroll: (id: string) => void
}) {
  return (
    <section className="mb-20">
      <div className="text-center mb-2">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold inline-block" style={{ color: '#02367B' }}>{title}</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {programs.map((program, i) => {
          const isEnrolled = enrolledProgramIds.includes(program?.id);
          
          return (
            <motion.div
              key={program?.id || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-transparent border-2 rounded-3xl overflow-hidden flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: '#006CA5' }}
            >
              <div className="h-60 overflow-hidden">
                <img src={program?.image || fullStackJavaImg} alt={program?.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group">
                  <span className="title-accent">{program?.title || 'Untitled Program'}</span>
                </h3>
                <p className="text-text-muted text-sm line-clamp-3 mb-8 font-lora leading-relaxed">
                  {program?.description || 'No description available.'}
                </p>
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  {isEnrolled ? (
                    <button 
                      onClick={() => onPreview(program?.videoUrl)}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 border-2 border-green-600 text-white font-bold rounded-lg hover:bg-green-700 hover:border-green-700 transition-all group"
                    >
                      View Course <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button 
                      onClick={() => onEnroll(program?.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border-2 border-accent-gold text-primary font-bold rounded-lg hover:bg-accent-gold hover:text-white transition-all group"
                    >
                      Enroll <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                  
                  {isAdmin && (
                    <button 
                      onClick={() => onPreview(program?.videoUrl)}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all"
                    >
                      Preview
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function getBadgeColor(color: string) {
  switch (color) {
    case 'blue': return 'bg-blue-50 text-blue-700 border border-blue-200';
    case 'orange': return 'bg-orange-50 text-orange-700 border border-orange-200';
    case 'green': return 'bg-green-50 text-green-700 border border-green-200';
    case 'purple': return 'bg-purple-50 text-purple-700 border border-purple-200';
    case 'gold': return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
    default: return 'bg-slate-50 text-slate-700 border border-slate-200';
  }
}
