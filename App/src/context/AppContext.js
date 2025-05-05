import react from "react";

export const AppContext = react.createContext();

export const AppProvider = ({children}) =>{

    const data = {}

    return(
        <AppContext.Provider value={data} >{children}</AppContext.Provider>
    )
}