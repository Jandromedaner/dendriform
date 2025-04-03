// components/ContactSection.tsx
"use client";
import { FiMail, FiInstagram, FiPenTool } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactSection({
  isDarkMode,
}: {
  isDarkMode: boolean;
}) {
  const contactMethods = [
    {
      platform: "Email",
      icon: <FiMail className="w-5 h-5" />,
      handle: "guamuo@gmail.com",
      url: "mailto:guamuo@gmail.com",
      actionText: "Send Message",
      color: isDarkMode ? "text-[#60a5fa]" : "text-[#2563eb]",
    },
    {
      platform: "Instagram",
      icon: <FiInstagram className="w-5 h-5" />,
      handle: "@dendri.form",
      url: "https://instagram.com/dendri.form",
      actionText: "DM Me",
      color: isDarkMode ? "text-[#ec4899]" : "text-[#db2777]",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${isDarkMode ? "bg-[#121726]" : "bg-[#f5f7fa]"}`}
    >
      <div className="max-w-md mx-auto px-6">
        <h2
          className={`text-4xl font-bold mb-16 text-center ${isDarkMode ? "text-[#e0f7fa]" : "text-[#121726]"} font-serif tracking-wide`}
        >
          Let&apos;s Create Together
        </h2>

        <div className="space-y-8">
          {contactMethods.map((method) => (
            <motion.div
              key={method.platform}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl transition-all duration-300 ${isDarkMode ? "bg-[#1f2937]/90 hover:bg-[#111827]" : "bg-[#ffffff]/95 hover:bg-[#ffffff]"} border ${isDarkMode ? "border-[#e0f7fa]/30" : "border-[#e5e7eb]/80"} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-5 mb-5">
                <div
                  className={`p-3.5 rounded-full ${isDarkMode ? "bg-[#1f2937]" : "bg-[#f3f4f6]"} ${method.color} shadow-md`}
                >
                  {method.icon}
                </div>
                <div>
                  <h3
                    className={`font-medium text-xl ${isDarkMode ? "text-[#e0f7fa]" : "text-[#121726]"}`}
                  >
                    {method.platform}
                  </h3>
                  <p
                    className={`text-sm ${isDarkMode ? "text-[#9ca3af]" : "text-[#6b7280]"}`}
                  >
                    {method.handle}
                  </p>
                </div>
              </div>
              <a
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 w-full text-center py-3.5 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${method.platform === "Email" ? (isDarkMode ? "bg-[#3b82f6] hover:bg-[#60a5fa] text-[#111827]" : "bg-[#2563eb] hover:bg-[#3b82f6] text-[#ffffff]") : isDarkMode ? "bg-[#ec4899] hover:bg-[#f472b6] text-[#111827]" : "bg-[#db2777] hover:bg-[#ec4899] text-[#ffffff]"} shadow-[0_4px_6px_-1px_rgba(59,130,246,0.2)] hover:shadow-[0_4px_6px_-1px_rgba(59,130,246,0.3)]`}
              >
                {method.actionText}
              </a>
            </motion.div>
          ))}

          {/* Collaboration Section */}
          <motion.div
            whileHover={{ y: -4 }}
            className={`p-8 rounded-2xl transition-all duration-300 ${isDarkMode ? "bg-[#1f2937]/90 hover:bg-[#111827]" : "bg-[#ffffff]/95 hover:bg-[#ffffff]"} border ${isDarkMode ? "border-[#e0f7fa]/30" : "border-[#a78bfa]/30"} backdrop-blur-sm`}
          >
            <div className="flex items-center gap-5 mb-5">
              <div
                className={`p-3.5 rounded-full ${isDarkMode ? "bg-[#2e1065]/30" : "bg-[#f5f3ff]"} text-[#8b5cf6] shadow-md`}
              >
                <FiPenTool className="w-5 h-5" />
              </div>
              <div>
                <h3
                  className={`font-medium text-xl ${isDarkMode ? "text-[#e0f7fa]" : "text-[#121726]"}`}
                >
                  Artistic Collaborations
                </h3>
                <p
                  className={`text-sm ${isDarkMode ? "text-[#9ca3af]" : "text-[#6b7280]"} mt-1`}
                >
                  For immersive installations
                </p>
              </div>
            </div>
            <a
              href="mailto:guamuo@gmail.com"
              className={`mt-5 w-full text-center py-3.5 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isDarkMode ? "bg-[#8b5cf6] hover:bg-[#a78bfa] text-[#111827]" : "bg-[#7c3aed] hover:bg-[#8b5cf6] text-[#ffffff]"} shadow-[0_4px_6px_-1px_rgba(139,92,246,0.2)] hover:shadow-[0_4px_6px_-1px_rgba(139,92,246,0.3)]`}
            >
              Proposal Request
            </a>
          </motion.div>
        </div>

        <p
          className={`text-center mt-16 text-sm ${isDarkMode ? "text-[#6b7280]" : "text-[#9ca3af]"} italic`}
        >
          Responses typically within 2-3 days
        </p>
      </div>
    </motion.section>
  );
}
