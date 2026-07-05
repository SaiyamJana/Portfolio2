import { useState, useEffect, useRef } from "react";

// Animated skill bar
const SkillBar = ({ name, percent, delay }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setWidth(percent), delay);
      }
    });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [percent, delay]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-mono text-xs text-[#aaa] tracking-wider">
          {name}
        </span>
        <span className="font-[Bebas_Neue] text-sm text-[#ff6600]">
          {width}%
        </span>
      </div>

      <div className="h-[4px] bg-[#1a1a1a] relative">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#ff4500] to-[#ff6600] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skillGroups = {
    Frontend: [
      ["React", 80],
      ["JavaScript", 90],
      ["CSS / Tailwind", 92],
    ],
    Backend: [
      ["Node.js / Express", 85],
      ["Python", 82],
      ["PostgreSQL", 90],
      ["MongoDB", 85],
    ],
    "Languages": [
        ["C/C++", 98],
        ["Java", 85],
        ["Python", 85],
        ["JavaScript", 90],
    ]
  };

  const techMarquee = [
    "React", "JavaScript", "Node.js",
    "Python", "PostgreSQL", "MongoDB","C/C++", "Java", "Tailwind", "Express"
  ];

  return (
    <section id="skills" className="relative bg-[#060606] px-6 py-32 overflow-hidden">
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6600] to-transparent" />

      {/* Watermark */}
      <div className="pointer-events-none absolute left-[-10%] top-1/2 -translate-y-1/2 select-none text-[20rem] text-[rgba(255,102,0,0.03)] font-[Bebas_Neue]">
        SKILLS
      </div>

      <div className="max-w-[1100px] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-[#ff6600]">
            {"// 02. EXPERTISE"}
          </span>
          <h2 className="mt-2 font-[Bebas_Neue] text-[clamp(2.5rem,5vw,4rem)] text-white">
            MY <span className="text-[#ff6600]">ARSENAL</span>
          </h2>
        </div>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(skillGroups).map(([category, items], ci) => (
            <div
              key={category}
              className="skill-card relative p-8 bg-[#0d0d0d] border border-[#1a1a1a]"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff6600] to-transparent" />

              <h3 className="mb-6 font-[Bebas_Neue] text-xl tracking-wider text-[#ff6600]">
                {category}
              </h3>

              {items.map(([name, pct], i) => (
                <SkillBar
                  key={name}
                  name={name}
                  percent={pct}
                  delay={ci * 200 + i * 100}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="border-y border-[#1a1a1a] py-6 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap marquee">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-2 font-[Bebas_Neue] text-sm tracking-widest text-[#444]"
              >
                <span className="w-[6px] h-[6px] bg-[#ff6600] rounded-full" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;