import { Download } from "lucide-react";

const DevStats = () => {
  const stats = [
    {
      title: "LeetCode",
      value: "300+",
      subtitle: "Problems Solved",
    },
    {
      title: "LeetCode",
      value: "1621",
      subtitle: "Max Rating",
    },
    {
      title: "Codeforces",
      value: "996",
      subtitle: "Max Rating",
    },
  ];

  return (
    <section className="bg-orange-500 py-20 px-6 relative overflow-hidden">
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* 🔹 Stats Row */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 text-center">
          {stats.map((item, i) => (
            <div key={i}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                {item.value}
              </h2>
              <p className="text-xs tracking-widest text-black/60 mt-2 uppercase">
                {item.title}
              </p>
              <p className="text-sm text-black/80">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Featured Achievement (centered & premium) */}
        <div className="mt-16 flex justify-center">
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl max-w-xl w-full hover:scale-105 transition">
            
            <h3 className="text-xl font-semibold text-center">
              Amazon ML Summer School 2025
            </h3>

            <p className="text-sm text-gray-400 mt-3 text-center">
              Selected participant in Amazon’s ML program.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="/certificate.pdf"
                download
                className="flex items-center gap-2 bg-white text-black py-2 px-5 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
              >
                <Download size={16} />
                Download Certificate
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DevStats;