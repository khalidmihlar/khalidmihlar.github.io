export default function Work() {
    const workExperience = [
        {
            company: "Qualcomm",
            role: "Machine Learning Software Engineering Intern",
            period: "June 2024 - September 2024",
            responsibilities: [
                "Created detailed <strong>performance logging metrics</strong> to optimize <strong>model execution</strong>, significantly enhancing the efficiency and effectiveness of <strong>machine learning</strong> processes.",
                "Leveraged <strong>Gerrit</strong> and <strong>Jira</strong> to effectively manage project workflows, ensuring timely delivery of high-quality work and seamless collaboration within cross-functional teams.",
                "Designed and implemented advanced <strong>asynchronous parallel threading</strong> solutions for executing <strong>machine learning models</strong> on <strong>CPUs</strong> as part of a reference backend, leading to improved processing speed and resource utilization."
            ]
        },
        {
            company: "Moment Lab",
            role: "Graduate/Undergraduate Research Assistant",
            period: "October 2021 - June 2024",
            responsibilities: [
                "Developed an extension using <strong>Chrome Extension Manifest v3</strong> to automate the <strong>scraping of metadata</strong> for streaming services such as <strong>YouTube</strong> and <strong>TikTok</strong>.",
                "Created servers using <strong>Flask</strong> and <strong>CORS</strong> in <strong>Python</strong> to create <strong>endpoints</strong> to store metadata, sorted and converted into <strong>.csv files</strong> for ease of use for further research.",
                "Built an application using <strong>Docker</strong> to collect <strong>PCAP</strong> and <strong>HTTP logs</strong> and collect the data listed above on any machine.",
                "Analyzed <strong>bandwidth data</strong> in real-time on the <strong>eduroam network</strong>, utilizing <strong>AI clustering</strong> to predict bandwidth requirements required for future development and infrastructure of <strong>Wide-Area Networks</strong>."
            ]
        },
        {
            company: "AVIAI Inc.",
            role: "Fullstack Software Engineering Intern",
            period: "February 2022 - September 2022",
            responsibilities: [
                "Developed their main splash page using <strong>React Bootstrap</strong>, using <strong>Minimal UI</strong> for widgets, hosted on <strong>Amazon Amplify</strong>.",
                "Created dashboard pages with <strong>Authorization</strong>, using <strong>AWS Lambda</strong> for the backend to populate dashboards with user data.",
                "Designed Internal Visualization tools for company use using <strong>Charts.js</strong>, <strong>AMCharts</strong>, and <strong>ApexCharts</strong>."
            ]
        },
        {
            company: "The Boeing Company",
            role: "Visualization and Test Engineering Intern",
            period: "June 2018 - August 2018",
            responsibilities: [
                "Developed <strong>backend data organization tools</strong> using <strong>C#</strong> to organize on-site data collected by satellites to be used in real time.",
                "Created tools to generate <strong>.csv files</strong> that have multiple organization protocols within them to be easily used by data analysts.",
                "Formed an Official Workshop internally to teach inexperienced interns <strong>Python</strong> and <strong>Object-Oriented Programming</strong>."
            ]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
                <div className="mt-10 pt-8 border-t border-gray-700">
                    <div className="space-y-8 mt-4">
                        {workExperience.map((job, index) => (
                            <div key={index} className="border-l-4 border-[#047120] pl-6 pb-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                    <p className="text-[#047120] font-semibold mt-1">{job.company}</p>
                                    <p className="text-gray-400 text-sm mt-1">{job.period}</p>
                                </div>
                                <ul className="space-y-2">
                                    {job.responsibilities.map((responsibility, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-300">
                                            <span className="w-3 h-3 bg-[#047120] rounded-full mt-1 flex-shrink-0"></span>
                                            <span
                                                className="text-sm leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: responsibility }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}