export default function Education() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
                <div className="mt-10 pt-8 border-t border-gray-700">
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="w-3 h-3 bg-[#047120] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <p className="text-white font-semibold">PhD in Computer Science, University of Utah</p>
                                <p className="text-gray-400">Specialization: Human Centered Computing, Focused: Computer Science Education</p>
                                <p className="text-sm text-gray-500">September 2025  -June 2030</p>
                                <p className="text-sm text-gray-500">GPA: TBD</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-3 h-3 bg-[#047120] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <p className="text-white font-semibold">MS in Computer Science, University of California, Santa Barbara</p>
                                <p className="text-gray-400">Specialization: Networking</p>
                                <p className="text-sm text-gray-500">September 2023 - December 2024</p>
                                <p className="text-sm text-gray-500">GPA: 3.92</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-3 h-3 bg-[#047120] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <p className="text-white font-semibold">BS in Computer Engineering, University of California, Santa Barbara</p>
                                <p className="text-sm text-gray-500">September 2019 - June 2023</p>
                                <p className="text-sm text-gray-500">GPA: 3.88</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}