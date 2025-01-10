// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { BarChart3, Moon, Sun } from 'lucide-react';
// import { useTheme } from './lib/theme';
// import { PromptSection } from './components/prompt/PromptSection';
// import { FeatureSection } from './components/feature/FeatureSection';
// import { AboutSection } from './components/about/AboutSection';
// import { ContactSection } from './components/contact/ContactSection';

// function App() {
//   const { theme, toggleTheme } = useTheme();
  
//   const homeRef = useRef<HTMLDivElement>(null);
//   const promptRef = useRef<HTMLDivElement>(null);
//   const featureRef = useRef<HTMLDivElement>(null);
//   const aboutRef = useRef<HTMLDivElement>(null);
//   const contactRef = useRef<HTMLDivElement>(null);
  
//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const navItems = [
//     { name: 'Home', ref: homeRef },
//     { name: 'Prompt', ref: promptRef },
//     { name: 'Feature', ref: featureRef },
//     { name: 'About', ref: aboutRef },
//     { name: 'Contact', ref: contactRef }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <motion.div
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex-shrink-0"
//               >
//                 <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
//               </motion.div>
//               <div className="hidden md:block ml-10">
//                 <div className="flex items-baseline space-x-8">
//                   {navItems.map((item) => (
//                     <motion.a
//                       key={item.name}
//                       onClick={() => scrollToSection(item.ref)}
//                       whileHover={{ 
//                         scale: 1.1,
//                         textShadow: "0 0 8px rgb(139, 92, 246)"
//                       }}
//                       className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium cursor-pointer relative group"
//                     >
//                       {item.name}
//                       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 transform scale-x-0 transition-transform group-hover:scale-x-100" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
//             >
//               {theme === 'light' ? (
//                 <Moon className="h-5 w-5 text-gray-700" />
//               ) : (
//                 <Sun className="h-5 w-5 text-gray-200" />
//               )}
//             </motion.button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section ref={homeRef} className="pt-32 pb-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
//                 Social Media{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
//                   Analyser
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//                 Transform your social media strategy with powerful analytics and insights. 
//                 Make data-driven decisions to grow your online presence.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => scrollToSection(promptRef)}
//                 className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 Get Started
//               </motion.button>
//             </motion.div>
//             <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative">
//               <div className="aspect-square relative z-10">
//                 <img src={theme === 'light' ? 'dist/assets/1.png' : 'dist/assets/2.png'} alt="Logo" className="w-[calc(100%-100px)] h-[calc(100%-100px)] object-contain"/>
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl" />
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* Prompt Section */}
//       <section ref={promptRef}>
//         <PromptSection />
//       </section>

//       {/* Features Section */}
//       <section ref={featureRef}>
//         <FeatureSection />
//       </section>

//       {/* About Section */}
//       <section ref={aboutRef}>
//         <AboutSection />
//       </section>

//       {/* Contact Section */}
//       <section ref={contactRef}>
//         <ContactSection />
//       </section>
//     </div>
//   );
// }

// export default App;

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Moon, Sun } from 'lucide-react';
import { useTheme } from './lib/theme';
import { SearchBar } from './components/prompt/SearchBar';
import { OutputWindow } from './components/prompt/OutputWindow';
import { FeatureSection } from './components/feature/FeatureSection';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';

function App() {
  const { theme, toggleTheme } = useTheme();
  
  const homeRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePromptSubmit = async (prompt: string) => {
    setError(null); // Clear any previous errors
    setOutput(null); // Clear previous output

    try {
      const response = await fetch('http://localhost:5000/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Error: ${response.statusText}');
      }

      const data = await response.json();
      setOutput(data.text); // Assuming the backend returns { text: string }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const navItems = [
    { name: 'Home', ref: homeRef },
    { name: 'Prompt', ref: promptRef },
    { name: 'Feature', ref: featureRef },
    { name: 'About', ref: aboutRef },
    { name: 'Contact', ref: contactRef },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </motion.div>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-8">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      onClick={() => scrollToSection(item.ref)}
                      whileHover={{ 
                        scale: 1.1,
                        textShadow: "0 0 8px rgb(139, 92, 246)"
                      }}
                      className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium cursor-pointer relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700" />
              ) : (
                <Sun className="h-5 w-5 text-gray-200" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Social Media{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Analyser
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Transform your social media strategy with powerful analytics and insights. 
                Make data-driven decisions to grow your online presence.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(promptRef)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative">
              <div className="aspect-square relative z-10">
                <img
                  src={theme === 'light' ? 'dist/assets/1.png' : 'dist/assets/2.png'}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prompt Section */}
      <section ref={promptRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Enter Your Prompt
          </h2>
          <SearchBar onSubmit={handlePromptSubmit} />
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <OutputWindow output={output} />
        </div>
      </section>

      {/* Features Section */}
      <section ref={featureRef}>
        <FeatureSection />
      </section>

      {/* About Section */}
      <section ref={aboutRef}>
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section ref={contactRef}>
        <ContactSection />
      </section>
    </div>
  );
}

export default App;