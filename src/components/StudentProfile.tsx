import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { motion } from 'motion/react';
import { User, Mail, Phone, MapPin, Building, GraduationCap, Calendar, Edit2, Check, X, Loader2, AlertCircle } from 'lucide-react';

export default function StudentProfile() {
  const { currentUser, userData } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: userData?.name || currentUser?.displayName || '',
    phone: userData?.phone || '',
    whatsapp: userData?.whatsapp || '',
    address: userData?.address || '',
    collegeName: userData?.collegeName || '',
    yearOfPassing: userData?.yearOfPassing || '',
    highestEducation: userData?.highestEducation || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (!currentUser) return;
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        ...formData
      });
      setSuccess(true);
      setIsEditing(false);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: userData?.name || currentUser?.displayName || '',
      phone: userData?.phone || '',
      whatsapp: userData?.whatsapp || '',
      address: userData?.address || '',
      collegeName: userData?.collegeName || '',
      yearOfPassing: userData?.yearOfPassing || '',
      highestEducation: userData?.highestEducation || '',
    });
    setIsEditing(false);
    setError(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
    >
      <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <User size={20} />
          </div>
          My Profile
        </h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors text-sm"
          >
            <Edit2 size={16} />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold rounded-lg transition-colors text-sm disabled:opacity-50"
            >
              <X size={16} />
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-accent-gold hover:brightness-110 text-white font-semibold rounded-lg transition-all text-sm shadow-md disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : <Check size={16} />}
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="p-6 md:p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-2 text-sm border border-red-100">
            <AlertCircle size={16} />
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-2 text-sm border border-green-100">
            <Check size={16} />
            Profile updated successfully!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email - Always Read Only */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1">
              <Mail size={14} /> Email Address
            </label>
            <input
              type="email"
              value={currentUser?.email || ''}
              disabled
              className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-600 cursor-not-allowed"
            />
          </div>

          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1">
              <User size={14} /> Full Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-slate-200 focus:border-accent-gold focus:outline-none' : 'bg-slate-50 border border-slate-100 text-slate-700'}`}
            />
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1">
              <Phone size={14} /> Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-slate-200 focus:border-accent-gold focus:outline-none' : 'bg-slate-50 border border-slate-100 text-slate-700'}`}
            />
          </div>

          {/* WhatsApp */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1">
              <Phone size={14} /> WhatsApp Number
            </label>
            <input
              name="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-slate-200 focus:border-accent-gold focus:outline-none' : 'bg-slate-50 border border-slate-100 text-slate-700'}`}
            />
          </div>

          {/* Address */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1">
              <MapPin size={14} /> Full Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
              rows={2}
              className={`w-full px-4 py-3 rounded-xl transition-all resize-none ${isEditing ? 'bg-white border-2 border-slate-200 focus:border-accent-gold focus:outline-none' : 'bg-slate-50 border border-slate-100 text-slate-700'}`}
            />
          </div>

          {/* College */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1">
              <Building size={14} /> College/University Name
            </label>
            <input
              name="collegeName"
              type="text"
              value={formData.collegeName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-slate-200 focus:border-accent-gold focus:outline-none' : 'bg-slate-50 border border-slate-100 text-slate-700'}`}
            />
          </div>

          {/* Education */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1">
              <GraduationCap size={14} /> Highest Qualification
            </label>
            <select
              name="highestEducation"
              value={formData.highestEducation}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-slate-200 focus:border-accent-gold focus:outline-none' : 'bg-slate-50 border border-slate-100 text-slate-700 appearance-none'}`}
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

          {/* Year of Passing */}
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1">
              <Calendar size={14} /> Year of Passing
            </label>
            <input
              name="yearOfPassing"
              type="text"
              value={formData.yearOfPassing}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 rounded-xl transition-all ${isEditing ? 'bg-white border-2 border-slate-200 focus:border-accent-gold focus:outline-none' : 'bg-slate-50 border border-slate-100 text-slate-700'}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
