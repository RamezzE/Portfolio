import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';
import ImageSlideshow from './ImageSlideshow';

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

                <div className="flex flex-col justify-start items-center md:items-start h-full lg:px-10 xl:py-5">

                    <div className="flex flex-col items-center lg:flex-row lg:space-x-16 w-full h-full pb-2 lg:pb-0">

                        <div className="flex flex-col justify-start lg:max-w-[50%] h-full gap-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-rubik text-center lg:text-left font-medium text-primary">{data.name}</h2>

                            <p className="block text-sm md:text-base lg:text-lg text-center lg:text-start text-primary/50">{data.long_description}</p>

                            <div className="flex flex-row flex-wrap justify-center lg:justify-start items-start gap-x-2 gap-y-4 ">
                                {data.tech_stack.map((tech, index) => (
                                    <span key={index} className="bg-[#333] text-primary text-xs sm:text-sm  font-rubik font-medium py-2 px-2 lg:px-4 rounded-2xl h-fit w-fit hover:bg-[#444] transition-all cursor-pointer">
                                        {tech}
                                    </span>

                                ))}
                            </div>

                            <div className="lg:hidden h-[50%] px-2 lg:h-0 lg:w-0">
                                <img src={data.preview} alt={data.name} className="w-full h-full object-contain rounded-md" />
                            </div>

                            <div className="flex flex-row flex-wrap justify-center mt-auto lg:justify-start items-end gap-x-2 lg:gap-y-4 sm:pb-4">
                                {/* <span className="text-primary text-lg font-rubik font-medium text-center t">Links: </span> */}
                                {data.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-[#333] p-2 rounded-2xl w-fit hover:bg-[#444] hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer active:border-secondary hover:border-secondary hover:border-2 flex items-center space-x-3 "
                                    >
                                        <img src={link.img} alt={link.name} className="w-6 h-6 md:w-7 md:h-7" />
                                    </a>
                                ))}

                            </div>
                        </div>



                        {/* <div className="w-0 h-0 md:w-full md:h-full md:max-h-[60vh] lg:max-h-[50vh] flex flex-row justify-center items-center px-12"> */}
                        <div className="w-0 h-0 lg:w-full lg:h-full lg:max-h-[50vh] flex flex-row justify-center items-center px-12">
                            <ImageSlideshow
                                data={data}
                                containerStyles={"w-full h-full"}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectPopUp;
