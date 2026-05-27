import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, LogOut, ShieldCheck, Filter, LayoutDashboard, ChevronDown } from "lucide-react";
import logo from "../assets/ARAMBHA.svg";
import arambhaText from "../assets/arambha-text.svg";
import { useAuth } from "../context/AuthContext";
import { isUserAdmin } from "../services/adminService";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortalDropdownOpen, setIsPortalDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Dropdown states
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [expandedMobileNav, setExpandedMobileNav] = useState<string | null>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      setExpandedMobileNav(null);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (currentUser) {
      isUserAdmin(currentUser.uid).then(setIsAdmin);
    } else {
      setIsAdmin(false);
    }
  }, [currentUser]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return; // Don't hide navbar or modify menu state when mobile menu is open
      const currentY = window.scrollY;
      // Show navbar when scrolling up OR near the top
      if (currentY < 10 || currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
        setHoveredNav(null); // Close dropdown when scrolling down
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredNav(label);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredNav(null);
    }, 250); // slight delay for better UX
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { 
      path: "/about", 
      label: "About",
      sections: [
        { label: "Our Evolution", hash: "#evolution" },
        { label: "Why Choose Us", hash: "#differentiation" },
        { label: "Leadership Team", hash: "#team" },
        { label: "Mission & Vision", hash: "#mission-vision" },
        { label: "Corporate Values", hash: "#values" }
      ]
    },
    { 
      path: "/programs", 
      label: "Programs",
      sections: [
        { label: "Spoken English", hash: "?category=Spoken+English" },
        { label: "Schooling", hash: "?category=Schooling" },
        { label: "BTech", hash: "?category=BTech" },
        { label: "Graduate", hash: "?category=Graduate" },
        { label: "Job Ready", hash: "?category=Job+Ready" }
      ]
    },
    { 
      path: "/services", 
      label: "Services",
      sections: [
        { label: "Skill Certification", hash: "/skill-certification" },
        { label: "Manpower Solutions", hash: "/manpower-solutions" },
        { label: "Admission Support", hash: "/admission-support" },
        { label: "Training Workforce", hash: "/training-workforce" },
        { label: "Placement Assistance", hash: "/placement-assistance" },
        { label: "Live Projects", hash: "/live-projects" }
      ]
    },
    { path: "/gallery", label: "Gallery" },
    { 
      path: "/careers", 
      label: "Careers",
      sections: [
        { label: "Active Hiring", hash: "#active-hires" },
        { label: "Business Dev & Sales", hash: "#sales-roles" },
        { label: "Internships", hash: "#internships" }
      ]
    },
  ];

  // Handle hash navigation robustly with navbar offset
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300); // generous timeout to ensure page is loaded
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (path: string, hash: string) => {
    setHoveredNav(null);
    if (hash.startsWith("?")) return; 
    
    // If we are already on the page, the hash change might not trigger the effect 
    // if the hash is the same, so we manually trigger scroll here too
    if (location.pathname === path && location.hash === hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 50);
    }
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md shadow-sm transition-transform duration-300 ease-in-out"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-4 w-full">
        <Link to="/" className="flex items-center relative w-[200px] min-[375px]:w-[240px] min-[400px]:w-[280px] sm:w-[350px] lg:w-[450px] xl:w-[500px] h-8 min-[375px]:h-10 sm:h-12 lg:h-14 z-10 shrink-0">
          <img
            alt="Arambha Skill Solutions"
            className="absolute left-0 h-8 min-[375px]:h-10 sm:h-12 lg:h-14 w-auto object-contain scale-[1.2] min-[375px]:scale-[1.3] lg:scale-[1.6] origin-left transition-transform"
            src={logo}
          />
          <img
            src={arambhaText}
            alt="Arambha Skill Solutions"
            className="absolute left-[42px] min-[375px]:left-[55px] sm:left-[65px] lg:left-[95px] h-8 min-[375px]:h-10 sm:h-12 lg:h-14 w-auto object-contain scale-[1.2] min-[375px]:scale-[1.4] sm:scale-[1.8] lg:scale-[2.2] xl:scale-[2.5] origin-left transition-transform"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.path}
              className="relative flex items-center h-[72px]"
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className={`text-sm font-semibold tracking-tight transition-colors flex items-center ${isActive(link.path)
                  ? 'text-primary border-b-2 border-accent-gold'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
                to={link.path}
              >
                {link.label}
                {link.sections && (
                  <motion.div
                    animate={{ rotate: hoveredNav === link.label ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "linear" }}
                    className="ml-1"
                  >
                    <ChevronDown size={14} className={hoveredNav === link.label ? "text-primary" : "opacity-70"} />
                  </motion.div>
                )}
              </Link>

              {/* Dropdown */}
              {link.sections && (
                <AnimatePresence>
                  {hoveredNav === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-56 z-50 pt-2"
                    >
                      <div className="bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 p-2 overflow-hidden flex flex-col gap-1">
                        {link.sections.map((section) => {
                          const destPath = section.hash.startsWith('/') 
                            ? `/services${section.hash}` 
                            : `${link.path}${section.hash}`;
                          
                          return (
                            <Link
                              key={section.label}
                              to={destPath}
                              onClick={() => handleNavClick(link.path, section.hash)}
                              className="px-3 py-2.5 rounded-[12px] text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                            >
                              {section.label}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          {isAdmin && (
            <Link
              to="/admin/portal"
              className={`text-sm font-bold tracking-tight transition-colors pb-1 flex items-center gap-1.5 ${location.pathname.startsWith('/admin')
                ? 'text-accent-gold border-b-2 border-accent-gold'
                : 'text-accent-gold/80 hover:text-accent-gold'
                }`}
            >
              <ShieldCheck size={16} />
              Portal
            </Link>
          )}
          {currentUser && !isAdmin && (
            <Link
              to="/student/dashboard"
              className={`text-sm font-bold tracking-tight transition-colors pb-1 flex items-center gap-1.5 ${location.pathname.startsWith('/student/dashboard')
                ? 'text-accent-gold border-b-2 border-accent-gold'
                : 'text-accent-gold/80 hover:text-accent-gold'
                }`}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
          )}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          {!currentUser ? (
            <Link to="/login" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-all">Login</Link>
          ) : (
            <button
              onClick={() => {
                sessionStorage.removeItem('mockUser');
                window.dispatchEvent(new CustomEvent('mock-login', { detail: null }));
                signOut(auth).then(() => navigate('/'));
              }}
              className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 transition-all cursor-pointer"
            >
              <LogOut size={16} />
              Logout
            </button>
          )}
          <button className="brand-gradient-gold text-white px-4 lg:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-semibold shadow-md hover:brightness-110 active:scale-95 transition-all whitespace-nowrap">
            Book a Class
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-primary hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            data-lenis-prevent
            className="md:hidden border-t border-slate-100 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto overflow-x-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => {
                const hasSections = !!link.sections;
                const isExpanded = expandedMobileNav === link.label;
                
                return (
                  <div key={link.path}>
                    {hasSections ? (
                      <button
                        onClick={() => setExpandedMobileNav(isExpanded ? null : link.label)}
                        className={`w-full flex justify-between items-center px-4 py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                          isExpanded
                            ? 'bg-slate-50 text-primary'
                            : 'text-on-surface-variant hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.label}</span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="opacity-70"
                        >
                          <ChevronDown size={18} />
                        </motion.div>
                      </button>
                    ) : (
                      <Link
                        className={`block px-4 py-3 rounded-lg font-semibold transition-all ${isActive(link.path)
                          ? 'bg-accent-gold text-white'
                          : 'text-on-surface-variant hover:bg-slate-50'
                          }`}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}

                    {hasSections && (
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden pl-6 pr-4 py-1 space-y-0.5 border-l-2 border-slate-100 ml-6 mt-1 mb-2 flex flex-col"
                          >
                            <Link
                              to={link.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 text-sm font-semibold text-slate-800 hover:text-primary hover:translate-x-1 transition-all duration-200"
                            >
                              {link.label} Overview
                            </Link>
                            {link.sections.map((section) => {
                              const destPath = section.hash.startsWith('/') 
                                ? `/services${section.hash}` 
                                : `${link.path}${section.hash}`;
                              return (
                                <Link
                                  key={section.label}
                                  to={destPath}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    handleNavClick(link.path, section.hash);
                                  }}
                                  className="block py-2 text-sm font-medium text-slate-500 hover:text-primary hover:translate-x-1 transition-all duration-200"
                                >
                                  {section.label}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
              {isAdmin && (
                <div className="space-y-3">
                  <Link
                    to="/admin/portal"
                    className={`block px-4 py-3 rounded-lg font-bold transition-all border-2 border-accent-gold/20 flex items-center gap-2 ${location.pathname.startsWith('/admin')
                      ? 'bg-accent-gold text-white'
                      : 'text-accent-gold hover:bg-accent-gold/5'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShieldCheck size={20} />
                    Admin Portal
                  </Link>
                </div>
              )}
              {currentUser && !isAdmin && (
                <div className="space-y-3">
                  <Link
                    to="/student/dashboard"
                    className={`block px-4 py-3 rounded-lg font-bold transition-all border-2 border-accent-gold/20 flex items-center gap-2 ${location.pathname.startsWith('/student/dashboard')
                      ? 'bg-accent-gold text-white'
                      : 'text-accent-gold hover:bg-accent-gold/5'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LayoutDashboard size={20} />
                    Student Dashboard
                  </Link>
                </div>
              )}
              {!currentUser ? (
                <Link
                  to="/login"
                  className="block px-4 py-3 rounded-lg font-semibold text-on-surface-variant hover:bg-slate-50 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    sessionStorage.removeItem('mockUser');
                    window.dispatchEvent(new CustomEvent('mock-login', { detail: null }));
                    signOut(auth).then(() => {
                      navigate('/');
                      setIsMenuOpen(false);
                    });
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 rounded-lg font-semibold text-red-500 hover:bg-red-50 transition-all"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              )}
              <button className="w-full brand-gradient-gold text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                Book a Class
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
