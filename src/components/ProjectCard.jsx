/* eslint-disable react/prop-types */
import useOnScreen from "./useOnScreen";
import { GlobalContext } from "../context/GlobalProvider";
import { useContext } from "react";

const ProjectCard = ({ projectData }) => {
    const { dispatch } = useContext(GlobalContext);
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
                        src={projectData.image}
                        alt={projectData.name}
                        className="w-64 h-64 object-cover rounded-md mb-3"
                    />
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-robotoMono font-medium text-primary text-lg">
                            {projectData.name}
                        </h1>
                        <h1 className="font-robotoMono text-primary text-base">
                            {projectData.description}
                        </h1>
                    </div>
                </div>

                {/* Back side */}
                <div className="flip-card-back flex flex-col justify-center items-center rounded-md shadow-lg gap-y-6">
                    <h1 className="font-robotoMono font-medium text-primary text-lg">{projectData.name}</h1>
                    <h1 className="font-robotoMono text-primary text-base">{projectData.description}</h1>
                    <button className="bg-primary text-bgColor font-robotoMono font-medium text-base md:text-lg py-2 px-4 rounded-md w-fit transition duration-500 ease-in-out transform hover:scale-110 hover:bg-secondary"
                        onClick={() => { dispatch({ type: "TOGGLE_PROJECT_POPUP", payload: projectData }) }}
                    >
                        More Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;