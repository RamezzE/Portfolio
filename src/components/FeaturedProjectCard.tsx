import { motion } from "framer-motion";
import { Project } from "../constants/projects";

interface FeaturedProjectCardProps {
  projectData: Project;
  onOpen: () => void;
}

const FeaturedProjectCard = ({ projectData, onOpen }: FeaturedProjectCardProps) => {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-start gap-4 rounded-lg border border-secondary/25 bg-panel/50 backdrop-blur-sm p-5 text-left overflow-hidden shadow-[0_0_40px_-20px_rgba(77,216,255,0.7)] hover:border-secondary/60 hover:bg-panel/70 transition-colors"
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,216,255,0.14),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-secondary/50 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-secondary/50 pointer-events-none" />

      <span className="font-robotoMono text-[10px] uppercase tracking-[0.25em] text-accent border border-accent/30 rounded-full px-2.5 py-1 bg-accent/5">
        Featured Mission
      </span>

      <div className="flex items-center gap-4 w-full">
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-md bg-secondary/20 blur-lg" />
          <img
            src={projectData.icon}
            alt={projectData.name}
            className="relative w-16 h-16 rounded-md object-contain border border-secondary/30 bg-black/50 p-2"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-bold text-primary text-xl tracking-wide truncate">
            {projectData.name}
          </h3>
          <p className="font-robotoMono text-primary text-base truncate">{projectData.description}</p>
        </div>
      </div>

      <p className="font-rubik text-primary text-base leading-relaxed line-clamp-3">
        {projectData.long_description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {projectData.tech_stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="font-robotoMono text-[10px] text-secondary/80 border border-secondary/20 bg-secondary/5 rounded px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>

      <span className="font-robotoMono text-secondary text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
        View Mission Details →
      </span>
    </motion.button>
  );
};

export default FeaturedProjectCard;
