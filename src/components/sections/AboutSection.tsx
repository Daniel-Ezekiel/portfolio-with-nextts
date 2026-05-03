import React from "react";
import SectionHeading from "../SectionHeading";
import ToolBox from "../ToolBox";

const allTools = [
  "React.js", "Next.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "Node.js", "MySQL", "PHP",
  "Python", "Transformers.js", "WordPress", "Webflow", "Git/GitHub",
  "WCAG 2.1", "Agile/Scrum", "Jira/Trello", "REST APIs",
];

const AboutSection = () => {
  return (
    <section
      id='about'
      className='my-8 max-w-[120rem] mx-auto grid gap-4 items-center md:mb-[15rem] lg:grid-cols-2 xl:pr-4'
    >
      <SectionHeading headingText='About Me' className='col-span-full' />
      <p className='font-light'>
        Hi, I&apos;m Daniel, a Full-Stack Developer with a background in Mechanical Engineering and hands-on experience deploying enterprise-scale renewable energy systems. That cross-disciplinary foundation shapes how I approach software: I build for real constraints, real compliance requirements, and real users.
        <br/>
        <br/>
        My most recent work includes architecting a privacy-preserving hybrid inference system for financial contract analysis (my MSc thesis at the University of the West of Scotland), engineering a React/TypeScript air travel justification tool now accessible to 300+ UK and Ireland educational institutions through the Scottish Tech Army, and co-leading the &apos;A Renewable Scotland&apos; solar calculator that secured 2nd place in the UNIFORCE 2025 Sustainability Challenge.
        <br/>
        <br/>
        I&apos;m currently completing my MSc in Information Technology with Web Development at UWS (Expected June 2026), open to Full-Stack Developer roles, particularly in GreenTech, FinTech, RegTech, or civic tech.
        <br/>
        <br/>
        Outside of coding, you&apos;ll find me exploring AI research, reading about sustainable energy systems, or thinking about how privacy-preserving technology can be made more accessible.
      </p>

      <div className='xl:ml-10'>
        <h3 className='mt-4 mb-4 font-bold text-lg text-blue-400 text-right'>
          My Tools and Technologies
        </h3>
        <div className='flex flex-wrap justify-end gap-3'>
          {allTools.map((tool, idx) => (
            <ToolBox key={`tool-${idx}`} toolName={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
