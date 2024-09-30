import { createContext, useReducer } from "react";

const initialState = {
  projectPopUpVisible: false,
  projectPopUpData: {
    name: "",
    description: "",
    long_description: "",
    tech_stack: [""],
    links: [{ name: "", url: "" }],
    category: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_PROJECT_POPUP":
      return {
        ...state,
        projectPopUpVisible: !state.projectPopUpVisible,
        projectPopUpData: action.payload || state.projectPopUpData,
      };
    default:
      return state;
  }
};


export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GlobalContext.Provider value={{
    state,
    dispatch,
  }}>{children}</GlobalContext.Provider>;
};