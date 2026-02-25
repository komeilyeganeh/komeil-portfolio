"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PROJECTS_DATA } from "@/constant/projects";
import { ProjectType } from "@/types/project.types";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

export const ProjectsSection: FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  // ***** return jsx *****
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="w-1 h-8 bg-red-500 rounded-full" />
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project) => (
            <Card
              key={project.id}
              onClick={() => openModal(project)}
              className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-800/30 hover:border-red-300 dark:hover:border-red-600 transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="aspect-video bg-red-50 dark:bg-linear-to-br dark:from-red-950/50 dark:to-red-900/50 rounded-lg mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-200 dark:text-red-500/30">
                      {project.title[0]}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Badge className="bg-white text-red-600 border-0">
                      Click for details
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Project Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-red-100 dark:border-red-800/30">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-slate-400">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                <div className="aspect-[16/9] bg-red-50 dark:bg-linear-to-br dark:from-red-950/50 dark:to-red-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-4xl font-bold text-red-200 dark:text-red-500/30">
                    {selectedProject.title[0]}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-500 dark:text-red-400">
                      Challenge
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-slate-400">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-500 dark:text-red-400">
                      Solution
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-slate-400">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-slate-500">
                      Team
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {selectedProject.team}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-slate-500">
                      Duration
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {selectedProject.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-slate-500">
                      Role
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {selectedProject.role}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <Link href={selectedProject.liveUrl} target="_blank">
                      <Button className="bg-red-500 hover:bg-red-600 dark:bg-linear-to-r dark:from-red-500 dark:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700 text-white gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  {selectedProject.githubUrl && (
                    <Link href={selectedProject.githubUrl} target="_blank">
                      <Button
                        variant="outline"
                        className="gap-2 border-red-200 dark:border-red-800 bg-white dark:bg-transparent hover:bg-red-50 dark:hover:bg-red-950/30"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
