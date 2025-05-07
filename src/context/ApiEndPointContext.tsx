import { createContext } from "react";
import { useCookies } from "react-cookie";

export const ApiEndPointContext = createContext<any>("");

export const ApiEndPointProvider = ({ children }:any) => {
    const apiEndPoint = "https://petpal-backend-en2xs.kinsta.app"
    const [cookies] = useCookies(["petpal"])
    const passValue = {
        "petpal-token":"f20e26bb783ea89ef58823b877337a2e",
        "x-auth-token": cookies.petpal    
    }

    return <ApiEndPointContext.Provider value={{apiEndPoint, passValue}}>{children}</ApiEndPointContext.Provider>

}