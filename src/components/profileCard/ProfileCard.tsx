"use client"
import { FC } from "react";
import { Button } from "../ui/button";
import {
  Briefcase,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { BASE_PATH } from "@/config";

export const ProfileCard: FC = () => {
  const handleDownload = async () => {
  try {
    const pdfUrl = `${BASE_PATH}/resume.pdf`;
  
    const response = await fetch(pdfUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download error:', error);
    window.open(`${BASE_PATH}/resume.pdf`, '_blank');
  }
};
  // ***** return jsx *****
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-red-100 dark:border-red-800/30 shadow-sm">
      {/* Profile image with red glow */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-linear-to-r from-red-400 to-red-500 rounded-full blur-xl opacity-20 dark:opacity-30" />
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-md">
          <Image
            src={`${BASE_PATH}/profile.jpg`}
            alt="Komeil Yeganeh"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Name and title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Komeil Yeganeh
        </h1>
        <Badge
          variant="outline"
          className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
        >
          <Sparkles className="w-3 h-3 mr-1" />
          Available for work
        </Badge>
      </div>

      {/* Bio */}
      <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 text-center mb-6 leading-relaxed">
        Frontend Developer passionate about crafting elegant solutions and
        software engineering excellence.
      </p>

      {/* Location and info */}
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3 text-gray-600 dark:text-slate-400">
          <MapPin className="w-4 h-4 text-red-500" />
          <span className="text-xs sm:text-sm md:text-base">Isfahan, Iran</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 dark:text-slate-400">
          <Briefcase className="w-4 h-4 text-red-500" />
          <span className="text-xs sm:text-sm md:text-base">Senior Frontend Developer</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 dark:text-slate-400">
          <GraduationCap className="w-4 h-4 text-red-500" />
          <span className="text-xs sm:text-sm md:text-base">Software Engineering</span>
        </div>
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-3 mb-8">
        <Link href="https://github.com/komeilyeganeh" target="_blank">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 bg-white dark:bg-transparent"
          >
            <Github className="w-4 h-4 text-gray-600 dark:text-slate-300" />
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/komeil-yeganeh" target="_blank">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 bg-white dark:bg-transparent"
          >
            <Linkedin className="w-4 h-4 text-gray-600 dark:text-slate-300" />
          </Button>
        </Link>
        <Link href="mailto:komeilyeganeh261@gmail.com">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 bg-white dark:bg-transparent"
          >
            <Mail className="w-4 h-4 text-gray-600 dark:text-slate-300" />
          </Button>
        </Link>
      </div>

      {/* Resume button */}
        <Button onClick={handleDownload} className="w-full bg-red-500 hover:bg-red-600 dark:bg-linear-to-r dark:from-red-500 dark:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700 text-white rounded-full gap-2">
          <Download className="w-4 h-4" />
          Download Resume
        </Button>
    </div>
  );
};