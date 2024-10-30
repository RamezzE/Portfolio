import { createContext, useReducer } from "react";

const initialState = {
  projectPopUpVisible: false,
  projectPopUpData: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_PROJECT_POPUP":
      if (state.projectPopUpVisible) {
        // Clear everything in the URL except the domain
        window.history.replaceState({}, '', '/');
      } else {
        // Replace with only the hash
        window.history.replaceState({}, '', `#${action.payload.slug}`);
      }

      return {
        ...state,
        projectPopUpVisible: !state.projectPopUpVisible,
        projectPopUpData: action.payload || state.projectPopUpData,
      };
    case "SHOW_PROJECT_POPUP":
      return {
        ...state,
        projectPopUpVisible: true,
        projectPopUpData: action.payload,
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