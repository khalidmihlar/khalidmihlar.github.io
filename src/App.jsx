import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Teaching from './components/Teaching';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
        return <Teaching />;
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