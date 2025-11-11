import kalePic from "../assets/kale300.jpg";

export default function Navigation({ currentPage, setCurrentPage }) {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'work', label: 'Work' },
        { id: 'education', label: 'Education' },
        { id: 'teaching', label: 'Teaching Experience' },
        // { id: 'hobbies', label: 'Hobbies' },
        // { id: 'projects', label: 'Projects' },
    ];

    return (
        <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-20 md:h-24">
                    {/* Title and Image */}
                    <div className="flex items-center space-x-4">
                        <img
                            src={kalePic}
                            alt="Khalid Mihlar"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#047120] shadow-md"
                        />
                        <h1 className="text-2xl md:text-3xl font-bold text-white">
                            Khalid Mihlar&apos;s Portfolio
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="flex space-x-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`px-5 py-3 rounded-lg text-base font-medium transition-all duration-300 ${currentPage === item.id
                                            ? 'bg-[#047120] text-white shadow-lg shadow-[#047120]/50'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white p-2">
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <div className="md:hidden pb-4">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={`px-4 py-3 rounded-lg text-base font-medium text-left transition-all duration-300 ${currentPage === item.id
                                        ? 'bg-[#047120] text-white shadow-lg shadow-[#047120]/50'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
