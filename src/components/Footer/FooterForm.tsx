"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FloatingInput from "../FloatingInput";
import { addToWaitlist, WaitlistEntry, ApiError } from "@/lib/api";

export default function FooterContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.phone.trim()
    ) {
      setError("Please fill in all required fields");
      return;
    }

    // Email validation (only if provided and not empty)
    if (formData.email.trim() && formData.email.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        return;
      }
    }

    setLoading(true);
    setError(null);

    try {
      await addToWaitlist(formData as WaitlistEntry);

      // Set submitted to show loading/success state
      setSubmitted(true);

      // Show success toast after a brief delay
      setTimeout(() => {
        setShowSuccessToast(true);
      }, 500);

      // Hide toast after 3 seconds and reset form
      setTimeout(() => {
        setShowSuccessToast(false);
        setSubmitted(false); // Reset submitted state to show form again
      }, 3500);

      // Reset form immediately after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Success Toast - Fixed Position */}
      {showSuccessToast && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          className="fixed top-4 right-4 z-50 bg-gradient-to-r from-green-500/95 to-green-600/95 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 shadow-xl min-w-[300px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">Successfully joined waitlist!</p>
              <p className="text-green-100 text-xs">We&apos;ll be in touch shortly.</p>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 mx-auto md:mx-0 md:p-8 rounded-3xl shadow-2xl max-w-lg w-full text-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B6FF1A]/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#B6FF1A]/5 to-transparent rounded-full blur-xl" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-10"
        >
          <h2 className="text-xl font-bold text-white mb-2">Join Waitlist</h2>
          <p className="text-sm text-white/60">Be the first to know when Stride EV launches</p>
        </motion.div>

        {submitted && !showSuccessToast ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 font-medium py-8 text-center"
          >
            Thank you! We&apos;ll be in touch shortly.
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-sm relative z-10"
          >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-col-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FloatingInput
                id="firstName"
                label="First Name*"
                value={formData.firstName}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FloatingInput
                id="lastName"
                label="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FloatingInput
              id="email"
              type="email"
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              required={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FloatingInput
              id="phone"
              label="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
            />
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 backdrop-blur-sm"
            >
              <p className="text-red-400 text-sm text-center flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            </motion.div>
          )}

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02, backgroundColor: "#35393D" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`
              relative flex items-center justify-center font-bold px-6 py-4 rounded-xl w-full
              transition-all duration-300 uppercase tracking-[0.2em] text-[10px]
              border overflow-hidden group
              ${
                loading
                  ? "bg-white/10 border-white/20 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#B6FF1A]/20 to-[#B6FF1A]/10 border-[#B6FF1A]/30 hover:border-[#B6FF1A]/50 hover:from-[#B6FF1A]/30 hover:to-[#B6FF1A]/20 cursor-pointer shadow-lg hover:shadow-[#B6FF1A]/20"
              }
            `}
          >
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B6FF1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="relative flex items-center gap-3 text-[#F2F2F2]">
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Joining Waitlist...</span>
                </>
              ) : (
                <>
                  <span>Join Now</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              )}
            </span>
          </motion.button>
        </form>
      )}
      </motion.div>
    </>
  );
}
