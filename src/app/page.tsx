import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";
import { LeftColumn } from "@/components/layout/LeftCol";
import { RightColumn } from "@/components/layout/RightCol";

export default function Home() {
  // ***** return jsx *****
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Geometric background shapes - white and red theme */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-linear-to-r from-red-50/50 to-red-100/50 dark:from-red-900/10 dark:to-red-800/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-125 h-125 rounded-full bg-linear-to-l from-red-50/50 to-red-100/50 dark:from-red-900/10 dark:to-red-800/10 blur-3xl" />

        <div className="absolute top-40 right-40 w-0 h-0 border-l-150 border-l-transparent border-b-260 border-b-red-100/30 dark:border-b-red-900/10 border-r-150 border-r-transparent rotate-12" />
        <div className="absolute bottom-40 left-40 w-0 h-0 border-l-200 border-l-transparent border-b-346 border-b-red-100/30 dark:border-b-red-900/10 border-r-200 border-r-transparent -rotate-12" />

        <div className="absolute top-1/3 left-1/4 w-64 h-64 border-2 border-red-100/50 dark:border-red-800/10 rotate-45 rounded-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 border-2 border-red-100/50 dark:border-red-800/10 rotate-12 rounded-2xl" />

        <svg className="absolute inset-0 w-full h-full">
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              fill="currentColor"
              className="text-red-200/30 dark:text-red-800/10"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Theme toggle */}
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-white dark:bg-slate-900 border border-red-200 dark:border-red-800/30 rounded-full shadow-sm overflow-hidden">
          <ThemeToggle />
        </div>
      </div>

      {/* Main layout - Two column */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left column - Fixed profile */}
        <LeftColumn />

        {/* Right column - Scrollable content */}
        <RightColumn />
      </div>
    </div>
  );
}
