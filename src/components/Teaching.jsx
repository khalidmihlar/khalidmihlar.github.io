import { useState } from "react";

export default function Teaching({ setCurrentPage, setSelectedCourse }) {
    const courses = [
        {
            id: "cmpsc32",
            code: "CMPSC 32",
            title: "Object Oriented Design and Implementation",
            role: "Teacher's Assistant",
            level: "Undergraduate Course",
            institution: "University of California, Santa Barbara",
            department: "Computer Science",
            year: "Fall 2025",
            description: "Advanced topics in object-oriented computing. Topics include encapsulation, data hiding, inheritance, polymorphism, compilation, linking and loading, memory management, and debugging; recent advances in design and development tools, practices, libraries, and operating system support."
        },
        {
            id: "cmpsc24",
            code: "CMPSC 24",
            title: "Problem Solving with Computers II",
            role: "Teacher's Assistant",
            level: "Undergraduate Course",
            institution: "University of California, Santa Barbara",
            department: "Computer Science",
            year: "Spring 2025",
            description: "Intermediate building blocks for solving problems using computers. Topics include intermediate object-oriented programming, data structures, object-oriented design, algorithms for manipulating these data structures and their run-time analyses. Data structures introduced include stacks, queues, lists, trees, and sets."
        },
        {
            id: "cmpsc176a",
            code: "CMPSC 176A",
            title: "Introduction to Computer Communication Networks",
            role: "Teacher's Assistant",
            level: "Undergraduate Course",
            institution: "University of California, Santa Barbara",
            department: "Computer Science",
            year: "Winter 2025",
            description: "Basic concepts in networking, the OSI model, error detection codes, flow control, routing, medium access control, and high-speed networks."
        }
    ];

    const handleCourseClick = (courseId) => {
        console.log('Course clicked:', courseId); // Debug log
        setSelectedCourse(courseId);
        setTimeout(() => {
            setCurrentPage('course-detail');
        }, 0);
    };


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Teaching Experience</h2>
                <div className="mt-10 pt-8 border-t border-gray-700">

                    <div className="space-y-6 mt-8">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                onClick={() => handleCourseClick(course.id)}
                                className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-[#047120] hover:shadow-lg hover:shadow-[#047120]/20 hover:transform hover:scale-[1.02]"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {course.code} - {course.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {course.year} • {course.role} • {course.level} • {course.institution} • {course.department}  
                                        </p>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-[#047120] flex-shrink-0 ml-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed mt-4">
                                    {course.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}