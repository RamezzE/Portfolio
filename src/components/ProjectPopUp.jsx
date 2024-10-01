import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';

const ProjectPopUp = () => {

    const { state, dispatch } = useContext(GlobalContext);
    const data = state.projectPopUpData;

    if (!state.projectPopUpVisible) return null;

    return (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 p-8 z-[20] flex items-center justify-center">
            <div className="flex flex-col shadow-2xl rounded-lg min-h-[300px] max-h-[100%] w-[100%] h-[75%] sm:w-[85%] sm:h-[85%] bg-[#111] border-2 md:border-4 border-secondary p-4 space-y-5 overflow-y-auto">
                <button
                    onClick={() => dispatch({ type: "TOGGLE_PROJECT_POPUP" })}
                    className="bg-red-700 text-primary text-xs md:text-base font-semibold font-rubik py-2 px-4 rounded-3xl w-min self-end hover:bg-red-800 transition-all"
                >
                    X
                </button>

                <div className="flex flex-col justify-start items-center md:items-start h-full space-y-4 md:px-10 md:py-5">
                    <h2 className="text-3xl md:text-4xl font-rubik font-medium text-primary">{data.name}</h2>
                    <p className="text-sm sm:text-base md:text-lg text-center md:text-start text-primary/50">{data.long_description}</p>
                    <div className="flex flex-col md:flex-row md:space-x-16 w-full h-full pb-2 ">
                        <div className="flex flex-col justify-between md:max-w-[50%] h-full space-y-10">

                            <div className="flex flex-row flex-wrap justify-center md:justify-start items-start gap-x-2 gap-y-4 ">
                                {data.tech_stack.map((tech, index) => (
                                    <span key={index} className="bg-[#333] text-primary text-sm md:text-base font-rubik font-medium py-2 px-2 md:px-4 rounded-2xl h-fit w-fit hover:bg-[#444] transition-all cursor-pointer">
                                        {tech}
                                    </span>

                                ))}
                            </div>

                            <div className="flex flex-row flex-wrap justify-center md:justify-start items-end gap-x-2 gap-y-4 sm:pb-4">
                                {/* <span className="text-primary text-lg font-rubik font-medium text-center t">Links: </span> */}
                                {data.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-[#333] p-2 rounded-2xl w-fit hover:bg-[#444] hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer flex items-center space-x-3 "
                                    >
                                        <img src={link.img} alt={link.name} className="w-7 h-7" />
                                        {/* <span>{link.name}</span> */}
                                    </a>
                                ))}

                            </div>
                        </div>

                        <div className="max-w-0 md:min-w-[30%] md:max-w-[45%]">
                            <img src={data.image} alt={data.name} className="w-full h-full object-contain rounded-md" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectPopUp;
