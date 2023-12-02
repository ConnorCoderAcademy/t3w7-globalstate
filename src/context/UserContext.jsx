import { createContext, useState } from "react";
import { userReducer } from "../userReducer";

const defaultUserData = {
    jwt: 'not empty jwt'
}

export const UserContext = createContext(defaultUserData);

export default function UserGlobalData(props){
    const [userData, setUserData] = useState(defaultUserData);
    const [userData, userDataDispatch] = useReducer(userReducer, )
    return(
        <UserContext.Provider value={
            {
                userData: userData, 
                setUserData: setUserData
            }
            }>
            {props.children}
        </UserContext.Provider>
    )
}