import {useState , useEffect} from 'react'

function Hero() {
    const [mounted , setMounted] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(() => setMounted(true), 100);
        return () => clearTimeout(timer);
    } , []);

    // particles data
    const particles = Array.from({length : 240} , (_ , i) => ({
        id : i,
        x : Math.random() *100,
        y : Math.random() *100,
        size : Math.random() *3 +1,
        duration : Math.random() *8 +6,
        delay : Math.random() *4
    }));

    return (
        <section
        id="home"
        className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center">
            {/* Grid Background */}
            <div
            className="absolute inset-0 animate-[gridPulse_8s_ease-in-out_infinite]"
            style={{
                backgroundImage : `
                linear-gradient(rgba(255,102,0,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,102,0,0.07) 1px, transparent 1px)
                `,
                backgroundSize : "60px 60px",
            }}></div>
            {/* Glow Orbs */}
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full blur-[40px] animate-[orbFloat-10s-ease-in-out_infinite]"
            style={{ background : "radial-gradient(circle , rgba(255,102,0,0.15) 0% , transparent 70%)"}}>  </div>
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full blur-[30px] animate-[orbFloat-12s-ease-in-out_infinite_reverse]"
            style={{ background : "radial-gradient(circle , rgba(255,102,0,0.15) 0% , transparent 70%)"}}>  </div>
            {/* Particles */}
            {particles.map(p => (
                <div
                key={p.id}
                className="absolute rounded-full bg-orange-500 opacity-40"
                style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    animation: `particleFloat ${p.duration}s ${p.delay}s ease-in-out infinite`
                }}></div>
            ))}
            {/* Main Content */}
            <div className="relative z-10 mx-auto px-8 pt-20">
                <div
                className={`max-w-[750px] transition-all duration-700 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-[2px] bg-orange-500"></div>
                        <span className="font-mono text-orange-500 text-xs tracking-[0.3em]">
                            {"< AVAILABLE FOR HIRE />"}
                        </span>
                    </div>
                    
                    {/* Name */}
                    <h1 className="font-[var(--font-bebas)] text-white leading-[0.9] mb-2 text-[clamp(3.5rem,10vw,9rem)]">
                        Saiyam <br/>
                        <span className="">Jana</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 text-lg max-w-[520px] leading-relaxed mb-10 font-serif">Myself Saiyam Jana , prefinal student in Indian Institute Of Engineering Science and Technology , Shibpur . I am a passionate web developer with expertise in React and modern frontend technologies.</p>

                    {/* Buttons */}
                    <div className="flex gap-4 flex-wrap">
                        <button 
                        onClick={() => document.getElementById("projects") ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-orange-500 text-black px-8 py-3 tracking-widest font-[var(--font-bebas)] hover:bg-orange-600 hover:scale-105 transition-all duration-300">  VIEW MY WORK
                        </button>
                        <button 
                        onClick={() => document.getElementById("contact") ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="border-2 border-orange-500 text-orange-500 px-8 py-3 tracking-widest font-[var(--font-bebas)] hover:bg-orange-500/10 transition">GET IN TOUCH</button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[bounceHero_2s_infinite]">
                <span className="text-xs text-gray-500 tracking-[0.3em] font-mono">
                    SCROLL
                </span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-orange-500 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;