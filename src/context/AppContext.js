import {useState,createContext,useContext} from 'react';


const AppContext = createContext();

export const Provider = ({children})=>{
    const[credit,setCredit] = useState(50);

    return(
        <AppContext.Provider value={{
            credit,
            setCredit
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const Global =()=> useContext(AppContext);