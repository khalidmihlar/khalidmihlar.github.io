import { Linkedin, Github, Mail } from "lucide-react";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
                <div className="text-center max-w-4xl">
                    <img
                        src={profilePic}
                        alt="Khalid Mihlar"
                        className="mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#047120] shadow-lg mb-6"
                    />
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Khalid Mihlar
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Software Engineer | Educator | Problem Solver
                    </p>
                    <div className="flex justify-center space-x-2 mb-12">
                        <div className="w-16 h-1 bg-[#047120] rounded-full"></div>
                        <div className="w-8 h-1 bg-[#047120]/50 rounded-full"></div>
                        <div className="w-4 h-1 bg-[#047120]/25 rounded-full"></div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="animate-bounce">
                        <svg
                            className="w-6 h-6 mx-auto text-[#047120]"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="max-w-4xl mx-auto px-4 py-20">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                        About Me
                    </h2>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <p className="text-lg">
                            Hi, my name is <span className="text-[#047120] font-semibold">Khalid Mihlar</span>.
                            I'm currently a <span className="text-white font-semibold">PhD Student at the University of Utah</span> studying
                            Computer Science. My specialization is focused on <span className="text-white font-semibold">Human Centered Computing (HCC)</span>,
                            a broad interdisciplinary field that encompasses Human-Computer Interaction (HCI), working currently on improving
                            Computer Science Education.
                        </p>

                        <p className="text-lg">
                            I graduated from the <span className="text-white font-semibold">University of California, Santa Barbara</span> with
                            an Undergraduate Degree in Computer Engineering, and a Masters Degree in Computer Science with a specialization in Networking.
                        </p>

                        <div className="mt-10 pt-8 border-t border-gray-700">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                High Level Research Topic
                            </h3>
                            <p className="text-lg">
                                I am exploring <span className="text-white font-semibold">AI as a tool of learning within education</span>,
                                keeping in mind how students' metacognition influences how they use these tools. My goal is to understand
                                how we can properly implement the usage of AI and LLMs into education, enriching the learning experience.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Connect With Me Section */}
                <div className="mt-16 pt-10 border-t border-gray-700 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Connect With Me
                    </h3>
                    <div className="flex justify-center space-x-8">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/khalid-mihlar-416462168/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#047120] transition-colors"
                        >
                            <Linkedin className="w-8 h-8" />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/khalidmihlar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#047120] transition-colors"
                        >
                            <Github className="w-8 h-8" />
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:khalidmihlarjobs@gmail.com"
                            className="text-gray-300 hover:text-[#047120] transition-colors"
                        >
                            <Mail className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}