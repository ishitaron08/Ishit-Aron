"use client";

import { PremiumSidebar, StatusBar } from "@/components/dashboard";
import { HeroSection } from "@/components/sections/hero-dashboard";
import { AboutSection } from "@/components/sections/about-dashboard";
import { SkillsSection } from "@/components/sections/skills-dashboard";
import { ProjectsSection } from "@/components/sections/projects-dashboard";
import { ContactSection } from "@/components/sections/contact-dashboard";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0a0f1a]">
      {/* Premium Sidebar Navigation */}
      <PremiumSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top Status Bar */}
        <StatusBar className="sticky top-0 z-30" />

        {/* Grid Background */}
        <div className="fixed inset-0 grid-background opacity-30 pointer-events-none" />

        {/* Main Dashboard Content */}
        <main className="flex-1 relative z-10 p-4 lg:p-6 overflow-x-hidden">
          <div className="max-w-7xl mx-auto space-y-6">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
}
