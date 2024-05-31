"use client"
import { ProjectTabs } from "./components/project-tabs";
import { Skills } from "./components/skills";
import { Getintouch } from "./components/getintouch";
import { Navbar } from "./components/navbar";
import { AboutMe } from "./components/aboutme";
import { InfiniteMovingCardsDemo } from "./components/testimonial";

export default function Home() {
  return (
    <main className="flex flex-col m-auto max-w-screen-xl items-center relative text-white">
        <Navbar/>
      <div id="Aboutme">
        <AboutMe/>
      </div>
      <div id="Skills">
        <Skills/>
      </div>
      <h2 className={`text-[24px] px-[20px] my-[20px] bg-gray-800 rounded-lg`}>Projects</h2>
      <div id="Projects" className="w-full">
        <ProjectTabs/>
      </div>
      <div id="Testimonials">
        <InfiniteMovingCardsDemo/>
      </div>
      <div id="Contact" className="mb-[200px]">
        <Getintouch/>
      </div>
    </main>
  );
}
