import { useState } from "react";
import images from "../../../constants/images";

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
    return (
      <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-[250px] h-[250px] object-cover rounded-md mb-3"
        />
        <h1 className="font-robotoMono font-medium text-primary text-lg">{title}</h1>
        <p className="font-robotoMono font-medium text-primary text-sm">{description}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 gap-10">
      <h1 className="text-primary font-robotoMono text-6xl">Projects</h1>
      
      <div className="flex flex-row gap-5 mb-5">
        <button
          className={`px-4 py-2 rounded-md font-robotoMono text-xl ${
            selectedCategory === "All" ? "bg-secondary text-bgColor " : "bg-primary text-bgColor"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-md font-robotoMono text-xl ${
            selectedCategory === "Web" ? "bg-secondary text-bgColor " : "bg-primary text-bgColor"
          }`}
          onClick={() => setSelectedCategory("Web")}
        >
          Web
        </button>
        
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-5">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
