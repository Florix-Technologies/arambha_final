import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useAuth } from "../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Loader2, ArrowRight, AlertCircle, Phone, MapPin, GraduationCap, Building } from "lucide-react";

export default function Onboarding() {
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    phone: userData?.phone || "",
    whatsapp: userData?.whatsapp || "",
    address: userData?.address || "",
    collegeName: userData?.collegeName || "",
    yearOfPassing: userData?.yearOfPassing || "",
    highestEducation: userData?.highestEducation || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    setLoading(true);
    setError(null);
    try {
      await updateDoc(doc(db, "users", currentUser.uid), {
        ...formData,
        onboardingCompleted: true,
      });
      navigate("/student/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to save details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-32 bg-surface font-sans">
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
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-100"
        >
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl text-primary mb-3 font-bold italic">Complete Your Profile</h1>
            <p className="text-sm text-on-surface-variant font-sans">
              Welcome to Arambha! Please provide a few more details to help us personalize your learning experience.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-xl text-red-700 text-sm flex items-center gap-2">
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold transition-all bg-slate-50"
                    placeholder="+91"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold uppercase text-slate-700">WhatsApp Number *</label>
                  <label className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-500 cursor-pointer hover:text-primary transition-colors">
                    <input 
                      type="checkbox" 
                      className="w-3 h-3 text-accent-gold rounded border-slate-300 focus:ring-accent-gold cursor-pointer"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData(prev => ({ ...prev, whatsapp: prev.phone }));
                        } else {
                          setFormData(prev => ({ ...prev, whatsapp: "" }));
                        }
                      }}
                    />
                    Same as phone
                  </label>
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold transition-all bg-slate-50"
                    placeholder="+91"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Address *</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-slate-400" size={20} />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold transition-all bg-slate-50"
                  placeholder="Your full address..."
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">College/University Name *</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    name="collegeName"
                    type="text"
                    value={formData.collegeName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold transition-all bg-slate-50"
                    placeholder="XYZ Institute of Technology"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Year of Passing *</label>
                <input
                  name="yearOfPassing"
                  type="text"
                  value={formData.yearOfPassing}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold transition-all bg-slate-50"
                  placeholder="e.g., 2024"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Highest Qualification *</label>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select
                  name="highestEducation"
                  value={formData.highestEducation}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold transition-all bg-slate-50"
                  required
                >
                  <option value="">-- Select Qualification --</option>
                  <option value="B.Tech/BE">B.Tech / BE</option>
                  <option value="B.Sc/BCA">B.Sc / BCA</option>
                  <option value="M.Tech/MCA">M.Tech / MCA</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Other Graduate">Other Graduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full brand-gradient-gold text-white py-4 rounded-xl font-bold shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-8 disabled:grayscale disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Saving...
                </>
              ) : (
                <>
                  Continue to Dashboard
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
