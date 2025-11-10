export default function Hero() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Khalid Mihlar
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    Software Engineer | Educator | Problem Solver
                </p>
                <div className="flex justify-center space-x-2">
                    <div className="w-16 h-1 bg-[#047120] rounded-full"></div>
                    <div className="w-8 h-1 bg-[#047120]/50 rounded-full"></div>
                    <div className="w-4 h-1 bg-[#047120]/25 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}