import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''
interface AppContextProps {
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: null
})

export function AppProvider(props){

    const [tema, setTema] = useState('dark')

    function alternarTema(){
        const newTema = tema === '' ? 'dark' : ''
        setTema(newTema)
        localStorage.setItem('tema', newTema)
    }

    useEffect(() => {
       const tema = localStorage.getItem('tema')
       setTema(tema)
    }, [])
    
    return(
        <AppContext.Provider value={{
            tema,
            alternarTema    
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext