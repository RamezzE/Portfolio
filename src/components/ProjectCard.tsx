import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "../constants/projects";
import Gallery from "./Gallery";

interface ProjectCardProps {
  projectData: Project;
  index: number;
  compact?: boolean;
}

const ProjectCard = ({ projectData, index, compact = false }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkHash = (delay: number) => {
      const slug = window.location.hash.replace("#", "");
      if (!slug || slug !== projectData.slug) return;

      setOpen(true);
      setTimeout(() => {
        rowRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, delay);
    };

    checkHash(450);

    window.addEventListener("hashchange", () => checkHash(300));
    return () => window.removeEventListener("hashchange", () => checkHash(300));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      window.history.replaceState({}, "", next ? `#${projectData.slug}` : "/");
      return next;
    });
  };

  const designation = `TX-${String(index + 1).padStart(2, "0")}`;

  return (
    <motion.div
      ref={rowRef}
      layout="position"
      className={`relative w-full rounded-md border backdrop-blur-sm transition-colors duration-300 ${
        compact ? "opacity-80 hover:opacity-100" : ""
      } ${
        open
          ? "border-secondary/60 bg-panel/90 shadow-[0_0_35px_-10px_rgba(77,216,255,0.45)]"
          : "border-secondary/10 bg-panel/30 hover:border-secondary/40 hover:bg-panel/60"
      }`}
    >
      {!compact && (
        <>
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-secondary/50 pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-secondary/50 pointer-events-none" />
        </>
      )}

      <button
        onClick={toggle}
        className={`flex items-center gap-3 sm:gap-4 w-full text-left group ${compact ? "p-3 sm:p-3.5" : "p-4 sm:p-5 sm:gap-5"}`}
      >
        {!compact && (
          <span className="hidden xs:block font-robotoMono text-[10px] sm:text-xs text-secondary/40 group-hover:text-secondary/70 transition-colors w-12 shrink-0">
            {designation}
          </span>
        )}

        <div className="relative shrink-0">
          {!compact && (
            <div className="absolute inset-0 rounded-md bg-secondary/15 blur-md group-hover:bg-secondary/25 transition-colors" />
          )}
          <img
            src={projectData.icon}
            alt={projectData.name}
            className={`relative rounded-md object-contain border border-secondary/20 bg-black/50 ${
              compact ? "w-8 h-8 sm:w-9 sm:h-9 p-1" : "w-11 h-11 sm:w-14 sm:h-14 p-1.5"
            }`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className={`font-display font-bold text-primary tracking-wide truncate ${compact ? "text-xs sm:text-sm" : "text-sm sm:text-lg"}`}>
              {projectData.name}
            </h3>
            {!compact && (
              <span className="font-robotoMono text-[9px] sm:text-[11px] text-accent border border-accent/30 rounded px-1.5 py-0.5 uppercase tracking-wider">
                {projectData.category}
              </span>
            )}
          </div>
          {!compact && (
            <p className="font-robotoMono text-primary text-sm sm:text-base mt-1 truncate">
              {projectData.description}
            </p>
          )}
        </div>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 text-secondary/70 ${compact ? "text-sm" : "text-base sm:text-lg"}`}
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-secondary/15 px-4 sm:px-6 py-5 flex flex-col gap-6">
              <div className="flex-1 flex flex-col gap-4 min-w-0">
                <p className="font-rubik text-primary text-base sm:text-lg leading-relaxed">
                  {projectData.long_description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projectData.tech_stack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-robotoMono text-[10px] sm:text-xs text-secondary/90 border border-secondary/25 bg-secondary/5 rounded px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {projectData.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-auto pt-2">
                    {projectData.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 border border-secondary/25 hover:border-secondary hover:bg-secondary/10 rounded px-3 py-2 transition-colors"
                      >
                        <img src={link.img} alt={link.name} className="w-5 h-5" />
                        <span className="font-robotoMono text-sm text-primary">{link.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-center w-full">
                {projectData.images.length > 0 && (
                  <Gallery
                    images={projectData.images}
                    alt={projectData.name}
                    containerStyles="w-full max-w-3xl h-[280px] sm:h-[380px] md:h-[460px]"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
