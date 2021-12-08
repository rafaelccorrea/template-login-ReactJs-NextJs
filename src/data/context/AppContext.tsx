import { createContext } from "react";

const AppContext = createContext({
    nome: null
})

export function AppProvider(props){
    return(
        <AppContext.Provider value={{
            nome: 'Teste Context Api'
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext