export default function Navigation({ currentPage, setCurrentPage }) {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'work', label: 'Work' },
        { id: 'education', label: 'Education' },
        { id: 'hobbies', label: 'Hobbies' },
        { id: 'projects', label: 'Projects' },
        { id: 'teaching', label: 'Teaching Experience' }
    ];

    return (
        <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-white">
                            Khalid Mihlar's Portfolio
                        </h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex space-x-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentPage === item.id
                                            ? 'bg-[#047120] text-white shadow-lg shadow-[#047120]/50'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="md:hidden pb-4">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium text-left transition-all duration-300 ${currentPage === item.id
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