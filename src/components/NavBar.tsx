import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  code: string;
  link: string;
}

const items: NavItem[] = [
  { name: "About", code: "01", link: "#hero" },
  { name: "Projects", code: "02", link: "#projects" },
  { name: "Testimonials", code: "03", link: "#testimonials" },
  { name: "Contact", code: "04", link: "#contact" },
];

const NavBar = () => {
  const [currentItem, setCurrentItem] = useState("Home");
  const scrollingRef = useRef(false);
  const location = useLocation();

  const handleSmoothScroll = useCallback((e: React.MouseEvent | null, item: NavItem) => {
    if (e) e.preventDefault();

    setCurrentItem(item.name);

    scrollingRef.current = true;

    const targetElement = document.querySelector(item.link) as HTMLElement | null;
    const navbar = document.querySelector('#navbar') as HTMLElement | null;
    const navbarHeight = navbar?.offsetHeight ?? 0;
    const extraPadding = 30;

    if (!targetElement) return;

    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - extraPadding;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });

    setTimeout(() => {
      scrollingRef.current = false;
    }, 800);

  }, []);

  const handleScroll = useCallback(() => {
    if (scrollingRef.current) return;

    const navbar = document.querySelector('#navbar') as HTMLElement | null;
    const navbarHeight = navbar?.offsetHeight ?? 0;

    items.forEach((item) => {
      const section = document.querySelector(item.link) as HTMLElement | null;

      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top - navbarHeight;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (sectionTop <= 0 && sectionBottom > 0) {
        setCurrentItem(item.name);
      }
    });
  }, []);

  const scrollToHash = useCallback(() => {
    const hash = location.hash;
    if (!hash) return;

    const item = items.find(i => i.link === hash);

    if (item)
      handleSmoothScroll(null, item);

  }, [location.hash, handleSmoothScroll]);

  useEffect(() => {
    scrollToHash();
  }, [scrollToHash]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div id="navbar" className="sticky top-0 z-30 w-full flex justify-center px-3 pt-3 sm:pt-4">
      <nav className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-secondary/25 bg-[#05060d]/80 backdrop-blur-md shadow-[0_0_25px_-8px_rgba(77,216,255,0.5)]">
        <span className="hidden xs:flex items-center gap-1.5 pl-2 pr-3 border-r border-secondary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="font-robotoMono text-[9px] sm:text-[10px] text-secondary/70 uppercase tracking-[0.2em]">
            Nav
          </span>
        </span>

        {items.map((item, index) => {
          const active = currentItem === item.name;
          return (
            <a
              key={index}
              href={item.link}
              onClick={(e) => handleSmoothScroll(e, item)}
              className={
                "relative flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full font-robotoMono text-xs sm:text-sm transition-colors cursor-pointer " +
                (active
                  ? "text-bgColor"
                  : "text-primary hover:text-secondary")
              }
            >
              {active && (
                <span className="absolute inset-0 rounded-full bg-secondary shadow-[0_0_18px_2px_rgba(77,216,255,0.65)] -z-10" />
              )}
              <span className={"text-[9px] " + (active ? "text-bgColor/60" : "text-secondary/40")}>
                {item.code}
              </span>
              {item.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
