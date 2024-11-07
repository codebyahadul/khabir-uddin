
const WorkExperience = () => {
    const experiences = [
        {
            company: "Proteus",
            period: "APRIL 2022 - PRESENT",
            role: "Sr. WordPress Developer",
            description:
                "Developed custom WordPress themes, plugins, and e-commerce solutions with optimized payment integrations for improved user experience.",
        },
        {
            company: "Melewi",
            period: "August 2017 - Present",
            role: "Sr. WordPress Developer",
            description:
                "Built custom WordPress themes and plugins, focusing on responsive design and enhanced functionality for diverse client projects.",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 relative overflow-hidden">

            <div className="max-w-[1120px] mx-auto">
                <p className="text-sm uppercase tracking-wider mb-4 text-center">
                    Work Experience
                </p>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-14 text-center py-10">
                    Where I Gained Expertise
                    <br />&{" "}
                    <span className="text-green-400">Grew My Skills</span>
                </h1>

                {experiences.map((exp, index) => (
                    <div key={index} className=" group relative overflow-hidden rounded-lg transition-all duration-500">
                        {/* Overlay for vertical expansion effect */}
                        <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-out transform scale-y-0 group-hover:scale-y-100 origin-center"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col md:flex-row gap-5 md:gap-0 justify-between px-0 md:px-7 text-white group-hover:text-white transition-all duration-300 py-8 ">
                            <div className="w-full md:w-1/2 pr-0 md:pr-4">
                                <h2 className="text-2xl font-bold">
                                    {exp.company}
                                </h2>
                                <p className="text-gray-500 group-hover:text-white">{exp.period}</p>
                            </div>
                            {/* only when hover this div */}
                            <div className="md:w-1/2 pl-0 md:pl-4 cursor-pointer">
                                <h3 className="text-xl font-semibold mb-2">
                                    {exp.role}
                                </h3>
                                <p className="text-gray-400 group-hover:text-white">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                        {index < experiences.length - 1 && (
                            <hr className="border-gray-800" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default WorkExperience;