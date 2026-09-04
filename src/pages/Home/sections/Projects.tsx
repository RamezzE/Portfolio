import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import ProjectCard from "../../../components/ProjectCard";
import FeaturedProjectCard from "../../../components/FeaturedProjectCard";
import projects from "../../../constants/projects";

const featuredProjects = projects.filter((p) => p.featured);
const mainProjects = projects.filter((p) => !p.hobby);
const hobbyProjects = projects.filter((p) => p.hobby);

const HST_GROUP_SLUGS = ["hst-risk", "hst-jumanji"];
const hstGroup = mainProjects.filter((p) => HST_GROUP_SLUGS.includes(p.slug));

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  const titleRef = useRef(null);
  const animateControls = useAnimation();
  const isInView = useInView(titleRef, { once: true });

  useEffect(() => {
    if (isInView)
      animateControls.start("visible");
  }, [animateControls, isInView]);

  // Rebuild the manifest in array order, but render the HST group as one
  // adjacent unit instead of two separate rows.
  const manifestRows: JSX.Element[] = [];
  let groupRendered = false;

  mainProjects.forEach((project, i) => {
    if (HST_GROUP_SLUGS.includes(project.slug)) {
      if (!groupRendered) {
        groupRendered = true;
        manifestRows.push(
          <div
            key="hst-group"
            className="relative flex flex-col gap-3 border border-accent/25 rounded-lg p-3 sm:p-4"
          >
            <span className="absolute -top-2.5 left-4 bg-bgColor px-2 font-robotoMono text-[10px] text-accent uppercase tracking-[0.2em]">
              Helio Sports Team · Event Apps
            </span>
            {hstGroup.map((groupProject) => (
              <ProjectCard
                key={groupProject.slug}
                projectData={groupProject}
                index={mainProjects.findIndex((p) => p.slug === groupProject.slug)}
              />
            ))}
          </div>
        );
      }
      return;
    }

    manifestRows.push(
      <ProjectCard key={project.slug} projectData={project} index={i} />
    );
  });

  return (
    <motion.section
      id="projects"
      className="relative flex flex-col justify-center items-center p-5 md:p-10 gap-10 my-16 w-full max-w-5xl mx-auto"
      initial="hidden"
      animate={animateControls}
      variants={containerVariants}
    >
      <motion.div
        ref={titleRef}
        className="flex flex-col items-center gap-2"
        variants={itemVariants}
      >
        <span className="font-robotoMono text-secondary/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
          Flight Manifest
        </span>
        <h1 className="text-primary font-display font-bold text-3xl sm:text-4xl uppercase tracking-wide text-glow">
          Mission Log
        </h1>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full" variants={itemVariants}>
        {featuredProjects.map((project) => (
          <FeaturedProjectCard
            key={project.slug}
            projectData={project}
            onOpen={() => {
              window.location.hash = project.slug;
            }}
          />
        ))}
      </motion.div>

      <motion.div className="flex flex-col items-center gap-2 pt-4" variants={itemVariants}>
        <span className="font-robotoMono text-primary/70 text-[10px] sm:text-xs tracking-[0.3em] uppercase">
          Full Manifest
        </span>
      </motion.div>

      <motion.div className="flex flex-col gap-3 w-full" variants={itemVariants}>
        {manifestRows}
      </motion.div>

      <motion.p className="text-primary font-rubik text-lg" variants={itemVariants}>
        View more on my <a href="https://github.com/ramezze" target="_blank" rel="noreferrer" className="text-secondary hover:underline">GitHub</a>
      </motion.p>

      {hobbyProjects.length > 0 && (
        <motion.div className="flex flex-col items-center gap-1 pt-10 w-full" variants={itemVariants}>
          <span className="font-robotoMono text-primary/40 text-[10px] sm:text-xs tracking-[0.3em] uppercase">
            Off-Duty Logs
          </span>
          <h2 className="font-robotoMono text-primary text-base sm:text-lg uppercase tracking-wide">
            Hobby Projects
          </h2>

          <div className="flex flex-col gap-2 w-full max-w-2xl mt-4">
            {hobbyProjects.map((project, i) => (
              <ProjectCard key={project.slug} projectData={project} index={i} compact />
            ))}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;
