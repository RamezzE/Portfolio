import { useReducer } from "react";
import { motion } from "framer-motion";
import useOnScreen from "../../../components/useOnScreen";
import ProjectCard from "../../../components/ProjectCard";
import projects from "../../../constants/projects";

const initialState = {
  uniqueCategories: ["All", ...new Set(projects.map((project) => project.category))],
  filteredProjects: projects,
  selectedCategory: "All",
  containerVariants: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.1 },
    },
  },
  itemVariants: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  },
};

const reducer = (state, action) => {
  switch (action.type) {

    case "SET_CATEGORY":
      var newProjects = [];
      if (action.category === state.selectedCategory)
        return state;
      else if (action.category === "All")
        newProjects = projects;
      else
        newProjects = projects.filter((project) => project.category === action.category);

      return { ...state, selectedCategory: action.category, filteredProjects: newProjects };

    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Projects = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [titleRef, isTitleVisible] = useOnScreen({ threshold: 0.5 });

  return (
    <motion.section
      id="projects"
      className="flex flex-col justify-center items-center p-5 md:p-10 gap-10 my-16"
      initial="hidden"
      animate={isTitleVisible ? "visible" : "hidden"}
      variants={state.containerVariants}
    >
      <motion.h1
        ref={titleRef}
        className="text-primary font-rubik font-medium text-4xl sm:text-5xl mb-6"
        variants={state.itemVariants}
      >
        My Projects
      </motion.h1>

      <motion.div
        className="flex flex-row flex-wrap justify-center gap-5 mb-10"
      >
        {state.uniqueCategories.map((category, index) => (
          <motion.button
            key={index}
            className={`p-2 rounded-md font-robotoMono sm:text-xl ${state.selectedCategory === category ? "bg-secondary text-bgColor" : "bg-primary text-bgColor"
              }`}
            onClick={() => dispatch({ type: "SET_CATEGORY", "category": category })}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            variants={state.itemVariants}
          >
            {category}
          </motion.button>
        ))
        }
      </motion.div>

      <motion.div
        className="flex flex-row flex-wrap justify-center gap-5 sm:gap-20 md:gap-10"
        variants={state.itemVariants}
      >
        {state.filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            projectData={project}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
