import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SOFTWARE_ENGINEERING_SKILLS } from "@/constant/info";
import { BookOpen, Code2 } from "lucide-react";
import { FC } from "react";

export const PassionSection: FC = () => {
  // ***** return jsx *****
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="w-1 h-8 bg-red-500 rounded-full" />
        What I Do
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-800/30 hover:border-red-300 dark:hover:border-red-600 transition-all duration-300">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl bg-red-500 dark:bg-linear-to-br dark:from-red-500 dark:to-red-600 flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Senior Frontend Development
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">
              Crafting responsive and performant interfaces with modern tools.
            </p>
            
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-800/30 hover:border-red-300 dark:hover:border-red-600 transition-all duration-300">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl bg-red-500 dark:bg-linear-to-br dark:from-red-500 dark:to-red-600 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Software Engineering
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">
              Passionate about clean code and scalable architectures.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
