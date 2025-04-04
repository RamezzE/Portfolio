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
            <div className="relative w-full h-full flip-card-inner">
                {/* Front side */}
                <div className="absolute flex flex-col justify-between items-center w-full h-full backface-hidden flip-card-front">
                    <img
                        src={projectData.icon}
                        alt={projectData.name}
                        className="mb-3 rounded-md w-auto h-[50%] sm:h-[60%] object-contain"
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
                <div className="absolute flex flex-col justify-evenly items-center gap-y-4 shadow-lg rounded-md w-full h-full backface-hidden flip-card-back transform rotateY-180">
                    <h1 className="font-robotoMono font-medium text-primary text-base sm:text-lg text-center">{projectData.name}</h1>
                    <p className="font-robotoMono font-medium text-primary/50 text-xs sm:text-base text-center">{projectData.description}</p>
                    <button
                        className="bg-primary hover:bg-secondary px-4 py-2 rounded-md w-fit font-robotoMono font-medium text-bgColor text-xs xs:text-base md:text-lg hover:scale-110 transition duration-500 ease-in-out transform"
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
