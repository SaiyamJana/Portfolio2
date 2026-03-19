import {useState , useEffect , useRef} from 'react';
import photo from "../../src/assets/photo.jpg";

function About() {
    const [visible , setVisible] = useState(false);

    const ref = useRef(null);

    useEffect(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if(e.isIntersecting) setVisible(true);
        } , {threshold : 0.2});

        if(ref.current) obs.observe(ref.current);

        return () => obs.disconnect();
    },[]);

    const corners = ["topLeft" , "bottomLeft" , "topRight" , "bottomRight"];

    return (
        <section
        id="about"
        ref={ref}
        className="relative overflow-hidden bg-[#080808] px-8 py-32">
            {/* Top border line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6600] to-transparent" />

            {/* Background watermark */}
            <div className="pointer-events-none absolute right-[-10%] top-1/2 -translate-y-1/2 select-none text-[20rem] leading-none text-[rgba(255,102,0,0.03)] font-[Bebas Neue,Impact,sans-serif]">
                ABOUT
            </div>

            {/* Content */}
            <div className="mx-auto max-w-[1100px]">
                <div className="grid items-center gap-20 md:grid-cols-2">

                    {/* Left Image */}
                    <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <div className="relative max-w-[400px]">
                            {/* Frames */}
                            <div className="absolute -inset-3 border-2 border-[#ff6600] opacity-30" />
                            <div className="absolute -inset-1.5 border border-[#ff6600] opacity-20" />

                            {/* Photo Placeholder */}
                            <div className="relative flex aspect-[3/4] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#0d0d0d]">
                                {/* Avatar */}
                                <div className="mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-br from-[#ff6600] to-[#ff4500] text-[2.5rem] font-[Bebas Neue,sans-serif] text-[#000]">
                                    AM
                                </div>

                                <div className="mb-3 h-1 w-[140px] bg-[#ff6600]" />

                                <div className="font-mono text-[0.75rem] tracking-[0.3em] text-[#555]">
                                    {/* photo */}
                                    <img src={photo} alt="About Me" className=" h-full w-full object-cover" />
                                </div>

                                {/* corner accents */}
                                {corners.map((c) => (
                                    <div
                                    key={c}
                                    className={`absolute h-6 w-6
                                        ${c.includes("top") ? "top-4 border-t-2 border-[#ff6600]" : ""}
                                        ${c.includes("bottom") ? "bottom-4 border-b-2 border-[#ff6600]" : ""}
                                        ${c.includes("Left") ? "left-4 border-l-2 border-[#ff6600]" : ""}
                                        ${c.includes("Right") ? "right-4 border-r-2 border-[#ff6600]" : ""}}`}></div>
                                ))}
                            </div>

                            {/* Experience badge */}
                            <div className="absolute -bottom-5 -right-5 bg-[#ff6600] px-5 py-3 [clip-path:polygon(12px_0%,100%_0%,100%_100%,0%_100%,0%_12px)]">
                                <span className="font-[Bebas Neue,sans-serif] text-sm tracking-widest text-black">Hello</span>
                            </div>
                        </div>
                    </div>

                    {/* Right text */}
                    <div
                    className={`transition-all duration-700 delay-200 ${
                    visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    >
                    <span className="font-mono text-xs tracking-[0.3em] text-[#ff6600]">
                    {"// 01. ABOUT ME"}
                    </span>

                    <h2 className="my-2 mb-6 font-[Bebas_Neue] text-[clamp(2.5rem,5vw,4rem)] leading-none text-white">
                    TURNING IDEAS <br />
                    <span className="text-[#ff6600]">INTO</span> <br />
                    REALITY
                    </h2>

                    <p className="mb-6 font-serif leading-8 text-[#888]">
                        Hi, I'm Saiyam — a third-year undergraduate student with a strong foundation in data structures, algorithms,networking , Operating Systems and object-oriented programming. I enjoy solving complex problems and have an interest in competitive programming, which has strengthened my analytical and logical thinking. Alongside this, I work with technologies like React and modern JavaScript to build efficient and scalable applications.
                    </p>

                    <p className="mb-8 font-serif leading-8 text-[#666]">
                        Currently based in Shibpur , Howrah , currently seeking internship opportunities for the summer of 2026. I'm eager to apply my skills in a real-world setting and contribute to impactful projects while continuing to learn and grow as a developer.
                    </p>

                    {/* Info grid */}
                    <div className="mb-8 grid grid-cols-2 gap-4">
                    {[
                        ["Location", "Shibpur, Howrah"],
                        ["Availability", "Open to Work"],
                        ["Timezone", "IST (UTC+5:30)"],
                        ["Response", "Within 24hrs"],
                        ].map(([k, v]) => (
                        <div key={k} className="border-l-2 border-[#ff660066] pl-3">
                        <div className="mb-1 font-mono text-[0.65rem] tracking-[0.2em] text-[#555]">
                            {k.toUpperCase()}
                        </div>
                    <div className="text-sm text-[#ccc]">{v}</div>
                </div>
                ))}
            </div>

            {/* Button */}
            <a 
            href="/resume.pdf" 
            download="Saiyam_Jana_Resume.pdf"
            className="inline-block border-2 border-[#ff6600] px-8 py-3 font-[Bebas_Neue] text-lg tracking-widest text-[#ff6600] transition-all hover:bg-[#ff6600] hover:text-black"
            >
            DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;