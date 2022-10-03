import React, { useState, createContext, useContext } from "react";
import localData from "./localData";
export const Context = createContext();

export default function Provider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [state, setState] = useState({
        fetchedData: null,
        localData,
    });

    const [animations, setAnimations] = useState({
        fade: {
            initial:{ opacity: 0 },
            animate:{ opacity: 1 },
            exit:{ opacity: 0 },
            transition:{ duration: 0.5 }
        },
    });

    const [isModalShown, setIsModalShown] = useState(false);

    return (
        <Context.Provider
            value={{
                state,
                ...state,
                setState,
                isLoggedIn,
                setIsLoggedIn,
                animations,
                isModalShown,
                setIsModalShown,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export const useGlobalContext = () => useContext(Context);
