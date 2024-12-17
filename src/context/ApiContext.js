import { createContext, useState, useEffect } from "react";
import { MyAxios } from "./MyAxios";

export const ApiContext=createContext("")

export const ApiProvider=({children})=>{
    const [szakdogaLista, setSzakdogaLista]=useState([])

    const getAdat=async(vegpont)=>{
        try{
            const response = await MyAxios.get(vegpont)
            console.log(response)
            setSzakdogaLista([...response.data])
        }catch (error){
            console.log("Hiba történt az adatok lekérésekor")
        }
    }

    useEffect(()=>{
        getAdat("/szakdogak")
    })

    return(
        <ApiContext.Provider value={{szakdogaLista}}>
            {children}
        </ApiContext.Provider>
    )
}