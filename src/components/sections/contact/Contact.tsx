import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail } from "lucide-react";
import { FC } from "react";

export const ContactSection: FC = () => {
  // ***** return jsx *****
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="w-1 h-8 bg-red-500 rounded-full" />
        Get in Touch
      </h2>
      <Card className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-800/30 overflow-hidden">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
            Let's build something
            <span className="block text-3xl font-bold text-red-500 dark:text-red-400 mt-2">
              exceptional together
            </span>
          </h3>
          <p className="text-gray-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            Whether you have a project in mind or just want to chat, I'm always
            open to new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-500 hover:bg-red-600 dark:bg-linear-to-r dark:from-red-500 dark:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700 text-white rounded-full px-8 gap-2">
              <Mail className="w-4 h-4" />
              komeil.yeganeh@gmail.com
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 gap-2 border-red-200 dark:border-red-800 bg-white dark:bg-transparent hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-700 dark:text-white"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
