import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Teaching from './components/Teaching';
import CS32 from './components/teaching/CS32';
import CS24 from './components/teaching/CS24';
import CS176A from './components/teaching/CS176A';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'work':
        return <Work />;
      case 'education':
        return <Education />;
      case 'hobbies':
        return <Hobbies />;
      case 'projects':
        return <Projects />;
      case 'teaching':
        return <Teaching setCurrentPage={setCurrentPage} setSelectedCourse={setSelectedCourse} />;
      case 'course-detail':
        if (selectedCourse === 'cmpsc32') {
          return <CS32 setCurrentPage={setCurrentPage} />;
        }
        if (selectedCourse === 'cmpsc24') {
          return <CS24 setCurrentPage={setCurrentPage} />;
        }
        if (selectedCourse === 'cmpsc176a') {
          return <CS176A setCurrentPage={setCurrentPage} />;
        }
        return <Teaching setCurrentPage={setCurrentPage} setSelectedCourse={setSelectedCourse} />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}