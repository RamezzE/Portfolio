import { useState } from "react";
import { motion } from "framer-motion";
import useOnScreen from "../../../components/useOnScreen";
import ProjectCard from "../../../components/ProjectCard";
import projects from "../../../constants/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Animate Title and Category Filters
  const [titleRef, isTitleVisible] = useOnScreen({ threshold: 0.5 });
  // eslint-disable-next-line no-unused-vars
  const [buttonsRef, areButtonsVisible] = useOnScreen({ threshold: 0.75 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.1 },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <motion.section
      id="projects"
      className="flex flex-col justify-center items-center p-5 md:p-10 gap-10 my-16"
      initial="hidden"
      animate={isTitleVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        ref={titleRef}
        className="text-primary font-rubik font-medium text-4xl sm:text-5xl mb-6"
        variants={itemVariants}
      >
        My Projects
      </motion.h1>

      {/* Animate Filter Buttons */}
      <motion.div
        ref={buttonsRef}
        className="flex flex-row gap-5 mb-10"
      // variants={buttonsVariants}
      >
        <motion.button
          className={`px-4 py-2 rounded-md font-robotoMono text-xl ${selectedCategory === "All" ? "bg-secondary text-bgColor" : "bg-primary text-bgColor"
            }`}
          onClick={() => setSelectedCategory("All")}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          variants={itemVariants}
        >
          All
        </motion.button>
        <motion.button
          className={`px-4 py-2 rounded-md font-robotoMono text-xl ${selectedCategory === "Web" ? "bg-secondary text-bgColor" : "bg-primary text-bgColor"
            }`}
          onClick={() => setSelectedCategory("Web")}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          variants={itemVariants}
        >
          Web
        </motion.button>
        <motion.button
          className={`px-4 py-2 rounded-md font-robotoMono text-xl ${selectedCategory === "Mobile" ? "bg-secondary text-bgColor" : "bg-primary text-bgColor"
            }`}
          onClick={() => setSelectedCategory("Mobile")}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          variants={itemVariants}
        >
          Mobile
        </motion.button>
      </motion.div>

      {/* Render Project Cards */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-20 md:gap-10"
        variants={itemVariants}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
