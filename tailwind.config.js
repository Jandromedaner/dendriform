/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "particle-pulse":
          "particle-pulse 5s ease-in-out infinite, particle-drift 10s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "particle-pulse": {
          "0%, 100%": {
            opacity: "0.1",
            transform: "scale(0.5)",
          },
          "50%": {
            opacity: "0.3",
            transform: "scale(1)",
          },
        },
        "particle-drift": {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(10px, -10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(gray|blue)-(900|100|600|400|800)/,
    },
  ],
  important: true, // Force !important
  safelist: [
    "bg-[#121726]",
    "bg-[#f5f7fa]",
    "text-gray-900",
    "text-gray-200",
    "text-white",
    "bg-blue-400",
    "bg-blue-300",
    "bg-blue-600",
    "bg-blue-700",
    "text-blue-400",
    "text-blue-600",
    "bg-gray-700",
    "bg-gray-600",
    "bg-gray-100",
    "bg-gray-200",
    "text-gray-300",
    "text-gray-600",
    "bg-[#1a237e]",
    "hover:bg-[#008080]",
    "border-[rgba(191,210,224,0.2)]",
    "text-[#e0f7fa]",
    "hover:text-[#121726]",
    "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]",
    "hover:shadow-[0_4px_6px_-1px_rgba(0,128,128,0.2)]",
    "bg-[#3B82F6]",
    "hover:bg-[#2563EB]",
    "border-[rgba(59,130,246,0.2)]",
    "shadow-[0_4px_6px_-1px_rgba(59,130,246,0.2)]",
    "hover:shadow-[0_4px_6px_-1px_rgba(37,99,235,0.3)]",
  ],
};
