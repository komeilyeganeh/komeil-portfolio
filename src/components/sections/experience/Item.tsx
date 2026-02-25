import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExperienceType } from "@/types/experience.types";
import { Award, Building, Calendar, MapPin } from "lucide-react";
import { FC } from "react";

export const ExperienceItem: FC<{ exp: ExperienceType }> = ({ exp }) => {
  // ***** return jsx *****
  return (
    <Card
      className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-800/30 hover:border-red-300 dark:hover:border-red-600 transition-all duration-300"
    >
      <CardContent className="p-6">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 mt-1">
              <Building className="w-4 h-4 text-red-500" />
              <span className="text-sm">{exp.company}</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm">{exp.location}</span>
            </div>
          </div>
          <Badge
            variant="outline"
            className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 flex items-center gap-1"
          >
            <Calendar className="w-3 h-3" />
            {exp.period}
          </Badge>
        </div>

        <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">
          {exp.description}
        </p>

        <div className="space-y-2 mb-4">
          {exp.achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-2">
              <Award className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600 dark:text-slate-400">
                {achievement}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
