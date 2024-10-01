import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const items = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" }
];

const NavBar = () => {
  const [currentItem, setCurrentItem] = useState("Home");
  const scrollingRef = useRef(false);
  const location = useLocation();

  const handleSmoothScroll = useCallback((e, item) => {
    if (e) e.preventDefault();

    setCurrentItem(item.name);

    scrollingRef.current = true;

    const targetElement = document.querySelector(item.link);
    const navbarHeight = document.querySelector('#navbar').offsetHeight;
    const extraPadding = 30;

    if (!targetElement) return;

    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - extraPadding;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
    
    history.replaceState(null, '', item.link); 

    setTimeout(() => {
      scrollingRef.current = false;
    }, 800);

  }, []);

  const handleScroll = useCallback(() => {
    if (scrollingRef.current) return;

    const navbarHeight = document.querySelector('#navbar').offsetHeight;

    items.forEach((item) => {
      const section = document.querySelector(item.link);

      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top - navbarHeight;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (sectionTop <= 0 && sectionBottom > 0) {
        setCurrentItem(item.name);
        history.replaceState(null, '', item.link); 
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
    <div
      id="navbar"
      className="navbar w-full flex flex-row md:gap-10 px-5 py-5 justify-around lg:justify-end min-h-10 sticky top-0 bg-black/65 z-20"
    >
      {items.map((item, index) => (
        <a
          key={index}
          className={
            "font-robotoMono font-medium text-base md:text-lg transition transform hover:scale-110 active:scale-110 cursor-pointer" +
            (currentItem === item.name ? " text-secondary" : " text-primary")
          }
          href={item.link}
          onClick={(e) => handleSmoothScroll(e, item)}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
