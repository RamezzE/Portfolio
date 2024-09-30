import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';

// eslint-disable-next-line react/prop-types
const ProjectPopUp = () => {

    const { state, dispatch } = useContext(GlobalContext);
    const data = state.projectPopUpData;

    if (!state.projectPopUpVisible) return null;

    return (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 p-8 z-50 flex items-center justify-center">
            <div className="flex flex-col shadow-2xl rounded-lg min-h-[300px] max-h-[100%] w-[100%] h-[75%] sm:w-[85%] sm:h-[85%] bg-[#111] border-2 md:border-4 border-secondary p-4 space-y-5 overflow-y-auto">
                <button
                    onClick={() => dispatch({ type: "TOGGLE_PROJECT_POPUP" })}
                    className="bg-red-700 text-primary font-semibold font-rubik py-2 px-4 rounded-full w-min self-end hover:bg-red-800 transition-all"
                >
                    X
                </button>

                <div className="flex flex-col justify-start items-center h-full space-y-4">
                    <h2 className="text-4xl font-rubik font-medium text-primary">{data.name}</h2>
                    <p className="text-lg text-center text-primary/50">{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectPopUp;
