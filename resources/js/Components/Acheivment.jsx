import React from "react";

const Achievement = () => {
  const achievements = [
    { value: "9+", label: "Years\nExperience", color: "text-purple-500" },
    { value: "4+", label: "Already\nRunning Projects", color: "text-red-600" },
    { value: "100+", label: "Happy\nComplete Projects", color: "text-yellow-500" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Achievements */}
        <div className="flex w-full lg:w-3/5 justify-between items-center gap-6">
          {achievements.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className="w-px h-12 bg-gray-300 hidden sm:block" />}
              <div className="flex flex-col items-center text-center space-y-1 flex-1">
                <h2 className={`text-3xl font-bold ${item.color}`}>{item.value}</h2>
                <p className="text-gray-700 text-sm whitespace-pre-line leading-snug">{item.label}</p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Description */}
        <div className="flex flex-col md:flex-row items-start gap-4 max-w-md">
          <h3 className="text-2xl md:text-3xl font-bold text-green-600">
            My Best <br className="hidden md:block" /> Service
          </h3>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            I mainly provide services for mobile app dashboards, websites, iOS, and any kind of UI design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
