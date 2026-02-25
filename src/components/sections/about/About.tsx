import { ABOUT_SUB_TITLE } from "@/constant/info";
import { FC } from "react";

export const AboutSection: FC = () => {
  // ***** return jsx *****
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="w-1 h-8 bg-red-500 rounded-full" />
        About Me
      </h2>
      <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-lg">
        {ABOUT_SUB_TITLE}
      </p>
    </section>
  );
};
