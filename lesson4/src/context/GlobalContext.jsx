import { createContext, useState } from "react";
import { myData } from "../data/Data";


export const GlobalData = createContext()

export const DataProvider = ({children})=>{

    const [data, setData] = useState(myData)
    

    return(
        <GlobalData.Provider value={{data, setData}}>
            {children}
        </GlobalData.Provider>
    )
}