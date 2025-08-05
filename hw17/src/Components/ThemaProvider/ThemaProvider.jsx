import { ThemeProvider } from "@emotion/react"

import { useContext, useState } from "react"

const ThemaProvider = ({children}) => { 

    const Contetext = useContext()

    const [darkMode , setDarkMode] = useState(false)

    const handleChangeMode = () => {
        setDarkMode(prev => !prev)
    }

    return ( 
        <ThemeProvider thema={thema}>
        {children}
        </ThemeProvider>
    )

}