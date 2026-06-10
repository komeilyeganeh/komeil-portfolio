import { FC } from "react";
import { EXPERIENCES_DATA } from "@/constant/experiences";
import { ExperienceItem } from "./Item";

export const ExperienceSection: FC = () => {
  // ***** return jsx *****
  return (
    <section>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="w-1 h-8 bg-red-500 rounded-full" />
        Work Experience
      </h2>
      <div className="space-y-6">
        {EXPERIENCES_DATA.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};