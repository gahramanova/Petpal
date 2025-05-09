import { createContext } from "react";
import { useCookies } from "react-cookie";

export const ApiEndPointContext = createContext<any>("");

export const ApiEndPointProvider = ({ children }:any) => {
    const apiEndPoint = "https://petpal-backend-en2xs.kinsta.app"
    const [cookies] = useCookies(['petpal'])
   
    const passValue = {
        "petpal-access":"f20e26bb783ea89ef58823b877337a2e",
        "petpal-auth-token": cookies.petpal    
    }

     console.log("Petpal-cookies:", cookies.petpal)

    return <ApiEndPointContext.Provider value={{apiEndPoint, passValue}}>{children}</ApiEndPointContext.Provider>

}