import { useState } from "react";
import images from "../../../constants/images";
import useOnScreen from "../../../components/useOnScreen";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      image: images.HST_Risk,
      title: "HST Risk",
      description: "React Native Expo",
      category: "Mobile",
    },
    {
      image: "https://via.placeholder.com/250",
      title: "Project 2",
      description: "A React Native project.",
      category: "Web",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // eslint-disable-next-line react/prop-types
  const ProjectCard = ({ image, title, description }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.5 });

    return (
      <div
        ref={ref}
        className={`flip-card p-2 w-64 h-64 transition-transform duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="flip-card-inner">
          {/* Front side */}
          <div className="flip-card-front flex flex-col justify-center items-center rounded-md shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-64 h-64 object-cover rounded-md mb-3"
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-robotoMono font-medium text-primary text-lg">
                {title}
              </h1>
              <h1 className="font-robotoMono text-primary text-base">
                {description}
              </h1>
            </div>
          </div>

          {/* Back side */}
          <div className="flip-card-back flex flex-col justify-center items-center rounded-md shadow-lg gap-y-6">
            <h1 className="font-robotoMono font-medium text-primary text-lg">{title}</h1>
            <h1 className="font-robotoMono text-primary text-base">{description}</h1>
            <button className="bg-primary text-bgColor font-robotoMono font-medium text-base md:text-lg py-2 px-4 rounded-md w-fit transition duration-500 ease-in-out transform hover:scale-110 hover:bg-secondary">
              View Project
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Animate Title and Category Filters
  const [titleRef, isTitleVisible] = useOnScreen({ threshold: 0.3 });
  const [buttonsRef, areButtonsVisible] = useOnScreen({ threshold: 0.75 });

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center p-5 md:p-10 gap-10 my-16">
      {/* Animate Title */}
      <h1
        ref={titleRef}
        className={`text-primary font-rubik font-medium text-4xl sm:text-5xl mb-6 transition-transform duration-700 ease-out transform ${
          isTitleVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        My Projects
      </h1>

      {/* Animate Filter Buttons */}
      <div
        ref={buttonsRef}
        className={`flex flex-row gap-5 mb-10 transition-transform duration-700 ease-out transform ${
          areButtonsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <button
          className={`px-4 py-2 rounded-md font-robotoMono text-xl ${
            selectedCategory === "All" ? "bg-secondary text-bgColor" : "bg-primary text-bgColor"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-md font-robotoMono text-xl ${
            selectedCategory === "Web" ? "bg-secondary text-bgColor" : "bg-primary text-bgColor"
          }`}
          onClick={() => setSelectedCategory("Web")}
        >
          Web
        </button>
        <button
          className={`px-4 py-2 rounded-md font-robotoMono text-xl ${
            selectedCategory === "Mobile" ? "bg-secondary text-bgColor" : "bg-primary text-bgColor"
          }`}
          onClick={() => setSelectedCategory("Mobile")}
        >
          Mobile
        </button>
      </div>

      {/* Render Project Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-10">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
