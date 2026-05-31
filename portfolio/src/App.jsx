import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <CustomCursor />
      <AnimatedBackground />
      
      <div className="flex flex-col min-h-screen bg-violet-50 text-violet-900 dark:bg-gray-950 dark:text-gray-100 font-sans selection:bg-violet-300 dark:selection:bg-violet-700 transition-colors duration-500 relative z-10">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;