import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { onboardingNav, designerNav, developerNav, portalNav, reverseEngineeringNav } from '../../constants/navigation';

const SidebarItem = ({ item }) => {
  const IconComponent = Icons[item.icon] || Icons.FileText;
  
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors text-left ${
          isActive
            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
        }`
      }
    >
      <IconComponent className="h-4.5 w-4.5 shrink-0 text-slate-400" />
      <span className="truncate">{item.title}</span>
    </NavLink>
  );
};

const SidebarAccordion = ({ group }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = group.items.some(item => location.pathname === item.path);
  const GroupIcon = Icons[group.icon] || Icons.Server;

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors text-left ${
          isActive || isOpen
            ? 'text-slate-900 dark:text-slate-100'
            : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
        }`}
      >
        <div className="flex items-center gap-3">
          <GroupIcon className="h-4.5 w-4.5 text-slate-400 shrink-0" />
          <span>{group.name}</span>
        </div>
        <Icons.ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform ${isOpen || isActive ? 'rotate-180' : ''}`}
        />
      </button>
      
      {(isOpen || isActive) && (
        <div className="pl-4 space-y-1 pt-1 border-l border-slate-100 dark:border-slate-800 ml-5">
          {group.items.map((item) => {
            const SubIcon = Icons[item.icon] || Icons.FileText;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors text-left ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                  }`
                }
              >
                <SubIcon className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{item.title}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const getNavStructure = () => {
    const path = location.pathname;
    if (path.startsWith('/onboarding')) return { title: 'Customer Onboarding', nav: onboardingNav, type: 'flat' };
    if (path.startsWith('/developer')) return { title: 'Think4Ever Developer', nav: developerNav, type: 'flat' };
    if (path.startsWith('/portal')) return { title: 'Think4Ever Portal', nav: portalNav, type: 'flat' };
    if (path.startsWith('/reverse-engineering')) return { title: 'Reverse Engineering', nav: reverseEngineeringNav, type: 'flat' };
    return { title: 'Think4Ever Designer', nav: designerNav, type: 'categorized' };
  };

  const { title, nav, type } = getNavStructure();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
        ></div>
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-35 w-76 border-r border-slate-200 bg-slate-50 px-4 py-6 transition-transform lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto lg:translate-x-0 dark:border-slate-800 dark:bg-slate-900/50 custom-scrollbar ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full text-left">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {title}
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
            {type === 'flat' ? (
              <nav className="space-y-1">
                {nav.map((item) => (
                  <SidebarItem key={item.path} item={item} />
                ))}
              </nav>
            ) : (
              <nav className="space-y-6">
                {nav.map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {section.category}
                    </h4>
                    
                    {section.isAccordion ? (
                      <div className="space-y-1">
                        {section.groups.map((group, gidx) => (
                          <SidebarAccordion key={gidx} group={group} />
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <SidebarItem key={item.path} item={item} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
