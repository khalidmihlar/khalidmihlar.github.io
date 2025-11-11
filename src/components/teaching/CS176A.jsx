export default function CS24({ setCurrentPage }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Back Button */}
            <button
                onClick={() => setCurrentPage('teaching')}
                className="flex items-center space-x-2 text-[#047120] hover:text-[#058a28] transition-colors mb-8"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-semibold">Back to Teaching</span>
            </button>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12">
                {/* Course Header */}
                <div className="border-b border-gray-700 pb-6 mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        CMPSC 176A - Introduction to Computer Communication Networks
                    </h1>
                    <div className="flex flex-wrap gap-2 text-gray-400">
                        <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Winter 2025</span>
                        <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Undergraduate course</span>
                        <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">University of California, Santa Barbara</span>
                        <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Computer Science</span>
                    </div>
                    <p className="text-xl text-white font-semibold mt-4">Teacher's Assistant</p>
                </div>

                {/* Course Description */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-white mb-4">Course Description</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Basic concepts in <strong>networking</strong>, the <strong>OSI Model</strong>, 
                        <strong>error detection codes</strong>,
                        <strong>flow control</strong>, 
                        <strong>flow control</strong>,
                        <strong>routing</strong>, 
                        <strong>medium access control</strong>, and <strong>high-speed</strong> networks.
                    </p>
                </div>

                {/* General Responsibilities */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">General Responsibilities</h2>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <span className="w-3 h-3 bg-[#047120] rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-300 leading-relaxed">
                                <strong>Office Hours</strong> once a week to answer students' questions and help them with
                                <strong> homework comprehension and coding assignments</strong>.
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="w-3 h-3 bg-[#047120] rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-300 leading-relaxed">
                                <strong>Lab Section</strong> once a week for <strong>3 hours</strong> where I would reteach
                                <strong> important concepts</strong> covered in class along with any
                                <strong> additional potential questions</strong>.
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="w-3 h-3 bg-[#047120] rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-300 leading-relaxed">
                                <strong>Proctored and Graded</strong> <strong>Midterm</strong> and
                                <strong> Final Exams</strong>.
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="w-3 h-3 bg-[#047120] rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-300 leading-relaxed">
                                Configured <strong>autograders</strong> using <strong>Gradescope</strong> for assignments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
