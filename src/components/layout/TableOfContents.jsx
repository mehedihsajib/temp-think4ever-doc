import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Select all h2 and h3 headings within doc content
    const elements = Array.from(document.querySelectorAll('.doc-page-content h2, .doc-page-content h3'));
    
    // Assign IDs if not present
    const headingsData = elements.map((el) => {
      const text = el.innerText || el.textContent;
      const id = el.id || text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      el.id = id;
      return {
        id,
        text,
        level: el.tagName.toLowerCase() === 'h2' ? 2 : 3,
      };
    });

    setHeadings(headingsData);

    // Setup intersection observer to highlight current section
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [location]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-64 shrink-0 px-4 py-8 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 dark:text-slate-400">
        On This Page
      </h4>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`block text-sm font-medium transition-colors leading-6 ${
              heading.level === 3 ? 'pl-4 text-xs' : ''
            } ${
              activeId === heading.id
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default TableOfContents;
