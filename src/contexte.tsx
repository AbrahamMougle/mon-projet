
import { createContext, useState} from "react";
import type { ReactNode } from "react";
import React from "react";
interface Togleproperty {
    font: string,
    background: string
}
interface TogleType {
    themeContext:Togleproperty
    togle: boolean
    setTogle: React.Dispatch<React.SetStateAction<boolean>>
}

export const Theme = createContext<TogleType|undefined>(undefined)


export function Themeprovider({ children }: {children:ReactNode}) {
    
    const [togle, setTogle] = useState<boolean>(true)
    const handTheme= togle ?{font:'text-black',background:'bg-white'}:{font:'text-white',background:'bg-black'}
    const T = {
        themeContext:handTheme,
        togle:togle,
        setTogle:setTogle,        
    }

    return <Theme.Provider value={T}> {children} </Theme.Provider>

}