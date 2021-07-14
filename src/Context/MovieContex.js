import {createContext, useState} from "react";
export const MovieContex = createContext()
    export default function MovieState({children}){
        const [hiddenMenu, setHiddenMenu]= useState(true)
        return(
            <div>
                <MovieContex.Provider value={{hiddenMenu, setHiddenMenu}}>
                    {children}
                </MovieContex.Provider>
            </div>
        )
    }

