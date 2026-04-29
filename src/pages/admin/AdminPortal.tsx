import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutDashboard, PlusCircle, Settings, ShieldCheck, ChevronRight, Briefcase } from "lucide-react";
import ManageCourses from "./ManageCourses";
import CreateCourse from "./CreateCourse";
import ManageCareers from "./ManageCareers";
import CreateCareer from "./CreateCareer";
import { useLocation, useNavigate } from "react-router-dom";

type TabType = "manage" | "create" | "manage-careers" | "create-career";

export default function AdminPortal() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("manage");

  // Handle URL params if coming from a "Re-upload" link
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab && ["manage", "create", "manage-careers", "create-career"].includes(tab)) {
      setActiveTab(tab as TabType);
    } else if (params.get("courseId")) {
      setActiveTab("create");
    }
  }, [location]);

  const tabs = [
    { id: "manage", label: "Manage Courses", icon: LayoutDashboard },
    { id: "create", label: "Create Course", icon: PlusCircle },
    { id: "manage-careers", label: "Manage Careers", icon: Briefcase },
    { id: "create-career", label: "Post Job", icon: PlusCircle },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Portal Header */}
      <div className="bg-white border-b border-slate-200 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-accent-gold shadow-sm border border-accent-gold/20">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-extrabold text-primary">Admin Control Center</h1>
                <p className="text-sm text-on-surface-variant flex items-center gap-1">
                  Arambha LMS <ChevronRight size={14} /> 
                  {activeTab === "manage" && "Course Management"}
                  {activeTab === "create" && "New Course Deployment"}
                  {activeTab === "manage-careers" && "Talent Management"}
                  {activeTab === "create-career" && "Career Posting"}
                </p>
              </div>
            </div>

            {/* Tab Switcher */}
            <div className="flex p-1 bg-slate-100 rounded-xl w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-primary shadow-sm"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Portal Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "manage" && <ManageCourses />}
            {activeTab === "create" && <CreateCourse />}
            {activeTab === "manage-careers" && <ManageCareers />}
            {activeTab === "create-career" && <CreateCareer />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Quick Settings Footer (Optional Polish) */}
      <div className="fixed bottom-8 right-8">
        <button className="w-12 h-12 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
}
