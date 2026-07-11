import { FC } from "react";
import { AboutSection } from "../sections/about/About";
import { PassionSection } from "../sections/passion/Passion";
import { SkillsSection } from "../sections/skills/Skills";
import { ExperienceSection } from "../sections/experience/Experience";
import { ContactSection } from "../sections/contact/Contact";
import { Footer } from "./Footer";

export const RightColumn: FC = () => {
  // ***** return jsx *****
  return (
    <div className="lg:ml-[40%] lg:w-3/5 p-3 lg:p-12 space-y-10">
      {/* About section */}
      <AboutSection />

      {/* Passion cards */}
      <PassionSection />

      {/* Skills section */}
      <SkillsSection />

      {/* Experience section */}
      <ExperienceSection />

      {/* Projects section */}
      {/* <ProjectsSection /> */}

      {/* Contact section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};
