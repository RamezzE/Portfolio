import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';

const ProjectPopUp = () => {

    const { state, dispatch } = useContext(GlobalContext);
    const data = state.projectPopUpData;

    if (!state.projectPopUpVisible) return null;

    return (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 p-8 z-[20] flex items-center justify-center">
            <div className="flex flex-col shadow-2xl rounded-lg min-h-[300px] max-h-[100%] w-[100%] h-[80%] sm:w-[85%] sm:h-[85%] bg-[#111] border-2 md:border-4 border-secondary p-4 gap-y-1 overflow-y-auto">
                <button
                    onClick={() => dispatch({ type: "TOGGLE_PROJECT_POPUP" })}
                    className="bg-red-700 text-primary text-xs md:text-base font-semibold font-rubik py-2 px-4 rounded-3xl w-min self-end hover:bg-red-800 transition-all"
                >
                    X
                </button>

                <div className="flex flex-col justify-start items-center md:items-start h-full md:px-10 xl:py-5">
                    <h2 className="text-3xl md:text-4xl font-rubik font-medium text-primary">{data.name}</h2>
                    <p className="hidden md:block mt-4 mb-6 text-sm md:text-base lg:text-lg text-center md:text-start text-primary/50">{data.long_description}</p>

                    <div className="flex flex-col md:flex-row md:space-x-16 w-full h-full pb-2 ">
                        <div className="flex flex-col justify-start md:max-w-[50%] h-full ">
                            <p className="block md:hidden mt-4 mb-6 text-sm md:text-base lg:text-lg text-center md:text-start text-primary/50">{data.long_description}</p>

                            <div className="flex flex-row flex-wrap justify-center md:justify-start items-start gap-x-2 gap-y-4 ">
                                {data.tech_stack.map((tech, index) => (
                                    <span key={index} className="bg-[#333] text-primary text-sm lg:text-base font-rubik font-medium py-2 px-2 md:px-4 rounded-2xl h-fit w-fit hover:bg-[#444] transition-all cursor-pointer">
                                        {tech}
                                    </span>

                                ))}
                            </div>

                            <div className="flex flex-row flex-wrap justify-center mt-auto pt-4 md:justify-start items-end gap-x-2 gap-y-4 sm:pb-4">
                                {/* <span className="text-primary text-lg font-rubik font-medium text-center t">Links: </span> */}
                                {data.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-[#333] p-2 rounded-2xl w-fit hover:bg-[#444] hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer active:border-secondary hover:border-secondary hover:border-2 flex items-center space-x-3 "
                                    >
                                        <img src={link.img} alt={link.name} className="w-7 h-7" />
                                        {/* <span>{link.name}</span> */}
                                    </a>
                                ))}

                            </div>
                        </div>

                        <div className="max-w-0 md:min-w-[30%] md:max-w-[45%] mt-auto">
                            <img src={data.image} alt={data.name} className="w-full h-full object-contain pb-4 rounded-md" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectPopUp;
