/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import { useContext } from "react";

const ProjectCard = ({ projectData }) => {

    const location = useLocation();


    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        setTimeout(() => {
            const projectParam = location.hash.replace('#', '');
            if (!projectParam)
                return
            if (projectData.slug !== projectParam)
                return

            dispatch({ type: "SHOW_PROJECT_POPUP", payload: projectData });
        }, 1000);
    }, []);

    return (
        <div
            className={`flip-card w-32 h-32 sm:w-48 sm:h-48 transition-transform duration-700 ease-out transform overflow-hidden`}
        >
            <div className="flip-card-inner h-full w-full relative">
                {/* Front side */}
                <div className="flip-card-front flex flex-col justify-between items-center h-full w-full absolute backface-hidden">
                    <img
                        src={projectData.icon}
                        alt={projectData.name}
                        className="object-cover rounded-md mb-3 h-[50%] sm:h-[60%] w-auto"
                    />
                    <div className="flex flex-col justify-center items-center">
                        <span className="font-robotoMono font-medium text-primary text-base sm:text-lg text-center">
                            {projectData.name}
                        </span>
                        <span className="font-robotoMono font-medium text-primary/50 text-xs sm:text-base text-center">
                            {projectData.description}
                        </span>
                    </div>
                </div>

                {/* Back side */}
                <div className="flip-card-back flex flex-col justify-evenly items-center rounded-md shadow-lg gap-y-4 h-full w-full absolute backface-hidden transform rotateY-180">
                    <h1 className="font-robotoMono font-medium text-primary text-base sm:text-lg text-center">{projectData.name}</h1>
                    <p className="font-robotoMono font-medium text-primary/50 text-xs sm:text-base text-center">{projectData.description}</p>
                    <button
                        className="bg-primary text-bgColor font-robotoMono font-medium text-xs xs:text-base md:text-lg py-2 px-4 rounded-md w-fit transition duration-500 ease-in-out transform hover:scale-110 hover:bg-secondary"
                        onClick={() => {
                            if (!state.projectPopUpVisible)
                                dispatch({ type: "TOGGLE_PROJECT_POPUP", payload: projectData });
                        }}
                    >
                        More Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
