import { useState } from "react";
const ProjectCard = ({ title, desc, tags, num, featured }) => {
  return (
    <div
        className={`group relative cursor-pointer border p-8 transition-all duration-300 
        ${featured ? "md:col-span-2" : "md:col-span-1"}
        bg-[#090909] border-[#1a1a1a] 
        hover:bg-[#0d0d0d] hover:border-[#ff6600] hover:-translate-y-1.5`}
    >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 h-10 w-10 border-t-2 border-l-2 border-[#ff6600]" />
        <div className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-[#ff660066]" />

        {/* Number watermark */}
        <div className="mb-2 font-[Bebas_Neue] text-[4rem] leading-none text-[rgba(255,102,0,0.08)]">
            {num}
        </div>

        {/* Thumbnail */}
        <div
            className={`relative mb-6 flex w-full items-center justify-center overflow-hidden 
            bg-gradient-to-br from-[#111] to-[#1a1a1a]
            ${featured ? "h-[220px]" : "h-[160px]"}`}
        >
            {/* pattern */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,102,0,0.03)_10px,rgba(255,102,0,0.03)_20px)]" />

            {/* spinning circle */}
            <div className="absolute h-[60px] w-[60px] animate-spin-slow rounded-full border-2 border-[#ff660044]" />

            {/* triangle */}
            <div className="relative h-[30px] w-[30px] bg-[#ff6600] opacity-60 [clip-path:polygon(50%_0%,100%_100%,0%_100%)]" />
        </div>

        {/* Title */}
        <div className="mb-3 flex items-start justify-between">
            <h3 className="font-[Bebas_Neue] text-[1.4rem] tracking-wide text-white">
                {title}
            </h3>
            <span className="text-lg text-[#ff6600] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
            </span>
        </div>

        {/* Description */}
        <p className="mb-5 font-serif text-sm leading-7 text-[#666]">
            {desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
                <span
                key={t}
                className="border border-[#ff660044] px-3 py-[3px] font-mono text-[0.65rem] tracking-widest text-[#ff6600]"
                >
                {t}
                </span>
            ))}
        </div>
    </div>
  );
};


const Projects = () => {
    const projects = [
    {
      title: "Portfolio",
      desc: "Built a responsive and modern portfolio using React and Tailwind CSS, showcasing projects with a clean UI and efficient component-based design.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      num: "01",
      featured: true,
    },
    {
      title: "Libriary Management System",
      desc: "Developed a Library Management System to efficiently manage book inventory, user records, and issue/return operations, featuring a clean and user-friendly interface.",
      tags: ["HTML", "CSS", "JavaScript" , "FastAPI" , "Python"],
      num: "02",
      featured: false,
    },
    {
      title: "Algorithm Visualizer",
      desc: "Developed an Algorithm Visualizer using modern web technologies to visually represent algorithm execution, improving learning through step-by-step animations and user interaction.",
      tags: ["HTML", "CSS", "JavaScript"],
      num: "03",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      desc: "Designed and implemented a multimedia sharing website enabling users to upload short videos, images, and posts, along with profile management and interactive features.",
      tags: ["React" , "Tailwind CSS" , "Node.js" , "Express" , "MongoDB" , "JWT" , "Cloudinary"],
      num: "04",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative bg-[#050505] px-8 py-32">
        {/* top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6600] to-transparent" />

        <div className="mx-auto max-w-[1100px]">
            {/* Header */}
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
                <div>
                <span className="font-mono text-xs tracking-[0.3em] text-[#ff6600]">
                {"// 03. WORK"}
                </span>
                <h2 className="mt-2 font-[Bebas_Neue] text-[clamp(2.5rem,5vw,4rem)] text-white">
                SELECTED 
                <span className="text-[#ff6600]">PROJECTS</span>
                </h2>
            </div>

            <button className="border border-[#ff660066] px-6 py-2 font-[Bebas_Neue] text-sm tracking-widest text-[#ff6600] transition hover:bg-[#ff6600] hover:text-black">
            VIEW ALL →
            </button>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;