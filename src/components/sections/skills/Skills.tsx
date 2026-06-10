import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FRONTEND_SKILLS, SOFTWARE_ENGINEERING_SKILLS, TOOLS_WORKFLOW } from "@/constant/info";
import { Cpu, Layers, Workflow } from "lucide-react";
import { FC } from "react";

export const SkillsSection: FC = () => {
  // ***** return jsx *****
  return (
    <section>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="w-1 h-8 bg-red-500 rounded-full" />
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Frontend Skills */}
        <Card className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-800/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-red-500" />
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                Frontend
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {FRONTEND_SKILLS.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 text-xs sm:text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Engineering Skills */}
        <Card className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-800/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-red-500" />
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                Engineering
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SOFTWARE_ENGINEERING_SKILLS.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 text-xs sm:text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools & Workflow */}
        <Card className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-800/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Workflow className="w-5 h-5 text-red-500" />
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                Tools & Workflow
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS_WORKFLOW.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 text-xs sm:text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};