import { createContext, useState } from "react";

export const LanguageContext = createContext("ru")

const LanguageProvide = ({children})=>{
    const [language , setLanguage] = useState("ru")

    const toggleLanguage =()=> setLanguage(prevlang => prevlang === "ru" ? "en" : "ru")

    return(
        <LanguageContext.Provider value={{language , toggleLanguage}} >
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvide