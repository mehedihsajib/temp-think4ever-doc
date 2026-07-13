import React, { useState, Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import TableOfContents from './components/layout/TableOfContents';
import { routes } from './routes/routesConfig';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const location = useLocation();

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Close sidebar on path change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-900">
      <Header
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 overflow-y-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Suspense
              fallback={
                <div className="flex h-96 flex-col items-center justify-center gap-4">
                  <div className="relative flex h-12 w-12 items-center justify-center">
                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/10 dark:bg-blue-400/10"></div>
                    <div className="absolute h-10 w-10 animate-spin rounded-full border-2 border-slate-100 border-t-blue-600 dark:border-slate-800 dark:border-t-blue-400"></div>
                    <div className="h-3 w-3 animate-pulse rounded-full bg-blue-600 dark:bg-blue-400"></div>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider animate-pulse">Loading Document...</span>
                </div>
              }
            >
              {children}
            </Suspense>
          </div>
        </main>
        
        <TableOfContents />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/designer/introduction" replace />} />
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/designer/introduction" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
